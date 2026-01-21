import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const reasons = [
  {
    title: "Results-Driven Approach",
    description:
      "We focus on measurable outcomes, not vanity metrics. Every strategy we develop ties back to your business objectives.",
  },
  {
    title: "Multi-Language Support",
    description:
      "Communicate with your audience in German, English, Polish, or Greek. We handle localization and cultural nuances.",
  },
  {
    title: "Technical Expertise",
    description:
      "From social media to server infrastructure, our team combines creative and technical skills under one roof.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear reporting, honest feedback, and regular check-ins. You'll always know where your project stands.",
  },
];

export function WhyUs() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Clients Choose Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're not just another agency. We're a dedicated team that treats
              your business as if it were our own.
            </p>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-light text-primary">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
