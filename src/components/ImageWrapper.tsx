"use client";

import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Simple grey SVG placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F6FAF8" offset="20%" />
      <stop stop-color="#e9e9e9" offset="50%" />
      <stop stop-color="#F6FAF8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#F6FAF8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

type ImageWrapperProps = Omit<ImageProps, 'placeholder' | 'blurDataURL'> & {
  containerClassName?: string;
};

const ImageWrapper = ({
  src,
  alt,
  className,
  containerClassName,
  width,
  height,
  ...props
}: ImageWrapperProps) => {
  return (
    <motion.div
      className={cn("relative overflow-hidden", containerClassName)}
      style={{ width, height }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Image
        src={src}
        alt={alt}
        className={cn("h-full w-full object-contain", className)}
        width={width}
        height={height}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(Number(width), Number(height)))}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </motion.div>
  );
};

export default ImageWrapper;