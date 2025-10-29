'use client';

import { motion, Variants } from 'framer-motion';
import { Card } from '../ui/Card';

interface DataPoint {
  month: string;
  value: number;
}

interface ProgressOverTimeProps {
  data?: DataPoint[];
  title?: string;
  total?: string;
  change?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const barVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const defaultData: DataPoint[] = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 48 },
  { month: 'Mar', value: 56 },
  { month: 'Apr', value: 64 },
  { month: 'May', value: 72 },
  { month: 'Jun', value: 80 },
];

export function ProgressOverTime({
  data = defaultData,
  title = 'Progress Over Time',
  total = '3,000 kg',
  change = 'Last 6 Months +20%',
}: ProgressOverTimeProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <Card>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold text-[#FFA42B]">{total}</p>
        <p className="text-sm text-green-400 mb-6">{change}</p>

        <div className="h-24 bg-gray-900 rounded-lg flex items-end justify-around p-4 gap-2">
          {data.map((point) => {
            const height = (point.value / maxValue) * 100;
            return (
              <motion.div
                key={point.month}
                variants={barVariants}
                className="flex flex-col items-center"
                style={{ height: '100%' }}
              >
                <div
                  className="w-8 bg-gradient-to-t from-gray-600 to-gray-500 rounded-t-sm transition-all duration-500"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-500 mt-1">{point.month}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Card>
  );
}