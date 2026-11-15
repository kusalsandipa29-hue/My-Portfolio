import type { Project } from './types';

/**
 * FEATURED PROJECTS & CASE STUDIES
 * ─────────────────────────────────
 * Each object below becomes a project card AND a full case study page at
 * /projects/<slug>.
 *
 * Updating a case study as the project progresses:
 *   1. Edit the text in `caseStudy` (add paragraphs or bullets).
 *   2. Add verified tools to `tools` (empty arrays are hidden).
 *   3. Add approved, non-confidential screenshots to `screenshots`
 *      (put images in /public/images/projects/<slug>/).
 *   4. Change `lastUpdated` to today's date.
 *
 * Confidentiality: these are internal SLT projects. Do not add internal
 * architecture, credentials, private repository links, client data or
 * proprietary business rules.
 */
export const projects: Project[] = [
  {
    slug: 'cloud-pos',
    number: '01',
    name: 'Cloud POS System',
    tagline: 'Cloud-based point of sale software for business operations',
    domain: 'Point of Sale · Business Software',
    type: 'Point of Sale / Business Software',
    organization: 'Sri Lanka Telecom',
    role: 'Project Management Intern',
    status: 'Ongoing',
    motif: 'pos',
    summary:
      'A cloud-based Point of Sale software project designed to support business operations and sales-related workflows, with retail and hospitality-oriented processes in scope. My involvement is in project management and coordination.',
    highlights: ['Project coordination', 'Requirements understanding', 'Progress & issue tracking'],
    responsibilities: [
      'Supporting coordination between the project team and developers',
      'Following business and functional requirements as they are refined',
      'Helping track development tasks, progress and open issues',
      'Contributing to project documentation and status reporting',
    ],
    caseStudy: [
      {
        title: 'Project overview',
        paragraphs: [
          'Cloud POS is a point of sale software project at Sri Lanka Telecom. It aims to support everyday business operations — such as sales-related workflows — through a cloud-based application, with retail and hospitality-style processes in mind.',
        ],
      },
      {
        title: 'Business problem & objectives',
        paragraphs: [
          'Businesses need reliable, accessible tools to handle sales and related operations. A cloud-based approach aims to make those tools easier to access and maintain than traditional, locally installed systems.',
        ],
        bullets: [
          'Support core sales-related business workflows',
          'Serve retail and hospitality-oriented processes',
          'Deliver the solution as cloud-based software',
        ],
      },
      {
        title: 'Project scope',
        paragraphs: [
          'The scope is shaped by business and functional requirements that continue to be refined as the project progresses. Detailed scope is internal to SLT and is not published here.',
        ],
      },
      {
        title: 'My role',
        paragraphs: [
          'As a Project Management Intern, I support the coordination side of the project — helping keep requirements, development tasks and progress visible and organised for the team.',
        ],
      },
      {
        title: 'Coordination & team collaboration',
        bullets: [
          'Communicating with developers to follow task status and blockers',
          'Helping keep project issues recorded and followed up',
          'Supporting documentation so decisions and requirements stay traceable',
        ],
      },
      {
        title: 'Development workflow',
        paragraphs: [
          'I follow how requirements move into development tasks and through to review, which gives me practical exposure to the software development lifecycle in a real business setting.',
        ],
      },
      {
        title: 'Business analysis involvement',
        paragraphs: [
          'Part of my learning on this project is understanding business and functional requirements — what the business expects, and how those expectations translate into features the development team can build.',
        ],
      },
      {
        title: 'Challenges & approach',
        paragraphs: [
          'Like most software projects, keeping requirements, tasks and progress aligned takes ongoing attention. My approach is to keep communication frequent, document clearly, and raise questions early rather than late.',
        ],
      },
      {
        title: 'Current progress',
        paragraphs: [
          'The project is ongoing. Specific progress and milestones will be added here once they are confirmed and cleared for public sharing.',
        ],
      },
    ],
    learning: [
      'How business requirements shape a software product',
      'Practical coordination with a development team',
      'The value of clear documentation and issue tracking',
    ],
    tools: [],
    screenshots: [],
    links: [],
    confidentialityNote:
      'This is an internal Sri Lanka Telecom project. Details are kept high-level to respect confidentiality.',
    lastUpdated: '2026-11-15',
  },
  {
    slug: 'tapfare',
    number: '02',
    name: 'TapFare Smart Bus Fare Management System',
    shortName: 'TapFare',
    tagline: 'RFID card-based fare collection for public transport',
    domain: 'Smart Transportation · Digital Fare Collection',
    organization: 'Sri Lanka Telecom',
    role: 'Project Management Intern',
    status: 'Ongoing',
    stakeholder: 'National Transport Commission (NTC), Sri Lanka — target stakeholder',
    motif: 'transit',
    summary:
      'A smart public transportation fare management project centred on RFID card-based fare collection, being developed with the National Transport Commission of Sri Lanka as a target stakeholder.',
    highlights: ['Stakeholder-oriented planning', 'User journeys & workflows', 'RFID fare concept'],
    responsibilities: [
      'Supporting software project coordination with the development team',
      'Following business and functional requirements',
      'Helping map user journeys and system workflows for understanding',
      'Supporting stakeholder-oriented planning and documentation',
    ],
    caseStudy: [
      {
        title: 'Project overview',
        paragraphs: [
          'TapFare is a smart bus fare management project. Its central idea is RFID card-based fare collection — giving passengers a card they can tap instead of relying only on cash fares.',
          'The project is being developed with the National Transport Commission (NTC) of Sri Lanka as a target stakeholder. It has not been officially adopted, approved or launched by the NTC.',
        ],
      },
      {
        title: 'The transportation context',
        paragraphs: [
          'Digital fare collection is one way technology can improve public transport — making payments more convenient for passengers and fare data more structured for operators and regulators.',
        ],
        bullets: [
          'Smart transportation solutions',
          'Digital, card-based fare collection concept',
          'RFID-based passenger fare management',
        ],
      },
      {
        title: 'My role',
        paragraphs: [
          'I support the project management and coordination side: following requirements, helping organise work with the development team, and contributing to the documentation that keeps stakeholders and developers aligned.',
        ],
      },
      {
        title: 'Requirements, user journeys & workflows',
        paragraphs: [
          'A project like this involves many different users — passengers, operators and regulators. Understanding their journeys and the system workflows behind them is a key part of turning the concept into clear requirements.',
        ],
      },
      {
        title: 'Stakeholder-oriented planning',
        paragraphs: [
          'Because the project is shaped around a public-sector target stakeholder, planning needs to stay focused on stakeholder needs, expectations and communication — an important learning area for me.',
        ],
      },
      {
        title: 'Current progress',
        paragraphs: [
          'The project is ongoing. Confirmed features and milestones will be documented here once they are verified and approved for public sharing.',
        ],
      },
    ],
    learning: [
      'Planning software around public-sector stakeholders',
      'Mapping user journeys across multiple user types',
      'How hardware concepts (RFID) influence software requirements',
    ],
    tools: [],
    screenshots: [],
    links: [],
    confidentialityNote:
      'TapFare is under development. Nothing on this page should be read as an official NTC adoption, approval or launch.',
    lastUpdated: '2026-11-15',
  },
  {
    slug: 'vehicle-fleet',
    number: '03',
    name: 'Vehicle Fleet Management System',
    shortName: 'Fleet Management',
    tagline: 'Enterprise software supporting fleet operations',
    domain: 'Enterprise Software · Fleet Operations',
    organization: 'Sri Lanka Telecom',
    role: 'Project Management Intern',
    status: 'Ongoing',
    motif: 'fleet',
    summary:
      'An enterprise software project focused on supporting vehicle fleet management and operational coordination within the organisation.',
    highlights: ['Enterprise context', 'Development coordination', 'Project monitoring'],
    responsibilities: [
      'Supporting coordination of software development activities',
      'Understanding requirements raised by the business',
      'Helping monitor project progress and open items',
      'Collaborating with team members on documentation',
    ],
    caseStudy: [
      {
        title: 'Project purpose',
        paragraphs: [
          'The Vehicle Fleet Management System is an enterprise software project that supports how an organisation manages its vehicles and coordinates fleet-related operations.',
        ],
      },
      {
        title: 'Fleet management business context',
        paragraphs: [
          'Organisations that operate vehicles need dependable ways to organise and coordinate fleet operations. Software in this space helps teams keep operational information structured and accessible.',
        ],
      },
      {
        title: 'My project management involvement',
        paragraphs: [
          'My role focuses on supporting coordination — understanding what the business needs, following how that turns into development work, and helping keep progress visible.',
        ],
      },
      {
        title: 'Software development coordination',
        bullets: [
          'Following development tasks and their status',
          'Helping keep issues recorded and followed up',
          'Supporting communication between the business side and developers',
        ],
      },
      {
        title: 'Requirement understanding & monitoring',
        paragraphs: [
          'Working on an enterprise system has helped me appreciate how requirements must be understood in context — and how regular monitoring keeps a project on track.',
        ],
      },
    ],
    learning: [
      'Working within an established enterprise software environment',
      'Monitoring progress across ongoing development work',
      'Communicating clearly between business and technical teams',
    ],
    tools: [],
    screenshots: [],
    links: [],
    confidentialityNote:
      'This is an internal Sri Lanka Telecom system. Modules, integrations and internal details are intentionally not described.',
    lastUpdated: '2026-11-15',
  },
  {
    slug: 'e-run-chart',
    number: '04',
    name: 'E-Run Chart System',
    shortName: 'E-Run Chart',
    tagline: 'Enterprise operations software with an existing system',
    domain: 'Enterprise Operations Software',
    organization: 'Sri Lanka Telecom',
    role: 'Project Management Intern',
    status: 'Ongoing',
    motif: 'runchart',
    summary:
      'An enterprise software project involving operational workflows and an existing software system. My involvement is in project management and coordination.',
    highlights: ['Existing system context', 'Maintenance coordination', 'Operational workflows'],
    responsibilities: [
      'Supporting coordination of development and maintenance work',
      'Understanding the existing system and its operational context',
      'Helping track tasks, progress and issues',
      'Contributing to project documentation',
    ],
    caseStudy: [
      {
        title: 'Business context',
        paragraphs: [
          'The E-Run Chart System supports operational workflows within the organisation. Unlike a new build, it involves an existing software system that people already depend on.',
        ],
      },
      {
        title: 'Existing system overview',
        paragraphs: [
          'Working with an existing system means understanding how it is used today before changes are made. Internal details of the system are not shared here.',
        ],
      },
      {
        title: 'Project objectives',
        paragraphs: [
          'The work centres on supporting the system and its operational workflows through development and maintenance activities.',
        ],
      },
      {
        title: 'My PM involvement & coordination',
        bullets: [
          'Following development and maintenance tasks',
          'Helping keep issues and requests organised',
          'Supporting documentation and progress communication',
        ],
      },
      {
        title: 'Development & maintenance context',
        paragraphs: [
          'Maintaining live software requires balancing improvements with stability. Coordinating that work has given me a practical view of how changes are planned and followed through.',
        ],
      },
      {
        title: 'Work progress',
        paragraphs: [
          'Ongoing. Confirmed progress will be added once cleared for public sharing.',
        ],
      },
    ],
    learning: [
      'Coordinating work on an existing, in-use system',
      'Balancing maintenance needs with new requests',
      'Understanding operational workflows before proposing change',
    ],
    tools: [],
    screenshots: [],
    links: [],
    confidentialityNote:
      'This is an internal Sri Lanka Telecom system. Business rules and technical details are intentionally omitted.',
    lastUpdated: '2026-11-15',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
