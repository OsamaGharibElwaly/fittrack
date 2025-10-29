'use client';

import { motion, Variants } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

// تعريف الأنواع
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const barVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, delay: 0.3 },
  },
};

interface VolumeChartProps {
  total?: string;
  change?: string;
  period?: string;
}

export function VolumeChart({
  total = '1,200 kg total',
  change = 'All lifts +15%',
  period = 'Last 30 Days',
}: VolumeChartProps) {
  return (
    <Card whileHover={{ scale: 1.02 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <motion.h3 variants={textVariants} className="text-lg font-semibold">
            Workout Volume
          </motion.h3>
          <Badge variant="default">{period}</Badge>
        </div>

        <motion.p variants={textVariants} className="text-3xl font-bold text-[#FFA42B]">
          {total}
        </motion.p>

        <motion.p variants={textVariants} className="text-sm text-green-400">
          {change}
        </motion.p>

        <div className="mt-6 h-24 bg-gray-900 rounded-lg flex items-end justify-center p-4">
          <motion.div
            variants={barVariants}
            className="w-16 h-20 bg-gradient-to-t from-[#FFA42B] to-orange-400 rounded-t-md"
          />
        </div>
      </motion.div>
    </Card>
  );
}