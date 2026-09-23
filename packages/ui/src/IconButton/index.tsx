import { ComponentProps } from "react";
import { cn } from "@repo/ui/lib/cn";

const shapeClassName = {
  circle: "rounded-full",
  rect: "rounded-md",
} as const;

type IconButtonProps = ComponentProps<"button"> & {
  shape?: keyof typeof shapeClassName;
};

export function IconButton({
  className,
  type = "button",
  shape = "circle",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "group inline-flex h-10 w-10 cursor-pointer items-center justify-center bg-background/80 p-0.5 text-text-secondary hover:bg-background/50 hover:brightness-110",
        shapeClassName[shape],
        className,
      )}
      {...props}
    />
  );
}
