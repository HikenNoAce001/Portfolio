import '@/styles/space.css';
import Backdrop from '@/components/space/Backdrop';
import ViewToggleKey from '@/components/ViewToggleKey';
import About from '@/components/site/About';
import Contact from '@/components/site/Contact';
import FlightLog from '@/components/site/FlightLog';
import Hero from '@/components/site/Hero';
import Hyperjump from '@/components/site/Hyperjump';
import Missions from '@/components/site/Missions';
import SiteHeader from '@/components/site/SiteHeader';

export default function Home() {
  return (
    // overflow-x: clip (not hidden) keeps the page itself as the scroller, so
    // the scroll-driven reveals in space.css bind to the viewport.
    <div className="fz relative flex min-h-screen flex-col overflow-x-clip bg-night text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-blue focus:px-5 focus:py-3 focus:font-semibold focus:text-night"
      >
        Skip to main content
      </a>
      <Backdrop />
      <SiteHeader />
      <main id="main" className="flex flex-1 flex-col">
        <Hero />
        <div className="relative z-[2] mx-auto flex w-full max-w-[1344px] flex-col px-4 sm:px-12">
          {/* the rail the comet rides down; the fill and comet are CSS
              scroll-driven animations and desktop-only */}
          <div
            aria-hidden="true"
            className="absolute -bottom-[86px] left-[21px] top-[70px] border-l-[1.5px] border-dashed border-line-strong sm:-bottom-[126px] sm:left-[53px] sm:top-32"
          />
          <div aria-hidden="true" className="fz-rail-fill max-sm:hidden" />
          <div aria-hidden="true" className="fz-comet-track max-sm:hidden">
            <div className="fz-comet" />
          </div>
          <About />
          <FlightLog />
          <Missions />
        </div>
        <Contact />
      </main>
      <Hyperjump />
      <ViewToggleKey to="/terminal" />
    </div>
  );
}
