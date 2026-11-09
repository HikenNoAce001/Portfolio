import Image from 'next/image';
import { content } from '@/content';
import Duo from './Duo';

const { profile } = content;

export const PORTRAIT_SRC = '/fahim-portrait.webp';

// `whoami`: the portrait pops in on a spinning gradient ring, then the facts
// slide in one by one.
export default function WhoAmI() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-5 max-sm:mt-2.5 max-sm:flex-nowrap max-sm:gap-3.5">
      <div className="tm-pop relative size-[108px] flex-none max-sm:size-[78px]">
        <span
          aria-hidden="true"
          className="tm-pingonce absolute -inset-1 rounded-full border-2 border-violet max-sm:-inset-[3px]"
        />
        <div className="tm-cring absolute inset-0 rounded-full p-[2.5px] max-sm:p-0.5">
          <div className="relative size-full overflow-hidden rounded-full bg-panel">
            <Image
              src={PORTRAIT_SRC}
              alt="Portrait of Fahim"
              fill
              sizes="108px"
              unoptimized
              className="object-cover"
              style={{ objectPosition: '50% 12%' }}
            />
          </div>
        </div>
        <span
          aria-hidden="true"
          className="absolute bottom-[7px] right-[7px] size-[15px] rounded-full border-[3px] border-panel bg-green max-sm:bottom-1 max-sm:right-1 max-sm:size-3 max-sm:border-[2.5px]"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-0.5 text-[13.5px] leading-[1.55] max-sm:gap-px max-sm:text-[11.5px] max-sm:leading-[1.5]">
        <div
          className="tm-li font-extrabold text-violet"
          style={{ animationDelay: '.25s' }}
        >
          {profile.fullName}
        </div>
        <div className="tm-li text-ink" style={{ animationDelay: '.35s' }}>
          <Duo
            d="software engineer · 3 yrs in production"
            m="software engineer · 3 yrs"
          />
        </div>
        <div className="tm-li text-soft" style={{ animationDelay: '.45s' }}>
          <Duo
            d="frontend roots → backend & AI trajectory"
            m="frontend → backend & AI"
          />
        </div>
        <div className="tm-li text-soft" style={{ animationDelay: '.55s' }}>
          <span className="inline-block w-[7ch] text-faint max-sm:hidden">
            base
          </span>
          {profile.baseLine}
        </div>
        <div className="tm-li text-green" style={{ animationDelay: '.65s' }}>
          <span className="inline-block w-[7ch] text-faint max-sm:hidden">
            status
          </span>
          ● {profile.availability.toLowerCase()}
        </div>
      </div>
    </div>
  );
}
