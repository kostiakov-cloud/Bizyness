import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type CardShadow = 'none' | 'xs' | 'm'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: CardShadow
  rounded?: 'sm' | 'md' | 'lg'
}

const shadows: Record<CardShadow, string> = {
  none: '',
  xs: 'shadow-xs',
  m: 'shadow-m',
}

const radii = {
  sm: 'rounded-[var(--radius-8)]',
  md: 'rounded-[var(--radius-16)]',
  lg: 'rounded-[var(--radius-20)]',
}

export function Card({
  shadow = 'xs',
  rounded = 'md',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-bg-white',
        shadows[shadow],
        radii[rounded],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
