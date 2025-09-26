"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      toast("Name is required", {
        description: "Please enter your full name.",
      });
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast("Valid email is required", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    if (!formData.message.trim()) {
      toast("Message is required", {
        description: "Please enter your message.",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact-us" className="px-4 lg:px-8 py-20">
      <div className="mx-auto mt-15 px-4 sm:px-6 max-w-6xl container">
        <div className="items-start gap-16 grid lg:grid-cols-2">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-primary/10 mb-6 px-4 py-2 border border-primary/20 rounded-full">
              <span className="font-medium text-primary text-sm">
                💬 Get In Touch
              </span>
            </div>

            <h2 className="mb-6 font-bold text-3xl md:text-4xl lg:text-5xl">
              Ready to transform your
              <span className="bg-clip-text text-transparent hero-gradient">
                {" "}
                team's workflow?
              </span>
            </h2>

            <p className="mb-8 text-muted-foreground text-xl leading-relaxed">
              Have questions about our features, pricing, or need a custom
              solution? Our team is here to help you succeed.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center bg-primary/10 border border-primary/20 rounded-xl w-12 h-12">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email us directly</h4>
                  <p className="text-muted-foreground">
                    hello@mondillaconnect.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex justify-center items-center bg-accent/10 border border-accent/20 rounded-xl w-12 h-12">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone number</h4>
                  <p className="text-muted-foreground">+2519*******</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-card-border border-t">
              <p className="mb-4 text-muted-foreground text-sm">
                Trusted by teams at:
              </p>
              <div className="flex flex-wrap gap-6 opacity-60">
                {["Ministry of Health"].map((company) => (
                  <div key={company} className="font-medium text-sm">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-delay-200 animate-fade-in">
            <div className="bg-surface p-8 border border-card-border rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-medium text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-background border-card-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-medium text-foreground"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="bg-background border-card-border focus:border-primary focus:ring-primary/20"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-medium text-foreground"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or ask any questions..."
                    rows={5}
                    className="bg-background border-card-border focus:border-primary focus:ring-primary/20 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group disabled:opacity-50 hover:shadow-lg w-full text-primary-foreground hero-gradient"
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending...
                      <div className="ml-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full w-4 h-4 animate-spin"></div>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-muted-foreground text-xs text-center">
                  By submitting this form, you agree to our privacy policy.
                  We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
