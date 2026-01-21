import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Globe2, Languages, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Seajay Media works with businesses across Europe, with a primary focus on the German market. Learn about our client approach.",
};

const highlights = [
  {
    icon: Building2,
    title: "German Market Focus",
    description:
      "The majority of our social media clients are based in Germany. We understand the German business landscape, cultural nuances, and regulatory requirements.",
  },
  {
    icon: Globe2,
    title: "Diverse Industries",
    description:
      "Our portfolio spans multiple niches—from tech startups to established enterprises, e-commerce to professional services. This diversity strengthens our strategic thinking.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "We serve clients in German, English, Polish, and Greek. Whether your audience is local or international, we can communicate effectively.",
  },
  {
    icon: Shield,
    title: "Confidentiality First",
    description:
      "Many of our clients prefer discretion. We respect NDAs and confidentiality requirements while still delivering exceptional results.",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Clients
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Trusted by Businesses{" "}
              <span className="gradient-text">Across Europe</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We partner with ambitious companies who value quality,
              reliability, and results. Here&apos;s how we work with our clients.
            </p>
          </div>
        </Container>
      </Section>

      {/* Highlights */}
      <Section variant="muted">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-light text-primary">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section>
        <Container size="small">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Our Client Approach
            </h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Partnership Over Projects
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don&apos;t view client relationships as transactions. Every
                  engagement begins with understanding your business deeply—your
                  goals, challenges, audience, and competitive landscape. This
                  foundation allows us to deliver work that truly moves the
                  needle, not just check boxes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Measurable Outcomes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every strategy we develop ties back to concrete objectives.
                  Whether it&apos;s growing engagement, generating leads, or
                  improving operational efficiency, we establish clear metrics
                  from day one and report on them honestly. Vanity metrics don&apos;t
                  pay the bills—we focus on what matters.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Transparent Communication
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You&apos;ll always know where your project stands. Regular
                  check-ins, clear documentation, and honest feedback are
                  standard. If something isn&apos;t working, we&apos;ll tell you—and more
                  importantly, we&apos;ll fix it.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section variant="muted">
        <Container size="small">
          <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Want to Learn More?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Due to confidentiality agreements, we share specific client
              information and case studies upon request. Send us a message to
              learn more about our current and former clients.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We provide support in: {siteConfig.languages.join(" • ")}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Send Us a Message
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
