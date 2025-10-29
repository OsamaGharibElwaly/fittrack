// src/components/contact/ContactHero.tsx
export default function ContactHero() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight hover:text-amber-400 transition-colors duration-300">
        Contact Us
      </h1>
      <p className="mt-3 text-sm text-zinc-400 max-w-2xl mx-auto hover:text-zinc-300 transition-colors duration-300">
        We’re here to help and answer any question you might have.
      </p>
    </div>
  );
}