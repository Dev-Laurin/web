export type Project = {
  slug: string;
  title: string;
  category: "work" | "personal";
  year: string;
  summary: string;
  role: string;
  stack: string[];
  impact: string;
  details: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const profile = {
  name: "Laurin McKenna",
  title: "Senior Software Engineer",
  summary:
    "Customer-focused senior software engineer with 8+ years of experience designing, implementing, and maintaining web applications, system integrations, and SaaS platforms.",
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
  },
];

export const allProjects: Project[] = [
  {
    slug: "sms-microservice",
    title: "SMS Microservice",
    category: "work",
    year: "2023",
    summary:
      "Built a dedicated SMS worker at OneLogin so services could send OTP messages through multiple providers without re-implementing delivery logic.",
    role: "Software engineer owning a new worker service",
    stack: ["JavaScript", "Node.js", "RabbitMQ", "SMS providers"],
    impact:
      "Decoupled SMS delivery from monoliths, enabled support for providers beyond Twilio, and contributed to cost savings at production scale.",
    details: [
      "Created a worker service around the RabbitMQ SMS exchange so internal services could publish a simple request instead of duplicating sending logic.",
      "Improved the architecture by separating SMS delivery concerns from larger application surfaces and making additional providers easier to add.",
      "Owned troubleshooting and release follow-through, including bug fixing, rollback coordination, and stronger logging practices during rollout.",
    ],
  },
  {
    slug: "fnsb-air-quality",
    title: "FNSB Air Quality",
    category: "work",
    year: "2021",
    summary:
      "Supported a public air-quality web and mobile experience by scripting the data pipeline behind PurpleAir and state-managed sensor reporting.",
    role: "Software engineer responsible for the data layer",
    stack: ["Python", "APIs", "AQI calculations", "ArcGIS Experience Builder"],
    impact:
      "Kept hazard information current for the public by automating extraction, formatting, and AQI calculations for wildfire smoke and winter air events.",
    details: [
      "Worked with sensor data from PurpleAir and state-maintained sources to build scheduled update scripts in Python.",
      "Calculated AQI values using EPA nowcast-style weighted averages before publishing data into the public-facing experience.",
      "Supported a civic information tool designed to help residents understand changing air quality conditions across the borough.",
    ],
    links: {
      live: "https://experience.arcgis.com/experience/254e83d6286a4eafabffce9311801dbd/",
    },
  },
  {
    slug: "fnsb-property-search",
    title: "FNSB Property Search",
    category: "work",
    year: "2021",
    summary:
      "Modernized a public property-search website with a strong focus on usability, accessibility, and mobile responsiveness.",
    role: "Engineer leading the frontend refresh",
    stack: ["Bootstrap", "VB.NET", "C#", "JavaScript", "HTML", "CSS"],
    impact:
      "Replaced awkward interaction patterns, improved accessibility, and brought the experience closer to the borough's current design standards.",
    details: [
      "Volunteered to revamp a public-facing tool after seeing firsthand how difficult it was to use on mobile devices.",
      "Replaced scrollbar-heavy address search with suggestion-driven inputs and improved hover states, readability, and accessibility semantics.",
      "Delivered a more modern and usable property-research experience for home buyers and homeowners.",
    ],
    links: {
      live: "https://propertysearch.fnsb.gov/",
    },
  },
  {
    slug: "gis-item-usage-web-app",
    title: "GIS Item Usage Web App",
    category: "work",
    year: "2019",
    summary:
      "Built an internal Flask app that turned ArcGIS Online usage data into reusable reports and searchable charts for a municipal GIS team.",
    role: "Full-stack developer",
    stack: ["Python", "Flask", "JavaScript", "Esri", "ArcGIS Online"],
    impact:
      "Made usage reporting easier to review and preserve year over year, giving the team clearer evidence for future GIS investment decisions.",
    details: [
      "Connected the app to ArcGIS Online so internal users could inspect utilization without manually opening each item one by one.",
      "Added searchable saved reports and chart customization to improve reuse and printing clarity.",
      "Combined public website analytics and internal GIS usage context into a more practical reporting workflow.",
    ],
  },
  {
    slug: "permafrost-predictor-app",
    title: "Permafrost Predictor App",
    category: "work",
    year: "2018",
    summary:
      "Rebuilt a scientific permafrost prediction model as an iOS application for researchers and field users.",
    role: "Independent contractor and iOS developer",
    stack: ["Swift", "iOS", "Scientific modeling"],
    impact:
      "Delivered a published mobile app that let users model active layer thickness and ground temperature directly on device.",
    details: [
      "Translated an existing Python-based scientific model into Swift and wrapped it in an interface usable by researchers in the field.",
      "Implemented drag-based and numeric inputs so users could model soil layers and calculate values on the fly.",
      "Completed an early contract project that was shipped publicly and presented by the client at conferences.",
    ],
    links: {
      github: "https://github.com/Dev-Laurin/PermafrostPredictor",
    },
  },
  {
    slug: "geophysical-institute-website",
    title: "Geophysical Institute Website",
    category: "work",
    year: "2018",
    summary:
      "Helped rebuild and migrate a major research institute website with improvements across content, UI, and maintainability.",
    role: "Student software engineer on the web team",
    stack: ["Drupal", "PHP", "Python", "Web migration"],
    impact:
      "Contributed to a more maintainable and accessible institutional website, including scripted transfer of hundreds of legacy articles.",
    details: [
      "Worked across multiple sections of the site, including layout, filtering, content presentation, and bug fixing.",
      "Scripted the Alaska Science Forum content transfer with Python and Beautiful Soup to move a large archive efficiently.",
      "Balanced CMS-driven implementation with targeted custom code, including PHP module work and front-end adjustments.",
    ],
    links: {
      live: "https://www.gi.alaska.edu/",
    },
  },
  {
    slug: "winterberry-google-web-app",
    title: "Winterberry Google Web App",
    category: "work",
    year: "2018",
    summary:
      "Created a low-cost citizen-science web application for collecting field observations and visualizing the results on a map.",
    role: "Web developer",
    stack: ["Google Apps Script", "JavaScript", "HTML", "CSS", "Google Maps"],
    impact:
      "Enabled ongoing statewide data collection without paper forms and gave researchers a clearer way to inspect berry-condition trends.",
    details: [
      "Embedded custom web forms into an existing Google site and connected them to spreadsheet-backed data collection.",
      "Built a map and graph interface so users could explore site data and berry conditions over time.",
      "Kept the solution low cost and practical for the client while still making the data easier to use.",
    ],
    links: {
      live: "https://sites.google.com/alaska.edu/winterberry/",
    },
  },
  {
    slug: "cares-act-workflow",
    title: "CARES Act Workflow",
    category: "work",
    year: "2020",
    summary:
      "Built a workflow to move grant applications and attachments through AdobeSign routing during a time-sensitive public relief program.",
    role: "Engineer integrating data and document flow",
    stack: ["Power Automate", "HTTP", "AdobeSign", "Esri APIs"],
    impact:
      "Helped local businesses get faster responses by replacing manual handoffs with a reliable digital workflow under a tight deadline.",
    details: [
      "Connected a team-built web form to AdobeSign PDF generation and routing across borough staff.",
      "Used HTTP requests against Esri and AdobeSign APIs inside Power Automate even as requirements expanded late in the delivery window.",
      "Shipped a pragmatic solution that operated reliably during the limited CARES funding period.",
    ],
  },
  {
    slug: "3d-videogame-devlog",
    title: "3D Videogame DevLog",
    category: "personal",
    year: "2022 - Ongoing",
    summary:
      "An ongoing Unity game project exploring third-person systems, character workflows, and a Zelda-like world with RPG-inspired mechanics.",
    role: "Solo developer, designer, and technical artist",
    stack: ["Unity", "C#", "Blender", "VROID", "Mixamo"],
    impact:
      "Evolved into a long-running self-directed project for learning 3D gameplay systems, modeling pipelines, and scope discipline.",
    details: [
      "Built core systems including inventory, quick equipment selection, weather, water, pickups, character control, damage, and NPC dialogue.",
      "Documented lessons around modeling, rigging, animation pipelines, and the need to scope toward a polished vertical slice.",
      "Used the project as a vehicle for deepening Unity and 3D content-creation skills over multiple years.",
    ],
  },
  {
    slug: "dogchain",
    title: "DogChain",
    category: "personal",
    year: "2023",
    summary:
      "A personal blockchain project created to understand distributed-ledger fundamentals through a playful dog-themed coin concept.",
    role: "Solo developer",
    stack: ["JavaScript", "Blockchain"],
    impact:
      "Turned a curiosity-driven idea into a concrete learning project focused on how blockchains actually work under the hood.",
    details: [
      "Built the project as a self-education exercise rather than a production crypto product.",
      "Used the coin concept as a memorable wrapper around lower-level blockchain concepts and implementation details.",
      "Linked personal motivation with technical exploration, which made the learning process easier to sustain.",
    ],
    links: {
      github: "https://github.com/Dev-Laurin/dogchain",
    },
  },
];

