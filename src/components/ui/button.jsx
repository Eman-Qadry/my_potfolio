import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white text-sm font-medium transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
