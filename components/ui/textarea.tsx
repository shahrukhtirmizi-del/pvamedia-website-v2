import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full min-h-[110px] rounded-md bg-bg-2 border border-white/10 px-4 py-3 text-sm text-ink leading-relaxed",
        "placeholder:text-ink-4 focus:border-accent/60 focus:bg-bg-3 focus:outline-none",
        "transition-colors disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
