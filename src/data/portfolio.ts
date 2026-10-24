export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web App' | 'Frontend' | 'Concept' | 'Database' | '3D Experience';
  description: string;
  longDescription: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Concept';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  highlights: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Practical Experience", "Active Learning", "Core Foundation"
  icon: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
  badge: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  organization?: string;
  description: string;
  status: 'Completed' | 'Current' | 'Future Goal';
  tags: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    badge: string;
    headline: string;
    subheadline: string;
    shortBio: string;
    fullBio: string[];
    location: string;
    availability: string;
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string;
  };
  about: {
    philosophy: {
      title: string;
      description: string;
      icon: string;
    }[];
    metrics: {
      value: string;
      label: string;
      sublabel: string;
    }[];
  };
  skills: {
    frontend: SkillItem[];
    tools: SkillItem[];
    creativeWorkflow: SkillItem[];
  };
  projects: ProjectItem[];
  services: ServiceItem[];
  timeline: TimelineItem[];
  emailJsConfig: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Farhan Ahmad",
    role: "Creative Technologist & Web Developer",
    badge: "INDEPENDENT CREATIVE DEVELOPER",
    headline: "Turning Ideas Into Digital Experiences.",
    subheadline: "I build modern websites and interactive digital experiences using creative design and AI-assisted development.",
    shortBio: "Aspiring creative web developer dedicated to building responsive, accessible, and visually captivating digital products through modern web technologies and AI-augmented workflows.",
    fullBio: [
      "I am an enthusiastic developer at the intersection of frontend engineering, visual design, and AI-accelerated workflows. I believe the future of software development belongs to creative problem-solvers who can leverage cutting-edge AI tools to design, prototype, and build memorable digital products with precision.",
      "My journey centers around mastering core fundamentals — HTML, CSS, JavaScript, and React — while actively exploring 3D interactive graphics, intuitive UI/UX design, and structured database architectures.",
      "Whether developing functional web applications or prototyping futuristic user interfaces, I prioritize maintainable code, polished micro-interactions, and thoughtful user experiences."
    ],
    location: "Global / Remote",
    availability: "Available for new projects & collaborations",
    email: "farhan@example.com", // Replace with your actual email
    github: "https://github.com/farhan-ahmad-dev", // Replace with your GitHub profile
    linkedin: "https://linkedin.com/in/farhan-ahmad-dev", // Replace with your LinkedIn profile
    whatsapp: "+1234567890", // Replace with your WhatsApp number or empty string
  },
  about: {
    philosophy: [
      {
        title: "AI-Augmented Velocity",
        description: "Embracing AI coding assistants and generative tools to accelerate prototyping, test architectures rapidly, and focus on creative design fidelity.",
        icon: "Cpu"
      },
      {
        title: "Clean Code & Strong Fundamentals",
        description: "Grounded in semantic markup, modern CSS layouts, TypeScript type safety, and modular component architecture.",
        icon: "Code2"
      },
      {
        title: "Immersive & Engaging UI",
        description: "Crafting experiences with fluid motion, dynamic 3D elements, glassmorphism, and balanced micro-interactions.",
        icon: "Sparkles"
      },
      {
        title: "Continuous Learner Mindset",
        description: "Constantly experimenting with emerging web standards, interactive libraries, and production engineering patterns.",
        icon: "Compass"
      }
    ],
    metrics: [
      {
        value: "6+",
        label: "Projects Built",
        sublabel: "Web apps & interactive prototypes"
      },
      {
        value: "100%",
        label: "AI-Assisted Workflow",
        sublabel: "Rapid ideation to clean code"
      },
      {
        value: "Modern",
        label: "Tech Stack",
        sublabel: "React, Vite, Three.js, Tailwind"
      },
      {
        value: "Open",
        label: "Collaboration",
        sublabel: "Ready for remote opportunities"
      }
    ]
  },
  skills: {
    frontend: [
      {
        name: "HTML5",
        level: "Semantic & Accessible Markup",
        icon: "FileCode2",
        description: "Accessible structures, SEO meta architecture, and standards-compliant document trees."
      },
      {
        name: "CSS3 / Modern Styling",
        level: "Responsive Layouts & Motion",
        icon: "Palette",
        description: "Flexbox, CSS Grid, custom properties, animations, and Tailwind CSS utility frameworks."
      },
      {
        name: "JavaScript (ES6+)",
        level: "Modern Client Logic",
        icon: "Zap",
        description: "DOM manipulation, asynchronous programming, modern ES syntax, and functional patterns."
      },
      {
        name: "React & TypeScript",
        level: "Component Architecture",
        icon: "Layers",
        description: "Functional components, custom hooks, reactive state management, and type-safe interfaces."
      }
    ],
    tools: [
      {
        name: "Git",
        level: "Version Control",
        icon: "GitBranch",
        description: "Branching strategies, commit hygiene, rebase/merge flows, and version tracking."
      },
      {
        name: "GitHub",
        level: "Repository & Collaboration",
        icon: "Github",
        description: "Open source workflows, project boards, README documentation, and deployment pipelines."
      },
      {
        name: "VS Code",
        level: "Development Environment",
        icon: "Terminal",
        description: "Configured extensions, linting, debugging tools, and integrated terminal workflows."
      }
    ],
    creativeWorkflow: [
      {
        name: "AI-Assisted Coding",
        level: "Accelerated Engineering",
        icon: "Bot",
        description: "Pair programming with AI to refactor code, brainstorm architectures, and debug issues."
      },
      {
        name: "Prompt Engineering",
        level: "Precise Technical Prompts",
        icon: "Sparkles",
        description: "Drafting structured specifications and multi-step constraints for high-quality code generation."
      },
      {
        name: "UI/UX Prototyping",
        level: "User Experience Design",
        icon: "Layout",
        description: "Wireframing, interactive prototypes, design tokens, and user flow optimization."
      },
      {
        name: "Responsive Web Design",
        level: "Cross-Device Perfection",
        icon: "Smartphone",
        description: "Fluid design systems that seamlessly adapt across mobile, tablet, and ultra-wide screens."
      }
    ]
  },
  projects: [
    {
      id: "result-management-system",
      title: "Result Management System",
      category: "Web App",
      status: "Completed",
      description: "An academic results calculation and record management portal with automated grade processing and student search.",
      longDescription: "A comprehensive educational portal built to calculate student marks, determine grade points, track semester standings, and render printable performance cards. Built with a clean dashboard interface, role-based mock views, and structured data models.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage", "Lucide Icons"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#", // Live demo link placeholder
      githubUrl: "https://github.com/farhan-ahmad-dev/result-management-system",
      features: [
        "Automated GPA and grade calculation engine",
        "Student record search and filtering by roll number or semester",
        "Clean tabular presentation with exportable report cards",
        "Persistent local data store with sample mock records"
      ],
      highlights: "Streamlines grade administration into an intuitive, responsive interface."
    },
    {
      id: "coaching-academy-website",
      title: "Coaching Academy Website",
      category: "Frontend",
      status: "Completed",
      description: "A modern educational platform showcasing course curricula, faculty profiles, and student enrollment inquiries.",
      longDescription: "Designed for a modern coaching institute to highlight courses, academic tracks, test schedules, and student testimonials. Features an interactive course fee calculator, inquiry form modal, and responsive hero showcase.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Form Validation"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/farhan-ahmad-dev/coaching-academy-site",
      features: [
        "Course syllabus explorer with interactive subject breakdowns",
        "Lead capture inquiry form with instant validation",
        "Faculty showcase cards with social credentials",
        "Optimized mobile navigation with drawer menu"
      ],
      highlights: "Increases prospective student engagement through clear course roadmaps."
    },
    {
      id: "medical-website-concept",
      title: "Medical Website Concept",
      category: "Concept",
      status: "Concept",
      description: "A sleek healthcare portal concept for patient appointments, doctor availability, and clinic telemedicine services.",
      longDescription: "A conceptual healthcare design exploring a patient-friendly UI for discovering medical specialists, checking open consultation slots, and submitting appointment requests with calm, accessible aesthetics.",
      technologies: ["UI/UX Prototype", "React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/farhan-ahmad-dev/medical-portal-concept",
      features: [
        "Interactive doctor specialty filter and timetable grid",
        "Step-by-step appointment booking wizard concept",
        "Emergency hotline quick-action floating bar",
        "High-contrast accessible color scheme adhering to WCAG standards"
      ],
      highlights: "Explores accessible telemedicine interfaces with zero cognitive overload."
    },
    {
      id: "flavours-fragrances-business",
      title: "Flavours & Fragrances Business",
      category: "Frontend",
      status: "Completed",
      description: "B2B commercial website for an aroma chemical and sensory ingredient supplier featuring interactive product catalogs.",
      longDescription: "A sophisticated corporate website created for an industrial fragrances and flavour compounds manufacturer. Highlights raw ingredient profiles, olfactive pyramid breakdowns (Top, Middle, Base notes), and sample request inquiry workflows.",
      technologies: ["React", "Tailwind CSS", "Vite", "Lucide React", "Glassmorphism"],
      image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/farhan-ahmad-dev/fragrance-business-site",
      features: [
        "Interactive fragrance pyramid visualizer (Top, Heart, Base notes)",
        "B2B sample order request modal with industrial specifications",
        "Categorized catalog for food flavourings, fine perfumery, and cosmetics",
        "High-resolution imagery showcase with fluid hover zoom effects"
      ],
      highlights: "Translates abstract sensory products into a polished digital catalog."
    },
    {
      id: "online-food-ordering-db",
      title: "Online Food Ordering Database",
      category: "Database",
      status: "Completed",
      description: "Relational database schema and prototype interface for restaurant menus, multi-item cart management, and order tracking.",
      longDescription: "A structured database design and frontend query explorer demonstrating relational entity models for food delivery: customers, restaurants, menu categories, order items, delivery drivers, and payment statuses.",
      technologies: ["SQL / Relational DB", "Schema Design", "React", "REST API Mock", "TypeScript"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/farhan-ahmad-dev/food-ordering-database",
      features: [
        "Normalized ER diagram and SQL schema implementation",
        "Interactive order state machine (Placed -> Preparing -> In Transit -> Delivered)",
        "Cart calculation system handling tax, delivery fees, and discounts",
        "SQL query viewer showcasing key analytical joins and aggregations"
      ],
      highlights: "Demonstrates relational database modeling combined with reactive frontend state."
    },
    {
      id: "interactive-3d-portfolio",
      title: "Interactive 3D Portfolio",
      category: "3D Experience",
      status: "Completed",
      description: "A cinematic, WebGL-powered 3D personal portfolio featuring real-time physics, glassmorphism, and responsive motion.",
      longDescription: "The current portfolio you are viewing. Built from the ground up using React Three Fiber, Drei, Three.js shaders, Tailwind CSS, and Framer Motion. Engineered with graceful fallbacks for devices without WebGL, dark cinematic lighting, and modular configuration.",
      technologies: ["React 19", "Three.js", "React Three Fiber", "Drei", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      demoUrl: "#",
      githubUrl: "https://github.com/farhan-ahmad-dev/portfolio-3d",
      features: [
        "Interactive 3D floating sculpture responding to pointer movement",
        "Ambient particle galaxy with dynamic depth and lighting",
        "Modular data architecture for one-file personal content updates",
        "Accessible fallback for non-WebGL environments and reduced motion"
      ],
      highlights: "Brings modern creative technology into an intuitive developer presentation."
    }
  ],
  services: [
    {
      id: "responsive-web-dev",
      title: "Responsive Website Development",
      description: "Crafting fluid, high-performance websites that look and function impeccably across desktop monitors, tablets, and smartphones.",
      deliverables: ["Cross-browser compatibility", "Mobile-first layouts", "Fast loading times", "Semantic code"],
      icon: "Monitor",
      badge: "Core Service"
    },
    {
      id: "landing-page-design",
      title: "Landing Page Design",
      description: "Designing modern, high-impact landing pages structured to capture visitor attention and communicate your message clearly.",
      deliverables: ["Hero section design", "Persuasive call-to-actions", "Feature showcases", "Lead forms"],
      icon: "Sparkles",
      badge: "Creative"
    },
    {
      id: "ai-assisted-prototyping",
      title: "AI-Assisted Website Prototyping",
      description: "Leveraging cutting-edge AI coding workflows to rapidly transform concepts and wireframes into testable, working prototypes.",
      deliverables: ["Rapid iterations", "Component mockups", "Interactive clickthroughs", "Documented specs"],
      icon: "Cpu",
      badge: "Fast Track"
    },
    {
      id: "portfolio-development",
      title: "Portfolio Website Development",
      description: "Building custom personal and professional portfolios that highlight your projects, skills, and brand with creative flair.",
      deliverables: ["Custom branding", "Project showcase galleries", "Interactive timeline", "Contact integration"],
      icon: "Layers",
      badge: "Specialized"
    },
    {
      id: "website-ui-improvements",
      title: "Website UI & UX Improvements",
      description: "Auditing existing websites to modernize visual appeal, fix layout quirks, polish typography, and enhance responsiveness.",
      deliverables: ["Visual redesign", "Spacing & contrast polish", "Micro-interactions", "Performance tune-up"],
      icon: "Wrench",
      badge: "Enhancement"
    }
  ],
  timeline: [
    {
      period: "Current Focus (2025 - 2026)",
      title: "Advanced Creative Development & AI Tooling",
      organization: "Continuous Self-Directed Learning",
      description: "Diving deeper into React Three Fiber, 3D WebGL experiences, shader effects, and mastering prompt-driven frontend workflows.",
      status: "Current",
      tags: ["React 19", "Three.js", "AI-assisted Workflows", "WebGL"]
    },
    {
      period: "Mid 2024 - Late 2024",
      title: "Full-Stack & Database Exploration",
      organization: "Independent Project Milestones",
      description: "Engineered database schemas for online ordering, built academic management applications, and integrated interactive React components.",
      status: "Completed",
      tags: ["SQL", "Relational Databases", "Component Design", "State Management"]
    },
    {
      period: "Early 2024",
      title: "Modern Frontend Foundations",
      organization: "Coding Practice & Concepts",
      description: "Mastered core HTML5 semantics, modern CSS3 layout systems (Flexbox, Grid), vanilla JavaScript asynchronous patterns, and responsive UI principles.",
      status: "Completed",
      tags: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Web Design"]
    },
    {
      period: "Next Horizon (Future)",
      title: "Production Creative Engineering",
      organization: "Professional Goal",
      description: "Contributing to high-impact web applications, building custom 3D web experiences, and collaborating with creative agencies and digital teams.",
      status: "Future Goal",
      tags: ["Next.js", "Full-Stack Deployment", "Creative Agency Work", "Performance Optimization"]
    }
  ],
  emailJsConfig: {
    // These can be populated via Vite env variables VITE_EMAILJS_SERVICE_ID, etc.
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
  }
};
