// app/workouts/page.tsx
import WorkoutsClient from './WorkoutsClient';
import { getWorkoutsData } from '../lib/workouts-data';

export default async function WorkoutsPage() {
  const data = await getWorkoutsData();
  return <WorkoutsClient initialData={data} />;
}
