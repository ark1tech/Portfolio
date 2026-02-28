"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@mantine/core";

export default function MasonryImage({ src, width = 694, height = 214, alt, quality = 100, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full aspect-[694/214] ${className}`}>
      <Skeleton
        className="absolute inset-0 w-full h-full rounded-none"
        animate={true}
      />
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        quality={quality}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
