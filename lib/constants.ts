// Site constants and configuration
export const siteConfig = {
  name: "Sea Jay Media",
  description: "Websites, Web Apps, AI Chatbots & More — Tailored for small businesses, startups, and free spirits",
  url: "https://seajay-media.com",
  email: "hello@seajay-media.com",
  languages: ["German", "English", "Polish", "Greek"] as const,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "social-media",
    title: "Social Media",
    shortDescription: "Strategy & management that drives real engagement",
    description:
      "We develop tailored social media strategies that align with your brand voice and business objectives. From content calendars to performance analytics, we handle the complete social media lifecycle.",
  },
  {
    id: "content",
    title: "Content Production",
    shortDescription: "Planning & production support for compelling content",
    description:
      "Content that resonates starts with understanding your audience. We support your content pipeline from ideation through production, ensuring consistency and quality across all channels.",
  },
  {
    id: "community",
    title: "Community Management",
    shortDescription: "Building and nurturing engaged communities",
    description:
      "Communities don't build themselves. We specialize in fostering genuine connections between brands and their audiences, moderating discussions, and turning followers into advocates.",
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Modern web solutions from frontend to deployment",
    description:
      "From responsive frontends to robust backends, we build web applications that perform. Our development process emphasizes clean code, scalability, and maintainable architecture.",
  },
  {
    id: "automation",
    title: "AI & Automation",
    shortDescription: "Chatbots and workflow automation that save time",
    description:
      "Leverage AI to handle repetitive tasks and provide instant customer support. We build intelligent chatbots and design automated workflows that integrate seamlessly with your existing tools.",
  },
] as const;

export const capabilities = {
  development: [
    "Full-stack development",
    "Python & JavaScript/TypeScript",
    "Django web framework",
    "Modern frontend frameworks",
  ],
  infrastructure: [
    "PostgreSQL & SQL databases",
    "Docker containerization",
    "DevOps & CI/CD pipelines",
    "Server maintenance",
  ],
  automation: [
    "n8n workflow automation",
    "Custom AI chatbots",
    "API integrations",
    "Dokploy deployments",
  ],
} as const;
