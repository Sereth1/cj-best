import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Seajay Media - a digital agency specializing in social media, web development, and AI automation. Supporting clients in German, English, Polish, and Greek.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Digital Expertise,{" "}
              <span className="gradient-text">Human Approach</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re a boutique digital agency that combines technical excellence
              with genuine partnership.
            </p>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section variant="muted">
        <Container size="small">
          <div className="prose prose-invert mx-auto max-w-none">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Seajay Media was founded with a clear vision: to bridge the gap
                between creative social media strategy and robust technical
                implementation. Too often, businesses find themselves working
                with agencies that excel in one area but fall short in others.
              </p>
              <p>
                We built our agency to be different. Our team combines deep
                expertise in social media management with serious engineering
                capabilities. Whether you need a comprehensive social strategy
                or a custom-built web application, you work with one team that
                understands the complete picture.
              </p>
              <p>
                Based in Europe with a primary focus on the German market, we&apos;ve
                grown by delivering consistent results and building long-term
                relationships with our clients. We believe in transparency,
                measurable outcomes, and treating every project—regardless of
                size—with the same level of dedication.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities Narrative */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We Bring to the Table
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Social Media & Content
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our social media practice goes beyond posting content. We
                  develop comprehensive strategies that align with your business
                  objectives, manage communities with care, and create content
                  that resonates. Our community management specialization means
                  we understand the nuances of building engaged audiences across
                  different platforms and cultures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Development & Engineering
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our engineering team builds with modern, proven technologies.
                  We work across the full stack—Python and Django for robust
                  backends, JavaScript and TypeScript for dynamic frontends.
                  PostgreSQL powers our data layers, Docker ensures consistent
                  deployments, and our DevOps practices keep everything running
                  smoothly. Whether it&apos;s a marketing site or a complex web
                  application, we build to last.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Automation & AI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Efficiency matters. We design and implement workflow
                  automations using tools like n8n that eliminate repetitive
                  tasks and connect your systems. Our AI chatbots provide
                  intelligent customer support, and our integration expertise
                  means we can connect virtually any tools in your stack. We
                  handle deployments through platforms like Dokploy, ensuring
                  your automations run reliably.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Infrastructure & Operations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Great software needs great infrastructure. We manage server
                  deployments, maintain systems, configure CI/CD pipelines, and
                  ensure your applications stay secure and performant. From
                  initial setup to ongoing maintenance, we take care of the
                  technical details so you can focus on your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Languages */}
      <Section variant="muted">
        <Container size="small">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              We Speak Your Language
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Communication is at the heart of what we do. Our team provides
              full support in multiple languages, ensuring nothing gets lost in
              translation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.languages.map((language) => (
                <Badge
                  key={language}
                  variant="outline"
                  className="text-base px-6 py-2"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
