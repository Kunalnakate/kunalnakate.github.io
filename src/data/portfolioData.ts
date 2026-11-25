export interface ProjectModule {
  name: string;
  items: string[];
}

export interface ProjectMetaDetail {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  client?: string;
  tags: string[];
  role: string;
  status?: string;
  achievement?: string;
  demoUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  image?: string;
  timeline?: string;
  keyFeatures?: string[];
  modules?: ProjectModule[];
  responsibilities: string[];
  architectureHighlight?: string;
  platformType?: "mobile" | "web" | "desktop" | "system";
  metaDetails?: ProjectMetaDetail[];
  screenshots?: { label: string; caption: string; image?: string }[];
}

export interface SkillItem {
  name: string;
  type: string;
  symbol: string;
  role: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const portfolioData = {
  personal: {
    name: "Kunal",
    title: "Web, Android & Backend Developer",
    status: "Available for new projects",
    tagline: "Let's build something meaningful.",
    avatar: "/images/kunal-profile.jpg",
    location: "",
    email: "kunalnakate0123@gmail.com",
    linkedin: "https://www.linkedin.com/in/kunal-nakate-052873359",
    bio: "I build modern, scalable, and user-focused digital experiences. With a background in Information Technology and hands-on experience in web development, Android applications, backend systems, and spatial data analysis, I enjoy turning complex problems into practical technology solutions.",
    domains: [
      "Web Development",
      "Android Applications",
      "Backend Systems",
      "Spatial Data Analysis",
    ],
  },
  techStack: [
    {
      name: "Python",
      symbol: "python",
      type: "Language",
      role: "Backend & Spatial Analysis",
    },
    {
      name: "Java",
      symbol: "java",
      type: "Language",
      role: "Core Programming & Android",
    },
    {
      name: "React.js",
      symbol: "react",
      type: "Frontend",
      role: "Interactive Web Interfaces",
    },
    {
      name: "HTML / CSS",
      symbol: "html",
      type: "Web",
      role: "Web Standards & Responsive UI",
    },
  ] as SkillItem[],
  projects: [
    {
      id: "vishedgesocial",
      slug: "vishedgesocial",
      title: "VishedgeSocial",
      subtitle: "Google Business Management Application",
      tagline: "Native Android application designed to simplify Google Business Profile management with AI-powered customer review assistance.",
      shortDescription:
        "Independently designed, developed, and deployed a complete native Android application and Python FastAPI backend, integrating Google Business Profile APIs and AI-assisted reply workflows.",
      fullDescription:
        "VishedgeSocial is an Android application designed to simplify Google Business Profile management and customer review management for businesses. The application integrates with Google's APIs to help businesses manage customer reviews, streamline review responses, and improve their online reputation through AI-powered reply assistance. I independently designed, developed, and deployed the complete application, managing both Android frontend development and backend engineering.",
      category: "Native Mobile Application",
      tags: [
        "Java",
        "Android Studio",
        "Python",
        "FastAPI",
        "MongoDB",
        "Google APIs",
        "Google Cloud Console",
        "AI Integration",
      ],
      role: "Independent Full Stack & Android Developer",
      achievement: "Independently developed and published a complete Android application on the Google Play Store with Google API integration and AI-powered functionality.",
      playStoreUrl: "",
      githubUrl: "",
      demoUrl: "",
      image: "/images/vishedge-splash.jpg",
      timeline: "Published Application",
      keyFeatures: [
        "Google Business Profile API integration",
        "Google account authentication and secure connectivity",
        "Comprehensive business review management dashboard",
        "AI-powered review reply generation",
        "Customised review response workflows and templates",
        "Backend REST API development and seamless mobile integration",
        "MongoDB-based flexible data management",
        "Google Cloud Console API configuration and credential management",
      ],
      responsibilities: [
        "Designed and developed the native Android application using Java in Android Studio.",
        "Built backend REST APIs using Python and FastAPI for high performance and low latency.",
        "Designed database schemas and integrated MongoDB for business profile and review data.",
        "Configured and integrated Google Business APIs and OAuth authentication via Google Cloud Console.",
        "Implemented AI-powered review response generation workflows.",
        "Managed end-to-end architecture, frontend-backend network communication, unit testing, and deployment.",
        "Successfully packaged and published the application on the Google Play Store.",
      ],
      architectureHighlight:
        "Native Android Client (Java) &harr; OAuth2 / Google Cloud API &harr; Python FastAPI Microservice &harr; AI Reply Engine &amp; MongoDB Atlas.",
      platformType: "mobile",
      metaDetails: [
        { label: "PLATFORM", value: "Android (Java)" },
        { label: "BACKEND API", value: "Python / FastAPI" },
        { label: "DATABASE", value: "MongoDB" },
        { label: "CLOUD & APIS", value: "Google Cloud Console & AI" },
        { label: "DEPLOYMENT", value: "Google Play Store" },
      ],
      screenshots: [
        {
          label: "Home & Reviews Dashboard",
          caption: "Live Google Business sync, auto-reply toggle, performance ratings, and customer reviews.",
          image: "/images/vishedge-screen-dashboard.png",
        },
        {
          label: "Business Analytics & Insights",
          caption: "Google Search & Maps views, customer calls & directions metrics, and AI growth velocity.",
          image: "/images/vishedge-screen-analytics.png",
        },
        {
          label: "Local SEO & Keyword Engine",
          caption: "Google Maps SEO health audit, target search phrases, and AI profile description optimizer.",
          image: "/images/vishedge-screen-seo.png",
        },
      ],
    },
    {
      id: "hotel-management-system",
      slug: "hotel-management-system",
      title: "Hotel Management System",
      subtitle: "Integrated Hospitality Platform for Sanskriti Rajasthan",
      client: "Sanskriti Rajasthan",
      status: "Developed & Deployed",
      tagline: "Comprehensive hotel property management, restaurant POS, kitchen display system (KDS), and customer booking portal in a single digital platform.",
      shortDescription:
        "Designed, developed, and deployed an enterprise hospitality solution uniting front desk reservations, room inventory, restaurant POS billing, and kitchen order workflows for Sanskriti Rajasthan.",
      fullDescription:
        "Designed, developed, and deployed a comprehensive Hotel Management System for Sanskriti Rajasthan, integrating hotel property management, restaurant operations, billing, and kitchen order management into a unified digital platform. The solution consists of two interconnected applications: a customer-facing hotel website that showcases the property and its services, and a staff-facing management system that streamlines daily hotel and restaurant operations. The platform centralises business workflows, improves operational coordination, and simplifies reservation and restaurant management.",
      category: "Client Project // Full-Stack Platform",
      tags: [
        "React 19",
        "Vite",
        "Tailwind CSS v4",
        "Python",
        "FastAPI",
        "REST APIs",
        "Supabase",
        "PostgreSQL",
      ],
      role: "Full Stack Developer & System Architect",
      achievement: "Successfully developed and deployed a complete hospitality management solution for a real-world client, bringing hotel reservations, front desk operations, restaurant billing, and kitchen management into one integrated platform.",
      demoUrl: "",
      githubUrl: "",
      image: "/images/hotel-dashboard.jpg",
      timeline: "Client Deployment",
      modules: [
        {
          name: "Customer-Facing Hotel Website",
          items: [
            "Dynamic multi-page hotel website showcasing property and amenities",
            "Accommodation details, room pricing, and service catalog",
            "Seamless customer booking experience and inquiry forms",
            "Mobile-first responsive user interface with fluid interactions",
            "Dynamic content management for rooms, photos, and policies",
          ],
        },
        {
          name: "Hotel Property Management System (PMS)",
          items: [
            "Front desk management dashboard for receptionists and managers",
            "Room management and live room status tracking (Clean/Occupied/Dirty)",
            "Calendar-based reservation and booking management",
            "Guest history, CRM, and customer records archiving",
            "Interactive new booking wizard with instant availability checks",
            "Streamlined check-in and check-out workflows with invoice generation",
          ],
        },
        {
          name: "Restaurant Point of Sale (POS)",
          items: [
            "Digital menu management with category and pricing controls",
            "Restaurant table layout and occupancy management",
            "Order creation, modification, and live tracking",
            "Automated billing, split bills, and GST tax calculations",
            "Centralized restaurant order ledger and settlement history",
          ],
        },
        {
          name: "Kitchen Display System (KDS)",
          items: [
            "Centralised real-time kitchen order display for chefs",
            "Order status tracking (Queued / Preparing / Ready to Serve)",
            "Kitchen workflow management and preparation timers",
            "Real-time coordination between service staff and kitchen cooks",
          ],
        },
        {
          name: "Role-Based Access Management",
          items: [
            "Administrator (Full system controls, pricing, analytics & staff audits)",
            "Receptionist (Reservations, check-ins, guest accounts & folio management)",
            "Waiter (Table orders, menu status & kitchen delivery updates)",
            "Cook (KDS queue, meal preparation states & fulfillment notices)",
          ],
        },
      ],
      responsibilities: [
        "Architected and developed the frontend using React 19, Vite, and modern Tailwind CSS v4.",
        "Built backend REST APIs using Python and FastAPI with async endpoints.",
        "Designed and implemented relational database schemas using PostgreSQL through Supabase.",
        "Engineered end-to-end integration between hotel PMS, restaurant POS, and kitchen KDS.",
        "Implemented strict role-based access control (RBAC) across 4 staff tiers.",
        "Managed client discovery, requirement analysis, automated testing, and cloud deployment for Sanskriti Rajasthan.",
      ],
      architectureHighlight:
        "Dual Frontends (React 19 + Vite) &harr; Python FastAPI Async Engine &harr; Supabase PostgreSQL with Row Level Security &amp; Realtime Subscriptions.",
      platformType: "web",
      metaDetails: [
        { label: "CLIENT", value: "Sanskriti Rajasthan" },
        { label: "FRONTEND STACK", value: "React 19 / Vite / Tailwind v4" },
        { label: "BACKEND APIS", value: "Python / FastAPI REST Endpoints" },
        { label: "DATABASE", value: "PostgreSQL via Supabase" },
        { label: "ARCHITECTURE", value: "PMS + Restaurant POS + Kitchen KDS" },
        { label: "ACCESS CONTROL", value: "RBAC (Admin, Reception, Waiter, Cook)" },
      ],
      screenshots: [
        {
          label: "PMS Front Desk Dashboard",
          caption: "Live room inventory, occupancy metrics, check-in status, and Supabase cloud database tracking.",
          image: "/images/hotel-dashboard.jpg",
        },
        {
          label: "New Walk-in Booking Wizard",
          caption: "Interactive room picker, live availability status, guest details CRM, and booking confirmation.",
          image: "/images/hotel-walkin-booking.jpg",
        },
        {
          label: "Restaurant POS & Food Ordering",
          caption: "Digital menu catalog, table management (T1 Main Dining), category filters, and KOT generation.",
          image: "/images/hotel-restaurant-pos.jpg",
        },
        {
          label: "Billing, GST & Checkout Ledger",
          caption: "Itemized billing, extras calculation, automated 5% GST (CGST/SGST), and payment processing.",
          image: "/images/hotel-billing-checkout.jpg",
        },
        {
          label: "Kitchen Display System (KDS)",
          caption: "Real-time kitchen order tickets (KOT), live order timers, preparation status, and chef fulfillment.",
          image: "/images/hotel-kds-kitchen.jpg",
        },
        {
          label: "Kitchen Inventory Management",
          caption: "Stock replenishment requests, voice/text item input, pending/approved queues, and supplies ledger.",
          image: "/images/hotel-inventory.jpg",
        },
      ],
    },
  ] as Project[],
  stats: [] as { label: string; value: string }[],
  experience: [
    {
      period: "Jan 2026 – Aug 2026",
      role: "Spatial Data Analyst Trainee (Apprenticeship)",
      company: "HERE Technologies",
      location: "Apprenticeship",
      description: [
        "Validated and quality-checked large geographic datasets across the Scania, VGT, and VPD projects, identifying and resolving data issues to meet accuracy targets.",
        "Analyzed and updated spatial datasets to improve map quality and navigation performance for downstream mapping products.",
        "Used mapping and data-analysis tools to support ongoing data maintenance, verification, and quality-assurance workflows.",
        "Collaborated with a cross-functional team to keep map content accurate and reliable at scale.",
      ],
      technologies: [
        "Spatial Data Analysis",
        "GIS",
        "Geographic Datasets",
        "QA Workflows",
        "Mapping Tools",
        "Data Validation",
      ],
    },
    {
      period: "2025",
      role: "Full Stack Developer Intern",
      company: "Rising IT",
      location: "Remote",
      description: [
        "Built and maintained front-end and back-end features for a native Android application using Java in Android Studio.",
        "Implemented a serverless backend on Azure Functions (Python) to support the app's core functionality.",
        "Used MongoDB to design and manage a scalable data layer for the application.",
        "Project specifics are covered under an NDA; architecture and technical approach available to discuss upon request.",
      ],
      technologies: [
        "Java",
        "Android Studio",
        "Python",
        "Azure Functions",
        "MongoDB",
        "Serverless",
      ],
    },
  ] as ExperienceItem[],
};
