import type { SocialLink } from './types';

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE & PERSONAL SETTINGS — edit this file first.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Your public URL once deployed (no trailing slash). Used for SEO, sitemap and social previews. */
  siteUrl: 'https://kusal-sandipa-portfolio.vercel.app',

  seoTitle: 'Kusal Sandipa | Software Project Management Portfolio',
  seoDescription:
    'Portfolio and digital CV of Kusal Sandipa — Project Management Intern at Sri Lanka Telecom and BSc (Hons) IT for Business undergraduate focused on software project management, coordination and business analysis.',

  /**
   * Path to your finalized CV PDF inside /public, e.g. '/cv/Kusal-Sandipa-CV.pdf'.
   * Leave as null until the file exists — the site then offers "Print / Save as PDF"
   * from the resume page instead of a broken download link.
   */
  resumePdf: null as string | null,

  /**
   * Path to your professional photo inside /public, e.g. '/images/profile.jpg'.
   * Leave as null to show the KS monogram placeholder.
   */
  photo: '/images/kusal-sandipa-profile.webp' as string | null,
  /** Optional 2× version of the photo for high-density screens (same crop). */
  photo2x: '/images/kusal-sandipa-profile@2x.webp' as string | null,
  photoAlt: 'Kusal Sandipa — Software Project Management',

  /**
   * Privacy: phone number is hidden on the public site until you set this to true.
   * The number itself is NOT stored in the repository — set VITE_CONTACT_PHONE in a
   * local .env file or in your hosting provider's environment variables (see .env.example).
   */
  showPhone: false,
};

// Read from the environment so the number never appears in the public source code.
// (`?.` keeps this file loadable from vite.config.ts, where import.meta.env is undefined.)
const phone = (import.meta.env?.VITE_CONTACT_PHONE ?? '').trim();

export const profile = {
  fullName: 'Nanayakkara Kuruppuge Kusal Sandipa',
  displayName: 'Kusal Sandipa',
  initials: 'KS',
  headline: 'Turning ideas into structured solutions.',
  title: 'Project Management Intern at Sri Lanka Telecom',
  subtitle: 'Software Project Management · BSc (Hons) IT for Business Undergraduate',
  intro:
    "I'm an aspiring software project management professional contributing to software projects at Sri Lanka Telecom. I bring together project coordination, business analysis and a working understanding of technology to help turn requirements into organised, trackable development work.",
  location: 'Sri Lanka',
  availability: 'Open to internships, graduate roles and project coordination opportunities',
  email: 'kusalsandipa29@gmail.com',
  phone,
  phoneHref: `tel:${phone.replace(/[^\d+]/g, '')}`,
  /** True only when showPhone is on AND a number is configured */
  phoneVisible: site.showPhone && phone.length > 0,
  linkedin: 'https://www.linkedin.com/in/kusal-sandipa-341507336',
  github: 'https://github.com/kusalsandipa29-hue',
  /** Short line for the resume header */
  resumeSummary:
    'Project Management Intern at Sri Lanka Telecom and third-year BSc (Hons) Information Technology for Business undergraduate at Coventry University. Supports the coordination of multiple enterprise and business software projects — working with development teams, following requirements, tracking progress and preparing documentation. Interested in software project management, IT project coordination and business analysis roles.',
  interests: [
    'Software Project Management',
    'IT Project Coordination',
    'Technology Project Delivery',
    'Business Analysis',
    'SDLC Management',
    'Technical Team Coordination',
    'Digital Product Management',
  ],
};

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: profile.linkedin, kind: 'linkedin' },
  { label: 'GitHub', href: profile.github, kind: 'github' },
  { label: 'Email', href: `mailto:${profile.email}`, kind: 'email' },
];

/** About section — each paragraph is one block of text. */
export const about = {
  lead: 'I work where business needs, technology and team coordination meet.',
  paragraphs: [
    "I'm a third-year BSc (Hons) Information Technology for Business undergraduate at Coventry University, building on a Diploma in Information Technology from ESOFT. My studies combine business thinking with technical foundations — which is exactly the mix software project management asks for.",
    "At Sri Lanka Telecom I'm a Project Management Intern, contributing to the coordination of several software projects. Day to day, that means working alongside developers, following how requirements become tasks, keeping track of progress and issues, and helping keep documentation and communication clear.",
    "I value clear, honest communication and well-organised teams. I try to listen first, ask good questions, and make sure everyone shares the same understanding of what is being built and why.",
  ],
  pillars: [
    {
      title: 'Business',
      text: 'Understanding goals, stakeholders and requirements before solutions.',
    },
    {
      title: 'Technology',
      text: 'Hands-on exposure to modern stacks, version control and containers.',
    },
    {
      title: 'Coordination',
      text: 'Planning, tracking and communicating so teams can deliver.',
    },
  ],
  goals:
    'Long term, I aim to grow into a software project manager who can lead cross-functional teams with confidence — and to keep developing through professional certification, practical delivery experience and continuous learning.',
};

/** Contact section copy */
export const contact = {
  heading: "Let's connect",
  message:
    "Interested in collaborating, discussing a project, or exploring an opportunity? I'd be happy to connect.",
  responseNote: 'Email is the quickest way to reach me.',
};
