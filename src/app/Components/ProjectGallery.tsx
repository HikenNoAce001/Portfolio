'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type GalleryImage = { src: string; alt: string };

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new Event('lightbox:open'));
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('lightbox:close'));
    };
  }, [isOpen, close, next, prev]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Thumbnail grid */}
      <div className="mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View ${img.alt}`}
            className="relative aspect-video rounded-md overflow-hidden border border-gray-300/70 dark:border-gray-700/50 bg-gray-100 dark:bg-gray-800/40 cursor-pointer group/thumb"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              className="object-cover transition-transform duration-300 group-hover/thumb:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/thumb:bg-black/40">
              <span className="rounded bg-black/60 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100">
                Click to view
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot viewer"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-10"
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>

          {/* Counter */}
          <div className="absolute left-1/2 top-5 -translate-x-1/2 text-sm text-white/70">
            {index + 1} / {images.length}
          </div>

          {/* Prev / Next */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white/80 transition-colors hover:bg-white/20 hover:text-white sm:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white/80 transition-colors hover:bg-white/20 hover:text-white sm:right-6"
              >
                ›
              </button>
            </>
          )}

          {/* Active image */}
          <div
            className="relative h-full w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded bg-black/50 px-3 py-1 text-sm text-white/80">
            {images[index].alt}
          </div>
        </div>
      )}
    </>
  );
}
