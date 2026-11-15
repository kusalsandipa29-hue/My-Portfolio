import type { Experience } from './types';

/**
 * Professional experience, newest first.
 * To add a role: copy an object, give it a unique id, and fill in the fields.
 *
 * - responsibilities: what you do in the role
 * - exposure:         areas you are learning / observing (not claimed as ownership)
 * - achievements:     ONLY verified, demonstrable outcomes. Leave [] until confirmed —
 *                     the "Verified highlights" block is hidden while it is empty.
 */
export const experience: Experience[] = [
  {
    id: 'slt-pm-intern',
    role: 'Project Management Intern',
    organization: 'Sri Lanka Telecom (SLT)',
    location: 'Sri Lanka',
    start: 'Apr 21, 2026',
    end: 'Mar 21, 2027 (expected)',
    current: true,
    type: 'Internship · Software Project Management',
    summary:
      'Supporting the coordination of several software projects within SLT, working with technical teams to connect business expectations with development activities.',
    responsibilities: [
      'Supporting software project management and day-to-day coordination',
      'Communicating with developers and technical team members',
      'Supporting project planning activities',
      'Tracking development progress and following up on tasks',
      'Supporting project issue tracking',
      'Contributing to project documentation and reporting',
    ],
    exposure: [
      'Understanding business and functional requirements',
      'Connecting business expectations with development work',
      'Team collaboration across multiple concurrent projects',
      'Software development lifecycle in an enterprise setting',
    ],
    achievements: [],
    relatedProjects: ['cloud-pos', 'tapfare', 'vehicle-fleet', 'e-run-chart'],
  },
];
