/**
 * SIMPLIFIED CONTENT MANAGEMENT
 * =============================
 * Single source of truth for all projects
 * Automatically generates project cards and detail pages
 * 
 * USAGE:
 * Just add your project to PROJECTS array below
 * Everything else is automatic!
 */

// Define all projects in one place
const PROJECTS = [
    {
        id: "rover-xr4",
        title: "XR-4 Rover Control System",
        description: "Four-wheel remote-controlled rover with dual ESP32 microcontrollers communicating via ESP-NOW for sub-millisecond response time.",
        category: "robotics",
        image: "assets/images/projects/rover-xr4.jpg",
        featured: true,
        date: "2026-04-12",
        
        // Extended info for detail page
        details: {
            tagline: "Wireless control system for autonomous robotics",
            tags: ["ESP32", "ESP-NOW", "Motor Control", "Sensor Fusion", "FreeRTOS"],
            description: `A four-wheel remote-controlled rover powered by two ESP32 microcontrollers that communicate wirelessly. One microcontroller sits in the rover (the On-Board Computer), the other in a handheld controller (the Control & Telemetry Unit).`,
            sections: [
                {
                    heading: "What It Is",
                    content: "A dual-ESP32 robotics control system with <5ms wireless latency using ESP-NOW protocol. Real-time motor control with hardware interrupts and sensor fusion for autonomous expansion."
                },
                {
                    heading: "Key Features",
                    points: [
                        "Low-latency ESP-NOW wireless communication (1-5ms typical)",
                        "Hardware MCPWM motor control for all 4 wheels independently",
                        "Sensor fusion combining IMU, magnetometer, and GPS",
                        "Dual-core processing architecture for zero-latency response",
                        "State machine architecture with formal safety interlocks",
                        "Sub-100µs emergency stop via hardware interrupt"
                    ]
                }
            ],
            github: "https://github.com/salman-naveed/rover-xr4",
            images: [
                "assets/images/projects/rover-xr4.jpg",
                "assets/images/projects/rover-xr4-1.jpg",
                "assets/images/projects/rover-xr4-2.jpg"
            ]
        }
    },
    // Add more projects following the same structure above
];

/**
 * HOW TO ADD A NEW PROJECT
 * 
 * 1. Copy the project object above (starts with { id: "...")
 * 2. Fill in your project details:
 *    - id: URL-friendly identifier (lowercase, hyphens)
 *    - title: Project name
 *    - description: 1-2 sentence summary for grid view
 *    - category: electrical, diy, software, robotics, iot
 *    - image: Path to thumbnail (should be 800x600 or similar)
 *    - featured: true/false (show on homepage)
 *    - date: YYYY-MM-DD format
 *    - details: Extended information for detail page
 * 
 * 3. Add project image to: assets/images/projects/your-project.jpg
 * 
 * 4. That's it! The website auto-generates everything.
 * 
 * EXAMPLE:
 * {
 *     id: "my-awesome-project",
 *     title: "My Awesome Project",
 *     description: "A brief description that shows on the grid",
 *     category: "software",
 *     image: "assets/images/projects/my-awesome-project.jpg",
 *     featured: false,
 *     date: "2026-08-19",
 *     details: {
 *         tagline: "Short tagline",
 *         tags: ["Tag1", "Tag2"],
 *         description: "Longer description...",
 *         sections: [
 *             {
 *                 heading: "Section Title",
 *                 content: "Content here"
 *             }
 *         ],
 *         github: "https://github.com/...",
 *         images: ["path/to/image1.jpg", "path/to/image2.jpg"]
 *     }
 * }
 */

// Helper functions
function getProjectById(id) {
    return PROJECTS.find(p => p.id === id);
}

function getProjectsByCategory(category) {
    if (category === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.category === category);
}

function getFeaturedProjects(limit = 6) {
    return PROJECTS.filter(p => p.featured).slice(0, limit);
}

function sortByDate(projects, order = 'desc') {
    return [...projects].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === 'desc' ? dateB - dateA : dateA - dateB;
    });
}
