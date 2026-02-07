"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-lg bg-white shadow-base",
          className
        )}
        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;