import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-[var(--color-bg-4)] text-text-14',
  primary: 'bg-dark-blue text-text-white',
  success: 'bg-[var(--color-bg-3)] text-emerald',
  warning: 'text-[var(--color-amber)] bg-[var(--color-bg-5)]',
  danger: 'text-scarlet bg-[var(--color-bg-2)]',
  outline: 'border border-[var(--color-transparent-d10)] text-text-14 bg-transparent',
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-[var(--spacing-8)] py-[var(--spacing-4)] rounded-circle text-caption font-medium font-poppins whitespace-nowrap',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
