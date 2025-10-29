// components/ui/IconButton.tsx
import { cn } from '../../lib/utils';

type Icon = 'like' | 'heart';

const icons: Record<Icon, string> = {
  like: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
};

export function IconButton({ icon, count, onClick }: { icon: Icon; count: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-all duration-200 hover:scale-110"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[icon]} />
      </svg>
      <span className="font-semibold">{count}</span>
    </button>
  );
}