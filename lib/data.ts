export const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

export const EXPERIENCE = [
  {
    id: 'EXP_001',
    role: 'Backend Developer',
    company: 'TechNova Solutions',
    type: 'Full-time',
    period: 'Jan 2024 — Present',
    duration: '1 yr 2 mos',
    location: 'Dhaka, Bangladesh (Remote)',
    current: true,
    description:
      'Architecting and maintaining scalable backend services powering a SaaS platform with 10k+ active users. Leading backend decisions across microservice boundaries.',
    highlights: [
      'Designed a real-time notification system using Redis Pub/Sub and WebSockets, reducing latency by 60%',
      'Migrated monolithic REST API to NestJS microservices with Kafka event bus — improved throughput 3×',
      'Integrated Stripe payment flows and webhook handling for subscription billing across 4 pricing tiers',
      'Containerized all services with Docker Compose; configured Nginx reverse proxy and Kong API Gateway',
    ],
    stack: ['Node.js', 'NestJS', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'Nginx', 'Stripe'],
    color: 'orange',
  },
  {
    id: 'EXP_002',
    role: 'Junior Backend Developer',
    company: 'DevCraft Agency',
    type: 'Contract',
    period: 'Jun 2023 — Dec 2023',
    duration: '7 mos',
    location: 'Dhaka, Bangladesh',
    current: false,
    description:
      'Delivered backend solutions for 3 client projects across e-commerce and logistics domains. Worked closely with frontend teams to design efficient API contracts.',
    highlights: [
      'Built RESTful APIs with Express.js for an e-commerce platform handling 500+ daily orders',
      'Implemented role-based access control (RBAC) with JWT authentication across multi-tenant systems',
      'Developed live GPS location tracking feature using WebSockets with sub-second update intervals',
      'Optimized MySQL query performance — reduced average response time from 800ms to 120ms',
    ],
    stack: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'WebSockets', 'Docker'],
    color: 'blue',
  },
  {
    id: 'EXP_003',
    role: 'Backend Intern',
    company: 'CloudBridge Labs',
    type: 'Internship',
    period: 'Jan 2023 — May 2023',
    duration: '5 mos',
    location: 'Remote',
    current: false,
    description:
      'First professional backend role — learned production-grade development practices, code review culture, and how to ship features in an Agile team environment.',
    highlights: [
      'Contributed to a Python FastAPI service for document processing and OCR pipeline integration',
      'Wrote unit and integration tests achieving 80%+ coverage on assigned modules',
      'Assisted in setting up CI/CD pipeline using GitHub Actions for automated testing and deployment',
      'Implemented KYC verification API integrating third-party identity verification provider',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'GitHub Actions', 'Docker'],
    color: 'orange',
  },
  {
    id: 'EXP_004',
    role: 'Computer Science Student',
    company: 'University — CS Department',
    type: 'Academic',
    period: '2021 — Present',
    duration: '3+ yrs',
    location: 'Bangladesh',
    current: true,
    description:
      "Pursuing a Bachelor's degree in Computer Science with a focus on distributed systems, algorithms, and software engineering. Parallel to professional work.",
    highlights: [
      'Coursework: Data Structures, OS, Database Systems, Computer Networks, Software Engineering',
      'Built multiple academic projects applying theoretical concepts to real backend implementations',
      'Active participant in competitive programming and university hackathons',
    ],
    stack: ['C', 'C++', 'Java', 'Python', 'Algorithms', 'OS', 'Networks'],
    color: 'blue',
  },
]


