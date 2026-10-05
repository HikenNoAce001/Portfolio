// Original art: a faint constellation behind the missions that draws itself
// line by line (space.css .fz-draw) while the stars twinkle.
export default function Constellation() {
  return (
    <svg
      aria-hidden="true"
      className="max-sm:hidden"
      viewBox="0 0 1200 700"
      style={{
        position: 'absolute',
        left: '40px',
        top: '160px',
        width: '1200px',
        height: '700px',
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    >
      <path
        className="fz-draw"
        d="M80 120 L260 60 L420 150 L600 90"
        fill="none"
        stroke="#7aa2f7"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path
        className="fz-draw"
        d="M760 70 L930 140 L1110 60 L1150 220"
        fill="none"
        stroke="#bb9af7"
        strokeOpacity="0.5"
        strokeWidth="1"
        style={{ animationDelay: '2s' }}
      />
      <path
        className="fz-draw"
        d="M120 560 L300 640 L500 590 L560 470"
        fill="none"
        stroke="#7dcfff"
        strokeOpacity="0.45"
        strokeWidth="1"
        style={{ animationDelay: '4s' }}
      />
      <path
        className="fz-draw"
        d="M820 600 L980 520 L1130 610"
        fill="none"
        stroke="#7aa2f7"
        strokeOpacity="0.45"
        strokeWidth="1"
        style={{ animationDelay: '6s' }}
      />
      <circle className="fz-tw" cx="80" cy="120" r="2.5" fill="#c0caf5" />
      <circle
        className="fz-tw"
        cx="260"
        cy="60"
        r="3"
        fill="#7aa2f7"
        style={{ animationDelay: '.6s' }}
      />
      <circle
        className="fz-tw"
        cx="420"
        cy="150"
        r="2.5"
        fill="#c0caf5"
        style={{ animationDelay: '1.2s' }}
      />
      <circle
        className="fz-tw"
        cx="600"
        cy="90"
        r="3"
        fill="#bb9af7"
        style={{ animationDelay: '.3s' }}
      />
      <circle
        className="fz-tw"
        cx="760"
        cy="70"
        r="2.5"
        fill="#c0caf5"
        style={{ animationDelay: '.9s' }}
      />
      <circle
        className="fz-tw"
        cx="930"
        cy="140"
        r="3"
        fill="#bb9af7"
        style={{ animationDelay: '1.5s' }}
      />
      <circle
        className="fz-tw"
        cx="1110"
        cy="60"
        r="2.5"
        fill="#7dcfff"
        style={{ animationDelay: '.4s' }}
      />
      <circle
        className="fz-tw"
        cx="1150"
        cy="220"
        r="2.5"
        fill="#c0caf5"
        style={{ animationDelay: '1.1s' }}
      />
      <circle
        className="fz-tw"
        cx="120"
        cy="560"
        r="2.5"
        fill="#7dcfff"
        style={{ animationDelay: '.7s' }}
      />
      <circle
        className="fz-tw"
        cx="300"
        cy="640"
        r="3"
        fill="#c0caf5"
        style={{ animationDelay: '1.3s' }}
      />
      <circle
        className="fz-tw"
        cx="500"
        cy="590"
        r="2.5"
        fill="#7aa2f7"
        style={{ animationDelay: '.2s' }}
      />
      <circle
        className="fz-tw"
        cx="560"
        cy="470"
        r="2.5"
        fill="#c0caf5"
        style={{ animationDelay: '1.7s' }}
      />
      <circle
        className="fz-tw"
        cx="820"
        cy="600"
        r="2.5"
        fill="#bb9af7"
        style={{ animationDelay: '.5s' }}
      />
      <circle
        className="fz-tw"
        cx="980"
        cy="520"
        r="3"
        fill="#c0caf5"
        style={{ animationDelay: '1s' }}
      />
      <circle
        className="fz-tw"
        cx="1130"
        cy="610"
        r="2.5"
        fill="#7dcfff"
        style={{ animationDelay: '1.4s' }}
      />
    </svg>
  );
}
