"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Founder } from "./founders";

interface FounderCardProps {
  founder: Founder;
}

export default function FounderCard({ founder }: FounderCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative h-20 w-20 hover:scale-105 transition-transform duration-300">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="rounded-full object-cover ring-2 ring-zinc-800"
            sizes="80px"
            priority
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold hover:text-amber-400 transition-colors duration-300">
          {founder.name}
        </h3>
        <p className="text-xs text-zinc-400">{founder.role}</p>
      </div>

      <div className="mt-6 rounded-xl bg-zinc-900/60 border border-zinc-800 p-5 hover:border-amber-500/40 transition-all duration-300">
        <h4 className="text-sm font-medium text-zinc-200">Contact Information</h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="break-all">
            <a href={`mailto:${founder.email}`} className="hover:text-amber-400 transition-colors duration-200">
              Email: {founder.email}
            </a>
          </li>
          <li>
            <a href={`tel:${founder.phone}`} className="hover:text-amber-400 transition-colors duration-200">
              Phone: {founder.phone}
            </a>
          </li>
          <li>
            <span>Address: {founder.address}</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 rounded-xl bg-zinc-900/60 border border-zinc-800 p-5 hover:border-amber-500/40 transition-all duration-300">
        <h4 className="text-sm font-medium text-zinc-200">Social Media</h4>
        <ul className="mt-3 space-y-2 text-sm">
          {Object.entries(founder.socials).map(([platform, url]) => (
            <li key={platform}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors duration-200 capitalize"
              >
                {platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}