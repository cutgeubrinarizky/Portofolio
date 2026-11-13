// Screenshot imports
import logoPhysio from "../components/logos/physio.svg";
import logoPosInd from "../components/logos/posind.png";
import explora1 from "../components/screenshots/explora-1.webp";
import explora2 from "../components/screenshots/explora-2.webp";
import explora3 from "../components/screenshots/explora-3.webp";
import explora4 from "../components/screenshots/explora-4.webp";
import explora5 from "../components/screenshots/explora-5.webp";
import livie1 from "../components/screenshots/livie-1.webp";
import livie2 from "../components/screenshots/livie-2.webp";
import livie3 from "../components/screenshots/livie-3.webp";
import livie4 from "../components/screenshots/livie-4.webp";
import livie5 from "../components/screenshots/livie-5.webp";
import livie6 from "../components/screenshots/livie-6.webp";
import livie7 from "../components/screenshots/livie-7.webp";
import livie8 from "../components/screenshots/livie-8.webp";
import livie9 from "../components/screenshots/livie-9.webp";
import livie10 from "../components/screenshots/livie-10.webp";
import livie11 from "../components/screenshots/livie-11.webp";
import livie12 from "../components/screenshots/livie-12.webp";
import livie13 from "../components/screenshots/livie-13.webp";
import livie14 from "../components/screenshots/livie-14.webp";
import simtkk1 from "../components/screenshots/simtkk-1.webp";
import simtkk2 from "../components/screenshots/simtkk-2.webp";
import simtkk3 from "../components/screenshots/simtkk-3.webp";
import simtkk4 from "../components/screenshots/simtkk-4.webp";
import simtkk5 from "../components/screenshots/simtkk-5.webp";
import recruitment1 from "../components/screenshots/recruitment-1.webp";
import recruitment2 from "../components/screenshots/recruitment-2.webp";
import recruitment3 from "../components/screenshots/recruitment-3.webp";
import recruitment4 from "../components/screenshots/recruitment-4.webp";
import recruitment5 from "../components/screenshots/recruitment-5.webp";
import recruitment6 from "../components/screenshots/recruitment-6.webp";
import recruitment7 from "../components/screenshots/recruitment-7.webp";
import recruitment8 from "../components/screenshots/recruitment-8.webp";
import recruitment9 from "../components/screenshots/recruitment-9.webp";
import jobmaster1 from "../components/screenshots/jobmaster-1.webp";
import jobmaster2 from "../components/screenshots/jobmaster-2.webp";
import jobmaster3 from "../components/screenshots/jobmaster-3.webp";
import jobmaster4 from "../components/screenshots/jobmaster-4.webp";
import jobmaster5 from "../components/screenshots/jobmaster-5.webp";
import jobmaster6 from "../components/screenshots/jobmaster-6.webp";
import jobmaster7 from "../components/screenshots/jobmaster-7.webp";
import jobmaster8 from "../components/screenshots/jobmaster-8.webp";
import physioCustomer1 from "../components/screenshots/physio-customer-1.webp";
import physioCustomer2 from "../components/screenshots/physio-customer-2.webp";
import physioCustomer3 from "../components/screenshots/physio-customer-3.webp";
import physioCustomer4 from "../components/screenshots/physio-customer-4.webp";
import physioTherapist1 from "../components/screenshots/physio-therapist-1.webp";
import physioTherapist2 from "../components/screenshots/physio-therapist-2.webp";
import physioTherapist3 from "../components/screenshots/physio-therapist-3.webp";
import physioTherapist4 from "../components/screenshots/physio-therapist-4.webp";
import coverPhysioCustomer from "../components/screenshots/cover-physiomobile-customer.webp";
import coverPhysioTherapist from "../components/screenshots/cover-physiomobile-therapist.webp";
import coverRecht from "../components/screenshots/cover-recht.webp";
import coverEmsa from "../components/screenshots/cover-emsa.webp";
import coverAnsel from "../components/screenshots/cover-ansel.webp";
import coverLivie from "../components/screenshots/cover-livie.webp";
import coverJobmaster from "../components/screenshots/cover-jobmaster.webp";
import coverSimtkk from "../components/screenshots/cover-simtkk.webp";
import coverRecruitment from "../components/screenshots/cover-recruitment.webp";
import coverExplora from "../components/screenshots/cover-explora.webp";
import coverIpos5 from "../components/screenshots/cover-ipos5.webp";
import coverSipendi from "../components/screenshots/cover-sipendi.webp";
import coverBackendApi from "../components/screenshots/cover-backend-api.webp";
import coverSnlGlobal from "../components/screenshots/cover-snl-global.webp";
import coverMusicRent from "../components/screenshots/cover-music-rent.webp";
import coverNfcLogger from "../components/screenshots/cover-nfc-logger.webp";
import coverTemuhobi from "../components/screenshots/cover-temuhobi.webp";
import coverCokUbat from "../components/screenshots/cover-cok-ubat.webp";
import coverBpsSimilarity from "../components/screenshots/cover-bps-similarity.webp";

