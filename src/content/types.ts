/**
 * Shared content types. Every piece of text on the site comes from the files in
 * src/content/ — components only render what these types describe.
 * Content files must stay plain data (no JSX, no imports from components) so the
 * build script in vite.config.ts can read them too.
 */

export type ProjectStatus = 'Ongoing' | 'Completed' | 'On hold' | 'Planned';

/** Name of a Lucide icon registered in src/components/Icon.tsx */
export type IconName =
  | 'briefcase'
  | 'users'
  | 'clipboard'
  | 'search'
  | 'calendar'
  | 'message'
  | 'activity'
  | 'file'
  | 'git'
  | 'container'
  | 'layers'
  | 'code'
  | 'table'
  | 'presentation'
  | 'type'
  | 'kanban'
  | 'slack'
  | 'compass'
  | 'target'
  | 'refresh'
  | 'graduation'
  | 'award'
  | 'database'
  | 'link';

export interface SocialLink {
  label: string;
  href: string;
  kind: 'linkedin' | 'github' | 'email' | 'phone' | 'website';
}

export interface CaseStudySection {
  /** Section heading, e.g. "Business problem & objectives" */
  title: string;
  /** One or more paragraphs */
  paragraphs?: string[];
  /** Optional bullet list */
  bullets?: string[];
}

export interface ProjectMedia {
  /** Path inside /public, e.g. "/images/projects/cloud-pos/overview.png" */
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'repo' | 'demo' | 'document' | 'other';
}

export type CoverMotif = 'pos' | 'transit' | 'fleet' | 'runchart';

export interface Project {
  slug: string;
  number: string;
  name: string;
  shortName?: string;
  tagline: string;
  domain: string;
  type?: string;
  organization: string;
  role: string;
  status: ProjectStatus;
  stakeholder?: string;
  motif: CoverMotif;
  summary: string;
  highlights: string[];
  /** Responsibilities shown in the case study sidebar */
  responsibilities: string[];
  /** Ordered case-study body sections */
  caseStudy: CaseStudySection[];
  learning: string[];
  /** Only list tools you have confirmed were used on THIS project. Empty = hidden. */
  tools: string[];
  /** Approved, non-confidential screenshots only. Empty = a tasteful placeholder is shown. */
  screenshots: ProjectMedia[];
  /** Public, non-confidential links only. Empty = hidden. */
  links: ProjectLink[];
  /** A short line explaining confidentiality, shown on the case study */
  confidentialityNote?: string;
  /** ISO date of last case-study update, shown on the page */
  lastUpdated: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  current: boolean;
  type: string;
  summary: string;
  /** What you are responsible for now */
  responsibilities: string[];
  /** Things you are learning or exposed to (not claimed as ownership) */
  exposure: string[];
  /** Verified, demonstrable achievements only. Empty = section hidden. */
  achievements: string[];
  relatedProjects: string[];
}

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  status: string;
  statusTone: 'progress' | 'done';
  detail?: string;
  /** Leave undefined until confirmed */
  period?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: 'In progress' | 'Completed';
  /** Leave undefined until known */
  date?: string;
  credentialUrl?: string;
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  tone: 'core' | 'tools' | 'tech' | 'exposure';
  items: { name: string; icon?: IconName }[];
}

export interface ApproachStep {
  title: string;
  summary: string;
  activities: string[];
  icon: IconName;
}
