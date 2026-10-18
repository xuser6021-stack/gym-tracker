import { useEffect, useState } from 'react'
import { Dialog } from './Dialog'
import { Button } from './Button'
import { Input } from './Input'

export function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
  requireText,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  destructive?: boolean
  requireText?: string
}) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (open) setText('')
  }, [open])

  const canConfirm = !requireText || text.trim().toUpperCase() === requireText.toUpperCase()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button
            variant={destructive ? 'danger' : 'primary'}
            disabled={!canConfirm}
            onClick={() => {
              onConfirm()
              onClose()
            }}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      {requireText ? (
        <div className="space-y-2">
          <p className="text-sm text-muted">
            Type <span className="font-mono font-bold text-ink">{requireText}</span> to confirm.
          </p>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={requireText}
            autoFocus
          />
        </div>
      ) : null}
    </Dialog>
  )
}
