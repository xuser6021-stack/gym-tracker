import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { CircleAlert, Download, RotateCcw } from 'lucide-react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
  rescue: 'idle' | 'working' | 'done' | 'failed'
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null, rescue: 'idle' }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('IronTrack crashed while rendering:', error, info.componentStack)
  }

  downloadBackup = async () => {
    this.setState({ rescue: 'working' })
    try {
      const [{ readAppData }, { serializeBackup, backupFilename }] = await Promise.all([
        import('../storage/repositories/appRepository'),
        import('../storage/backup'),
      ])
      const result = await readAppData()
      const blob = new Blob([serializeBackup(result.data)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = backupFilename()
      link.click()
      URL.revokeObjectURL(url)
      this.setState({ rescue: 'done' })
    } catch (err) {
      console.error('Could not export a backup from the error screen:', err)
      this.setState({ rescue: 'failed' })
    }
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="flex min-h-dvh items-center justify-center bg-app p-6 text-ink">
        <div className="w-full max-w-md rounded-2xl border border-danger/40 bg-surface p-6 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-dangersoft text-danger">
            <CircleAlert size={22} />
          </div>
          <h1 className="mt-4 text-lg font-bold">Something went wrong</h1>
          <p className="mt-1 text-sm text-muted">
            Your data is stored locally and is safe. Download a backup below, then reload the app to continue.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-bold text-accentfg"
          >
            <RotateCcw size={16} /> Reload app
          </button>
          <button
            type="button"
            disabled={this.state.rescue === 'working'}
            onClick={() => void this.downloadBackup()}
            className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface2 px-4 text-sm font-bold text-ink disabled:opacity-50"
          >
            <Download size={16} />
            {this.state.rescue === 'working'
              ? 'Preparing…'
              : this.state.rescue === 'done'
                ? 'Backup downloaded'
                : 'Download backup'}
          </button>
          {this.state.rescue === 'failed' ? (
            <p className="mt-2 text-xs text-danger">
              Could not read your saved data. Try reloading first, then export from Settings.
            </p>
          ) : null}
          <p className="mt-3 break-words text-[11px] text-faint">{this.state.error.message}</p>
        </div>
      </div>
    )
  }
}
