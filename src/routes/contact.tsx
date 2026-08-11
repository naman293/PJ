import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Press Kit — PJ Explained" },
      {
        name: "description",
        content:
          "Brand partnerships, media enquiries and press kit downloads for PJ Explained. Get in touch with the team.",
      },
      { property: "og:title", content: "Contact & Press Kit — PJ Explained" },
      {
        property: "og:description",
        content: "Partnerships, press and collaborations — start here.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [subject, setSubject] = useState("Brand partnership");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setSubject("Brand partnership");
      } else {
        throw new Error("Failed to send message. Please try again later.");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-site px-6 py-16">
          <p className="label-xs text-signal">Contact</p>
          <h1 className="display mt-3 text-[clamp(2.25rem,7.5vw,5.25rem)]">Get in touch</h1>
          <p className="mt-4 max-w-xl text-ash">
            Brand collaborations, studio screenings, interviews and press. Real enquiries get a real
            reply within a few working days.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-12 px-6 py-16 lg:grid-cols-[1fr_1.1fr] items-center">
        <div className="w-full">
          <img 
            src="/images/contact-image.png" 
            alt="Press Kit" 
            className="w-full h-auto rounded-[12px] object-contain" 
          />
        </div>

        {isSubmitted ? (
          <div className="space-y-5 rounded-[12px] border border-border bg-carbon p-8 text-center h-fit">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal/20 text-signal font-bold text-xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-paper">Enquiry Sent!</h3>
            <p className="text-ash text-sm">
              Thank you for reaching out. We have received your message and will get back to you within a few working days.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="label-xs rounded-[10px] bg-signal px-6 py-3 text-white hover:bg-signal/90 transition-colors cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-5 rounded-[12px] border border-border bg-carbon p-8 h-fit"
            onSubmit={handleSubmit}
          >
            {/* Required Netlify hidden form fields */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            {error && (
              <div className="rounded-[8px] bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-400">
                {error}
              </div>
            )}

            <div>
              <label className="label-xs" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full rounded-[10px] border border-border bg-ink px-4 py-3 text-paper focus:outline-none focus:border-signal transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="label-xs" htmlFor="cemail">
                Email
              </label>
              <input
                id="cemail"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full rounded-[10px] border border-border bg-ink px-4 py-3 text-paper focus:outline-none focus:border-signal transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="label-xs" htmlFor="subject">
                Enquiry type
              </label>
              <input type="hidden" name="subject" value={subject} />
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger id="subject" className="mt-2 w-full rounded-[10px] border border-border bg-ink px-4 py-6 text-paper text-base data-[state=open]:border-signal transition-colors">
                  <SelectValue placeholder="Brand partnership" />
                </SelectTrigger>
                <SelectContent className="bg-carbon border-border text-paper rounded-[10px]">
                  <SelectItem value="Brand partnership" className="focus:bg-signal focus:text-white cursor-pointer py-3 rounded-md">Brand partnership</SelectItem>
                  <SelectItem value="Press / interview" className="focus:bg-signal focus:text-white cursor-pointer py-3 rounded-md">Press / interview</SelectItem>
                  <SelectItem value="Collaboration" className="focus:bg-signal focus:text-white cursor-pointer py-3 rounded-md">Collaboration</SelectItem>
                  <SelectItem value="Something else" className="focus:bg-signal focus:text-white cursor-pointer py-3 rounded-md">Something else</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="label-xs" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 w-full rounded-[10px] border border-border bg-ink px-4 py-3 text-paper focus:outline-none focus:border-signal transition-colors"
                placeholder="Tell us about your enquiry..."
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="label-xs rounded-[10px] bg-signal px-6 py-3 text-white hover:bg-signal/90 disabled:opacity-50 transition-colors cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send enquiry"}
            </button>
          </form>
        )}
      </section>
    </>
  );
}

