import { Button } from '../ui/Button';
import { Dumbbell, Calendar, Star } from 'lucide-react';

interface Tab {
  icon: any;
  label: string;
}

const tabs: Tab[] = [
  { icon: Dumbbell, label: 'All Exercises' },
  { icon: Calendar, label: 'Last 30 Days' },
  { icon: Star, label: 'PRs' },
];

interface TabsProps {
  activeTab: string;
  onTabChange: (label: string) => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <Button
          key={tab.label}
          variant={activeTab === tab.label ? 'primary' : 'outline'}
          size="md"
          icon={tab.icon}
          onClick={() => onTabChange(tab.label)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}