export const SKILLS = [
  {
    icon: '🐉',
    title: 'Languages',
    tags: [
      { label: 'Node.js',     highlight: true  },
      { label: 'Golang',      highlight: true  },
      { label: 'Python',      highlight: true  },
      { label: 'TypeScript',  highlight: false },
      { label: 'JavaScript',  highlight: false },
    ],
  },
  {
    icon: '⚡',
    title: 'Frameworks',
    tags: [
      { label: 'Express.js', highlight: true  },
      { label: 'NestJS',     highlight: true  },
      { label: 'Gin',        highlight: true  },
      { label: 'FastAPI',    highlight: true  },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    tags: [
      { label: 'MongoDB',       highlight: true  },
      { label: 'MySQL',         highlight: true  },
      { label: 'Redis',         highlight: true  },
      { label: 'Elasticsearch', highlight: false },
    ],
  },
  {
    icon: '🌪️',
    title: 'Messaging / Queues',
    tags: [
      { label: 'Apache Kafka',   highlight: true  },
      { label: 'RabbitMQ',       highlight: true  },
      { label: 'WebSockets',     highlight: false },
      { label: 'Event-Driven',   highlight: false },
    ],
  },
  {
    icon: '🐋',
    title: 'DevOps / Infrastructure',
    tags: [
      { label: 'Docker',       highlight: true  },
      { label: 'Nginx',        highlight: true  },
      { label: 'Kong Gateway', highlight: true  },
      { label: 'CI/CD',        highlight: false },
      { label: 'Linux',        highlight: false },
    ],
  },
  {
    icon: '🔮',
    title: 'Specializations',
    tags: [
      { label: 'Stripe / PayPal', highlight: true  },
      { label: 'Real-time Apps',  highlight: true  },
      { label: 'KYC Verification',highlight: true  },
      { label: 'Live Location',   highlight: false },
      { label: 'Microservices',   highlight: false },
    ],
  },
]

export const PROJECTS = [
  {
    num: 'MISSION_001',
    title: 'Coursify',
    subtitle: 'E-Learning Platform Backend',
    description:
      'Full-featured online course platform with instructor dashboards, student progress tracking, and secure content delivery pipelines.',
    architecture:
      'Next.js frontend backed by a MongoDB-powered REST API. Optimized aggregation pipelines for course analytics and enrollment management at scale.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'REST API', 'JWT Auth'],
    color: 'orange',
  },
  {
    num: 'MISSION_002',
    title: 'Finance Visualizer',
    subtitle: 'Personal Finance Tracker',
    description:
      'Data-rich financial dashboard tracking expenses, income trends, and budgets with real-time aggregation and visual analytics.',
    architecture:
      'MongoDB aggregation framework for complex financial queries. Next.js API routes with computed analytics and caching strategies for sub-100ms responses.',
    stack: ['Next.js', 'MongoDB', 'Aggregations', 'Charts API'],
    color: 'blue',
  },
  {
    num: 'MISSION_003',
    title: 'Voice Translator',
    subtitle: 'Real-Time Voice Processing App',
    description:
      'Cross-language voice translation with low-latency audio streaming. Handles real-time voice streams, translation queues, and multi-user sessions.',
    architecture:
      'Express.js WebSocket server managing bi-directional audio streams. Event-driven processing pipeline with queue management for concurrent translation jobs.',
    stack: ['Express.js', 'WebSockets', 'Real-time', 'Stream API', 'Queue'],
    color: 'orange',
  },
  {
    num: 'MISSION_004',
    title: 'Storage Manager',
    subtitle: 'File Storage Management System',
    description:
      'Cloud storage management with folder hierarchies, file versioning, access controls, and usage quota enforcement per user.',
    architecture:
      'Express.js REST API with MongoDB GridFS for file storage. Hierarchical document model for nested folder structures with recursive permission inheritance.',
    stack: ['Express.js', 'MongoDB', 'GridFS', 'RBAC', 'Chunked Upload'],
    color: 'blue',
  },
  {
    num: 'MISSION_005',
    title: 'Complaint System',
    subtitle: 'Role-Based Management Platform',
    description:
      'Multi-tenant complaint platform with hierarchical role permissions, SLA tracking, escalation workflows, and full audit logging.',
    architecture:
      'Remix.js fullstack with Node.js backend and MySQL RDBMS. Complex RBAC middleware with JWT-scoped permissions and automated escalation triggers via cron.',
    stack: ['Remix.js', 'Node.js', 'MySQL', 'RBAC', 'JWT', 'Cron'],
    color: 'orange',
  },
]

export const KANJI_CHARS = ['忍', '術', '力', '影', '火', '水', '風', '土', '雷', '道', '心', '魂', '技', '龍', '剣']
