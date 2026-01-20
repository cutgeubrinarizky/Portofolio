// Screenshot imports
import explora1 from "../components/screenshots/explora-1.png";
import explora2 from "../components/screenshots/explora-2.png";
import explora3 from "../components/screenshots/explora-3.png";
import explora4 from "../components/screenshots/explora-4.png";
import explora5 from "../components/screenshots/explora-5.png";
import livie1 from "../components/screenshots/livie-1.png";
import livie2 from "../components/screenshots/livie-2.png";
import livie3 from "../components/screenshots/livie-3.png";
import livie4 from "../components/screenshots/livie-4.png";
import livie5 from "../components/screenshots/livie-5.png";
import livie6 from "../components/screenshots/livie-6.png";
import livie7 from "../components/screenshots/livie-7.png";
import livie8 from "../components/screenshots/livie-8.png";
import livie9 from "../components/screenshots/livie-9.png";
import livie10 from "../components/screenshots/livie-10.png";
import livie11 from "../components/screenshots/livie-11.png";
import livie12 from "../components/screenshots/livie-12.png";
import livie13 from "../components/screenshots/livie-13.png";
import livie14 from "../components/screenshots/livie-14.png";
import simtkk1 from "../components/screenshots/simtkk-1.png";
import simtkk2 from "../components/screenshots/simtkk-2.png";
import simtkk3 from "../components/screenshots/simtkk-3.png";
import simtkk4 from "../components/screenshots/simtkk-4.png";
import simtkk5 from "../components/screenshots/simtkk-5.png";
import recruitment1 from "../components/screenshots/recruitment-1.png";
import recruitment2 from "../components/screenshots/recruitment-2.png";
import recruitment3 from "../components/screenshots/recruitment-3.png";
import recruitment4 from "../components/screenshots/recruitment-4.png";
import recruitment5 from "../components/screenshots/recruitment-5.png";
import recruitment6 from "../components/screenshots/recruitment-6.png";
import recruitment7 from "../components/screenshots/recruitment-7.png";
import recruitment8 from "../components/screenshots/recruitment-8.png";
import recruitment9 from "../components/screenshots/recruitment-9.png";
import jobmaster1 from "../components/screenshots/jobmaster-1.png";
import jobmaster2 from "../components/screenshots/jobmaster-2.png";
import jobmaster3 from "../components/screenshots/jobmaster-3.png";
import jobmaster4 from "../components/screenshots/jobmaster-4.png";
import jobmaster5 from "../components/screenshots/jobmaster-5.png";
import jobmaster6 from "../components/screenshots/jobmaster-6.png";
import jobmaster7 from "../components/screenshots/jobmaster-7.png";
import jobmaster8 from "../components/screenshots/jobmaster-8.png";

// Mock data for portfolio
export const personalInfo = {
  name: "Cut Geubrina Rizky",
  title: "Frontend & Mobile Developer",
  tagline:
    "Building seamless digital experiences with React, Flutter & modern web technologies",
  location: "Bandung, Indonesia",
  email: "cutgeubrinarizky7@gmail.com",
  phone: "+62 81269227680",
  linkedin: "linkedin.com/in/cutgeubrina",
  github: "github.com/cutgeubrina",
  bio: "Software Developer at PT Pos Indonesia specializing in front-end & mobile development. I deliver maintainable features, responsive UIs, and measurable performance improvements with strong collaboration and a bias to ship. With experience in React, Flutter, and Laravel, I transform complex requirements into intuitive user experiences. Currently expanding my horizons into backend development as a beginner with Golang and Express, aiming to build more robust and integrated digital solutions.",
  resumeUrl: "/CV DEVELOPER - Cut Geubrina Rizky.pdf",
  profileImage: "/foto.jpeg",
};

