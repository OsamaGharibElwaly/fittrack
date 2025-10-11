import { Suspense } from "react";
import LoginClient from "./LoginClient";

// علشان تمنع Next.js يحاول يعمل Prerender للصفحة دي
export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <LoginClient />
    </Suspense>
  );
}
