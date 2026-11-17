import { SkillCategory } from '../types';

export const marqueeRow1 = [
  { name: 'React', category: 'Frontend', icon: 'Code2' },
  { name: 'TypeScript', category: 'Language', icon: 'FileCode2' },
  { name: 'JavaScript', category: 'Language', icon: 'FileJson' },
  { name: 'Next.js', category: 'Framework', icon: 'Globe' },
  { name: 'HTML5', category: 'Web', icon: 'Layout' },
  { name: 'CSS3', category: 'Styles', icon: 'Palette' },
  { name: 'Python', category: 'Language', icon: 'Terminal' },
  { name: 'FastAPI', category: 'Backend', icon: 'Zap' }
];

export const marqueeRow2 = [
  { name: 'PostgreSQL', category: 'Database', icon: 'Database' },
  { name: 'Docker', category: 'DevOps', icon: 'Box' },
  { name: 'Git', category: 'VCS', icon: 'GitBranch' },
  { name: 'GitHub', category: 'Collaboration', icon: 'Github' },
  { name: 'Linux', category: 'OS', icon: 'Cpu' },
  { name: 'Nmap', category: 'Security', icon: 'ShieldAlert' },
  { name: 'Wireshark', category: 'Networking', icon: 'Activity' },
  { name: 'Burp Suite', category: 'Security', icon: 'Lock' },
  { name: 'Machine Learning', category: 'AI', icon: 'Brain' }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: 'Terminal',
    description: 'Core languages utilized for algorithmic design, system scripting, and full-stack software development.',
    skills: [
      { name: 'Python', category: 'Language', focus: 'Backend APIs, ML Pipelines, Security Scripting', description: 'FastAPI, Scikit-Learn, Pandas, Automation scripts' },
      { name: 'TypeScript', category: 'Language', focus: 'Type-safe Web Applications', description: 'Strict typing, Generics, Component contracts' },
      { name: 'JavaScript (ES6+)', category: 'Language', focus: 'Modern Web Runtimes', description: 'Async/Await, DOM manipulation, Functional utilities' },
      { name: 'Java', category: 'Language', focus: 'OOP & Enterprise Systems', description: 'Spring Boot basics, JavaFX desktop systems, Multithreading' },
      { name: 'C / C++', category: 'Language', focus: 'Foundational Systems Programming', description: 'Pointers, Memory management, Data structures algorithms' },
      { name: 'SQL', category: 'Language', focus: 'Relational Queries & DDL/DML', description: 'Joins, Aggregations, Indexing, Transaction constraints' }
    ]
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    icon: 'Layout',
    description: 'Crafting responsive, high-performance, and accessible user interfaces with modern reactive paradigms.',
    skills: [
      { name: 'React 18', category: 'Frontend', focus: 'Component Architecture', description: 'Hooks, Custom Context, Performance optimization' },
      { name: 'Next.js', category: 'Frontend', focus: 'Modern Web Framework', description: 'App router, Server components, Static generation' },
      { name: 'HTML5 Semantic UI', category: 'Frontend', focus: 'Accessibility & SEO', description: 'Accessible markup, ARIA roles, Semantic document trees' },
      { name: 'Modern CSS & Tailwind', category: 'Frontend', focus: 'Design Systems & Utility Styling', description: 'CSS Grid, Flexbox, Custom animations, Variables' },
      { name: 'State Management', category: 'Frontend', focus: 'Application Data Flow', description: 'React Context API, LocalStorage synchronization' }
    ]
  },
  {
    id: 'backend-development',
    title: 'Backend Engineering',
    icon: 'Server',
    description: 'Engineering robust asynchronous services, data validation layers, and secure RESTful endpoints.',
    skills: [
      { name: 'FastAPI', category: 'Backend', focus: 'Asynchronous Python Web Framework', description: 'Pydantic validation, Dependency injection, OpenAPI docs' },
      { name: 'RESTful API Design', category: 'Backend', focus: 'Standardized Endpoints', description: 'HTTP verbs, Status codes, Resource modeling, Rate limits' },
      { name: 'JWT & OAuth2 Security', category: 'Backend', focus: 'Stateless Authentication', description: 'Bearer tokens, Refresh rotation, Password hashing (bcrypt)' },
      { name: 'SQLAlchemy ORM', category: 'Backend', focus: 'Object-Relational Mapping', description: 'Session management, Relationships, Query optimization' },
      { name: 'Spring Boot', category: 'Backend', focus: 'Enterprise Services', description: 'Controllers, Services, Repositories, JPA integration' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    icon: 'Database',
    description: 'Designing normalized relational schemas and ensuring transactional consistency and data integrity.',
    skills: [
      { name: 'PostgreSQL', category: 'Database', focus: 'Enterprise Relational Engine', description: 'ACID compliance, Foreign keys, Indices, Complex joins' },
      { name: 'MySQL', category: 'Database', focus: 'Relational Data Stores', description: 'Schema normalization, Stored procedures, User privileges' },
      { name: 'SQLite', category: 'Database', focus: 'Embedded Local Storage', description: 'Zero-configuration testing, Fast prototyping, Mobile DB' }
    ]
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    icon: 'Brain',
    description: 'Applying data science principles, supervised predictive modeling, and intelligent inference services.',
    skills: [
      { name: 'Supervised Learning', category: 'AI', focus: 'Classification & Regression', description: 'Decision trees, Random forests, Logistic regression' },
      { name: 'Scikit-Learn', category: 'AI', focus: 'Predictive Modeling Toolkit', description: 'Model fitting, Cross-validation, Hyperparameter tuning' },
      { name: 'Pandas & NumPy', category: 'AI', focus: 'Data Preprocessing', description: 'Data frames, Feature imputation, Vectorized computation' },
      { name: 'Model Evaluation', category: 'AI', focus: 'Performance Verification', description: 'Precision/Recall, F1-Score, ROC-AUC, Confusion matrices' },
      { name: 'AI API Integration', category: 'AI', focus: 'Intelligent App Features', description: 'LLM prompt orchestration, Clinical note summarization' }
    ]
  },
  {
    id: 'cybersecurity-networking',
    title: 'Cybersecurity & Networking',
    icon: 'ShieldCheck',
    description: 'Practical security research, defensive network monitoring, and vulnerability assessments in authorized labs.',
    skills: [
      { name: 'Network Fundamentals', category: 'Security', focus: 'TCP/IP & OSI Model', description: 'Subnetting, Routing, DNS, TLS/SSL handshakes, HTTP/S' },
      { name: 'Wireshark', category: 'Security', focus: 'Packet Capture & Inspection', description: 'Traffic stream analysis, Protocol dissecting, Anomaly detection' },
      { name: 'Nmap', category: 'Security', focus: 'Network Port & Host Enumeration', description: 'Port scanning, OS detection, Service version banner inspection' },
      { name: 'Burp Suite Community', category: 'Security', focus: 'Web Proxy & Interception', description: 'Request tampering, Cookie testing, Parameter injection checks' },
      { name: 'OWASP Top 10', category: 'Security', focus: 'Web Application Vulnerabilities', description: 'SQL Injection, XSS, Broken Access Control, CSRF mitigation' },
      { name: 'Wazuh SIEM', category: 'Security', focus: 'Host-based Log Monitoring', description: 'Log ingestion, Rule-based security alerts, Syslog audit' },
      { name: 'Linux System Security', category: 'Security', focus: 'Privilege & Access Control', description: 'Permissions (chmod/chown), SSH hardening, UFW firewall' }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'DevOps & Deployment',
    icon: 'Cloud',
    description: 'Containerizing services and establishing predictable local and cloud hosting workflows.',
    skills: [
      { name: 'Docker & Docker Compose', category: 'DevOps', focus: 'Containerization', description: 'Multi-stage builds, Network bridges, Named volumes' },
      { name: 'Git & GitHub', category: 'DevOps', focus: 'Version Control & Workflows', description: 'Branch management, Pull requests, Issue tracking' },
      { name: 'Linux Administration', category: 'DevOps', focus: 'CLI & Server Operations', description: 'Ubuntu/Debian, Systemd, Process monitoring, Cron' },
      { name: 'CI/CD Basics', category: 'DevOps', focus: 'Automated Pipelines', description: 'GitHub Actions build verification and automated tests' }
    ]
  },
  {
    id: 'development-tools',
    title: 'Development Tools & Workflow',
    icon: 'Wrench',
    description: 'Daily development environments and productivity utilities enabling clean, disciplined code execution.',
    skills: [
      { name: 'VS Code & JetBrains', category: 'Tools', focus: 'IDE Ecosystem', description: 'Debugging configurations, Linting, Extensions, Remote SSH' },
      { name: 'Postman', category: 'Tools', focus: 'API Testing & Documentation', description: 'Collections, Environment variables, Automated test scripts' },
      { name: 'VirtualBox / VMware', category: 'Tools', focus: 'Security Lab Isolation', description: 'Kali Linux VMs, Host-only virtual networking, Snapshots' }
    ]
  }
];

