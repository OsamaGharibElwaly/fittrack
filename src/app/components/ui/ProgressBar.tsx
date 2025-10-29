// components/ui/ProgressBar.tsx
interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({ value, color = 'from-blue-500 to-blue-400' }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-700`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}