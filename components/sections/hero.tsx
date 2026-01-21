import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-32 md:pt-40">
      {/* Background gradient effect */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-bright/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Digital Solutions
            <span className="block gradient-text mt-2">That Deliver</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:mt-8 max-w-2xl mx-auto">
            We help businesses grow through strategic social media management,
            modern web development, and intelligent automation. Based in Europe,
            serving clients worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:mt-10">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Language badge */}
          <p className="mt-8 text-sm text-muted-foreground">
            We speak German • English • Polish • Greek
          </p>
        </div>
      </Container>
    </Section>
  );
}
