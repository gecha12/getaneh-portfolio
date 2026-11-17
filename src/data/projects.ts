import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'gondar-rent-ai',
    title: 'GondarRent AI',
    subtitle: 'Intelligent Property Discovery & Automated Price Estimation Platform',
    category: 'fullstack',
    overview:
      'A full-stack, AI-enhanced real estate and property rental platform built to streamline the urban housing search, verification, and leasing workflow with automated valuation suggestions.',
    problem:
      'Finding verified residential rentals in rapidly growing urban centers like Gondar is plagued by fragmented informal listings, speculative price inflation, and lack of secure tenant-landlord communication.',
    solution:
      'GondarRent AI unifies property discovery, landlord verification, and role-based management dashboards. It incorporates predictive machine learning algorithms to calculate market price benchmarks based on location, amenities, and dimensions.',
    features: [
      'Intelligent property discovery with dynamic filters (location, price tier, bedroom count, amenities)',
      'Automated price estimation algorithm evaluating market averages and historical neighborhood data',
      'Role-based dashboards for tenants, property owners, and system administrators',
      'Viewing schedule requests with conflict detection and automated email notifications',
      'Document management for rental lease agreements and tenant identification verification',
      'Real-time inquiry messaging channels between prospective tenants and landlords'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'TailwindCSS'],
    contributions: [
      'Architected the relational schema in PostgreSQL with normalized indices for spatial queries',
      'Engineered asynchronous REST APIs in FastAPI with Pydantic data validation and JWT authentication',
      'Implemented responsive React + TypeScript interfaces with modular state management and interactive property galleries',
      'Containerized the multi-tier application using Docker and Docker Compose for reproducible deployment'
    ],
    architecture:
      'Client (React/TypeScript SPA) -> Reverse Proxy -> FastAPI Application Engine (Python) -> SQLAlchemy ORM -> PostgreSQL Persistent Storage. Background price estimation pipeline triggered asynchronously.',
    status: 'In Development',
    githubUrl: 'https://github.com/gecha12',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    keyHighlights: ['FastAPI Backend', 'PostgreSQL Relational DB', 'ML Valuation Model', 'Docker Containerized'],
    implementedFeatures: [
      'Property listing creation, editing, and photo upload pipeline',
      'FastAPI CRUD endpoints with token-based authentication',
      'PostgreSQL schema migration and indexing for fast listing searches',
      'Client search interface with instant keyword filtering'
    ],
    plannedFeatures: [
      'Integrated mobile payment gateway (Chapa / Telebirr webhook integration)',
      'Geographic interactive map clustering with Leaflet/OpenStreetMap'
    ]
  },
  {
    id: 'medlens',
    title: 'MedLens',
    subtitle: 'AI-Assisted Patient Medical Record & Clinical Decision Support Architecture',
    category: 'ai-ml',
    overview:
      'A final-year university engineering initiative designed to improve continuity of clinical care by securely consolidating patient medical records and generating concise, AI-assisted diagnostic summaries for physicians.',
    problem:
      'Patient health records across public clinics are frequently paper-bound, disconnected, or difficult to quickly review during emergency triage, leading to duplicate tests, lost medical histories, and diagnostic delays.',
    solution:
      'MedLens provides a structured digital health record system featuring secure QR-based emergency lookup, physician role-based authorization, immutable audit logging, and automated clinical history synthesis.',
    features: [
      'Patient health history timeline tracking past diagnoses, allergies, and prescribed medications',
      'Role-based healthcare access control differentiating doctors, nurses, triage staff, and patients',
      'Quick QR-based emergency identification token for rapid record access with authorized patient consent',
      'Audit logging tracking every read and write access for HIPAA/data privacy compliance',
      'AI-assisted clinical note summarization helping doctors review multi-year patient histories in seconds',
      'Simulated HL7 / FHIR data exchange format compatibility for future hospital system interoperability'
    ],
    technologies: ['React', 'TypeScript', 'Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Scikit-Learn'],
    contributions: [
      'Authored the technical specification, threat model, and system architecture for the final-year project',
      'Designed the cryptographically secured QR identity lookup token system with timed session expiration',
      'Developed the doctor consultation dashboard with rapid patient lookup and structured diagnosis input',
      'Built data sanitization and audit trails ensuring patient confidentiality across all API transactions'
    ],
    architecture:
      'Multi-platform Client (Web React & Mobile Flutter) -> Secure API Gateway -> FastAPI Backend -> Role-Based Access Control (RBAC) & Audit Interceptor -> PostgreSQL. AI Summarization micro-service runs in an isolated container.',
    status: 'Final-Year Project',
    githubUrl: 'https://github.com/gecha12',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    keyHighlights: ['University Final-Year Project', 'RBAC & Audit Logs', 'AI Clinical Summaries', 'QR Identification'],
    implementedFeatures: [
      'Patient profile registration, vital stats recording, and diagnostic history entry',
      'Cryptographic QR code generation for emergency patient identification',
      'FastAPI authentication with strict role permissions (Doctor vs Patient vs Admin)',
      'Structured audit logger recording actor, timestamp, IP, and target patient ID for every query'
    ],
    plannedFeatures: [
      'Voice-to-text clinical consultation transcription in local languages',
      'Complete FHIR JSON standard schema validator'
    ]
  },
  {
    id: 'edutrack',
    title: 'EduTrack',
    subtitle: 'Machine Learning Student Academic Trajectory & Intervention Forecaster',
    category: 'ai-ml',
    overview:
      'An educational data mining and decision-support system that applies supervised learning algorithms to identify students at academic risk and suggest early instructional interventions.',
    problem:
      'Academic departments often only discover that a student is struggling after midterm or final examinations, when it is frequently too late to remediate fundamental conceptual deficiencies.',
    solution:
      'EduTrack ingests historical coursework performance, attendance metrics, and quiz trends to predict end-of-semester outcomes, presenting faculty advisors with an explainable risk matrix and intervention recommendations.',
    features: [
      'Multi-variable performance dataset ingestion with automated outlier detection and normalization',
      'Comparative model benchmark engine evaluating Random Forests, Decision Trees, and Logistic Regression',
      'Interactive risk level scoring (Low, Moderate, Critical) with feature importance attribution',
      'Early intervention alerts notifying academic advisors of declining student engagement',
      'Cohort analytics dashboard visualizing grade distributions and curriculum bottlenecks'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Pandas', 'Scikit-Learn', 'Chart.js'],
    contributions: [
      'Engineered feature extraction pipeline handling missing entries and categorical academic metrics',
      'Trained and validated classification models utilizing stratified k-fold cross-validation (achieving >87% test accuracy)',
      'Built interactive visual dashboard rendering confusion matrices, ROC curves, and student trajectory projections',
      'Exposed predictive inference endpoints via lightweight FastAPI service with strict type validation'
    ],
    architecture:
      'React Visualization Frontend -> REST API -> FastAPI Inference Worker -> Scikit-Learn Pipeline Serialization (joblib) -> SQLite / PostgreSQL Data Store.',
    status: 'Completed',
    githubUrl: 'https://github.com/gecha12',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    keyHighlights: ['Supervised ML Classifier', 'Feature Importance Attribution', 'Interactive Risk Matrix', 'FastAPI Inference'],
    implementedFeatures: [
      'Dataset preprocessing, normalization, and feature encoding engine',
      'Decision Tree and Random Forest training scripts with cross-validation',
      'FastAPI prediction endpoint outputting probability percentages and key risk factors',
      'React dashboard visualizing student progress indicators with real-time chart rendering'
    ],
    plannedFeatures: [
      'Automated personalized study plan generator based on identified topic weaknesses'
    ]
  },
  {
    id: 'internbridge',
    title: 'InternBridge',
    subtitle: 'Enterprise Internship Marketplace & Institutional Apprenticeship Tracker',
    category: 'fullstack',
    overview:
      'A full-stack enterprise platform developed during my software engineering internship at Atlas Computer Technology PLC to manage student internships, corporate supervisor evaluations, and university advisor oversight.',
    problem:
      'The university-to-industry internship process in Ethiopia involves manual paper clearance forms, untracked weekly attendance logs, and delayed final evaluation submissions.',
    solution:
      'InternBridge digitized the end-to-end apprenticeship lifecycle: students apply to accredited industry hosts, log verified weekly project deliverables, and receive structured evaluations from both company mentors and university faculty.',
    features: [
      'Student profile and CV verification system with academic department endorsement',
      'Company partner portal for posting openings, reviewing applicants, and scheduling interviews',
      'Digital weekly logbook with supervisor verification and electronic approval signatures',
      'Midterm and final performance evaluation rubrics with automated grade calculations',
      'University coordinator monitoring panel tracking student placements across regional enterprises'
    ],
    technologies: ['Spring Boot', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    contributions: [
      'Developed core backend services at Atlas Computer Technology PLC during the professional internship period',
      'Implemented secure authentication and role-based clearance workflows across students, mentors, and professors',
      'Constructed database relations in PostgreSQL for logbook submissions, evaluations, and enterprise rosters',
      'Participated in agile sprints, daily standups, code reviews, and enterprise deployment pipelines'
    ],
    architecture:
      'Next.js Web Client -> Enterprise Spring Boot REST API -> JPA / Hibernate -> PostgreSQL Managed Instance. Deployed with Docker containers on internal development servers.',
    status: 'Internship Production',
    githubUrl: 'https://github.com/gecha12',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    keyHighlights: ['Atlas Computer Tech Internship', 'Spring Boot & Next.js', 'Multi-Party Workflows', 'Enterprise RBAC'],
    implementedFeatures: [
      'Student application pipeline with resume attachment and department approval state',
      'Weekly task submission and corporate mentor sign-off mechanism',
      'Evaluation rubric aggregation calculating weighted final scores',
      'PostgreSQL data model with audit timestamps and cascade integrity constraints'
    ],
    plannedFeatures: [
      'Automated PDF completion certificate generator with institutional digital verification stamp'
    ]
  }
];

