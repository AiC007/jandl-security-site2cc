import * as React from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  subtitle, 
  align = "center",
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "space-y-4",
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      {eyebrow && (
        <div className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600">
          {eyebrow}
        </div>
      )}
      <h2 className="text-fluid-3xl font-bold leading-tight text-base-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-fluid-lg text-base-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}