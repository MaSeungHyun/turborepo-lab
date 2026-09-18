import { ComponentProps, useId } from "react";
import { cn } from "@repo/ui/lib/cn";

type GlowCardProps = ComponentProps<"div"> & {
  className?: string;
  /** fetch / 요청 중일 때 true → 테두리 glow 표시 */
  loading?: boolean;
};

export function GlowCard({
  className,
  children,
  loading = false,
  ...props
}: GlowCardProps) {
  const reactId = useId().replace(/:/g, "");
  const glowFilterId = `glow-card-blur-${reactId}`;
  const strokeGradId = `glow-card-grad-${reactId}`;

  return (
    <div
      className={cn("glow-card", className)}
      data-loading={loading ? "true" : "false"}
      aria-busy={loading || undefined}
      {...props}
    >
      <svg className="glow-card__stroke" aria-hidden="true">
        <defs>
          <linearGradient
            id={strokeGradId}
            gradientUnits="userSpaceOnUse"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.15" />
            <stop
              offset="35%"
              stopColor="var(--secondary)"
              stopOpacity="0.85"
            />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop
              offset="65%"
              stopColor="var(--secondary)"
              stopOpacity="0.85"
            />
            <stop
              offset="100%"
              stopColor="var(--secondary)"
              stopOpacity="0.15"
            />
          </linearGradient>
          <filter
            id={glowFilterId}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3.5"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          className="glow-card__stroke-glow"
          pathLength={100}
          filter={`url(#${glowFilterId})`}
        />
        <rect
          className="glow-card__stroke-core"
          pathLength={100}
          stroke={`url(#${strokeGradId})`}
        />
      </svg>
      <div className="glow-card__body px-6 py-4">{children}</div>
    </div>
  );
}
