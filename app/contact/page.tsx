import { Metadata } from "next";
import { Mail, Clock, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Seajay Media. We'd love to hear about your project. Support available in German, English, Polish, and Greek.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop us a line",
    value: "hello@seajay-media.com",
    href: "mailto:hello@seajay-media.com",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We reply faster than your last agency",
    value: "< 24 hours",
    href: null,
  },
  {
    icon: Globe,
    title: "Languages",
    description: "We speak your language",
    value: "DE • EN • PL • GR",
    href: null,
  },
];

const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We work across multiple industries including technology, e-commerce, professional services, hospitality, and more. Our diverse experience allows us to bring fresh perspectives while understanding industry-specific requirements.",
  },
  {
    question: "How do you handle projects in different languages?",
    answer:
      "Our team includes native and fluent speakers of German, English, Polish, and Greek. We can handle everything from social media content creation to customer support in these languages, ensuring cultural nuances are respected.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Timelines vary based on scope. A social media strategy can be delivered in 2-3 weeks, while web development projects typically range from 4-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, many of our clients work with us on a retainer basis for ongoing social media management, community moderation, and technical maintenance. We also offer project-based engagements for specific initiatives.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We establish clear KPIs at the start of every engagement. Whether it's engagement rates, conversion metrics, or operational efficiency gains, we track and report on what matters to your business.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you have a specific project in mind or just want to
              explore possibilities, we&apos;d love to hear from you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section variant="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{method.title}</CardTitle>
                          <p className="text-xs text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="font-medium">{method.value}</span>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container size="small">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>
    </>
  );
}
