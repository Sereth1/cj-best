import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative">
      <Container size="small">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-teal to-cyan-light opacity-20" />
          <div className="absolute inset-[1px] bg-card rounded-3xl" />
          
          <div className="relative p-8 md:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Ready to{" "}
              <span className="gradient-text">Get Started?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you need a new site, a smarter app, or just someone to finally 
              answer your DMs — we&apos;re here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="https://calendly.com" target="_blank">
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Free Discovery Call
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
