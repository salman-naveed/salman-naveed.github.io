/**
 * PROJECTS DATA
 * =============
 * Add, edit, or remove projects here. The website will automatically update!
 * 
 * Each project should have:
 * - title: Project name
 * - description: Brief description
 * - longDescription: Detailed description (for project page)
 * - category: 'electrical', 'diy', 'software', 'robotics', 'iot'
 * - tags: Array of technology tags
 * - image: Path to project thumbnail
 * - github: GitHub repository URL (optional)
 * - demo: Live demo URL (optional)
 * - featured: true/false (show on homepage)
 * - date: Project date (YYYY-MM-DD)
 */

const PROJECTS = [
    {
        id: "smart-home-hub",
        title: "Smart Home Hub",
        description: "Custom IoT hub using ESP32 to control all smart devices in my home with a beautiful web interface.",
        longDescription: `
            A comprehensive smart home solution built from scratch using ESP32 microcontrollers. 
            This project integrates temperature sensors, smart lighting, security cameras, and voice control.
            Features include real-time monitoring, automated routines, and mobile app control.
        `,
        category: "iot",
        tags: ["ESP32", "MQTT", "Node.js", "React", "3D Printing"],
        image: "assets/images/projects/smart-home-hub.jpg",
        github: "https://github.com/salman-naveed/smart-home-hub",
        demo: null,
        featured: true,
        date: "2025-11-15",
        gallery: [
            "assets/images/projects/smart-home-hub-1.jpg",
            "assets/images/projects/smart-home-hub-2.jpg",
            "assets/images/projects/smart-home-hub-3.jpg"
        ]
    },
    {
        id: "pcb-business-card",
        title: "PCB Business Card",
        description: "An interactive business card PCB with LEDs, capacitive touch, and USB connectivity.",
        longDescription: `
            Designed a professional business card that doubles as a working PCB. 
            Features include animated LED patterns, capacitive touch buttons, and acts as a USB drive 
            containing my resume. Perfect conversation starter at tech events!
        `,
        category: "electrical",
        tags: ["KiCAD", "ATtiny85", "PCB Design", "SMD Soldering"],
        image: "assets/images/projects/pcb-card.jpg",
        github: "https://github.com/salman-naveed/pcb-business-card",
        demo: null,
        featured: true,
        date: "2025-09-20",
        gallery: []
    },
    {
        id: "robot-arm",
        title: "6-DOF Robot Arm",
        description: "A 6 degrees of freedom robot arm with computer vision for pick-and-place operations.",
        longDescription: `
            Built a fully functional 6-DOF robot arm using 3D printed parts and servo motors. 
            Integrated computer vision using OpenCV for object detection and tracking.
            Features inverse kinematics, path planning, and a GUI for control.
        `,
        category: "robotics",
        tags: ["Arduino Mega", "Python", "OpenCV", "Inverse Kinematics", "3D Printing"],
        image: "assets/images/projects/robot-arm.jpg",
        github: "https://github.com/salman-naveed/robot-arm",
        demo: "https://www.youtube.com/watch?v=YOUR_VIDEO",
        featured: true,
        date: "2025-07-10",
        gallery: []
    },
    {
        id: "weather-station",
        title: "Solar-Powered Weather Station",
        description: "Autonomous weather station with solar power, data logging, and web dashboard.",
        longDescription: `
            A complete weather monitoring solution powered by solar panels with battery backup.
            Measures temperature, humidity, pressure, wind speed, and rainfall.
            Data is logged locally and uploaded to a cloud dashboard for analysis.
        `,
        category: "diy",
        tags: ["ESP32", "Solar Power", "Sensors", "PCB Design", "Web Dashboard"],
        image: "assets/images/projects/weather-station.jpg",
        github: "https://github.com/salman-naveed/weather-station",
        demo: "https://weather.example.com",
        featured: true,
        date: "2025-05-03",
        gallery: []
    },
    {
        id: "fpga-audio",
        title: "FPGA Audio Synthesizer",
        description: "Digital audio synthesizer implemented on FPGA with MIDI support.",
        longDescription: `
            Designed and implemented a digital audio synthesizer from scratch using Verilog.
            Features multiple waveform generators, filters, and MIDI input support.
            Great project to understand digital signal processing and FPGA development.
        `,
        category: "electrical",
        tags: ["FPGA", "Verilog", "DSP", "MIDI", "Audio"],
        image: "assets/images/projects/fpga-audio.jpg",
        github: "https://github.com/salman-naveed/fpga-audio-synth",
        demo: null,
        featured: false,
        date: "2025-03-18",
        gallery: []
    },
    {
        id: "wireless-charging",
        title: "Wireless Charging Pad",
        description: "Custom wireless charging pad with efficiency monitoring and multiple coil design.",
        longDescription: `
            Designed a wireless charging pad from scratch using resonant inductive coupling.
            Features multiple charging coils for flexible device placement, efficiency monitoring,
            and foreign object detection for safety.
        `,
        category: "electrical",
        tags: ["Power Electronics", "Wireless Power", "PCB Design", "Microcontroller"],
        image: "assets/images/projects/wireless-charging.jpg",
        github: "https://github.com/salman-naveed/wireless-charger",
        demo: null,
        featured: false,
        date: "2024-12-05",
        gallery: []
    },
    {
        id: "dev-portfolio",
        title: "Portfolio Website",
        description: "This website! A fully customizable portfolio template for engineers and makers.",
        longDescription: `
            A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript.
            Features include multiple themes, particle effects, project showcase, and blog integration.
            Designed to be easily customizable through configuration files.
        `,
        category: "software",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        image: "assets/images/projects/portfolio.jpg",
        github: "https://github.com/salman-naveed/salman-naveed.github.io",
        demo: "https://salman-naveed.github.io",
        featured: true,
        date: "2026-01-20",
        gallery: []
    },
    {
        id: "oscilloscope",
        title: "DIY USB Oscilloscope",
        description: "Budget-friendly oscilloscope using STM32 with PC software for visualization.",
        longDescription: `
            Built a functional oscilloscope using an STM32 microcontroller with high-speed ADC.
            Includes custom PC software for waveform visualization and measurement.
            Great for hobbyist electronics work at a fraction of commercial oscilloscope cost.
        `,
        category: "diy",
        tags: ["STM32", "ADC", "Python", "Signal Processing"],
        image: "assets/images/projects/oscilloscope.jpg",
        github: "https://github.com/salman-naveed/usb-oscilloscope",
        demo: null,
        featured: false,
        date: "2024-10-12",
        gallery: []
    }
];

