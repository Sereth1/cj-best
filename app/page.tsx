"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Globe,
  Code2,
  Bot,
  Palette,
  Share2,
  Smartphone,
  Phone,
  MessageCircle,
  Check,
  ChevronDown,
  Star,
  Clock,
  Zap,
  Users,
  Youtube,
  Instagram,
  Facebook,
  Send,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { toast } from "sonner";

/* =============================================================================
   HERO SECTION
============================================================================= */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-bright/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal/20 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Main headline with animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight opacity-0-initial animate-fade-in-up">
            <span className="gradient-text">Design. Code.</span>
            <br />
            <span className="gradient-text">Bots. Brilliance.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0-initial animate-fade-in-up delay-200">
            Websites, Web Apps, AI Chatbots &amp; More — Tailored for small businesses, 
            startups, and free spirits just like us.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0-initial animate-fade-in-up delay-400">
            <Button 
              size="lg" 
              className="btn-glow text-lg px-8 py-6 animate-pulse-glow"
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
              className="text-lg px-8 py-6 group"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
                Or Drop Us an Email
              </Link>
            </Button>
          </div>

          {/* Subtext */}
          <p className="mt-6 text-sm text-muted-foreground opacity-0-initial animate-fade-in delay-600">
            We reply faster than your last agency. ⚡
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce-slow">
            <ChevronDown className="h-8 w-8 mx-auto text-primary/50" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
   WHAT WE DO SECTION
============================================================================= */
const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Marketing sites, landing pages, blogs, SEO-friendly & stunningly fast.",
  },
  {
    icon: Smartphone,
    title: "Custom Web & Mobile Apps",
    description: "From booking platforms to full-on dashboards. If you can dream it, we can code it.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Custom bots that work while you sleep. Lead gen, customer support & more.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Let us take care of your content, captions, and community. Optional: viral dance moves.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Logos, branding, promo visuals — all the pretty stuff.",
  },
];

function WhatWeDoSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 animate-fade-in">
            What We Do
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="gradient-text">Not Just Another</span>
            <br />
            Digital Agency
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            We design, develop, and deploy clever digital solutions — from high-converting 
            websites to fully functional web &amp; mobile apps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-hover group cursor-pointer bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-teal/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
   WHY SEA JAY SECTION
============================================================================= */
const whyUsPoints = [
  { icon: Globe, text: "Multilingual (EN, DE, PL, GR)" },
  { icon: Clock, text: "Based in Southeast Asia and Europe = your work gets done while you sleep" },
  { icon: Zap, text: "Built for small businesses with global ambition" },
  { icon: Check, text: "Competitive pricing, no BS" },
  { icon: Star, text: "Freedom, flexibility & fun baked into our process" },
];

const testimonials = [
  {
    quote: "Sea Jay Media transformed our online presence. Professional, creative, and incredibly responsive!",
    author: "Sarah M.",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote: "The AI chatbot they built for us handles 80% of customer inquiries. Game changer!",
    author: "Marcus K.",
    role: "E-commerce Owner",
    rating: 5,
  },
  {
    quote: "Finally an agency that actually listens and delivers on time. Highly recommended!",
    author: "Elena P.",
    role: "Marketing Director",
    rating: 5,
  },
];

function WhySeaJaySection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <Container>
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Sea Jay?
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            We&apos;re not here to{" "}
            <span className="gradient-text">blend in.</span>
          </h2>
        </div>

        {/* Why Us Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {whyUsPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg font-medium">{point.text}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">
            What Our Clients Say
          </h3>
          
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-center font-medium mb-8">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </blockquote>
                
                <div className="text-center">
                  <p className="font-bold text-lg">{testimonials[activeTestimonial].author}</p>
                  <p className="text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
   HOW WE WORK SECTION
============================================================================= */
const steps = [
  {
    number: "01",
    title: "Book a Free Discovery Call",
    description: "We'll talk goals, ideas, and what makes your brand tick.",
  },
  {
    number: "02",
    title: "Get a Custom Plan",
    description: "We'll scope it out, no templates, no copy-paste BS.",
  },
  {
    number: "03",
    title: "We Build, You Relax",
    description: "You focus on your business. We handle everything else.",
  },
  {
    number: "04",
    title: "Launch, Learn, Grow",
    description: "We stay by your side if you need ongoing support.",
  },
];

function HowWeWorkSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            How We Work
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Simple, Human, and{" "}
            <span className="gradient-text">Zero Jargon</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="relative z-10 text-center p-6">
                {/* Number */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-teal/20 border-2 border-primary/30 mb-6 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                  <span className="text-3xl font-bold gradient-text">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
   AI CHATBOT PROMO SECTION
============================================================================= */
function ChatbotPromoSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-navy-medium/50 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 animate-bounce-slow">
              <MessageCircle className="h-12 w-12 text-primary" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Got Questions?{" "}
            <span className="gradient-text">Ask Our Bot.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Our custom-built AI assistant is already part of this site. Give it a go — 
            it&apos;s not just here to look pretty.
          </p>

          <Button 
            size="lg" 
            className="btn-glow text-lg px-8 py-6 group"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
            Start Chatting
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Animated arrow pointing to chat */}
          <div className="mt-8 animate-bounce-slow">
            <ChevronDown className="h-8 w-8 mx-auto text-primary rotate-180" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
   CTA SECTION
============================================================================= */
function CTASection() {
  return (
    <section className="py-24 md:py-32 relative">
      <Container size="small">
        <div className="gradient-border rounded-3xl overflow-hidden">
          <div className="bg-card/80 backdrop-blur-sm p-8 md:p-16 text-center">
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
                className="btn-glow text-lg px-8 py-6 animate-pulse-glow"
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
                <Link href="#contact">
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

/* =============================================================================
   CONTACT SECTION
============================================================================= */
function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s{" "}
              <span className="gradient-text">Talk</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Have a project in mind? We&apos;d love to hear about it. 
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Email */}
            <div className="mb-8">
              <a 
                href="mailto:hello@seajay-media.com"
                className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors group"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                hello@seajay-media.com
              </a>
            </div>

            {/* Socials */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Follow us</p>
              <div className="flex gap-4">
                {[
                  { icon: Youtube, href: "#", label: "YouTube" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-2">
              {["EN", "DE", "PL", "GR"].map((lang) => (
                <Badge key={lang} variant="outline" className="text-sm">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
   MAIN PAGE COMPONENT
============================================================================= */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <WhySeaJaySection />
      <HowWeWorkSection />
      <ChatbotPromoSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
