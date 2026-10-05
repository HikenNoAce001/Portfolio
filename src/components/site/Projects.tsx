import { ExternalLinkIcon } from '@/components/art/icons';
import { content } from '@/content';
import Chips from './Chips';
import Gallery from './Gallery';
import MissionPatch from './MissionPatch';
import Section from './Section';

const { projects } = content;

const linkClass =
  'inline-flex min-h-11 items-center gap-1 text-comet underline-offset-4 hover:underline';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-16">
        {projects.map((project, index) => (
          <li
            key={project.slug}
            id={`project-${project.slug}`}
            className="flex scroll-mt-24 flex-col gap-5 sm:flex-row sm:gap-6"
          >
            <MissionPatch
              project={project}
              index={index}
              className="w-[96px] shrink-0 self-start sm:w-[120px]"
            />
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold text-starlight">
                {project.name}
              </h3>
              {project.tagline && (
                <p className="mt-1 text-starlight">{project.tagline}</p>
              )}
              <p className="mt-3 text-starlight/90">{project.summary}</p>
              <ul className="mt-4 space-y-2 text-starlight/90">
                {project.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="text-dust">
                      -
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Chips items={project.stack} />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Live site
                    <ExternalLinkIcon className="size-4" />
                  </a>
                )}
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Code
                    <ExternalLinkIcon className="size-4" />
                  </a>
                )}
                {project.links.design && (
                  <a
                    href={project.links.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Design file
                    <ExternalLinkIcon className="size-4" />
                  </a>
                )}
                {project.images.length > 0 && (
                  <Gallery name={project.name} images={project.images} />
                )}
                {project.source === 'proprietary' && (
                  <span className="text-sm text-dust">Private codebase</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
