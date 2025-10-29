import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Filter, Upload } from 'lucide-react';

interface PR {
  exercise: string;
  weight: string;
  date: string;
}

interface PersonalRecordsProps {
  data: PR[];
}

export function PersonalRecords({ data }: PersonalRecordsProps) {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Personal Records</h2>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button size="sm" variant="outline">
            <Upload className="w-4 h-4" /> Import
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="pb-3 text-gray-400 text-sm">Exercise</th>
              <th className="pb-3 text-gray-400 text-sm">Weight</th>
              <th className="pb-3 text-gray-400 text-sm">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pr) => (
              <tr key={pr.exercise} className="border-b border-gray-800 hover:bg-gray-900">
                <td className="py-3 font-medium">{pr.exercise}</td>
                <td className="py-3">{pr.weight}</td>
                <td className="py-3 text-gray-400">{pr.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}