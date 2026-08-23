export const site = {
  // -------------------------------------------------------------------------
  // Identity
  // -------------------------------------------------------------------------
  name: "Salman Naveed",
  shortName: "SN",
  role: "Electrical Engineer | Designer | Maker",
  descriptor: "Embedded Systems · IoT & Connected Devices · Robotics",
  tagline: "I design and build reliable hardware and embedded systems.",

  // Used in browser metadata / SEO.
  siteUrl: "https://salman-naveed.netlify.app",
  defaultTitle: "Salman Naveed — Electrical Engineer | Designer | Maker",
  defaultDescription:
    "Engineering portfolio covering embedded systems, electronics, IoT, robotics, PCB design and other technical projects.",

  // -------------------------------------------------------------------------
  // Homepage
  // -------------------------------------------------------------------------
  home: {
    eyebrow: "ENGINEERING PORTFOLIO",
    intro:
      "I work across electronics, embedded firmware and system integration, turning requirements into tested physical systems.",
    projectsHeading: "Selected Projects",
    projectsIntro:
      "A selection of my engineering projects, documented with the decisions, tradeoffs and lessons behind the final result.",
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
    services: {
      eyebrow: "Services",
      heading: "Engineering Services",
      intro:
        "I can provide engineering services for embedded systems, analog & digital electronics design, schematic and PCB development, CAD and robotics projects."
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
      "My name is Salman Naveed. My educational background and career focus lies in electrical engineering, with a specialization in embedded systems, IoT and connected devices and robotics. I have worked on various projects in these domains, in both professional and academic settings. I am passionate about designing and building reliable hardware and embedded systems, and I enjoy sharing my knowledge and experiences through writing and documentation.",
    paragraphs: [
      "My work sits between hardware and software: schematic design, PCB development, firmware, interfaces, debugging, validation and system integration.",
      "I like projects where the engineering decisions are visible — where constraints, testing and iteration matter as much as the final photograph."
    ],
      photos: [
    {
      src: "/images/public/sn.jpg",
      alt: "Salman working on an engineering project",
      caption: ""
    },
    {
      src: "/images/public/sn1.jpg",
      alt: "Salman in the workshop",
      caption: ""
    },
    {
      src: "/images/public/sn2.jpg",
      alt: "Salman with a robotics project",
      caption: ""
    }
  ],
    resumeUrl: "/resume.pdf"
  },

  // -------------------------------------------------------------------------
  // Contact / external links
  // Leave a URL blank ("") to hide that link automatically.
  // -------------------------------------------------------------------------
  contact: {
    email: "salman.navid@hotmail.com",
    location: "Germany",
    github: "https://github.com/salman-naveed",
    linkedin: "https://www.linkedin.com/in/salmannaveed/",
    youtube: "https://www.youtube.com/@navlabs_inc",
    resume: "/resume.pdf"
  },

  // -------------------------------------------------------------------------
  // Navigation
  // -------------------------------------------------------------------------
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "Writing", href: "/writing/" },
    { label: "Services", href: "/services/" },
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
