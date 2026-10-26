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
        "I can provide engineering services for embedded systems, analog & digital electronics design, schematic and PCB development, CAD and robotics projects.",
      // Each item is one row on the Services page. Add, remove or reorder freely.
      items: [
        {
          title: "Embedded Systems & Firmware",
          description:
            "Microcontroller firmware, peripheral drivers, communication interfaces and connected IoT devices — from bring-up to field-ready code."
        },
        {
          title: "Analog & Digital Electronics",
          description:
            "Circuit design and analysis for power, sensing, signal conditioning and digital logic, with an emphasis on reliability and testability."
        },
        {
          title: "Schematic & PCB Development",
          description:
            "Schematic capture, component selection, PCB layout and preparation of manufacturing files, followed by board bring-up and debugging."
        },
        {
          title: "CAD & Mechanical Integration",
          description:
            "Enclosures, mounts and mechanical assemblies designed around the electronics so the whole system fits together."
        },
        {
          title: "Robotics",
          description:
            "Mobile robot platforms, motor control, sensor integration and system-level testing."
        }
      ],
      ctaHeading: "Have a project in mind?",
      ctaText:
        "Send a short description of what you are building, your constraints and your timeline, and I will get back to you."
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
    },
    resume: {
      eyebrow: "CV",
      heading: "Résumé",
      intro:
        "A summary of my education, experience and skills. Preview it below or download the PDF."
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
      src: "/images/about/sn.jpg",
      alt: "Salman working on an engineering project",
      caption: ""
    },
    {
      src: "/images/about/sn1.jpg",
      alt: "Salman in the workshop",
      caption: ""
    },
    {
      src: "/images/about/sn2.jpg",
      alt: "Salman with a robotics project",
      caption: ""
    },
    {
      src: "/images/about/sn3.jpg",
      alt: "Salman with a PCB design",
      caption: ""
    }
  ],
    resumeUrl: "/resume/"
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
    // Path to the PDF in /public. The /resume/ page embeds this file.
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
