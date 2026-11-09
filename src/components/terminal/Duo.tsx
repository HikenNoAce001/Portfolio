// Two spellings of the same text: the long one on desktop, the short one on a
// phone. Both are in the markup, CSS picks, so nothing waits on JavaScript.
export default function Duo({ d, m }: { d: string; m: string }) {
  return (
    <>
      <span className="max-sm:hidden">{d}</span>
      <span className="sm:hidden">{m}</span>
    </>
  );
}
