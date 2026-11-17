import { TimelineItem } from '../types';

export const timelineData: TimelineItem[] = [
  {
    id: 'uog-cs-degree',
    type: 'education',
    title: 'Bachelor of Science in Computer Science (Fourth Year)',
    organization: 'University of Gondar, College of Informatics',
    location: 'Gondar, Ethiopia',
    period: '2022 — Present (Expected Graduation 2026)',
    description: [
      'Comprehensive study of Computer Science foundations: Data Structures, Advanced Algorithms, Database Systems, Computer Networks, Operating Systems, Software Engineering, and Artificial Intelligence.',
      'Student ID: UoG-CS-02130/15 (Section 2) with rigorous academic standing.',
      'Lead student architect for the final-year capstone project: MedLens (AI-assisted patient healthcare platform).'
    ],
    tags: ['Data Structures', 'Operating Systems', 'Algorithms', 'AI/ML', 'Computer Networks', 'Database Normalization']
  },
  {
    id: 'atlas-internship',
    type: 'internship',
    title: 'Software Engineering Intern',
    organization: 'Atlas Computer Technology PLC',
    location: 'Ethiopia',
    period: 'July 19, 2026 — September 14, 2026',
    description: [
      'Completed an intensive professional software development internship focused on enterprise web architecture and production engineering.',
      'Spearheaded the backend design and relational persistence layer for InternBridge: an institutional apprenticeship management system.',
      'Built multi-party role-based authentication flows allowing seamless collaboration between university coordinators, corporate supervisors, and students.',
      'Collaborated within an agile development team, participating in daily stand-ups, code reviews, and containerized deployment workflows.'
    ],
    tags: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Docker', 'Agile/Scrum', 'Enterprise RBAC']
  },
  {
    id: 'cybersecurity-labs',
    type: 'achievement',
    title: 'Practical Cybersecurity & Security Engineering Research',
    organization: 'Independent Security Laboratories & Virtualized Sandboxes',
    location: 'Virtual Lab Environments',
    period: '2024 — Present',
    description: [
      'Conducted dozens of structured security audits across authorized targets including OWASP Juice Shop, DVWA, and dedicated Linux/Windows lab VMs.',
      'Practiced traffic analysis with Wireshark, active port discovery with Nmap, and proxy request tampering using Burp Suite Community.',
      'Configured endpoint telemetry and file integrity monitoring via Wazuh SIEM to detect host anomalies and brute-force intrusion attempts.'
    ],
    tags: ['OWASP Top 10', 'Nmap', 'Wireshark', 'Burp Suite', 'Wazuh SIEM', 'Linux Hardening']
  }
];