// Mock data for portfolio
export const personalInfo = {
  name: "Cut Geubrina Rizky",
  title: "Mobile Developer (Flutter) | Front-end Developer (React)",
  headline: "Flutter & React Developer",
  tagline:
    "Building production Flutter apps and React/Next.js products across health-tech, logistics and enterprise HR",
  location: "Bandung, Indonesia",
  email: "cutgeubrinarizky7@gmail.com",
  phone: "+62 812-6922-7680",
  linkedin: "linkedin.com/in/cutgeubrina",
  github: "github.com/cutgeubrinarizky",
  portfolio: "portofolio-gebi.vercel.app",
  bio: "Mobile and front-end developer with 3+ years of experience building Flutter (Android/iOS) and React/Next.js applications across health-tech, logistics and enterprise HR. Currently shipping Flutter apps on Google Play and the App Store for a Malaysian physiotherapy platform, after delivering 7 internal products at PT Pos Indonesia, including the first-mile module of its core courier system and an employee super app used company-wide. Experienced in REST API integration, reusable component libraries, multi-step forms, role-based workflows and app performance, and comfortable working with Go (Golang), Laravel and CodeIgniter on the backend side.",
  resumeUrl: "/CV DEVELOPER - Cut Geubrina Rizky.pdf",
  profileImage: "foto.jpeg",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "1K+", label: "App Downloads" },
  { value: "7", label: "Products at Pos Indonesia" },
  { value: "19", label: "Projects Shipped" },
];

