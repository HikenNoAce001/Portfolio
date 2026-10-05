import { ExternalLinkIcon } from '@/components/art/icons';
import { content } from '@/content';
import Chips from './Chips';
import Emphasized from './Emphasized';
import Section from './Section';

const { experience } = content;

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-dotted border-dust/60 pl-8">
        {experience.map((role) => (
          <li key={role.id} className="relative pb-12 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[41px] top-1 font-display text-lg leading-none text-ember"
            >
              *
            </span>
            <p className="text-sm text-dust">
              {role.start} - {role.end ?? 'Present'}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-starlight">
              {role.title}
            </h3>
            <p className="mt-1 text-starlight/90">
              {role.companyUrl ? (
                <a
                  href={role.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-my-[9px] inline-flex items-center gap-1 py-[9px] text-comet underline-offset-4 hover:underline"
                >
                  {role.company}
                  <ExternalLinkIcon className="size-4" />
                </a>
              ) : (
                role.company
              )}
              <span className="text-dust"> · {role.location}</span>
            </p>
            <ul className="mt-4 space-y-2 text-starlight/90">
              {role.highlights.map((highlight) => (
                <li key={highlight.text} className="flex gap-3">
                  <span aria-hidden="true" className="text-dust">
                    -
                  </span>
                  <span>
                    <Emphasized
                      value={highlight}
                      strongClassName="font-bold text-starlight"
                    />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Chips items={role.stack} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
