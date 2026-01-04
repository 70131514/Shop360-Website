import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface InteractiveHoverButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'> {
  text?: string;
  href?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, href, ...props }, ref) => {
  const baseClasses = cn(
    "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#E0E0E0] dark:border-[#333333] bg-[#FFFFFF] dark:bg-[#1A1A1A] hover:bg-[#000000] dark:hover:bg-[#FFFFFF] px-6 py-3 hover:px-8 text-center font-semibold text-[#000000] dark:text-[#FFFFFF] hover:text-[#FFFFFF] dark:hover:text-[#000000] transition-all duration-300",
    className,
  );

  const content = (
    <div className="relative z-10 flex h-full w-full items-center justify-center gap-2">
      <span>{text}</span>
      <ArrowRight className="w-0 h-4 transition-all duration-300 opacity-0 group-hover:w-4 group-hover:opacity-100 overflow-hidden" />
    </div>
  );

  if (href) {
    const isExternalLink = href.startsWith("http") || href.startsWith("//");
    return (
      <a
        href={href}
        {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

