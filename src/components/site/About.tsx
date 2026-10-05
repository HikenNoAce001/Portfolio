import Porthole from '@/components/art/Porthole';
import { content } from '@/content';
import Emphasized from './Emphasized';
import Section from './Section';

const { profile } = content;

export default function About() {
  const { education } = profile;
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Porthole
          src={profile.photo.src}
          alt="Portrait of Fahim"
          className="w-[120px] shrink-0 md:w-[160px]"
        />
        <div>
          <p className="font-display text-lg font-semibold text-starlight">
            {profile.fullName}
          </p>
          <p className="text-dust">
            {profile.role}, {profile.location}
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5 text-starlight/90">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-10 font-display text-lg font-semibold text-starlight">
        Key achievements
      </h3>
      <ul className="mt-4 space-y-3 text-starlight/90">
        {profile.highlights.map((highlight) => (
          <li key={highlight.text} className="flex gap-3">
            <span aria-hidden="true" className="text-comet">
              *
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

      <p className="mt-8 text-starlight/90">{profile.stackSentence}</p>

      <p className="mt-6 text-dust">
        {education.degree}, {education.school}, {education.graduated}.
        {education.thesis && <> Thesis: {education.thesis}</>}
      </p>
    </Section>
  );
}
