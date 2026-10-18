import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="text-5xl font-extrabold tracking-tight text-accent">404</p>
      <div className="space-y-1">
        <h1 className="text-lg font-bold text-ink">Page not found</h1>
        <p className="max-w-sm text-sm text-muted">
          The page you were looking for does not exist or may have been moved.
        </p>
      </div>
      <Link
        to="/"
        className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accentfg hover:opacity-90"
      >
        Back to dashboard
      </Link>
    </div>
  )
}
