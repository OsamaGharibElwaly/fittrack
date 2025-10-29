// components/home/FeaturesGrid.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Home as HomeIcon, 
  Dumbbell, 
  Salad, 
  Users, 
  BookOpenText, 
  LineChart 
} from "lucide-react";

// تعريف الـ features داخل الـ Client Component
const features = [
  { title: "Home", desc: "Quick access to your dashboard.", Icon: HomeIcon },
  { title: "Workouts", desc: "Browse and log workouts.", Icon: Dumbbell },
  { title: "Nutrition", desc: "Track your meals and calories.", Icon: Salad },
  { title: "Community", desc: "Connect and share with other members.", Icon: Users },
  { title: "Blog", desc: "Read guides and fitness articles.", Icon: BookOpenText },
  { title: "Progress", desc: "Charts & statistics to monitor growth.", Icon: LineChart },
];

export default function FeaturesGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className="py-12 mb-[50px]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {features.map(({ title, desc, Icon }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl bg-[#161616] p-6 shadow-sm ring-1 ring-white/5 cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ duration: 0.3 }}
              className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-[#FFA42B]/40"
            >
              <Icon className="h-5 w-5 text-[#FFA42B]" />
            </motion.div>
            <h3 className="text-center text-[#FFA42B] font-semibold mb-2">{title}</h3>
            <p className="text-center text-xs text-white/70 max-w-[22ch] mx-auto">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}