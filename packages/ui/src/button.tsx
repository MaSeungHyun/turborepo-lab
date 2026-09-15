import { ComponentProps } from "react";
import { cn } from "@repo/ui/lib/cn";

type ButtonProps = ComponentProps<"button"> & {
  className?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md bg-brand px-4 py-2 text-brand-foreground",
        className,
      )}
      {...props}
    />
  );
}