export const featuredProjects = allProjects.slice(0, 3);

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export const experience: Experience[] = [
  {
    company: "Afognak Native Corporation",
    role: "Senior Software Engineer",
    period: "June 2024 - Present",
    highlights: [
      "Saved a $500K+ contract by delivering a real-time systems integration by a critical deadline.",
      "Implemented retrieval-augmented generation (RAG) for an internal AI chat application used by 2K+ users daily.",
      "Own 20+ cloud-native, serverless integrations across distributed systems in Azure using Python and C#.",
      "Maintain a monolith company portal with C#, Angular, and MSSQL; design production APIs and mentor engineers.",
    ],
  },
  {
    company: "OneLogin by One Identity",
    role: "Software Dev Staff Engineer",
    period: "February 2022 - February 2024",
    highlights: [
      "Designed and built a production SMS microservice serving 1M+ users daily, using RabbitMQ for asynchronous, high-throughput processing.",
      "Retained multiple $100K+ enterprise customers and enabled new customer acquisition through the SMS platform.",
      "Diagnosed complex production issues across distributed systems, APIs, cloud services, and third-party integrations.",
      "Maintained CI/CD pipelines and features across Ruby on Rails, Node.js, React, and microservice systems.",
    ],
  },
  {
    company: "Fairbanks North Star Borough",
    role: "Programmer Analyst",
    period: "August 2019 - February 2022",
    highlights: [
      "Created an automated pipeline that processed $24.5 million in claims for 250+ organizations.",
      "Used REST APIs to integrate and analyze data for a public air-quality web application.",
      "Modernized a property database website for mobile users, generating a 2x increase in traffic.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["JavaScript / TypeScript", "Angular", "React", "HTML / CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "Ruby", "Rails", "Node.js", "C#", "RabbitMQ"],
  },
  {
    title: "Cloud & Delivery",
    items: ["Azure", "AWS", "Docker", "CI/CD", "Azure DevOps"],
  },
  {
    title: "Data & Observability",
    items: ["PostgreSQL", "MySQL", "Cosmos DB", "MSSQL", "Datadog", "Application Insights", "Sumo Logic"],
  },
  {
    title: "AI & Practices",
    items: ["RAG", "GitHub Copilot", "System integrations", "Production troubleshooting", "Mentoring"],
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:laurin.mckenna@protonmail.com", value: "laurin.mckenna@protonmail.com" },
  { label: "GitHub", href: "https://github.com/Dev-Laurin", value: "github.com/Dev-Laurin" },
];