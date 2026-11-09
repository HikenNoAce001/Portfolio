import WallRocket from '@/components/space/WallRocket';

// The desktop behind the windows: stars, two nebulae, a planet with a ring and
// a rocket crawling across. Phones get a lighter version.
export default function Wallpaper() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="tm-stars tm-s1" />
      <div className="tm-stars tm-s2 max-sm:hidden" />
      <div
        className="tm-neb -left-[240px] -top-[300px] size-[900px] max-sm:-left-[200px] max-sm:-top-[200px] max-sm:size-[600px]"
        style={{
          background:
            'radial-gradient(circle, rgba(187,154,247,0.16) 0%, rgba(187,154,247,0) 65%)',
        }}
      />
      <div
        className="tm-neb -bottom-[320px] left-[30%] h-[800px] w-[1000px] max-sm:hidden"
        style={{
          animationDelay: '-10s',
          background:
            'radial-gradient(ellipse, rgba(122,162,247,0.14) 0%, rgba(122,162,247,0) 65%)',
        }}
      />
      <div
        className="absolute -bottom-[620px] -right-[280px] size-[1100px] rounded-full shadow-[0_0_120px_rgba(122,162,247,0.25),inset_0_2px_0_rgba(125,207,255,0.45)] max-sm:-bottom-[420px] max-sm:-right-[300px] max-sm:size-[700px] max-sm:shadow-[0_0_90px_rgba(122,162,247,0.25),inset_0_2px_0_rgba(125,207,255,0.45)]"
        style={{
          background:
            'radial-gradient(circle at 40% 25%, #2b3a74 0%, #161b38 32%, #0b0c17 64%)',
        }}
      />
      <div className="absolute -bottom-[180px] -right-[460px] h-[260px] w-[1500px] -rotate-12 rounded-full border-2 border-[rgba(187,154,247,0.35)] max-sm:hidden" />
      <div className="max-sm:hidden">
        <WallRocket />
      </div>
    </div>
  );
}
