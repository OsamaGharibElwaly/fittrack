// components/progress/MetricCard.tsx
import { Card } from '../ui/Card';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

interface Metric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  progress: number;
  color?: string;
  issue?: boolean;
}

export function MetricCard({ title, value, change, trend, progress, color, issue }: Metric) {
  return (
    <Card className="relative">
      {issue && (
        <Badge variant="destructive" className="absolute -top-2 -left-2">
          <AlertCircle className="w-3 h-3" /> 1 issue
        </Badge>
      )}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          <p
            className={`text-xs flex items-center gap-1 mt-1 ${
              trend === 'up' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </p>
        </div>
      </div>
      <ProgressBar value={progress} color={color} />
    </Card>
  );
}