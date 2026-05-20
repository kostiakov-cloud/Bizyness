import { cn } from '@/lib/utils'

interface TrustpilotStarsProps {
  className?: string
  showText?: boolean
}

export function TrustpilotStars({ className, showText = true }: TrustpilotStarsProps) {
  return (
    <div className={cn('flex items-center gap-[var(--spacing-8)] flex-wrap', className)}>
      {/* 5 Trustpilot star tiles */}
      <div className="flex items-center gap-[2px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-[22px] h-[22px] flex items-center justify-center"
            style={{ backgroundColor: 'var(--color-trustpilot)', borderRadius: '3px' }}
          >
            {/* Trustpilot star */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.5 0L7.98 4.51H12.76L8.89 7.31L10.37 11.82L6.5 9.02L2.63 11.82L4.11 7.31L0.24 4.51H5.02L6.5 0Z"
                fill="white"
              />
            </svg>
          </div>
        ))}
      </div>

      {showText && (
        <>
          <span
            className="font-poppins text-text-16"
            style={{ fontSize: 'var(--text-small)', lineHeight: 'var(--text-small--line-height)' }}
          >
            <span className="font-semibold">Excellent</span>
            <span className="text-text-13"> | 4.9 sur plus de 103 avis</span>
          </span>

          {/* Trustpilot logo star */}
          <div className="flex items-center gap-[4px]">
            <div
              className="w-[18px] h-[18px] flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-trustpilot)', borderRadius: '2px' }}
            >
              <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                <path
                  d="M6.5 0L7.98 4.51H12.76L8.89 7.31L10.37 11.82L6.5 9.02L2.63 11.82L4.11 7.31L0.24 4.51H5.02L6.5 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <span
              className="font-poppins font-semibold"
              style={{ color: 'var(--color-trustpilot)', fontSize: 'var(--text-small)' }}
            >
              Trustpilot
            </span>
          </div>
        </>
      )}
    </div>
  )
}
