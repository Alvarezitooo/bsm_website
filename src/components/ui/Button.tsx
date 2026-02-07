import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

const buttonVariants = {
  variant: {
    primary: "bg-brand-gold text-white hover:bg-opacity-90",
    secondary: "bg-transparent border border-accent-teal-soft text-accent-teal-soft hover:bg-accent-teal-soft hover:text-white",
    ghost: "bg-transparent text-text hover:bg-alt-bg",
  },
  size: {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
  },
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  href?: string;
  icon?: React.ComponentType<LucideProps>;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, children, icon: Icon, iconPosition = "left", ...props }, ref) => {
    const Comp = href ? "a" : "button";
    
    const content = (
      <>
        {Icon && iconPosition === "left" && <Icon className="mr-2 h-5 w-5" />}
        {children}
        {Icon && iconPosition === "right" && <Icon className="ml-2 h-5 w-5" />}
      </>
    );

    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      buttonVariants.variant[variant],
      buttonVariants.size[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes} {...(props as any)} ref={ref as any}>
          {content}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
