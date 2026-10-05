export default function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-dust/25 bg-orbit px-3 py-0.5 text-sm text-starlight/90"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
