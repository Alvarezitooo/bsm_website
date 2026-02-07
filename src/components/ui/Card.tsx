import React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-lg bg-white shadow-base transition-shadow duration-300 hover:shadow-md",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
