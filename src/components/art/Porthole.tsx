import Image from 'next/image';

// A circular porthole frame (a ring with eight bolts) around a photo.
export default function Porthole({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const bolts = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4 - Math.PI / 8;
    return { x: 50 + 46 * Math.cos(angle), y: 50 + 46 * Math.sin(angle) };
  });

  return (
    <div className={`relative aspect-square ${className ?? ''}`}>
      <div className="absolute inset-[9%] overflow-hidden rounded-full bg-orbit">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 160px, 120px"
          className="object-cover"
        />
      </div>
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          cx="50"
          cy="50"
          r="45.5"
          fill="none"
          stroke="rgb(var(--dust))"
          strokeWidth="7"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="rgb(var(--abyss) / .6)"
          strokeWidth="1"
        />
        {bolts.map((bolt, i) => (
          <circle
            key={i}
            cx={bolt.x}
            cy={bolt.y}
            r="1.6"
            fill="rgb(var(--orbit))"
          />
        ))}
      </svg>
    </div>
  );
}
