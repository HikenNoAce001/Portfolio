import Constellation from '@/components/space/Constellation';
import { ArrowUpRightIcon } from '@/components/space/icons';
import { content } from '@/content';
import type { MissionStatus, Project } from '@/content';
import Chip from './Chip';
import Gallery from './Gallery';
import SectionHead from './SectionHead';

const missions = content.projects.filter(
  (p): p is Project & { mission: NonNullable<Project['mission']> } =>
    Boolean(p.mission),
);

const STATUS: Record<
  MissionStatus,
  { label: string; pill: string; dot: string }
> = {
  live: { label: 'LIVE', pill: 'bg-green/[0.12] text-green', dot: 'bg-green' },
  private: {
    label: 'PRIVATE',
    pill: 'bg-muted/[0.12] text-muted',
    dot: 'bg-muted',
  },
  design: {
    label: 'DESIGN',
    pill: 'bg-violet/[0.12] text-violet',
    dot: 'bg-violet',
  },
};

function MissionMeta({ project }: { project: (typeof missions)[number] }) {
  const { mission } = project;
  const s = STATUS[mission.status];
  return (
    <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] tracking-[0.12em] sm:gap-3 sm:text-xs">
      <span className="text-faint">{mission.id}</span>
      <span
        className={`flex items-center gap-1.5 rounded-full px-[9px] py-[3px] sm:px-2.5 sm:py-1 ${s.pill}`}
      >
        <span aria-hidden="true" className={`size-1.5 rounded-full ${s.dot}`} />
        {s.label}
      </span>
      <span className="text-faint max-sm:hidden">{mission.tag}</span>
    </div>
  );
}

const linkBase =
  'flex min-h-11 items-center gap-1.5 text-[15px] font-semibold transition-colors';

function MissionLinks({
  project,
  withGallery,
}: {
  project: (typeof missions)[number];
  withGallery: boolean;
}) {
  const { links, mission, images, name } = project;
  const out = (href: string, label: string, primary: boolean) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${linkBase} ${primary ? 'text-blue hover:text-violet' : 'text-soft hover:text-violet'}`}
    >
      {label}
      <ArrowUpRightIcon />
    </a>
  );
  return (
    <div className="flex flex-wrap items-center gap-x-5">
      {links.live && out(links.live, mission.liveLabel ?? 'Live', true)}
      {links.design && out(links.design, 'Prototype', true)}
      {links.code && out(links.code, 'Code', !links.live)}
      {withGallery && images.length > 0 && (
        <Gallery name={name} images={images} />
      )}
    </div>
  );
}

function FeaturedMission({ project }: { project: (typeof missions)[number] }) {
  const { mission } = project;
  return (
    <div className="fz-ring fz-reveal">
      <article className="flex flex-col gap-3.5 rounded-[18px] bg-deep p-[18px] sm:flex-row sm:flex-wrap sm:gap-10 sm:rounded-[22.5px] sm:p-9">
        <div className="flex min-w-0 flex-col gap-3.5 max-sm:order-2 sm:flex-[1_1_400px] sm:gap-[18px]">
          <MissionMeta project={project} />
          <h3 className="m-0 font-display text-2xl font-semibold text-ink sm:text-4xl">
            {project.name}
          </h3>
          <p className="m-0 text-[15px] leading-[1.55] text-soft sm:text-lg sm:leading-[1.6]">
            <span className="max-sm:hidden">{mission.blurb}</span>
            <span className="sm:hidden">{mission.phone.blurb}</span>
          </p>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[15px] leading-[1.5] text-muted max-sm:hidden">
            {mission.points.map((pt) => (
              <li key={pt} className="flex gap-2.5">
                <span aria-hidden="true" className="text-violet">
                  +
                </span>
                {pt}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 max-sm:hidden">
            {mission.chips.map((c) => (
              <Chip key={c.text} tone={c.tone} small>
                {c.text}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 sm:hidden">
            {mission.phone.stack.map((s) => (
              <Chip key={s} tone={mission.phone.tone} small>
                {s}
              </Chip>
            ))}
          </div>
          <div className="mt-1">
            <MissionLinks project={project} withGallery={false} />
          </div>
        </div>
        <div className="flex min-w-0 items-center max-sm:order-1 sm:flex-[1_1_440px]">
          <Gallery
            name={project.name}
            images={project.images}
            variant="frame"
          />
        </div>
      </article>
    </div>
  );
}

function MissionCard({ project }: { project: (typeof missions)[number] }) {
  const { mission } = project;
  const { phone } = mission;
  return (
    <article className="fz-card fz-reveal flex flex-col gap-2.5 rounded-2xl border border-line bg-panel/80 p-[18px] sm:gap-4 sm:rounded-[18px] sm:p-[30px]">
      <MissionMeta project={project} />
      <h3 className="m-0 font-display text-[19px] font-semibold text-ink sm:text-2xl">
        {phone.name ? (
          <>
            <span className="max-sm:hidden">{project.name}</span>
            <span className="sm:hidden">{phone.name}</span>
          </>
        ) : (
          project.name
        )}
      </h3>
      <p className="m-0 text-[15px] leading-[1.55] text-soft sm:text-base sm:leading-[1.6]">
        <span className="max-sm:hidden">{mission.blurb}</span>
        <span className="sm:hidden">{phone.blurb}</span>
      </p>
      <div className="flex flex-wrap gap-2 max-sm:hidden">
        {mission.chips.map((c) => (
          <Chip key={c.text} tone={c.tone} small>
            {c.text}
          </Chip>
        ))}
      </div>
      <div
        className={`font-mono text-xs sm:hidden ${
          phone.tone === 'violet' ? 'text-violet-soft' : 'text-muted'
        }`}
      >
        {phone.stack.join(' · ')}
      </div>
      <div className="mt-auto">
        <MissionLinks project={project} withGallery />
      </div>
    </article>
  );
}

export default function Missions() {
  const [featured, ...rest] = missions;
  return (
    <section
      id="missions"
      className="relative flex -scroll-mt-10 flex-col gap-7 py-16 sm:-scroll-mt-24 sm:gap-14 sm:py-[120px]"
    >
      <Constellation />
      <SectionHead stop="missions" />
      <div className="relative flex flex-col gap-3.5 pl-[26px] sm:gap-7 sm:pl-10">
        <h2 className="fz-h2 fz-reveal m-0 mb-1.5 font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.015em] text-ink sm:mb-3 sm:text-[44px] sm:leading-[1.12]">
          Things I’ve launched.
        </h2>
        <FeaturedMission project={featured} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(480px,100%),1fr))] gap-3.5 sm:gap-6">
          {rest.map((p) => (
            <MissionCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
