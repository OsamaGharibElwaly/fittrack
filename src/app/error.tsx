'use client';

import { useEffect } from 'react';
import ErrorScreen from './components/ErrorScreen';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <ErrorScreen
      code="Error"
      title="Something went wrong"
      message={error?.message || 'An unexpected error occurred. Please try again.'}
      primaryAction={{ type: 'button', onClick: reset, label: 'Try Again' }}
      secondaryAction={{ type: 'link', href: '/', label: 'Back to Home' }}
    />
  );
}
