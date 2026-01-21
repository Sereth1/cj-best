import { Building2, Globe2, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: Building2,
    label: "Focus Market",
    value: "Germany",
    description: "Primary client base",
  },
  {
    icon: Users2,
    label: "Client Range",
    value: "Diverse",
    description: "Multiple industries",
  },
  {
    icon: Globe2,
    label: "Languages",
    value: "4",
    description: "DE • EN • PL • GR",
  },
];

export function PortfolioTeaser() {
  return (
    <Section variant="muted">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Clients
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Businesses Across Europe
          </h2>
          <p className="mt-4 text-muted-foreground">
            We work with clients ranging from ambitious startups to established
            enterprises, primarily in the German market.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-light text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Due to confidentiality agreements, client names are shared upon request.
        </p>
      </Container>
    </Section>
  );
}
