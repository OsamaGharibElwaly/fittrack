// components/ui/Avatar.tsx
import Image from 'next/image';

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-orange-500/20 transition-transform hover:scale-105">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}