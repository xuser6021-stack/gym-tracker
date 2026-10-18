import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const fieldBase =
  'w-full rounded-xl bg-surface2 border border-line text-ink placeholder:text-faint focus:border-accent focus:outline-none transition-colors disabled:opacity-50'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, 'h-11 px-3 text-base sm:text-sm', className)} {...props} />
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBase, 'min-h-24 p-3 text-base sm:text-sm', className)} {...props} />
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select className={cn(fieldBase, 'h-11 px-3 text-base sm:text-sm pr-8', className)} {...props}>
      {children}
    </select>
  )
}
