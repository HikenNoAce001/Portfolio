'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type Shot = { src: string; alt: string };

// A "Screenshots" button that opens a modal <dialog>. showModal() makes the
// rest of the page inert and Esc closes it; focus returns to the trigger.
// Images are only rendered while the dialog is open.
export default function Gallery({
  name,
  images,
}: {
  name: string;
  images: Shot[];
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

  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={open}
        className="inline-flex min-h-11 items-center text-comet underline-offset-4 hover:underline"
      >
        Screenshots ({count})
      </button>

      <dialog
        ref={dialog}
        aria-label={`${name} screenshots`}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialog.current && close()}
        className="m-auto h-[min(92vh,900px)] w-[min(94vw,1280px)] max-w-none rounded-panel border border-dust/25 bg-orbit p-0 text-starlight backdrop:bg-abyss/90"
      >
        {shot && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-dust/25 px-4 py-2">
              <p className="text-sm text-dust" aria-live="polite">
                {index! + 1} of {count}: {shot.alt}
              </p>
              <button
                ref={closeButton}
                type="button"
                onClick={close}
                className="inline-flex min-h-11 items-center rounded-full px-3 font-semibold text-starlight hover:text-comet"
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
              <div className="flex justify-between gap-4 border-t border-dust/25 px-4 py-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="inline-flex min-h-11 items-center rounded-full px-3 font-semibold text-comet"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="inline-flex min-h-11 items-center rounded-full px-3 font-semibold text-comet"
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
