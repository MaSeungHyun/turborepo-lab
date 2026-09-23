import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { ComponentProps } from "react";
import { cn } from "@repo/ui/lib/cn";

type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;
type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative inline-flex size-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      delayMs={600}
      className={cn(
        "bg-primary text-text-primary flex size-full items-center justify-center rounded-full text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}
