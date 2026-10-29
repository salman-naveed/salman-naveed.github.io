export const site = {
  // -------------------------------------------------------------------------
  // Identity
  // -------------------------------------------------------------------------
  name: "Salman Naveed",
  shortName: "SN",
  role: "Electrical & Embedded Systems Engineer",
  descriptor: "Embedded Hardware & Firmware · Industrial IoT · Mixed-Signal & RF Design · Robotics",
  tagline: "I engineer embedded hardware and firmware, from requirements to validated, production-ready products.",

  // Used in browser metadata / SEO.
  siteUrl: "https://salman-naveed.netlify.app",
  defaultTitle: "Salman Naveed — Electrical & Embedded Systems Engineer",
  defaultDescription:
    "Portfolio of Salman Naveed, an electrical and embedded systems engineer working on industrial IoT hardware, multi-layer PCB design, C/C++ firmware, mixed-signal and RF circuits, and robotics.",

  // -------------------------------------------------------------------------
  // Homepage
  // -------------------------------------------------------------------------
  home: {
    eyebrow: "ENGINEERING PORTFOLIO",
    intro:
      "I'm an electrical engineer in Stuttgart, Germany. I design industrial IoT devices, mixed-signal and RF circuits, and robotic systems, and I take them from schematic and multi-layer PCB layout through C/C++ firmware to lab validation.",
    projectsHeading: "Selected Projects",
    projectsIntro:
      "Industrial IoT hardware, precision analog and RF design, and autonomous robotics. Each project is documented with the decisions, tradeoffs and lessons behind the final result.",
    writingHeading: "Writing",
    writingIntro:
      "Technical notes, build logs and practical write-ups from hardware, firmware and lab work.",
    contactHeading: "Get in touch",
    contactText:
      "For engineering roles, technical services, collaboration or questions about my work, feel free to contact me."
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
            "Schematic capture, component selection, PCB layout and preparation of manufacturing files, followed by board bring-up and debugging for digital, RF and mixed-signal designs."
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
      "I'm Salman Naveed, an electrical engineer based in Stuttgart, Germany, working across embedded hardware and firmware. I design industrial IoT devices, mixed-signal and RF circuits, and robotic systems. I also work on precision sensing systems and instrument design for optics research projects in the area of Space-Division Multiplexing. I have experience taking them from requirements and component selection through schematic design, multi-layer PCB layout, firmware and lab validation.",
    paragraphs: [
      "Since 2023 I have worked as a working student in embedded systems at GPS GmbH, where I lead hardware development for three industrial IoT product lines. I design 4- to 6-layer boards in Altium Designer for industrial environments, with isolated 24 V I/O, filtered analog sensor inputs, protection circuitry and EMC-aware layout. Each board is optimized for manufacturing and in-house low-volume production. On the firmware side I write C/C++ for ESP32 and STM32 under FreeRTOS. That work includes a safety-critical SLIP-based UART protocol for a motorized lifting system, a thread-safe hardware abstraction layer for persistent storage on the STM32H7, and edge software for condition monitoring, predictive maintenance and digital twins.",
      "I am completing an MSc in Electrical Engineering at the University of Stuttgart, after a BE from NUST. My master's thesis is a high-speed, closed-loop polarization tracking system for characterizing few-mode and multicore optical fibers. It combines a precision analog signal chain driving a high-voltage piezo actuator, mixed-signal STM32 PCBs, real-time control firmware and a PC-based GUI. In earlier research I designed, fabricated and characterized 2.4 GHz planar microstrip band-pass filters, using Keysight ADS for the design and a VNA for the measurements.",
      "Outside of work I'm building XR-4, a 4WD autonomous rover test platform where I own every layer of the system. That covers the Fusion 360 frame and suspension, custom KiCad PCBs, ESP-IDF/FreeRTOS firmware for motor control and telemetry, and an x86 ROS 2 mission computer with LIDAR and cameras.",
      "Before moving into embedded engineering full-time, I spent a year and a half as a product manager for digital payments at United Bank Limited. There I ran production systems handling more than 250,000 transactions a day. That experience still shapes how I work: clear requirements, structured testing and documentation, and end-to-end ownership."
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