// icon = Simple Icons slug (see brandIcons.js); omitted icons fall back to a generic glyph
export const skills = [
  {
    group: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Provider / Bloc / GetX" },
      { name: "React Native", icon: "react" },
      { name: "Firebase (FCM)", icon: "firebase" },
      { name: "Android Studio", icon: "androidstudio" },
      { name: "Xcode", icon: "xcode" },
      { name: "Play Store & App Store", icon: "googleplay" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Astro", icon: "astro" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Material UI", icon: "mui" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    group: "Backend & Data",
    items: [
      { name: "Go (Golang)", icon: "go" },
      { name: "Gin", icon: "gin" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "CodeIgniter", icon: "codeigniter" },
      { name: "Express.js", icon: "express" },
      { name: "SQL / MySQL", icon: "mysql" },
    ],
  },
  {
    group: "Tools & Delivery",
    items: [
      { name: "Git (GitLab/GitHub)", icon: "git" },
      { name: "CI/CD", icon: "githubactions" },
      { name: "Docker", icon: "docker" },
      { name: "Figma", icon: "figma" },
      { name: "Apidog" },
      { name: "DBeaver", icon: "dbeaver" },
      { name: "Lighthouse / Web Vitals", icon: "lighthouse" },
    ],
  },
];

export const projects = [
  // Physiomobile (Malaysia)
  {
    id: 13,
    title: "Physiomobile: Physio & Rehab",
    category: "mobile",
    type: "physiomobile",
    platform: "iOS & Android",
    description:
      "Production customer app (1K+ downloads) for a Malaysian physiotherapy, rehab and home-care platform, released on Google Play and the App Store. Covers session booking, treatment history and progress, loyalty points, in-app announcements and real-time notifications.",
    technologies: ["Flutter", "Dart", "REST API", "Firebase Cloud Messaging", "Local Storage"],
    features: [
      "Session booking",
      "Treatment history & progress",
      "Loyalty points",
      "In-app announcements",
      "Real-time notifications",
    ],
    contribution:
      "Develop and maintain the app in Flutter for Android and iOS. Ship regular releases with new features, stability fixes and performance improvements, and integrate REST APIs with the backend team for bookings, session tracking and notifications.",
    image: coverPhysioCustomer,
    status: "Live",
    year: "2026",
    color: "#00D9FF",
    client: "Physiomobile (Malaysia)",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pmmy.customer" },
      { label: "App Store", url: "https://apps.apple.com/my/app/physiomobile-physio-rehab/id6749616813" },
    ],
    screenshots: [
      {
        url: physioCustomer1,
        title: "Home & PMCredit",
        description: "Home screen with PMCredit wallet card, packages and upcoming appointments",
        blurAreas: true,
      },
      {
        url: physioCustomer2,
        title: "Appointments",
        description: "Upcoming and past appointments with time slips and visit summary",
        blurAreas: true,
      },
      {
        url: physioCustomer3,
        title: "Inbox",
        description: "Chat with customer service and in-app notifications",
        blurAreas: true,
      },
      {
        url: physioCustomer4,
        title: "Profile",
        description: "Profile with loyalty points, referral ID, dependents and medical records",
        blurAreas: true,
      },
    ],
    screenshotNote:
      "🔒 Production App: Screenshots are taken from the public store listing and blurred to protect patient and booking data. Source code is private and owned by Physiomobile.",
  },
  {
    id: 14,
    title: "Physiomobile for Therapist",
    category: "mobile",
    type: "physiomobile",
    platform: "iOS & Android",
    description:
      "Production therapist app for the Physiomobile platform, released on Google Play and the App Store. Handles booking management and confirmation, patient records, session notes, assessment submission, and a dashboard for sessions and earnings.",
    technologies: ["Flutter", "Dart", "REST API", "Firebase Cloud Messaging", "State Management"],
    features: [
      "Booking management & confirmation",
      "Patient records",
      "Session notes",
      "Assessment submission",
      "Sessions & earnings dashboard",
    ],
    contribution:
      "Develop and maintain the therapist app in Flutter. Delivered faster job loading and better performance during peak hours, integrated REST APIs for bookings, assessments and notifications, and take part in code reviews.",
    image: coverPhysioTherapist,
    status: "Live",
    year: "2026",
    color: "#FF6B9D",
    client: "Physiomobile (Malaysia)",
    links: [
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pmmy.therapist" },
      { label: "App Store", url: "https://apps.apple.com/my/app/physiomobile-for-therapist/id6749616869" },
    ],
    screenshots: [
      {
        url: physioTherapist1,
        title: "Therapist Dashboard",
        description: "Monthly earnings, acceptance rate and pending booking requests",
        blurAreas: true,
      },
      {
        url: physioTherapist2,
        title: "Inbox",
        description: "Chat with customer service and booking notifications",
        blurAreas: true,
      },
      {
        url: physioTherapist3,
        title: "Booking Detail",
        description: "Booking info, location, patient info, exercise instructions and vital signs",
        blurAreas: true,
      },
      {
        url: physioTherapist4,
        title: "Availability Management",
        description: "Calendar-based timeslot and availability management",
        blurAreas: true,
      },
    ],
    screenshotNote:
      "🔒 Production App: Screenshots are taken from the public store listing and blurred to protect patient and booking data. Source code is private and owned by Physiomobile.",
  },

  // PT Pos Indonesia
  {
    id: 15,
    title: "iPOS5 - Core Courier System",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Pos Indonesia's core courier platform covering first-mile, mid-mile and last-mile operations. Focused on the first-mile modules for shipment pickup and acceptance from senders.",
    technologies: ["Next.js", "React", "TypeScript", "REST API"],
    features: [
      "First-mile shipment pickup",
      "Shipment acceptance from senders",
      "Reusable form components",
      "API Integration (REST)",
    ],
    contribution:
      "Build the first-mile modules of iPOS5 in Next.js, covering shipment pickup and acceptance flows, and integrate them with the courier backend APIs.",
    image: coverIpos5,
    status: "Live",
    year: "2025",
    color: "#FF6B9D",
    client: "PT Pos Indonesia",
    screenshotNote:
      "🔒 Enterprise Internal Project: Screenshots are not shown to protect operational and customer data. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
  },
  {
    id: 1,
    title: "Livie - Employee Super App",
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
      "Secure Login system",
      "API Integration (REST)",
      "Real-time Push Notifications",
      "Integrated WebView modules",
      "Location-based check-in/out",
    ],
    contribution:
      "Developed both Android & iOS versions using Flutter. Implemented the core authentication (Login) and complex Integrasi API (REST) to sync real-time attendance data. Integrated Firebase for notifications and built WebView components for internal HR dashboards.",
    image: coverLivie,
    status: "Live",
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
    title: "JobMaster - Career & Job Evaluation",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Advanced career evaluation and job management platform designed for PT Pos Indonesia's HR operations. Features a sophisticated role-based system supporting Admin, User, Super Admin, and Admin Champion roles with distinct permissions and workflows. Includes interactive dashboards for performance tracking, comprehensive job profile management, automated evaluation workflows, organizational structure visualization, and detailed analytics. Built with React and Vite for optimal performance, utilizing Material UI for consistent user experience across all user roles.",
    technologies: ["React", "Vite", "Material UI", "REST API", "JavaScript"],
    features: [
      "API Integration & State Management",
      "Multi-role system architecture",
      "Interactive analytics dashboard",
      "Automated evaluation workflows",
      "Job profile repository",
    ],
    contribution:
      "Developed the complex frontend architecture using React and Vite. Focused on robust Integrasi API to handle large-scale HR data, building interactive Material UI components, and managing global state for a seamless evaluation experience.",
    image: coverJobmaster,
    status: "Live",
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
    title: "SIMTKK - Contract Workforce Management",
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
      "Fullstack API Integration",
      "Relational database management",
      "Application tracking system",
      "Contract document generator",
      "Regional recruitment logic",
    ],
    contribution:
      "Acted as a Fullstack Developer. Designed the MySQL database, developed the backend logic using Native PHP, and implemented deep Integrasi API to connect the vacancy management system with regional office data feeds.",
    image: coverSimtkk,
    status: "Live",
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
      "Public hiring portal for PT Pos Indonesia's nationwide recruitment, covering the landing page, job listings, application form and notifications. Delivered in ~2 weeks to support nationwide hiring campaigns.",
    technologies: [
      "CodeIgniter",
      "PHP",
      "JavaScript",
      "Bootstrap",
      "REST API",
    ],
    features: [
      "API Integration (RESTful)",
      "Frontend-first architecture",
      "Responsive multi-step application",
      "Candidate management dashboard",
      "Real-time status tracking",
    ],
    contribution:
      "Delivered the public hiring portal in ~2 weeks using CodeIgniter: landing page, job listings, a multi-step application form with validation, and notifications, integrated with the recruitment backend APIs.",
    image: coverRecruitment,
    status: "Live",
    year: "2024",
    color: "#00D9FF",
    client: "PT Pos Indonesia",
    links: [{ label: "recruitment.posindonesia.co.id", url: "https://recruitment.posindonesia.co.id" }],
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
    title: "SiPendi - Early Retirement Management",
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
      "Secure API Integration",
      "Complex form-wizard logic",
      "Role-based access control",
      "Automated PDF generation",
      "Regional approval workflows",
    ],
    contribution:
      "Developed the entire frontend system using React. Focused on secure Integrasi API for sensitive retirement data, implemented intricate state management for the form wizard, and integrated client-side PDF generation to automate workflows.",
    image: coverSipendi,
    status: "Live",
    year: "2024",
    color: "#D89BB5",
    client: "PT Pos Indonesia",
    screenshotNote:
      "🔒 Enterprise Internal Project: Screenshots are limited and blurred to protect sensitive retirement data and employee records. Source code is hosted on internal company GitLab and is not public for security and confidentiality reasons.",
  },
  {
    id: 8,
    title: "Explora - Knowledge Management System",
    category: "web",
    type: "internal",
    platform: "Web",
    description:
      "Comprehensive knowledge management system serving as PT Pos Indonesia's central hub for internal knowledge sharing and collaboration. Features interactive dashboards with analytics and insights, sophisticated role-based access control for User, Admin, and Super Admin roles. Includes advanced knowledge base management, event submission system with gamified leaderboards, comprehensive search functionality, and collaborative tools for knowledge creation and sharing. Built with React, Vite, and Material UI to provide fast, responsive experience while managing extensive knowledge repositories and facilitating organization-wide learning and development initiatives.",
    technologies: ["React", "Vite", "Material UI", "REST API", "JavaScript"],
    features: [
      "Social API Integration",
      "Gamified knowledge sharing",
      "Content moderation system",
      "Interactive event gallery",
      "Digital library management",
    ],
    contribution:
      "Developed frontend modules using React and Vite. Focused on real-time Integrasi API for the feed and leaderboard systems, optimized image rendering, and ensured a responsive UI for a seamless knowledge-sharing experience.",
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
    image: coverExplora,
    status: "Live",
    year: "2024",
    color: "#E8B4C8",
    client: "PT Pos Indonesia",
    links: [{ label: "explora.posindonesia.co.id", url: "https://explora.posindonesia.co.id" }],
  },


  // Freelance / Side Projects
  {
    id: 11,
    title: "Backend API Services (Golang)",
    category: "backend",
    type: "freelance",
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
      "Gin-based RESTful API",
      "Integrasi API (JWT Security)",
      "Database schema optimization",
      "Swagger documentation",
      "Dockerized deployment",
    ],
    contribution:
      "Exploring backend development as a beginner. Built basic RESTful endpoints using Golang and Gin, implemented secure Integrasi API with JWT for testing, and learned how to dockerize applications for consistent environments.",
    image: coverBackendApi,
    status: "Ongoing",
    color: "#00D9FF",
    client: "Multiple Clients",
    screenshotNote:
      "🔒 Enterprise Internal Project: Architecture and implementation details are kept confidential. Source code is hosted on secure repositories and is not public to maintain infrastructure security.",
  },  {
    id: 16,
    title: "Recht Indonesia - Company Website",
    category: "web",
    type: "freelance",
    platform: "Web",
    description:
      "Website for a legal and business consulting firm, covering service pages (company setup, licensing, trademarks, legal compliance), insight articles, a partner program and WhatsApp consultation.",
    technologies: ["Astro", "Tailwind CSS", "JavaScript"],
    features: ["Service pages", "Insight articles", "Partner program", "WhatsApp consultation"],
    image: coverRecht,
    status: "Live",
    color: "#8A2BE2",
    client: "Recht Indonesia",
    links: [{ label: "rechtindonesia.com", url: "https://rechtindonesia.com" }],
  },
  {
    id: 17,
    title: "EMSA Clinic Malaysia - E-commerce",
    category: "web",
    type: "freelance",
    platform: "Web",
    description:
      "Online store for an aesthetic clinic's skincare line in Malaysia, with product catalog, product bundles, wishlist, cart, user accounts and checkout.",
    technologies: ["Next.js", "Headless WordPress", "REST API"],
    features: ["Product catalog & bundles", "Wishlist & cart", "User accounts", "Checkout"],
    image: coverEmsa,
    status: "Live",
    color: "#E8B4C8",
    client: "EMSA Clinic Malaysia",
    links: [{ label: "emsaclinicmy.com", url: "https://emsaclinicmy.com" }],
  },
  {
    id: 18,
    title: "SNL Global - POS & Stock Management",
    category: "web",
    type: "freelance",
    platform: "Web",
    description:
      "Point-of-sale and inventory system covering sales transactions, stock tracking and reporting.",
    technologies: ["Next.js", "React", "REST API"],
    features: ["Sales transactions", "Stock tracking", "Reporting"],
    image: coverSnlGlobal,
    status: "Live",
    color: "#00D9FF",
    client: "SNL Global",
    links: [{ label: "snl-global.web.id", url: "https://snl-global.web.id" }],
  },
  {
    id: 19,
    title: "Ansan Enamel Tank Calculator",
    category: "web",
    type: "freelance",
    platform: "Web",
    description:
      "Calculation tool for Ansan Enamel Indonesia's enamel (glass-fused-to-steel) storage tanks, used to estimate tank specifications and requirements.",
    technologies: ["React", "Vite", "JavaScript"],
    features: ["Tank specification estimates", "Requirement calculations"],
    image: coverAnsel,
    status: "Live",
    color: "#059669",
    client: "Ansan Enamel Indonesia",
    links: [{ label: "gfst-calculator.vercel.app", url: "https://gfst-calculator.vercel.app" }],
  },
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
      "REST & Firebase API Integration",
      "Cross-platform mobile UI",
      "Rental lifecycle management",
      "Stripe payment integration",
      "Real-time search & filters",
    ],
    contribution:
      "Developed the mobile app using React Native. Focused on complex Integrasi API for the rental instrument catalog and Stripe payments, building a fluid UI for Android and iOS, and using Firebase for real-time data persistence.",
    image: coverMusicRent,
    status: "Live",
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
      "NFC & Cloud API Integration",
      "NFC tag scanning & writing",
      "GPS tracking integration",
      "Local-to-Cloud sync",
      "CSV report generator",
    ],
    contribution:
      "Built this utility using Flutter. Implemented complex Integrasi API with Google Apps Script for cloud synchronization, handled core NFC scanning logic, and integrated background GPS services for accurate location logging.",
    image: coverNfcLogger,
    status: "Live",
    color: "#00D9FF",
    client: "Logistics Company",
    githubUrl: "https://github.com/kunandika16/nfc-field-logger.git",
  },

  {
    id: 4,
    title: "TemuHobi - Sports Community Platform",
    category: "web",
    type: "freelance",
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
      "Backend API Integration (Planned)",
      "Partner matching logic",
      "Field booking engine",
      "Community chat modules",
      "Event RSVP system",
    ],
    contribution:
      "Designing and developing the web frontend from scratch using React. Currently focusing on modular components for upcoming Integrasi API, developing partner matching algorithms, and ensuring a premium user journey.",
    image: coverTemuhobi,
    status: "In Progress",
    color: "#E8B4C8",
    client: "TemuHobi (Indigo Startup Program)",
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
      "User journey mapping",
      "API Flow Design (Conceptual)",
      "Interactive prototypes",
      "Accessible UI design",
      "Queue flow analysis",
    ],
    contribution:
      "Conducted extensive user research at hospital pharmacies. Designed the high-fidelity prototypes and mapped out the Integrasi API flow between patients and pharmacists to ensure a smooth, error-free drug pickup experience.",
    image: coverCokUbat,
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
      "Data API Pipeline logic",
      "Levenshtein distance matching",
      "Python data pipelines",
      "Categorical error visualization",
      "Automated label correction",
    ],
    contribution:
      "Developed the data cleaning and processing scripts using Python. Implemented Integrasi API concepts for data ingestion from SP2020 repositories, applied string similarity algorithms to resolve errors, and created statistical visualizations.",
    image: coverBpsSimilarity,
    status: "Completed",
    year: "2022",
    color: "#059669",
    client: "BPS Aceh Province",
  },
];