export const skills = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Dart", level: 85 },
    { name: "Python", level: 75 },
    { name: "PHP", level: 80 },
    { name: "Golang (Beginner/Learning)", level: 55 },
  ],
  frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Flutter", icon: "📱" },
    { name: "Next.js", icon: "▲" },
    { name: "Laravel", icon: "🔺" },
    { name: "React Native", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Material UI", icon: "💎" },
    { name: "Ant Design", icon: "🐜" },
    { name: "CodeIgniter", icon: "🔥" },
    { name: "Express.js (Beginner/Learning)", icon: "🚂" },
  ],
  tools: [
    { name: "Git", icon: "🔀" },
    { name: "Docker", icon: "🐳" },
    { name: "Figma", icon: "🎨" },
    { name: "Android Studio", icon: "🤖" },
    { name: "XCode", icon: "🍎" },
    { name: "VS Code", icon: "💻" },
  ],
};

export const projects = [
  // Internal Projects
  {
    id: 1,
    title: "Livie - Super App for Employees",
    category: "mobile",
    type: "internal",
    platform: "iOS & Android",
    description:
      "Comprehensive internal super app serving thousands of PT Pos Indonesia employees nationwide. Features advanced attendance tracking with GPS verification, integrated HR services including leave management and payroll access, real-time notifications, and location-based check-in/out functionality. Built with Flutter for cross-platform consistency and continuously maintained with regular feature updates and performance optimizations to enhance employee productivity and streamline internal processes.",
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps API",
      "REST API",
      "Firebase",
    ],
    features: [
      "Check-in/out attendance system",
      "HR service modules",
      "Location-based tracking",
      "Continuous maintenance & updates",
      "Real-time notifications",
    ],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    status: "Live - Continuous Maintenance",
    year: "2024",
    color: "#FF6B9D",
    client: "PT Pos Indonesia",
    screenshots: [
      {
        url: livie1,
        title: "Leave Request Module",
        description:
          "Streamlined leave application interface with annual leave quota tracking and approval workflow",
        blurAreas: true,
      },
      {
        url: livie2,
        title: "Leave Confirmation",
        description:
          "Real-time submission confirmation with automated notification system",
        blurAreas: true,
      },
      {
        url: livie3,
        title: "Assignment Management",
        description:
          "Comprehensive assignment tracking with location-based verification and detailed history",
        blurAreas: true,
      },
      {
        url: livie4,
        title: "Attendance Dashboard",
        description:
          "Real-time attendance monitoring with GPS-based check-in/out and shift schedule integration",
        blurAreas: true,
      },
      {
        url: livie5,
        title: "Attendance Success",
        description:
          "Instant attendance confirmation with timestamp and location verification",
        blurAreas: true,
      },
      {
        url: livie6,
        title: "Help & Support Center",
        description:
          "Comprehensive help center with FAQ, service issues reporting, and application troubleshooting",
        blurAreas: true,
      },
      {
        url: livie7,
        title: "Employee Profile",
        description:
          "Personalized dashboard with employee information, news feed, and quick access to HR services",
        blurAreas: true,
      },
      {
        url: livie8,
        title: "Assignment Submission",
        description:
          "Detailed assignment form with employee selection, type categorization, and date range picker",
        blurAreas: true,
      },
      {
        url: livie9,
        title: "Secure Login",
        description:
          "Multi-brand authentication interface with employee ID and password verification",
        blurAreas: true,
      },
      {
        url: livie10,
        title: "Feedback & Suggestions",
        description:
          "Employee feedback system with categorized input for continuous application improvement and issue reporting",
        blurAreas: true,
      },
      {
        url: livie11,
        title: "Attendance Report",
        description:
          "Detailed attendance history with clock-in/out times, selfie verification, and shift schedule tracking",
        blurAreas: true,
      },
      {
        url: livie12,
        title: "Presence Monitoring",
        description:
          "Real-time attendance monitoring dashboard with employee name tracking and date-based filtering",
        blurAreas: true,
      },
      {
        url: livie13,
        title: "Employee Profile Details",
        description:
          "Comprehensive employee profile with personal data, supervisor information, and office location details",
        blurAreas: true,
      },
      {
        url: livie14,
        title: "Profile Settings & Security",
        description:
          "Account management interface with biometric activation, document downloads, and secure logout options",
        blurAreas: true,
      },
    ],
    screenshotNote:
      "🔒 Enterprise Internal Project: Screenshots are limited and blurred to protect sensitive employee and company data. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
  },
  {
    id: 3,
    title: "JobMaster - Career Evaluation System",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Advanced career evaluation and job management platform designed for PT Pos Indonesia's HR operations. Features a sophisticated role-based system supporting Admin, User, Super Admin, and Admin Champion roles with distinct permissions and workflows. Includes interactive dashboards for performance tracking, comprehensive job profile management, automated evaluation workflows, organizational structure visualization, and detailed analytics. Built with React and Vite for optimal performance, utilizing Material UI for consistent user experience across all user roles.",
    technologies: ["React", "Vite", "Material UI", "REST API", "JavaScript"],
    features: [
      "Multi-role system (Admin, User, Super Admin, Admin Champion)",
      "Interactive dashboard",
      "Job profile management",
      "Evaluation workflows",
      "Org structure visualization",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    status: "Live - Continuous Updates",
    year: "2025",
    color: "#D89BB5",
    client: "PT Pos Indonesia",
    screenshots: [
      {
        url: jobmaster1,
        title: "Login Interface",
        description:
          "Secure multi-role authentication portal with role-based access control",
        blurAreas: true,
      },
      {
        url: jobmaster2,
        title: "Job Description Submission",
        description:
          "Interactive form for proposing new or updated job descriptions with validation",
        blurAreas: true,
      },
      {
        url: jobmaster3,
        title: "Job Profile Library",
        description:
          "Comprehensive database of organizational roles with status tracking",
        blurAreas: true,
      },
      {
        url: jobmaster4,
        title: "Job Description Management",
        description:
          "Administrative interface for managing and previewing role details",
        blurAreas: true,
      },
      {
        url: jobmaster5,
        title: "Career Evaluation Dashboard",
        description:
          "Centralized monitoring for employee evaluation progress and status",
        blurAreas: true,
      },
      {
        url: jobmaster6,
        title: "Approval Workflow",
        description:
          "Hierarchical approval system for job description proposals and changes",
        blurAreas: true,
      },
      {
        url: jobmaster7,
        title: "Employee Job Details",
        description:
          "Comprehensive view of individual employee roles, levels, and organizational placement",
        blurAreas: true,
      },
      {
        url: jobmaster8,
        title: "Work Relationship & Duties",
        description:
          "Detailed breakdown of job activities, frequencies, and internal-external relationships",
        blurAreas: true,
      },
    ],
    screenshotNote:
      "🔒 Enterprise Internal Project: Screenshots are limited and blurred to protect sensitive HR data and organizational structures. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
  },
  {
    id: 5,
    title: "SIMTKK - Workforce Management",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Robust contract workforce management system developed with native PHP to handle PT Pos Indonesia's extensive hiring needs. Manages complete lifecycle of contract positions from vacancy creation to candidate selection. Features comprehensive vacancy management with detailed job descriptions, multi-stage application tracking system, administrative review workflows, regional data integration for nationwide operations, and contract management capabilities. Optimized for high-volume operations with efficient database queries and streamlined administrative processes.",
    technologies: [
      "PHP Native",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "REST API",
    ],
    features: [
      "Vacancy management system",
      "Application tracking workflow",
      "Admin review dashboard",
      "Regional data integration",
      "Contract management",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    status: "Live - Continuous Maintenance",
    year: "2024",
    color: "#FF6B9D",
    client: "PT Pos Indonesia",
    screenshots: [
      {
        url: simtkk1,
        title: "Contract Data Entry",
        description:
          "Comprehensive contract information form with employee details, position, and contract duration tracking",
        blurAreas: true,
      },
      {
        url: simtkk2,
        title: "Document Preview & Print",
        description:
          "Professional contract document preview with PDF export and print functionality for official records",
        blurAreas: true,
      },
      {
        url: simtkk3,
        title: "Contract Benefits Management",
        description:
          "Detailed benefits allocation interface with period selection and benefit package configuration",
        blurAreas: true,
      },
      {
        url: simtkk4,
        title: "Laporan Benefit Overview",
        description:
          "Comprehensive benefits reporting dashboard with regional breakdown and employee allocation tracking",
        blurAreas: true,
      },
      {
        url: simtkk5,
        title: "Salary Slip Preview",
        description:
          "Detailed salary slip generation with earnings breakdown, deductions, and official company branding",
        blurAreas: true,
      },
    ],
    screenshotNote:
      "🔒 Enterprise Internal Project: Screenshots are limited and blurred to protect confidential recruitment data and employee information. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
  },
  {
    id: 6,
    title: "Recruitment Portal - Pos Indonesia",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Sophisticated dual-interface recruitment platform serving PT Pos Indonesia's nationwide hiring operations. Public-facing interface provides seamless job search and application experience with intuitive multi-step forms, document upload capabilities, and real-time application tracking. Administrative interface offers comprehensive candidate management, application review workflows, interview scheduling, and detailed reporting. Built with React and Material UI to ensure consistent user experience across both interfaces, supporting high-volume recruitment campaigns and reducing application drop-off rates through optimized user journeys.",
    technologies: [
      "React",
      "Vite",
      "Material UI",
      "Form Validation",
      "REST API",
    ],
    features: [
      "Public job application interface",
      "Admin management dashboard",
      "Multi-step application form",
      "Email notifications",
      "Document upload & tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    status: "Live - Continuous Updates",
    year: "2024",
    color: "#00D9FF",
    client: "PT Pos Indonesia",
    screenshots: [
      {
        url: recruitment1,
        title: "Public Landing Page",
        description:
          "Professional recruitment homepage with company branding and clear call-to-action for job seekers",
        blurAreas: false,
      },
      {
        url: recruitment2,
        title: "Application Registration",
        description:
          "User-friendly registration form with email verification and account creation for applicants",
        blurAreas: true,
      },
      {
        url: recruitment3,
        title: "Job Vacancy Selection",
        description:
          "Interactive job listing with position details, requirements, and application status tracking",
        blurAreas: true,
      },
      {
        url: recruitment4,
        title: "Applicant Profile Dashboard",
        description:
          "Personalized applicant dashboard with profile management and application progress monitoring",
        blurAreas: true,
      },
      {
        url: recruitment5,
        title: "Application Form Submission",
        description:
          "Comprehensive multi-step application form with document upload and data validation",
        blurAreas: true,
      },
      {
        url: recruitment6,
        title: "Admin Login - Internal System",
        description:
          "Secure admin authentication portal with multi-brand integration for internal HR team access",
        blurAreas: true,
      },
      {
        url: recruitment7,
        title: "Event Management Dashboard",
        description:
          "Comprehensive recruitment event tracking with status monitoring and batch operations",
        blurAreas: true,
      },
      {
        url: recruitment8,
        title: "Vacancy Management System",
        description:
          "Advanced vacancy administration with position tracking, quota management, and regional distribution",
        blurAreas: true,
      },
      {
        url: recruitment9,
        title: "Applicant Data Management",
        description:
          "Detailed applicant database with filtering, sorting, and bulk processing capabilities for HR teams",
        blurAreas: true,
      },
    ],
    screenshotNote:
      "🔒 Enterprise Internal Project: Screenshots are limited and blurred to protect sensitive data and confidential recruitment information. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
  },
  {
    id: 7,
    title: "SiPendi - Early Retirement System",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Sophisticated early retirement management system designed to streamline PT Pos Indonesia's employee retirement processes. Features comprehensive multi-role architecture supporting Admin, User, Super Admin, Counselor, and Admin Regional with tailored interfaces and permissions. Includes intelligent multi-step form wizards for retirement applications, automated document management with PDF generation, workflow automation for approval processes, and regional administration capabilities. Built with React and Material UI to provide intuitive user experience while handling complex retirement calculations, document verification, and multi-level approval workflows.",
    technologies: [
      "React",
      "Material UI",
      "Form Wizard",
      "PDF Generator",
      "JavaScript",
    ],
    features: [
      "Multi-role system (Admin, User, Super Admin, Counselor, Admin Regional)",
      "Multi-step form wizard",
      "Document management",
      "Workflow automation",
      "PDF report generation",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    status: "Live - Continuous Maintenance",
    year: "2024",
    color: "#D89BB5",
    client: "PT Pos Indonesia",
    screenshotNote:
      "🔒 Enterprise Internal Project: Screenshots are limited and blurred to protect sensitive retirement data and employee records. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
  },
  {
    id: 8,
    title: "Explora - Knowledge Management",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Comprehensive knowledge management system serving as PT Pos Indonesia's central hub for internal knowledge sharing and collaboration. Features interactive dashboards with analytics and insights, sophisticated role-based access control for User, Admin, and Super Admin roles. Includes advanced knowledge base management, event submission system with gamified leaderboards, comprehensive search functionality, and collaborative tools for knowledge creation and sharing. Built with React, Vite, and Material UI to provide fast, responsive experience while managing extensive knowledge repositories and facilitating organization-wide learning and development initiatives.",
    technologies: ["React", "Vite", "Material UI", "REST API", "JavaScript"],
    features: [
      "Multi-role system (User, Admin, Super Admin)",
      "Interactive dashboard",
      "Event submission & leaderboard",
      "Knowledge base management",
      "Advanced search functionality",
    ],
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80",
    screenshots: [
      {
        url: explora1,
        title: "Login Page",
        description:
          "Secure authentication with employee and guest access options",
      },
      {
        url: explora2,
        title: "Dashboard & Leaderboard",
        description:
          "Interactive dashboard with event highlights and gamified leaderboard system",
        blurAreas: true,
      },
      {
        url: explora3,
        title: "Content Feed",
        description: "Knowledge sharing feed with categorized content",
        blurAreas: true,
      },
      {
        url: explora4,
        title: "Digital Library",
        description:
          "Comprehensive digital library with modules and learning materials",
        blurAreas: true,
      },
      {
        url: explora5,
        title: "Events Gallery",
        description: "Event management system with gallery view and filtering",
        blurAreas: true,
      },
    ],
    screenshotNote:
      "🔒 Enterprise Internal Project: Selected screenshots are limited and blurred to protect organizational knowledge and employee data. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
    status: "Live - Continuous Updates",
    year: "2024",
    color: "#E8B4C8",
    client: "PT Pos Indonesia",
  },
  {
    id: 11,
    title: "Backend API Services (Golang)",
    category: "backend",
    type: "internal",
    platform: "Server",
    description:
      "Backend API development services using Golang and Express. Currently in the learning and exploration phase for backend infrastructure. Focus is on understanding RESTful API design, server-side logic, and database management to support web and mobile applications. Specializing in building clean and maintainable APIs while gaining proficiency in modern backend frameworks and architecture patterns. Aiming to bridge the gap between frontend and backend to deliver comprehensive technological solutions.",
    technologies: [
      "Golang",
      "Gin Framework",
      "GORM",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "JWT Authentication",
      "Swagger/OpenAPI",
      "Express.js",
      "REST API (Learning)",
      "Database Basics",
    ],
    features: [
      "RESTful API design & development",
      "Authentication & authorization systems",
      "Database design & optimization",
      "Third-party API integrations",
      "Real-time data processing",
      "Microservices architecture",
      "API documentation (Swagger)",
      "Docker containerization",
      "CI/CD pipeline setup",
      "Performance optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    status: "Available for Projects",
    year: "2024 - Present",
    color: "#00D9FF",
    client: "Multiple Clients",
    screenshotNote:
      "🔒 Enterprise Internal Project: Architecture and implementation details are kept confidential. Source code is hosted on secure repositories and is not public to maintain infrastructure security.",
  },

  // Freelance Projects
  {
    id: 9,
    title: "Music Rent - Instrument Rental Platform",
    category: "mobile",
    type: "freelance",
    platform: "iOS & Android",
    description:
      "Full-featured cross-platform mobile application revolutionizing musical instrument rental services. Provides comprehensive instrument catalog with detailed specifications and high-quality images, real-time availability checking, seamless booking system with calendar integration, secure payment processing through Stripe, and automated inventory management. Built with React Native and Firebase for optimal performance across iOS and Android platforms. Features user profiles, rental history tracking, push notifications for booking confirmations and reminders, and administrative tools for inventory management and customer support.",
    technologies: [
      "React Native",
      "Firebase",
      "Stripe API",
      "JavaScript",
      "Third-party Services",
    ],
    features: [
      "Cross-platform mobile app",
      "Instrument catalog & search",
      "Real-time booking system",
      "Payment gateway integration",
      "Inventory management",
    ],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    status: "Live",
    year: "2024",
    color: "#8A2BE2",
    client: "Private Client",
    githubUrl: "https://github.com/kunandika16/musicrent.git",
  },
  {
    id: 2,
    title: "NFC Logger - Smart Tracking App",
    category: "mobile",
    type: "freelance",
    platform: "Android",
    description:
      "Sophisticated NFC-based tracking and logging application designed for logistics and asset management operations. Features advanced NFC tag reading and writing capabilities, precise GPS location tracking with coordinate logging, automatic timestamp recording for all interactions, and comprehensive data export functionality to CSV format. Built with Flutter for robust Android performance and integrated with Google Apps Script for seamless data processing and cloud synchronization. Includes offline data storage capabilities, batch processing for multiple scans, detailed logging history, and administrative dashboard for data analysis and reporting.",
    technologies: [
      "Flutter",
      "Google Apps Script",
      "NFC API",
      "Location Services",
      "CSV Export",
    ],
    features: [
      "NFC tag reading & writing",
      "GPS location tracking",
      "Automatic timestamp recording",
      "CSV data export",
      "Offline data storage",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    status: "Live",
    year: "2024",
    color: "#00D9FF",
    client: "Logistics Company",
    githubUrl: "https://github.com/kunandika16/nfc-field-logger.git",
  },

  // Startup Project
  {
    id: 4,
    title: "TemuHobi - Sports Community Platform",
    category: "web",
    type: "startup",
    platform: "Web",
    description:
      "Innovative sports community platform designed to connect sports enthusiasts and facilitate sporting activities. Currently in the development and planning phase. The application has not been launched yet and is not yet available for public access as the startup operations are still being prepared.",
    technologies: [
      "React",
      "Vite",
      "Ant Design",
      "Google Maps API",
      "WebSocket",
    ],
    features: [
      "Multi-role system (User, Admin, Super Admin)",
      "Partner discovery & matching",
      "Field booking system",
      "Community chat features",
      "Event organization & management",
    ],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    status: "In Progress / Not Launched",
    year: "2025",
    color: "#E8B4C8",
    client: "Startup Venture",
  },

  // UI/UX Project
  {
    id: 10,
    title: "COK UBAT - Hospital Pharmacy Queue System",
    category: "design",
    type: "ui ux",
    platform: "UI/UX Design",
    description:
      "UI/UX design for queuing system applications in the process of taking drugs at hospital pharmacies. There are three user groups for this project, namely Health Workers, Pharmacists and Patients. Where from the three groups of users, observations and interviews have been carried out and produce analysis results based on copies of observations and interviews that have been carried out. Developed comprehensive design solutions to streamline pharmacy operations and improve patient experience through intuitive interface design.",
    technologies: [
      "Figma",
      "User Research",
      "Prototyping",
      "User Testing",
      "Design System",
    ],
    features: [
      "Multi-user role system (Health Workers, Pharmacists, Patients)",
      "Queue management interface",
      "Real-time status tracking",
      "User research & analysis",
      "Comprehensive design system",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    status: "Completed",
    year: "2022",
    color: "#9333EA",
    client: "Academic Project",
  },

  // Data Processing Project
  {
    id: 12,
    title: "BPS Data String Similarity Analysis",
    category: "data",
    type: "data",
    platform: "Data Processing",
    description:
      "Calculating equality value between strings in BPS Data of Aceh Province using Levenshtein Distance and Fuzzy String Matching methods. Processing and modeling of the 2020 Population Census Data (SP2020) which was implemented in July using Python. The data provided is the 2020 Population Census Data (SP2020). In this data there are several errors in data labeling. The label consists of 'red', 'green', and 'orange', 'red' is a label for data that does not match, 'green' label for data that matches, and 'orange' label for data that may match. The dominant error occurs in data labeled 'orange'. Based on the results of the data visualization, it is explained that the dominant initial data error lies in the data labeled 'orange'. So that after calculating the similarity value between strings and giving a new label to the data, the error can be corrected. Some data labeled 'orange' has been changed to 'green' and also 'red'. The same thing is done for the initial data labeled 'green' and 'red' if it has label errors.",
    technologies: [
      "Python",
      "Pandas",
      "Levenshtein Distance",
      "Fuzzy String Matching",
      "Data Visualization",
    ],
    features: [
      "String similarity calculation algorithms",
      "Automated data error detection",
      "Label correction and reclassification",
      "Data visualization and analysis",
      "Large-scale dataset processing",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    status: "Completed",
    year: "2022",
    color: "#059669",
    client: "BPS Aceh Province",
  },
];

export const experience = [
  {
    id: 1,
    company: "PT Pos Indonesia",
    position: "Software Developer (Frontend/Mobile)",
    duration: "Aug 2023 - Present",
    location: "Bandung, Indonesia",
    description:
      "Building and shipping web & mobile features with React, Flutter, and Laravel. Delivered 30+ reusable components and improved load performance through code-splitting.",
    highlights: [
      "Shipped 8+ production applications",
      "Built 30+ reusable UI components",
      "Improved performance with code-splitting",
      "Collaborated with design & product teams",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Big Data Analytics Virtual Internship Experience",
    organization: "Kimia Farma - Rakamin Academy",
    type: "Project-Based Internship",
    duration: "Oct 2022",
    description:
      "Completed comprehensive big data analytics project focusing on pharmaceutical industry data analysis and insights generation.",
  },
  {
    id: 2,
    title: "Machine Learning Foundation",
    organization: "Amazon Web Services (AWS) - KOMINFO Fresh Graduate Academy",
    type: "Professional Certification",
    duration: "Oct 2022",
    description:
      "Successfully completed comprehensive machine learning program covering data collection, security, evaluation, feature engineering, model training, hosting, accuracy evaluation, hyperparameter tuning, forecasting, computer vision, and natural language processing.",
  },
  {
    id: 3,
    title: "Instructor Assistant - Big Data Using Python",
    organization: "USK University × FGA × Cisco - Digital Talent Scholarship",
    type: "Teaching Assistant",
    duration: "Jul - Sep 2022",
    description:
      "Assisted 25 students in learning Python fundamentals and big data concepts for 5 weeks, achieving 40% knowledge improvement weekly.",
  },
  {
    id: 4,
    title: "Product Management Career Starter Kit",
    organization: "Binar Academy - KOMINFO Fresh Graduate Academy",
    type: "Professional Training",
    duration: "May - Jun 2022",
    description:
      "Completed comprehensive product management training covering methodology, fundamentals, company and customer understanding, customer journey mapping, and product strategy.",
  },
  {
    id: 5,
    title: "Assistant Microcredential Artificial Intelligence",
    organization: "Kampus Merdeka",
    type: "Teaching Assistant",
    duration: "Nov - Dec 2021",
    description:
      "Assisted 30 students in learning Python basics, artificial intelligence concepts, and data visualization for 6 weeks.",
  },
  {
    id: 6,
    title: "Intro to Data Analytics Mini Course",
    organization: "RevoU",
    type: "Professional Course",
    duration: "Nov 2021",
    description:
      "Completed intensive 1-week data analytics fundamentals course covering essential concepts and practical applications.",
  },
  {
    id: 7,
    title: "Big Data using Python",
    organization: "Cisco - KOMINFO Fresh Graduate Academy",
    type: "Professional Certification",
    duration: "Jul - Sep 2021",
    description:
      "Completed comprehensive 32-session program covering Python fundamentals, data types, OOP, modules, packages, and big data implementation with practical applications.",
  },
];

export const education = {
  institution: "Syiah Kuala University",
  degree: "Bachelor of Computer Science",
  major: "Computer Science",
  duration: "Aug 2018 - Sep 2022",
  gpa: "3.77/4.0",
  location: "Aceh, Indonesia",
};
