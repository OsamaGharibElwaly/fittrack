import { NextResponse } from 'next/server';
import { fetch as undiciFetch } from 'undici';

export const runtime = 'nodejs';

const EXTERNAL_BASE = process.env.EXERCISEDB_BASE || 'https://v2.exercisedb.dev';

export async function GET() {
  try {
    const res = await undiciFetch(`${EXTERNAL_BASE}/api/v1/bodyparts`, { cache: 'no-store' });
    if (!res.ok) return NextResponse.json({ error: await res.text() }, { status: res.status });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e?.message || 'server error' }, { status: 500 });
  }
}
