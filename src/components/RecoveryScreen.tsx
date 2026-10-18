import { useCallback, useEffect, useRef, useState } from 'react'
import { Database, Download, RotateCcw, ShieldAlert, Upload } from 'lucide-react'
import { useApp } from '../store/AppStore'
import { Button } from './ui/Button'
import { Card, CardHeader } from './ui/Card'
import { Notice } from './ui/PageHeader'
import { ConfirmDialog } from './ui/ConfirmDialog'
import { downloadFile } from '../lib/csv'
import { backupFilename, serializeBackup, MAX_IMPORT_BYTES } from '../storage/backup'
import type { RecoverySnapshot } from '../storage/repositories/appRepository'

function reasonLabel(reason: RecoverySnapshot['reason']): string {
  switch (reason) {
    case 'corrupt':
      return 'Unreadable stored data'
    case 'conflict':
      return 'Changes from another tab'
    case 'legacy':
      return 'Previous browser data'
    case 'pre-import':
      return 'Before a data replacement'
  }
}

function formatWhen(at: number): string {
  try {
    return new Date(at).toLocaleString()
  } catch {
    return 'unknown time'
  }
}

/**
 * Full-screen, read-only rescue surface shown when stored data cannot be opened.
 * Nothing is overwritten until the user explicitly restores a copy here.
 */
export function RecoveryScreen() {
  const {
    recoveryMessage,
    retryLoad,
    importBackup,
    resetAll,
    recoverySnapshots,
    refreshRecoverySnapshots,
    restoreSnapshot,
    discardSnapshot,
  } = useApp()

  const fileRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<{ tone: 'success' | 'danger'; text: string } | null>(null)
  const [confirmErase, setConfirmErase] = useState(false)

  useEffect(() => {
    void refreshRecoverySnapshots()
  }, [refreshRecoverySnapshots])

  const handleRestoreFile = useCallback(
    async (file: File) => {
      setBusy(true)
      setMessage(null)
      try {
        if (file.size > MAX_IMPORT_BYTES) {
          setMessage({ tone: 'danger', text: 'That file is too large to import.' })
          return
        }
        const text = await file.text()
        const result = await importBackup(text)
        if (result.ok) {
          setMessage({ tone: 'success', text: 'Backup restored. Your data is available again.' })
        } else {
          setMessage({ tone: 'danger', text: result.error ?? 'Could not import this file.' })
        }
      } catch {
        setMessage({ tone: 'danger', text: 'The file could not be read.' })
      } finally {
        setBusy(false)
      }
    },
    [importBackup],
  )

  const handleRestoreSnapshot = useCallback(
    async (snapshot: RecoverySnapshot) => {
      setBusy(true)
      setMessage(null)
      try {
        const result = await restoreSnapshot(snapshot)
        if (result.ok) {
          setMessage({ tone: 'success', text: 'That copy was restored.' })
        } else {
          setMessage({ tone: 'danger', text: result.error ?? 'Could not restore that copy.' })
        }
      } finally {
        setBusy(false)
      }
    },
    [restoreSnapshot],
  )

  const exportSnapshot = (snapshot: RecoverySnapshot) => {
    if (snapshot.data) {
      downloadFile(backupFilename(), serializeBackup(snapshot.data), 'application/json')
      return
    }
    downloadFile(`irontrack-recovered-${snapshot.reason}.json`, snapshot.raw ?? '', 'application/json')
  }

  return (
    <div className="min-h-dvh bg-app px-4 py-10 text-ink">
      <div className="mx-auto w-full max-w-2xl space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-dangersoft text-danger">
            <ShieldAlert size={22} />
          </span>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">Recover your data</h1>
            <p className="text-sm text-muted">Nothing has been deleted or overwritten.</p>
          </div>
        </div>

        <Notice tone="danger" icon={<ShieldAlert size={16} />}>
          {recoveryMessage ?? 'IronTrack could not open your stored data on this device.'}
          <span className="mt-1 block text-xs opacity-90">
            To protect your history, saving is paused until you choose what to do below.
          </span>
        </Notice>

        {message ? <Notice tone={message.tone}>{message.text}</Notice> : null}

        <Card>
          <CardHeader title="Restore from a backup file" subtitle="Bring back data from an exported .json backup" />
          <div className="flex flex-wrap gap-2">
            <Button variant="primary" disabled={busy} onClick={() => fileRef.current?.click()}>
              <Upload size={16} /> Restore from a backup file
            </Button>
          </div>
        </Card>

        <Card>
          <CardHeader
            title="Preserved copies"
            subtitle="Automatic copies kept whenever data looked at risk"
          />
          {recoverySnapshots.length === 0 ? (
            <p className="flex items-center gap-2 text-sm text-muted">
              <Database size={15} /> No recoverable copies were found on this device.
            </p>
          ) : (
            <ul className="space-y-2">
              {recoverySnapshots.map((snapshot) => (
                <li
                  key={snapshot.key}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface2 px-3 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">
                      {snapshot.label || reasonLabel(snapshot.reason)}
                    </p>
                    <p className="text-xs text-muted">
                      {reasonLabel(snapshot.reason)} · {formatWhen(snapshot.at)}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <Button size="sm" variant="secondary" onClick={() => exportSnapshot(snapshot)}>
                      <Download size={14} /> Save copy
                    </Button>
                    {snapshot.data ? (
                      <Button
                        size="sm"
                        variant="primary"
                        disabled={busy}
                        onClick={() => void handleRestoreSnapshot(snapshot)}
                      >
                        Restore
                      </Button>
                    ) : null}
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={busy}
                      onClick={() => void discardSnapshot(snapshot.key)}
                    >
                      Discard
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card>
          <CardHeader title="Other options" />
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" disabled={busy} onClick={() => void retryLoad()}>
              <RotateCcw size={16} /> Try again
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                void refreshRecoverySnapshots()
              }}
            >
              <Database size={16} /> Refresh copies
            </Button>
            <Button variant="danger" onClick={() => setConfirmErase(true)}>
              Start fresh
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted">
            Starting fresh erases everything on this device. Only do this after saving a copy above.
          </p>
        </Card>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) void handleRestoreFile(file)
          e.target.value = ''
        }}
      />

      <ConfirmDialog
        open={confirmErase}
        onClose={() => setConfirmErase(false)}
        onConfirm={() => {
          setBusy(true)
          void resetAll().finally(() => setBusy(false))
        }}
        title="Start with empty data?"
        description="This permanently erases everything on this device and cannot be undone. Make sure you have saved a copy first."
        confirmLabel="Erase everything"
        destructive
        requireText="RESET"
      />
    </div>
  )
}
