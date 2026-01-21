import Link from "next/link";
import { ArrowRight, Globe, Code2, Bot, Users, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { services } from "@/lib/constants";

const iconMap = {
  "social-media": Globe,
  "content": FileText,
  "community": Users,
  "web-development": Code2,
  "automation": Bot,
};

export function ServicesOverview() {
  return (
    <Section variant="muted">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive digital services tailored to your business needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.id as keyof typeof iconMap];
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group focus:outline-none"
              >
                <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-light text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      {service.title}
                      <ArrowRight
                        className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
