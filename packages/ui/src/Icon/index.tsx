import React from "react";
import { icons, type LucideProps } from "lucide-react";
import { cn } from "@repo/ui/lib/cn";

type IconProps = LucideProps & {
  icon: keyof typeof icons;
  className?: string;
  onClick?: () => void;
};

export default function Icon({
  className,
  icon,
  onClick,
  ...props
}: IconProps): React.ReactNode {
  const LucideIcon = icons[icon as keyof typeof icons];

  return (
    <LucideIcon
      className={cn(
        "stroke-1.5 size-5 stroke-text-primary group-hover:stroke-secondary",
        className,
      )}
      onClick={onClick}
      {...props}
    />
  );
}
