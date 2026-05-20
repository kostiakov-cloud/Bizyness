import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

/**
 * Page container.
 * Desktop: 12 cols × 80px + 11 × 20px gutter = 1180px content,
 * centered in max-w-[1440px] → 130px side padding.
 * Mobile: 20px side padding (minimum safe margin per design spec).
 */
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav'
}

export function Container({ as: Tag = 'div', className, children, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-[1440px] px-[20px] lg:px-[130px]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
