// src/app/contact/page.tsx
import ContactHero from "../components/contact/ContactHero";
import FoundersGrid from "../components/contact/FounderGrid";
import ContactCTA from "../components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | GymTracker",
  description: "Get in touch with the founders of GymTracker.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactHero />
        <FoundersGrid />
      </section>
      <ContactCTA />
    </main>
  );
}