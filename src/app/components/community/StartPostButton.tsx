// components/community/StartPostButton.tsx
import { Button } from '../ui/Button';

export function StartPostButton() {
  return (
    <div className="mb-8">
      <Button variant="secondary" className="w-full text-left">
        Start a post...
      </Button>
    </div>
  );
}