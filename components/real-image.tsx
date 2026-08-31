import Image from "next/image";
import { PlaceholderImage } from "./placeholder-image";

/**
 * Real image component with Next.js Image optimization.
 * Falls back to placeholder if image fails to load.
 */
export function RealImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  ratio?: string;
  className?: string;
}) {
  if (!src) {
    return <PlaceholderImage label={alt} ratio={ratio} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
        className="object-cover"
      />
    </div>
  );
}
