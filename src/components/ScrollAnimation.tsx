import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimation = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollAnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
    delay,
  });

  const animationClasses = {
    "fade-up": isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    "fade-in": isVisible ? "opacity-100" : "opacity-0",
    "slide-left": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
    "slide-right": isVisible
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-8",
    "scale-in": isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

