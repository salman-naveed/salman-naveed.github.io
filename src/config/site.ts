export const site = {
  // -------------------------------------------------------------------------
  // Identity
  // -------------------------------------------------------------------------
  name: "Your Name",
  shortName: "YN",
  role: "Embedded Systems Engineer",
  descriptor: "Electronics · Embedded Systems · Robotics",
  tagline: "I design and build reliable hardware and embedded systems.",

  // Used in browser metadata / SEO.
  siteUrl: "https://example.com",
  defaultTitle: "Your Name — Embedded Systems Engineer",
  defaultDescription:
    "Engineering portfolio covering embedded systems, electronics, robotics, PCB design and technical projects.",

  // -------------------------------------------------------------------------
  // Homepage
  // -------------------------------------------------------------------------
  home: {
    eyebrow: "ENGINEERING PORTFOLIO",
    intro:
      "I work across electronics, embedded firmware and system integration, turning requirements into tested physical systems.",
    projectsHeading: "Selected Projects",
    projectsIntro:
      "A selection of engineering projects, documented with the decisions, tradeoffs and lessons behind the final result.",
    writingHeading: "Writing",
    writingIntro:
      "Technical notes, build logs and practical engineering write-ups.",
    contactHeading: "Get in touch",
    contactText:
      "For engineering roles, technical collaboration or questions about my work, feel free to contact me."
  },

  // -------------------------------------------------------------------------
  // Page headings / introductions
  // -------------------------------------------------------------------------
  pages: {
    projects: {
      eyebrow: "Work",
      heading: "Projects",
      intro:
        "Engineering projects documented around the problem, architecture, implementation, tradeoffs, testing and lessons learned."
    },
    writing: {
      eyebrow: "Notes & Guides",
      heading: "Writing",
      intro:
        "Technical notes, engineering guides and longer explanations from projects and experiments."
    },
    contact: {
      eyebrow: "Contact",
      heading: "Get in touch",
      intro: "The simplest way to reach me is by email."
    }
  },

  // -------------------------------------------------------------------------
  // About page
  // -------------------------------------------------------------------------
  about: {
    heading: "About",
    lead:
      "I am an engineer interested in embedded systems, electronics, industrial IoT and robotics.",
    paragraphs: [
      "My work sits between hardware and software: schematic design, PCB development, firmware, interfaces, debugging, validation and system integration.",
      "I like projects where the engineering decisions are visible — where constraints, testing and iteration matter as much as the final photograph."
    ],
    resumeUrl: "/resume.pdf"
  },

  // -------------------------------------------------------------------------
  // Contact / external links
  // Leave a URL blank ("") to hide that link automatically.
  // -------------------------------------------------------------------------
  contact: {
    email: "hello@example.com",
    location: "Germany",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    resume: "/resume.pdf"
  },

  // -------------------------------------------------------------------------
  // Navigation
  // -------------------------------------------------------------------------
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "Writing", href: "/writing/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" }
  ],

  // -------------------------------------------------------------------------
  // Footer
  // -------------------------------------------------------------------------
  footer: {
    note: "Designed as a simple, static engineering portfolio."
  }
} as const;
