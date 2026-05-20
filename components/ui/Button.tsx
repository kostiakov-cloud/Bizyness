import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const base =
  'inline-flex items-center justify-center gap-2 font-poppins font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-blue'

export const buttonVariants: Record<Variant, string> = {
  primary:
    'bg-dark-blue text-[var(--color-text-white)] rounded-circle hover:opacity-90 active:scale-[0.98]',
  secondary:
    'bg-transparent text-dark-blue border border-dark-blue rounded-circle hover:bg-dark-blue hover:text-[var(--color-text-white)] active:scale-[0.98]',
  ghost:
    'bg-transparent text-text-16 hover:text-dark-blue active:scale-[0.98]',
  outline:
    'bg-[var(--color-bg-white)] text-text-14 border border-[var(--color-transparent-d10)] rounded-circle hover:border-dark-blue hover:text-dark-blue',
}

export const buttonSizes: Record<Size, string> = {
  sm: 'px-[var(--spacing-16)] py-[var(--spacing-4)] text-caption',
  md: 'px-[var(--spacing-20)] py-[var(--spacing-8)] text-small',
  lg: 'px-[var(--spacing-32)] py-[var(--spacing-16)] text-root',
}

export function buttonCn(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, buttonVariants[variant], buttonSizes[size], className)
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonCn(variant, size, className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
