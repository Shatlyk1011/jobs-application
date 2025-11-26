import { useRef } from "react";

import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"input"> {
  as?: "input" | "textarea";
}

const Input: React.FC<Props> = ({ className, as, type, ...props }) => {
  if (as === "textarea") {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto-resize textarea height based on content
    const handleInput = (e?: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "40px"; // Reset height to recalculate
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
      if (props.onChange && e) {
        // @ts-ignore
        props.onChange(e);
      }
    };
    return (
      // @ts-ignore
      <textarea
        className="bg-input/30 border-input min-h-[120px] text-sm rounded-lg border px-3 py-2 placeholder:font-[inherit] placeholder:text-sm"
        {...props}
        ref={textareaRef}
        onChange={handleInput}
      />
    );
  }
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive placeholder:text-sm max-sm:placeholder:text-xs",
        className,
      )}
      {...props}
    />
  );
};

export { Input };
