'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MetricCard } from './MetricCard';
import { Tabs } from './Tabs';
import { VolumeChart } from './VolumeChart';
import { ProgressOverTime } from './ProgressOverTime';
import { PersonalRecords } from './PersonalRecords';

// تعريف variants بره
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ProgressTracking() {
  const [activeTab, setActiveTab] = useState('Last 30 Days');

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-10 px-4 md:px-8">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-8"
      >
        <motion.div variants={sectionVariants} className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Progress Tracking</h1>
          <p className="text-gray-400">
            Analyze your workout performance, body metrics, goals, and achievements over time.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <MetricCard title="Weight" value="82.3 kg" change="-1.7kg" trend="down" progress={75} />
          <MetricCard title="Body Fat" value="17.8%" change="-0.9%" trend="down" progress={60} color="from-red-500 to-red-400" />
          <MetricCard title="Muscle Mass" value="39.1 kg" change="+0.6kg" trend="up" progress={85} issue />
          <MetricCard title="Consistency" value="4.1 / 5" change="+12%" trend="up" progress={82} color="from-[#FFA42B] to-orange-400" />
        </motion.div>

        <motion.div variants={sectionVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VolumeChart />
          <ProgressOverTime />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <PersonalRecords
            data={[
              { exercise: 'Bench Press', weight: '225 lbs', date: '2023-08-15' },
              // ... باقي البيانات
            ]}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}