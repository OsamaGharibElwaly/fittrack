import ErrorScreen from '../../../components/ErrorScreen';

const MAP: Record<
  string,
  { title: string; message: string; primary?: { href: string; label: string }; secondary?: { href: string; label: string } }
> = {
  '401': {
    title: 'Unauthorized',
    message: 'You need to sign in to access this page.',
    primary: { href: '/login', label: 'Sign In' },
    secondary: { href: '/', label: 'Back to Home' },
  },
  '402': {
    title: 'Payment Required',
    message: 'This feature needs an active plan. Please upgrade or renew your subscription.',
    primary: { href: '/pricing', label: 'View Plans' },
    secondary: { href: '/', label: 'Back to Home' },
  },
  '403': {
    title: 'Forbidden',
    message: 'You don’t have permission to view this resource.',
    primary: { href: '/', label: 'Back to Home' },
    secondary: { href: '/contact', label: 'Contact Support' },
  },
  '404': {
    title: 'Page Not Found',
    message: 'The page you’re looking for might have been moved, renamed, or removed.',
    primary: { href: '/', label: 'Back to Home' },
    secondary: { href: '/faq', label: 'FAQ' },
  },
  '500': {
    title: 'Server Error',
    message: 'Our servers had a hiccup. Please try again in a moment.',
    primary: { href: '/', label: 'Back to Home' },
    secondary: { href: '/status', label: 'System Status' },
  },
};

export default async function StatusPage({ params }: { params: { code: string } }) {
  const { code } = await params;
  const content = MAP[code] ?? {
    title: 'Unexpected Error',
    message: 'Something went wrong.',
    primary: { href: '/', label: 'Back to Home' },
    secondary: { href: '/contact', label: 'Contact Support' },
  };

  return (
    <ErrorScreen
      code={code}
      title={content.title}
      message={content.message}
      primaryAction={{ type: 'link', href: content.primary!.href, label: content.primary!.label }}
      secondaryAction={{ type: 'link', href: content.secondary!.href, label: content.secondary!.label }}
    />
  );
}
