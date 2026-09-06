export const profile = {
  name: "Nabil Cambiaso",
  title: "Senior Backend Engineer — AWS / Node.js",
  company: "INVENEO",
  location: "Marrakesh, Morocco",
  email: "nabilcambiaso@gmail.com",
  phone: "+212 609 495 066",
  address: "Hay Tichka, Ouarzazate, Morocco",
  links: {
    github: "https://github.com/nabilcambiaso",
    linkedin: "https://www.linkedin.com/in/nabilcambiaso-533b95193/",
    facebook: "https://web.facebook.com/nabil.cambiaso.5/",
    twitter: "https://twitter.com/CambiasoN",
    instagram: "https://www.instagram.com/th3developer/",
  },
  summary:
    "I'm a software engineer who enjoys figuring out how things work, solving the parts that don't, and finding better ways to build them. My work has grown from building web applications into backend systems, AWS infrastructure, automation, accessibility and AI — taking problems from idea to working, scalable solutions.",
  summaryExtra:
    "I've worked extensively with AWS, Node.js and TypeScript, designing cloud architectures, data flows and distributed systems, while solving real-world challenges around permissions, security, latency, observability, storage and infrastructure cost. A growing focus of my recent work is AI and intelligent automation — agents, RAG, n8n and LLM APIs — building workflows that research, generate content, and automate business processes end-to-end. I've also built accessibility testing CLIs, NPM packages, and web-scale crawlers.",
};

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Lambda",
      "ECS",
      "EC2",
      "S3",
      "DynamoDB",
      "RDS",
      "Terraform",
      "CloudFormation",
      "Serverless",
      "Docker",
    ],
  },
  {
    title: "Backend & Languages",
    items: [
      "Node.js",
      "TypeScript",
      "Express",
      "GraphQL (Apollo)",
      "PHP",
      "C# / ADO.NET",
      "Java (Spring)",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "AI Agents",
      "RAG",
      "n8n",
      "LLM APIs",
      "Workflow Automation",
      "SEO / GEO",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: ["Next.js", "React", "React Native", "Angular", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle"],
  },
  {
    title: "Quality & Tooling",
    items: ["Playwright", "Accessibility Testing", "CI/CD", "Observability"],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Native" },
  { name: "English", level: "Full Professional" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "INVENEO",
    role: "Senior Backend, Cloud & AI Engineer",
    period: "Jul 2025 — Present",
    location: "Marrakesh-Safi, Morocco",
    description:
      "Architecting, securing and optimizing production AWS systems. Leading backend and distributed-systems work in Node.js/TypeScript, and building AI-driven automation with RAG, agents, n8n and LLM APIs.",
  },
  {
    company: "Inclusion and Accessibility Labs (IA Labs)",
    role: "Software Engineer",
    period: "Jun 2023 — Present",
    description:
      "Building accessibility testing CLIs and NPM packages, and crawlers to analyze and improve web accessibility at scale.",
  },
  {
    company: "Stryve",
    role: "Backend Engineer & DevOps (AWS)",
    period: "Jun 2023 — Jul 2025",
    description:
      "Backend and DevOps engineering on AWS — CI/CD, monitoring and infrastructure automation, building efficient in-house alternatives to costly third-party services.",
  },
  {
    company: "Digital",
    role: "Software Engineer",
    period: "Dec 2022 — Mar 2023",
    location: "Morocco",
    description: "Software engineering across backend and product work.",
  },
  {
    company: "LUCEOM",
    role: "React / React Native Developer",
    period: "Nov 2020 — Feb 2023",
    location: "Casablanca, Morocco",
    description: "JavaScript development across React and React Native applications.",
  },
  {
    company: "Fineo Budget",
    role: "Software Engineer",
    period: "Nov 2020 — Jan 2023",
    location: "London, United Kingdom",
    description: "React, React Native, CI/CD, automation and Node.js/Express backend work.",
  },
  {
    company: "NOMAC",
    role: "Mean Stack & PHP Developer",
    period: "Jul 2020 — Oct 2020",
    location: "Ouarzazate, Morocco",
    description:
      "Built a certificate-management system (MEAN stack, JWT auth, PDF generation, Nodemailer) and an employee-management web app in PHP (UML, Merise, PHPMailer, FPDF).",
  },
  {
    company: "Magin Technology",
    role: "Software Engineer",
    period: "Mar 2020 — Jul 2020",
    location: "Ouarzazate, Morocco",
    description:
      "Built an e-commerce application from scratch with vanilla JavaScript, PHP and MySQL, including PayPal and mail integration.",
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "Université Cadi Ayyad",
    degree: "Bachelor's Degree, Computer Software Engineering",
    period: "2021 — 2022",
  },
  {
    school: "ISTA NTIC Ouarzazate",
    degree: "Full Stack Web Development",
    period: "2018 — 2020",
  },
  {
    school: "FPO Ouarzazate",
    degree: "Mathematics and Computer Science",
    period: "2015 — 2017",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "AI Agent & Automation Workflows",
    description:
      "Autonomous workflows built with AI agents, RAG, n8n and LLM APIs that research, generate content and images, and automate business processes end-to-end.",
    tags: ["AI Agents", "RAG", "n8n", "LLM APIs"],
  },
  {
    title: "Accessibility Testing CLI & NPM Packages",
    description:
      "Command-line tools and published npm packages for automated accessibility testing, plus crawlers used to analyze and improve web accessibility at scale.",
    tags: ["Accessibility", "Node.js", "CLI"],
  },
  {
    title: "Document Generator Web Application",
    description:
      "Responsive web app to generate salary certificates and leave requests on the MEAN stack, with JWT authentication and automated PDF generation and email delivery.",
    tags: ["MongoDB", "Express", "Node.js", "JWT"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full e-commerce application built from scratch with vanilla JavaScript, PHP and MySQL, including a delivery dashboard, PayPal checkout and transactional email.",
    tags: ["PHP", "MySQL", "PayPal"],
  },
  {
    title: "Employee Management System",
    description:
      "Administrator dashboard for employee and certificate management, designed with UML/Merise and built in PHP with PHPMailer and FPDF.",
    tags: ["PHP", "MySQL"],
  },
  {
    title: "CRUD Desktop Application for Sport Club",
    description:
      "Windows desktop application in C# with ADO.NET for membership management, with Excel export and Crystal Reports.",
    tags: ["C#", "ADO.NET"],
  },
];

export type Certification = {
  title: string;
  image: string;
};

export const certifications: Certification[] = [
  { title: "Microsoft Office Specialist", image: "/certif/office-master.png" },
  { title: "HTML", image: "/certif/html.png" },
  { title: "jQuery", image: "/certif/jquery.png" },
  { title: "Google Digital Garage", image: "/certif/google-digital.jpg" },
  { title: "React (Udemy)", image: "/certif/react-udemy.png" },
  { title: "React Native", image: "/certif/react-native.jpg" },
];

export const philosophy = [
  "Ease is a greater threat to progress than hardship — when things become too comfortable, it's time to ask: what's next, where can I grow, how can I push for more?",
  "Without commitment, you'll never start. Without consistency, you'll never finish. Keep moving, keep growing, keep learning.",
];
