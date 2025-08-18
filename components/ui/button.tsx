import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white shadow-md hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5",
        secondary: "bg-base-100 text-base-900 border border-base-200 shadow-md hover:bg-base-50 hover:shadow-lg hover:-translate-y-0.5",
        accent: "bg-accent-500 text-white shadow-md hover:bg-accent-600 hover:shadow-lg hover:-translate-y-0.5",
        outline: "border border-primary-500 text-primary-600 hover:bg-primary-50 hover:shadow-md",
        ghost: "hover:bg-base-100 hover:text-base-900",
        glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 shadow-glass",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };