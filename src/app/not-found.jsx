import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Link from "next/link";


export default function NotFound() {
return (
<div className="bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark min-h-screen flex flex-col font-display">
<Header />


<main className="flex-grow flex items-center justify-center p-4">
<div className="w-full max-w-lg text-center">
<div className="flex justify-center mb-6">
<div className="w-48 h-48 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full">
<svg viewBox="0 0 24 24" width="96" height="96" aria-hidden="true" className="text-primary">
<path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.01 5.75c.62 0 1.12.5 1.12 1.12v.02c0 .62-.5 1.12-1.12 1.12h-.02a1.12 1.12 0 0 1-1.12-1.12v-.02c0-.62.5-1.12 1.12-1.12h.02ZM10.75 11h2.5c.41 0 .75.34.75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-4.5c0-.41.34-.75.75-.75Z"/>
</svg>
</div>
</div>


<h2 className="text-3xl font-bold mb-2">404 — Page Not Found</h2>
<p className="text-foreground-light/80 dark:text-foreground-dark/80 mb-8">
the server could not find the requested page or resource
</p>


<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link
href="/"
className="w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-opacity-90 transition-colors text-center"
>
Back to Home
</Link>
</div>
</div>
</main>


<Footer />
</div>
);
}


// Need More Style