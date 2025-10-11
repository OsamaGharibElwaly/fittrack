"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { POSTS, getUserById } from "../../lib/posts";

const FEATURED = POSTS[0]; // أول بوست كـ Featured
const LATEST = POSTS.slice(1, 4); // الباقي كـ Latest

export default function BlogComponent() {
  return (
    <div className="font-display bg-background-light text-slate-800 dark:bg-background-dark dark:text-slate-200 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3 lg:gap-12 lg:px-6">
          {/* العمود الرئيسي */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="text-slate-500" fill="currentColor" height="20" viewBox="0 0 256 256" width="20"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                </span>
                <input className="w-full rounded-lg border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50" placeholder="Search the blog..." type="search" />
              </div>
            </div>

            {/* Featured */}
            <div className="mb-12">
              <h2 className="mb-6 border-b border-slate-200 pb-2 text-2xl font-bold dark:border-slate-800">Featured</h2>
              <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md dark:bg-slate-900">
                <Link href={`/blog/${FEATURED.slug}`} className="block">
                  <div className="bg-cover bg-center aspect-video" style={{ backgroundImage: `url(${FEATURED.image})` }} />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold group-hover:text-primary">{FEATURED.title}</h3>
                    <p className="mb-2 text-slate-600 dark:text-slate-400">{FEATURED.excerpt}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">By {getUserById(FEATURED.authorId)?.name}</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Latest Posts */}
            <div>
              <h2 className="mb-6 border-b border-slate-200 pb-2 text-2xl font-bold dark:border-slate-800">Latest Posts</h2>
              <div className="space-y-8">
                {LATEST.map((post) => (
                  <div key={post.slug} className="group grid grid-cols-1 items-start gap-6 sm:grid-cols-3">
                    <Link href={`/blog/${post.slug}`} className="sm:col-span-1">
                      <div className="aspect-video w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                    </Link>
                    <div className="sm:col-span-2">
                      <h3 className="mb-2 text-lg font-bold group-hover:text-primary">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* الشريط الجانبي (ممكن تكمّله زي ما كان) */}
          <aside className="space-y-8 lg:col-span-1">
            {/* ... */}
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
