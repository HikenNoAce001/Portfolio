// Shared scene wrapper: a left content column (at most 40rem) and, from the
// journey breakpoint, an empty flight column on the right for the rocket.
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-journey-stop={id}
      aria-labelledby={`${id}-title`}
      className="px-5 py-16 md:px-6 journey:py-24"
    >
      <div className="mx-auto max-w-[90rem] journey:pl-[clamp(0px,4vw,104px)]">
        <div className="max-w-[40rem]">
          <h2
            id={`${id}-title`}
            className="font-display text-xl font-semibold tracking-[-0.01em] text-starlight md:text-2xl"
          >
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
