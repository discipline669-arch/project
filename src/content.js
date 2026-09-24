/**
 * SITE CONTENT
 * All site text lives here — edit this file to keep the site in sync.
 * Data sourced from resume.txt.
 */

export const nav = [
  { id: "hero", label: "Home", i: "01" },
  { id: "about", label: "About", i: "02" },
  { id: "experience", label: "Experience", i: "03" },
  { id: "skills", label: "Skills", i: "04" },
  { id: "projects", label: "Work", i: "05" },
  { id: "contact", label: "Contact", i: "06" },
]

export const meta = {
  initials: "NS",
}

export const hero = {
  eyebrow: "Backend & Full-Stack Developer",
  greeting: "I'm",
  name: "Nehal Solanki",
  wild: "building for scale and impact.",
  glint: true,
  lede: "Computer Science student at VIT Vellore specializing in backend & full-stack engineering — building REST APIs, microservices, distributed systems, and AIML-driven products.",
  meta: [
    { label: "Location", value: "Pune, India" },
    { label: "Email", value: "nehalsolanki076@gmail.com" },
  ],
  badge: "Status: open to internships & roles",
  focus: {
    label: "Current focus",
    url: "#projects",
    text: "AI revision system with 0.84 ROC-AUC →",
  },
  
}

export const about = {
  idx: "01 — About",
  title: "A bit",
  ital: "about me",
  sub: "Backend · Distributed systems · AI/ML",
  name: "Nehal Solanki",
  accent: ".",
  lede: "I build backend systems and full-stack products that hold up under real traffic — clean APIs, thoughtful data models, and ML that actually ships.",
  paras: [
    "I'm a Computer Science student at VIT Vellore specializing in backend and full-stack software engineering, with hands-on experience building REST APIs, microservices, distributed systems, automated testing, and database-driven applications.",
    "My toolkit spans Java, Python, Spring Boot, NestJS, PostgreSQL, MongoDB, Kafka, Redis, Docker, and CI/CD — backed by a strong foundation in DSA, OOP, DBMS, OS, networks, and cloud computing, plus working experience in AI/ML, RAG, LLMs, and predictive modeling.",
  ],
  facts: [
    { label: "Based in", value: "Pune, India" },
    { label: "Education", value: "B.Tech CSE (BIO) @ VIT" },
    { label: "Currently", value: "Open to internships and full time roles" },
  ],
}

export const experience = {
  idx: "03 — Experience",
  title: "Where I've",
  ital: "worked",
  sub: "Internships · Industry experience",
  items: [
    {
      role: "Machine Learning Intern",
      org: "Brillianz Software Solutions LLP",
      place: "Pune, India",
      period: "May 2026 — Jun 2026",
      bullets: [
        "Developed modular Python ML pipelines for data preprocessing, feature engineering, model training, validation, and evaluation across datasets of 12,000+ customer records.",
        "Built reusable Scikit-learn workflows with Random Forest and XGBoost, using GridSearchCV for hyperparameter tuning — improving prediction accuracy from 86.4% to 91.2%.",
        "Evaluated models with Accuracy, F1-score, and ROC-AUC, applying testing, data validation, modular design, debugging, and Git-based collaboration.",
      ],
    },
    {
      role: "AI & Cloud Technologies Intern",
      org: "IBM SkillsBuild — Edunet Foundation",
      place: "Remote",
      period: "Jul 2025 — Aug 2025",
      bullets: [
        "Engineered 2 cloud-based AI applications and Agentic AI workflows with Python, LLMs, LangChain, and IBM Cloud, integrating AI into data-driven application pipelines.",
        "Established RAG pipelines covering document ingestion, preprocessing, embeddings, vector search, semantic retrieval, and prompt engineering for context-aware responses.",
      ],
    },
  ],
  achievements: [
    {
      title: "OCI Generative AI Professional",
      meta: "Oracle Cloud Infrastructure · Jul 2025 — Jul 2027",
      note: "Certification in Generative AI on Oracle Cloud.",
    },
    {
      title: "Events Head — IEEE ITS",
      meta: "IEEE Student Branch",
      note: "Led event planning with cross-functional collaboration and stakeholder coordination.",
    },
  ],
}

export const skills = [
  {
    group: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "Kotlin", "SQL"],
  },
  {
    group: "Backend & Distributed",
    items: ["Spring Boot", "FastAPI", "NestJS", "Node.js", "Express.js", "Microservices", "Kafka", "Redis"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    group: "Data & Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma", "SQL", "Power BI", "Excel", "Microsoft 365"],
  },
  {
    group: "Cloud, DevOps & Tools",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Git", "GitLab", "Maven", "Terraform"],
  },
  {
    group: "Software Engineering",
    items: ["JUnit", "Pytest", "Automated Testing", "End-to-End Testing", "Agile", "Scrum"],
  },
  {
    group: "AI / ML",
    items: ["Scikit-learn", "Random Forest", "RAG", "LangChain", "LLMs", "Agentic AI", "Prompt Engineering", "Vector Search", "GenAI"],
  },
]

export const projects = [
  {
    idx: "01",
    title: "Ready to Revise",
    blurb: "AI-powered intelligent revision system — a microservices backend integrating 5+ behavioral signals to personalize study schedules, with an ML pipeline tuned to 0.84 ROC-AUC and 15+ REST endpoints powering an Android app.",
    tags: ["Kotlin", "NestJS", "FastAPI", "PostgreSQL", "Scikit-learn", "Docker", "CI/CD"],
    links: [{ label: "Repo", href: "https://github.com/nehalss267/Ready-To-Revise--Revision-Scheduler-App" }],
  },
  {
    idx: "02",
    title: "Society Maintenance Platform",
    blurb: "Full-stack society management platform with a 56-endpoint REST API, 4-role authorization, JWT auth, SLA-based overdue detection, Kafka + Redis, and 66+ end-to-end checks.",
    tags: ["Next.js", "Spring Boot", "MongoDB", "Redis", "Kafka", "JUnit"],
    links: [{ label: "Repo", href: "https://github.com/nehalss267/Society-Maintenance-Tracker" }],
  },
  {
    idx: "03",
    title: "Product Analytics Dashboard",
    blurb: "8 optimized analytical SQL views (joins, aggregations, CTEs, window functions) across sales, ratings, discount trends, sellers, inventory, and returns — visualized in interactive Power BI dashboards.",
    tags: ["PostgreSQL", "SQL", "Excel", "Power BI"],
    links: [{ label: "Repo", href: "https://github.com/nehalss267/Product-Analytics-Dashboard" }],
  },
]

export const contact = {
  idx: "06 — Contact",
  title: "Let's",
  ital: "talk.",
  intro: "Have a backend or full-stack role, an internship, or a project worth building? My inbox is open.",
  links: [
    { label: "Email", value: "nehalsolanki076@gmail.com", href: "mailto:nehalsolanki076@gmail.com", icon: "mail" },
    { label: "GitHub", value: "github.com/nehalss267", href: "https://github.com/nehalss267", icon: "github" },
    { label: "LinkedIn", value: "linkedin.com/in/nehalss", href: "https://linkedin.com/in/nehalss", icon: "linkedin" },
    { label: "Resume", value: "Nehal_Solanki_Resume.pdf", href: "./Nehal_Solanki_Resume.pdf", icon: "file" },
  ],
  card: {
    title: "Response time",
    mono: "~24h × 7",
    body: "Average reply under 24 hours. Reach out about internships, collaborations, or anything in between.",
  },
}

export const resumeHref = "./Nehal_Solanki_Resume.pdf"

export const footer = {
  tag: "© 2026 · Nehal Solanki",
}