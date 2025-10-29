// app/community/page.tsx
import { CommunityWrapper } from './CommunityWrapper';
import { communityPosts } from '../data/community';

// Server Component: يمرر البيانات للـ Client Wrapper
export default function CommunityPage() {
  return <CommunityWrapper initialPosts={communityPosts} />;
}