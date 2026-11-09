// The page sky: three twinkling dot layers, drifting nebulae and shooting
// stars. Pure CSS (space.css), absolutely positioned inside the page root.
export default function Backdrop() {
  return (
    <>
      <div aria-hidden="true" className="fz-stars fz-s1" />
      <div aria-hidden="true" className="fz-stars fz-s2" />
      <div aria-hidden="true" className="fz-stars fz-s3" />
      <div
        aria-hidden="true"
        className="fz-neb"
        style={{
          top: -260,
          right: -200,
          width: 820,
          height: 820,
          background:
            'radial-gradient(circle, rgba(187,154,247,0.13) 0%, rgba(122,162,247,0.06) 40%, rgba(122,162,247,0) 68%)',
        }}
      />
      <div
        aria-hidden="true"
        className="fz-neb"
        style={{
          top: 1500,
          left: -360,
          width: 900,
          height: 900,
          animationDelay: '-9s',
          background:
            'radial-gradient(circle, rgba(122,162,247,0.09) 0%, rgba(122,162,247,0) 65%)',
        }}
      />
      <div
        aria-hidden="true"
        className="fz-neb"
        style={{
          top: 2900,
          right: -320,
          width: 1000,
          height: 1000,
          animationDelay: '-15s',
          background:
            'radial-gradient(circle, rgba(187,154,247,0.08) 0%, rgba(125,207,255,0.04) 40%, rgba(125,207,255,0) 66%)',
        }}
      />
      <div
        aria-hidden="true"
        className="fz-shoot"
        style={{ top: 140, left: '86%' }}
      />
      <div
        aria-hidden="true"
        className="fz-shoot"
        style={{ top: 1700, left: '92%', animationDelay: '3s' }}
      />
      <div
        aria-hidden="true"
        className="fz-shoot"
        style={{ top: 3300, left: '76%', animationDelay: '5.5s' }}
      />
    </>
  );
}
