import { GitHubIcon, LinkedInIcon } from '@/components/art/icons';
import Planet from '@/components/art/Planet';
import RocketRider from '@/components/art/RocketRider';
import { content } from '@/content';
import CopyEmail from './CopyEmail';

const { profile } = content;
const icons: Record<string, typeof GitHubIcon> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export default function Contact() {
  return (
    <section
      id="contact"
      data-journey-stop="contact"
      aria-labelledby="contact-title"
      className="overflow-x-clip px-5 py-16 md:px-6 journey:py-24"
    >
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 journey:grid-cols-[minmax(0,40rem)_1fr] journey:pl-[clamp(0px,4vw,104px)]">
        <div>
          <h2
            id="contact-title"
            className="font-display text-xl font-semibold tracking-[-0.01em] text-starlight md:text-2xl"
          >
            Get in touch
          </h2>
          <p className="mt-4 text-starlight/90">
            Email is the quickest way to reach me.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center rounded-full bg-flame px-6 font-semibold text-abyss transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <CopyEmail email={profile.email} />
          </div>

          <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
            <dt className="text-dust">Email</dt>
            <dd className="break-all text-starlight">{profile.email}</dd>
            {profile.phone && (
              <>
                <dt className="text-dust">Phone</dt>
                <dd>
                  <a
                    href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
                    className="-my-[11px] inline-block py-[11px] text-comet underline-offset-4 hover:underline"
                  >
                    {profile.phone}
                  </a>
                </dd>
              </>
            )}
            <dt className="text-dust">Location</dt>
            <dd className="text-starlight">{profile.location}</dd>
            <dt className="text-dust">Status</dt>
            <dd className="text-starlight">{profile.availability}</dd>
          </dl>

          <ul className="mt-6 flex flex-wrap gap-x-6">
            {profile.socials.map((social) => {
              const Icon = icons[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-comet underline-offset-4 hover:underline"
                  >
                    {Icon && <Icon className="size-5" />}
                    {social.label}
                  </a>
                </li>
              );
            })}
            {profile.resumeUrl && (
              <li>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex min-h-11 items-center text-comet underline-offset-4 hover:underline"
                >
                  Download resume (PDF)
                </a>
              </li>
            )}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto w-full max-w-[20rem]"
        >
          <div className="pointer-events-none absolute inset-[-15%] bg-[radial-gradient(closest-side,rgb(var(--nebula)/0.35),transparent)]" />
          <RocketRider
            waving
            className="relative mx-auto -mb-[22%] w-[62%] -rotate-6"
          />
          <Planet className="relative w-full" />
        </div>
      </div>
    </section>
  );
}
