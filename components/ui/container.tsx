import * as React from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({ 
  className, 
  size = "xl",
  children, 
  ...props 
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-screen-xl"
  };

  return (
    <div 
      className={cn(
        "mx-auto px-4 md:px-6",
        sizeClasses[size],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}