export const experience = [
  {
    id: 1,
    company: "Physiomobile (Malaysia)",
    logo: logoPhysio,
    position: "Mobile Developer (Remote)",
    duration: "Jan 2026 - Present",
    location: "Remote",
    description:
      "Develop and maintain two production Flutter apps (customer and therapist) for a physiotherapy, rehab and home-care platform, released on Google Play and the App Store.",
    highlights: [
      "Ship regular releases on Android & iOS: new features, stability fixes and performance improvements",
      "Faster job loading and better performance during peak hours",
      "Integrate REST APIs for bookings, session tracking, assessments and notifications",
      "Take part in code reviews with the backend team",
    ],
  },
  {
    id: 2,
    company: "PT Pos Indonesia (Persero)",
    logo: logoPosInd,
    position: "Software Developer (Front-end/Mobile)",
    duration: "Aug 2023 - Present",
    location: "Bandung, Indonesia",
    description:
      "Built and maintained front-end and mobile applications for 7 internal products, including the core courier system (iPOS5) and HR, recruitment, attendance and knowledge-management platforms.",
    highlights: [
      "Delivered 7 internal products (web & mobile)",
      "Role-based access control and multi-step form wizards with reusable form components",
      "Code-splitting and lazy loading to improve load performance",
      "Maintained CI/CD pipelines and participated in code reviews",
    ],
  },
];

export const certifications = [
  {
    id: 8,
    title: "Lab Assistant (Data Visualization, Machine Learning, Big Data)",
    organization: "Syiah Kuala University",
    type: "Lab Assistant",
    duration: "Sep 2021 - May 2022",
    description: "Led practical sessions for 20-60 students per class.",
  },
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
  degree: "Bachelor's Degree in Informatics (Computer Science)",
  major: "Informatics, Faculty of Mathematics and Natural Sciences",
  duration: "Aug 2018 - Sep 2022",
  gpa: "3.77/4.00",
  location: "Banda Aceh, Indonesia",
};
