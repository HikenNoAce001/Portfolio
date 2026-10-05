import type { ReactNode } from 'react';
import Duo from './Duo';

// The starship prompt's first line: ╭─ fahim  ~/portfolio  zsh
export default function PromptLine({ right }: { right?: ReactNode }) {
  return (
    <div className="flex items-center">
      <span className="mr-1 text-line-strong max-sm:mr-[3px]">╭─</span>
      <span className="tm-seg tm-seg1">fahim</span>
      <span className="tm-seg tm-seg2">
        <Duo d="~/portfolio" m="~" />
      </span>
      <span className="tm-seg tm-seg3 max-sm:!hidden">zsh</span>
      {right}
    </div>
  );
}
