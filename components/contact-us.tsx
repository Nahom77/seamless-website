"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, PinIcon, Send } from "lucide-react";
import { toast } from "sonner";
import linkedinLogo from "@/public/images/linkedin-logo.svg";
import facebookLogo from "@/public/images/facebook-logo.svg";
import xLogo from "@/public/images/x-icon.svg";
import Image from "next/image";

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

    // Send data to the api
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("Message sent successfully 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast("Failed to send message 😢");
      }
    } catch (err) {
      toast("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact-us" className="px-4 lg:px-8">
      <div className="max-w-6xl mx-auto mt-15 px-4 sm:px-6 container">
        <div className="py-12 md:py-20 items-center gap-18 grid lg:grid-cols-2 border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <div className="mb-6 px-4 py-2 items-center inline-flex bg-primary/10 border border-primary/20 rounded-full">
              <span className="font-medium text-primary text-sm">
                💬 Get In Touch
              </span>
            </div>

            <h2 className="pb-4 bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              Send us a message
              <span className="bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-200 text-transparent">
                {" "}
                {/* team's workflow? */}
              </span>
            </h2>

            <p className="mb-8 text-muted-foreground text-xl leading-relaxed">
              Have questions about our features, pricing, or need a custom
              solution? Our team is here to help you succeed.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex justify-center items-center bg-[#3c83f5]/10 border border-[#3c83f5]/20 rounded-xl">
                  <Mail className="w-6 h-6 text-[#3c83f5]" />
                </div>
                <div>
                  <h4 className="font-semibold">Email us directly</h4>
                  <p className="text-muted-foreground">
                    admin@seamlessethiopia.com
                  </p>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex justify-center items-center bg-[#818df7]/10 border border-[#818df7]/20 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-[#818df7]" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone number</h4>
                  <p className="text-muted-foreground">+251913659277</p>
                </div>
              </div> */}

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex justify-center items-center bg-[#818df7]/10 border border-[#818df7]/20 rounded-xl">
                  <PinIcon className="w-6 h-6 text-[#818df7]" />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-muted-foreground">
                    Kirkos, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-4 border-card-border border-t"></div>

            <div className="flex justify-center items-center gap-6">
              <div className="w-12 h-12 flex justify-center items-center bg-[#818df7]/10 border border-[#818df7]/20 rounded-xl">
                <Image
                  src={linkedinLogo}
                  alt="Linkedin logo"
                  className="w-6 h-6 text-[#818df7]"
                />
              </div>
              <div className="w-12 h-12 flex justify-center items-center bg-[#818df7]/10 border border-[#818df7]/20 rounded-xl">
                <Image
                  src={facebookLogo}
                  alt="Facebook logo"
                  className="w-6 h-6 text-[#]"
                />
              </div>
              <div className="w-12 h-12 flex justify-center items-center bg-[#818df7]/10 border border-[#818df7]/20 rounded-xl">
                <Image src={xLogo} alt="X logo" className="w-6 h-6 text-[#]" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-delay-200 animate-fade-in">
            <div className="p-8 bg-surface border border-card-border rounded-2xl">
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
                  className="w-full group disabled:opacity-50 hover:shadow-lg text-primary-foreground hero-gradient"
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending...
                      <div className="w-4 h-4 ml-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
