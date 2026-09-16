import { ComponentProps } from "react";
import { cn } from "@repo/ui/lib/cn";

type ButtonProps = ComponentProps<"button"> & {
  className?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-sm bg-brand px-4 py-2 text-foreground hover:brightness-110",
        className,
      )}
      {...props}
    />
  );
}
