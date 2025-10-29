// components/community/CTASection.tsx
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="mt-12 bg-orange-500 rounded-lg p-8 text-black"
    >
      <h2 className="text-2xl font-bold mb-2">Ready to level up your fitness?</h2>
      <p className="mb-6">Track workouts, set goals, and see progress — all in one place.</p>
      <Button variant="primary">Start Free</Button>
    </motion.div>
  );
}