/**
 * Get projects filtered by category
 */
function getProjectsByCategory(category) {
    if (category === 'all') {
        return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === category);
}

/**
 * Get featured projects only
 */
function getFeaturedProjects() {
    return PROJECTS.filter(project => project.featured);
}

/**
 * Get project by ID
 */
function getProjectById(id) {
    return PROJECTS.find(project => project.id === id);
}

/**
 * Sort projects by date
 */
function sortProjectsByDate(projects, order = 'desc') {
    return projects.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
}

/**
 * Render projects to the grid
 */
function renderProjects(projects, containerId = 'projectsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        container.appendChild(projectCard);
    });
}

/**
 * Create a project card element
 */
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 3) * 100);

    // Fallback image if project image doesn't exist
    const imgSrc = project.image || 'assets/images/projects/placeholder.jpg';

    card.innerHTML = `
        <div class="project-image">
            <img src="${imgSrc}" alt="${project.title}" loading="lazy" onerror="this.src='assets/images/projects/placeholder.jpg'">
            <div class="project-overlay">
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="project-link" aria-label="View code">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="project-link" aria-label="View demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                    <a href="projects/${project.id}.html" class="project-link" aria-label="View details">
                        <i class="fas fa-info-circle"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <div class="project-category">${project.category}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS, getProjectsByCategory, getFeaturedProjects, getProjectById };
}
