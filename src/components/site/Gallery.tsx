'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type Shot = { src: string; alt: string };

// A screenshot gallery in a modal <dialog>. showModal() makes the rest of the
// page inert and Esc closes it; focus returns to the trigger. Dialog images
// only render while it is open.
//
// variant "link":  a text button for a card's link row.
// variant "frame": the first screenshot as a framed, clickable preview.
export default function Gallery({
  name,
  images,
  variant = 'link',
}: {
  name: string;
  images: Shot[];
  variant?: 'link' | 'frame';
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const count = images.length;
  const isOpen = index !== null;

  const open = () => {
    setIndex(0);
    dialog.current?.showModal();
  };

  const close = useCallback(() => dialog.current?.close(), []);

  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i === null ? i : (i + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onClose = () => {
      setIndex(null);
      trigger.current?.focus();
    };
    el.addEventListener('close', onClose);
    return () => el.removeEventListener('close', onClose);
  }, []);

  // showModal() runs before the first image renders, so move focus to the
  // Close button once the dialog content exists.
  useEffect(() => {
    if (isOpen) closeButton.current?.focus();
  }, [isOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };

  const shot = index === null ? null : images[index];
  const label = `Screenshots (${count})`;

  return (
    <>
      {variant === 'frame' ? (
        <button
          ref={trigger}
          type="button"
          onClick={open}
          aria-label={`${name}: open ${label.toLowerCase()}`}
          className="group relative block aspect-[16/10] w-full min-w-0 overflow-hidden rounded-[14px] border-[1.5px] border-line-bright bg-deep p-0 text-left max-sm:rounded-xl"
        >
          <Image
            src={images[0].src}
            alt=""
            fill
            sizes="(min-width: 720px) 560px, 90vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div aria-hidden="true" className="fz-scanline" />
          <span className="absolute bottom-3 left-3 rounded-full border border-line-strong bg-night/85 px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-ink backdrop-blur">
            {label}
          </span>
        </button>
      ) : (
        <button
          ref={trigger}
          type="button"
          onClick={open}
          className="flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-muted transition-colors hover:text-violet"
        >
          {label}
        </button>
      )}

      <dialog
        ref={dialog}
        aria-label={`${name} screenshots`}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialog.current && close()}
        className="m-auto h-[min(92vh,900px)] w-[min(94vw,1280px)] max-w-none rounded-[14px] border border-line-strong bg-deep p-0 text-ink backdrop:bg-night/90"
      >
        {shot && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-2">
              <p className="font-mono text-xs text-muted" aria-live="polite">
                {index! + 1} of {count}: {shot.alt}
              </p>
              <button
                ref={closeButton}
                type="button"
                onClick={close}
                className="inline-flex min-h-11 items-center rounded-full px-3 font-semibold text-ink hover:text-violet"
              >
                Close
              </button>
            </div>
            <figure className="relative m-0 min-h-0 flex-1">
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1360px) 1280px, 94vw"
                className="object-contain p-2"
              />
            </figure>
            {count > 1 && (
              <div className="flex justify-between gap-4 border-t border-line px-4 py-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="inline-flex min-h-11 items-center rounded-full px-3 font-semibold text-blue"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="inline-flex min-h-11 items-center rounded-full px-3 font-semibold text-blue"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
