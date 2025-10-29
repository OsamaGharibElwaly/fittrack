// src/app/blog/page.tsx
import BlogHero from "../components/blog/BlogHero";
import SearchBar from "../components/blog/SearchBar";
import CategoryTabs from "../components/blog/CategoryTabs.tsx";
import BlogGrid from "../components/blog/BlogGrid";
import Pagination from "../components/blog/Pagination";
import { useBlogFilters } from "../components/blog/useBlogFilters";

export const metadata = {
  title: "Blog | FitTrack",
  description: "Fitness, nutrition, and mindset tips to help you crush your goals.",
};

export default function BlogPage() {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    currentPage,
    filteredPosts,
  } = useBlogFilters();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <BlogHero />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        <BlogGrid posts={filteredPosts} />
        <Pagination currentPage={currentPage} onPageChange={() => {}} />
      </div>
    </div>
  );
}