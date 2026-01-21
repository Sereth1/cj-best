import { Metadata } from "next";
import { Globe, Code2, Bot, Users, FileText, Server, Workflow, Cog } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Container as PageContainer } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CTA } from "@/components/sections/cta";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive digital services: social media management, content production, community management, web development, and AI automation.",
};

const iconMap = {
  "social-media": Globe,
  "content": FileText,
  "community": Users,
  "web-development": Code2,
  "automation": Bot,
};

const serviceDetails = {
  "social-media": {
    features: [
      "Brand voice development",
      "Content calendar creation",
      "Platform-specific strategy",
      "Performance analytics & reporting",
      "Competitor analysis",
      "Paid social campaigns",
    ],
  },
  "content": {
    features: [
      "Content strategy development",
      "Editorial calendar planning",
      "Visual content direction",
      "Copywriting & messaging",
      "Content performance tracking",
      "Multi-platform adaptation",
    ],
  },
  "community": {
    features: [
      "Community strategy & guidelines",
      "Daily moderation & engagement",
      "Crisis management protocols",
      "Influencer relationship building",
      "User-generated content programs",
      "Community health reporting",
    ],
  },
  "web-development": {
    features: [
      "Responsive frontend development",
      "Backend API development",
      "Database design & optimization",
      "Performance optimization",
      "Security best practices",
      "Deployment & hosting setup",
    ],
  },
  "automation": {
    features: [
      "Custom AI chatbot development",
      "Workflow automation design",
      "n8n integration setup",
      "API integrations",
      "Process optimization consulting",
      "Ongoing maintenance & updates",
    ],
  },
};

const techCapabilities = [
  {
    category: "Development",
    icon: Code2,
    items: ["Python", "JavaScript/TypeScript", "Django", "React & Next.js"],
  },
  {
    category: "Infrastructure",
    icon: Server,
    items: ["PostgreSQL", "Docker", "Linux servers", "CI/CD pipelines"],
  },
  {
    category: "Automation",
    icon: Workflow,
    items: ["n8n workflows", "Custom bots", "API integrations", "Dokploy"],
  },
  {
    category: "Operations",
    icon: Cog,
    items: ["DevOps practices", "Server maintenance", "Monitoring", "Backups"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Digital Solutions for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From social media strategy to full-stack development, we provide
              end-to-end digital services that help your business thrive.
            </p>
          </div>
        </PageContainer>
      </Section>

      {/* Services Tabs */}
      <Section variant="muted">
        <PageContainer>
          <Tabs defaultValue="social-media" className="w-full">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent mb-8 justify-center">
              {services.map((service) => {
                const Icon = iconMap[service.id as keyof typeof iconMap];
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-lg border border-border bg-card"
                  >
                    <Icon className="h-4 w-4 mr-2" aria-hidden="true" />
                    {service.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {services.map((service) => {
              const details =
                serviceDetails[service.id as keyof typeof serviceDetails];
              const Icon = iconMap[service.id as keyof typeof iconMap];
              return (
                <TabsContent key={service.id} value={service.id} id={service.id}>
                  <Card className="border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-light text-primary">
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {service.shortDescription}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-4">What&apos;s Included:</h4>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {details.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </PageContainer>
      </Section>

      {/* Technical Capabilities */}
      <Section>
        <PageContainer>
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technical Expertise
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our development team brings deep expertise across the full
              technology stack.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card key={cap.category}>
                  <CardHeader>
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{cap.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cap.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </PageContainer>
      </Section>

      <CTA />
    </>
  );
}
