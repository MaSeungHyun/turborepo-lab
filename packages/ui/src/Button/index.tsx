import { ComponentProps } from "react";
import { cn } from "@repo/ui/lib/cn";

type ButtonProps = ComponentProps<"button"> & {
  className?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "text-text-primary bg-primary cursor-pointer rounded-sm px-4 py-2 hover:brightness-110",
        className,
      )}
      {...props}
    />
  );
}
