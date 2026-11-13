// Case studies for the flagship projects. Facts here come from the project and
// experience data; add real impact numbers to `outcomes` when they are available.
export const caseStudies = [
  {
    slug: "physiomobile",
    projectIds: [13, 14],
    appNames: { 13: "Customer app", 14: "Therapist app" },
    title: "Physiomobile",
    tagline: "Two production Flutter apps for a physiotherapy & home-care platform",
    role: "Mobile Developer (Remote)",
    timeline: "Jan 2026 – Present",
    client: "Physiomobile (Malaysia)",
    platform: "Android & iOS",
    context: [
      "Physiomobile is a Malaysian platform that connects patients with physiotherapists for rehab sessions at the clinic or at home. It runs on two separate mobile apps that share one backend: a customer app for patients and a therapist app for practitioners.",
      "Both apps are live on Google Play and the App Store, so every change has to ship safely to real users on two platforms at once.",
    ],
    work: [
      {
        heading: "Customer app",
        body: "Session booking, treatment history and progress tracking, loyalty points, in-app announcements and real-time notifications.",
      },
      {
        heading: "Therapist app",
        body: "Booking management and confirmation, patient records, session notes, assessment submission and a dashboard for sessions and earnings.",
      },
      {
        heading: "Releases & quality",
        body: "Regular releases on Android and iOS with new features, stability fixes and performance work, including faster job loading during peak hours.",
      },
    ],
    approach: [
      "Integrate REST APIs with the backend team for bookings, session tracking, assessments and notifications",
      "Push notifications through Firebase Cloud Messaging so patients and therapists see booking changes immediately",
      "Keep both apps consistent: shared conventions for API handling, state management and UI components",
      "Take part in code reviews with the backend team before every release",
    ],
    outcomes: [
      { value: "2", label: "Production apps maintained" },
      { value: "1K+", label: "Customer app downloads" },
      { value: "2", label: "Stores: Google Play & App Store" },
    ],
    stack: ["Flutter", "Dart", "REST API", "Firebase Cloud Messaging", "State Management", "Local Storage"],
  },
  {
    slug: "ipos5",
    projectIds: [15],
    title: "iPOS5",
    tagline: "First-mile modules for Pos Indonesia's core courier system",
    role: "Software Developer (Front-end)",
    timeline: "2025",
    client: "PT Pos Indonesia",
    platform: "Web",
    context: [
      "iPOS5 is the core courier platform of PT Pos Indonesia, covering the full delivery chain: first-mile, mid-mile and last-mile operations.",
      "I worked on the first-mile part of the system: the flows used when shipments are picked up and accepted from senders, which is where every package enters the network.",
    ],
    work: [
      {
        heading: "Shipment pickup",
        body: "Screens and flows for scheduling and handling shipment pickups from senders.",
      },
      {
        heading: "Shipment acceptance",
        body: "Acceptance flow for packages handed over by senders, with the data the rest of the courier chain depends on.",
      },
      {
        heading: "Reusable form components",
        body: "Form building blocks shared across first-mile screens so validation and layout stay consistent.",
      },
    ],
    approach: [
      "Built with Next.js, React and TypeScript for type-safe, maintainable screens",
      "Integrated the first-mile flows with the courier backend REST APIs",
      "Reused form components instead of one-off forms to keep long operational forms consistent",
    ],
    outcomes: [
      { value: "Live", label: "In production at Pos Indonesia" },
      { value: "3", label: "Mile stages in the platform" },
      { value: "First-mile", label: "Modules I delivered" },
    ],
    stack: ["Next.js", "React", "TypeScript", "REST API"],
    confidential:
      "Internal enterprise system: screenshots and source code are not shown to protect operational and customer data.",
  },
  {
    slug: "livie",
    projectIds: [1],
    title: "Livie",
    tagline: "Employee super app used across PT Pos Indonesia",
    role: "Mobile Developer (Flutter)",
    timeline: "2024 – Present",
    client: "PT Pos Indonesia",
    platform: "Android & iOS",
    context: [
      "Livie is PT Pos Indonesia's internal super app for employees nationwide. It brings attendance, leave, assignments and other HR services into one mobile app.",
      "Attendance has to be trustworthy across thousands of employees in many locations, so check-in and check-out are verified by location.",
    ],
    work: [
      {
        heading: "Authentication",
        body: "The core login flow and session handling for employees.",
      },
      {
        heading: "Attendance",
        body: "Location-based check-in/out with Google Maps, synced to the backend in real time through REST APIs.",
      },
      {
        heading: "HR services",
        body: "Leave requests, assignments and WebView modules that embed internal HR dashboards inside the app.",
      },
    ],
    approach: [
      "One Flutter codebase for both Android and iOS",
      "REST API integration to sync attendance data in real time",
      "Firebase for push notifications",
      "WebView components so existing HR dashboards could be used in the app without rebuilding them",
    ],
    outcomes: [
      { value: "Nationwide", label: "Used by Pos Indonesia employees" },
      { value: "2", label: "Platforms from one codebase" },
      { value: "Since 2024", label: "Continuously maintained" },
    ],
    stack: ["Flutter", "Dart", "Google Maps API", "REST API", "Firebase"],
  },
];

export const caseStudyByProjectId = (id) =>
  caseStudies.find((c) => c.projectIds.includes(id));
