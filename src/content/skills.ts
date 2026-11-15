import type { ApproachStep, Certification, EducationItem, SkillGroup } from './types';

/**
 * Skills — no percentages or ratings on purpose. Add or remove items freely.
 * `icon` is optional and must be a name registered in src/components/Icon.tsx.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'pm-business',
    title: 'Project Management & Business',
    description: 'The core of how I contribute to software projects.',
    tone: 'core',
    items: [
      { name: 'Software Project Management', icon: 'kanban' },
      { name: 'Project Coordination', icon: 'calendar' },
      { name: 'Business Analysis', icon: 'search' },
      { name: 'Leadership', icon: 'compass' },
      { name: 'Teamwork', icon: 'users' },
      { name: 'Professional Communication', icon: 'message' },
      { name: 'Team Collaboration', icon: 'users' },
    ],
  },
  {
    id: 'pm-tools',
    title: 'PM & Collaboration Tools',
    description: 'Tools I use for planning, tracking and communicating.',
    tone: 'tools',
    items: [
      { name: 'Jira', icon: 'kanban' },
      { name: 'Slack', icon: 'slack' },
      { name: 'Microsoft Excel', icon: 'table' },
      { name: 'Microsoft Word', icon: 'type' },
      { name: 'Microsoft PowerPoint', icon: 'presentation' },
    ],
  },
  {
    id: 'dev-tools',
    title: 'Development & Technical Tools',
    description: 'Tools I work with alongside development teams.',
    tone: 'tech',
    items: [
      { name: 'GitHub', icon: 'git' },
      { name: 'Bitbucket', icon: 'git' },
      { name: 'Docker', icon: 'container' },
    ],
  },
  {
    id: 'exposure',
    title: 'Technology Exposure',
    description: 'Stacks I have worked with or been exposed to — not claimed as expert-level.',
    tone: 'exposure',
    items: [
      { name: 'MERN Stack', icon: 'layers' },
      { name: 'PERN Stack', icon: 'database' },
      { name: 'C#', icon: 'code' },
      { name: '.NET', icon: 'code' },
    ],
  },
];

/** Education — do not add dates or grades until confirmed. */
export const education: EducationItem[] = [
  {
    id: 'coventry',
    qualification: 'BSc (Hons) Information Technology for Business',
    institution: 'Coventry University',
    status: 'In progress · Third-year undergraduate',
    statusTone: 'progress',
    detail: 'A degree combining information technology with business, management and analysis.',
  },
  {
    id: 'esoft',
    qualification: 'Diploma in Information Technology',
    institution: 'ESOFT',
    status: 'Completed',
    statusTone: 'done',
  },
];

/**
 * Certifications & professional development.
 * When completed: set status to 'Completed', add `date` and `credentialUrl`.
 */
export const certifications: Certification[] = [
  {
    id: 'oracle-pm',
    name: 'Oracle Project Management Certification',
    issuer: 'Oracle',
    status: 'In progress',
    note: 'Currently pursuing.',
  },
];

/** "My approach" stepper — a general way of working, not a claim of ownership per project. */
export const approach: ApproachStep[] = [
  {
    title: 'Understand the business need',
    summary: 'Start with the problem, the people involved and what success looks like.',
    activities: ['Listen to stakeholders', 'Clarify goals and constraints', 'Ask questions early'],
    icon: 'target',
  },
  {
    title: 'Analyze requirements',
    summary: 'Turn expectations into clear business and functional requirements.',
    activities: ['Break needs into requirements', 'Map user journeys and workflows', 'Check shared understanding'],
    icon: 'search',
  },
  {
    title: 'Plan and organize work',
    summary: 'Structure the work so the team knows what comes next.',
    activities: ['Organise tasks and priorities', 'Identify dependencies', 'Keep plans visible'],
    icon: 'calendar',
  },
  {
    title: 'Coordinate with development teams',
    summary: 'Keep communication flowing between business and technical people.',
    activities: ['Regular check-ins', 'Share context with developers', 'Surface blockers quickly'],
    icon: 'users',
  },
  {
    title: 'Track progress and issues',
    summary: 'Make progress, risks and issues easy to see and act on.',
    activities: ['Follow task status', 'Record and follow up issues', 'Report clearly and honestly'],
    icon: 'activity',
  },
  {
    title: 'Review outcomes and improve',
    summary: 'Look back, learn and carry improvements into the next cycle.',
    activities: ['Review what worked', 'Capture lessons learned', 'Improve the process'],
    icon: 'refresh',
  },
];
