"use client";
import { useRouter } from "next/navigation";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 


export default function Error({ error, reset }) {
const router = useRouter();


useEffect(() => {
// اختياري: إرسال الخطأ إلى خدمة مراقبة (Sentry/LogRocket …)
// console.error(error);
}, [error]);


return (
<div className="bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark min-h-screen flex flex-col font-display">
<Header />


<main className="flex-grow flex items-center justify-center p-4">
<div className="w-full max-w-lg text-center">
<div className="flex justify-center mb-6">
<div className="w-48 h-48 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full">
{/* أيقونة خطأ SVG بدون اعتماد على خطوط خارجية */}
<svg viewBox="0 0 24 24" width="96" height="96" aria-hidden="true" className="text-primary">
<path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm0 10a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 17Z"/>
</svg>
</div>
</div>


<h2 className="text-3xl font-bold mb-2">Oops! Something went wrong.</h2>
<p className="text-foreground-light/80 dark:text-foreground-dark/80 mb-8">
حصل خطأ غير متوقع. حاول مرة أخرى أو ارجع للصفحة السابقة.
</p>


<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button
onClick={() => router.back()}
className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary/20 dark:bg-primary/30 text-primary font-bold hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
>
Go Back
</button>


<button
onClick={() => reset()}
className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition-colors"
>
Try Again
</button>
</div>
</div>
</main>


<Footer />
</div>
);
}