"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Clock, Search, ArrowRight, Tag, X } from "lucide-react";
import { BlogPost } from "@/content/blog";
import { formatDate } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface BlogListingProps {
  posts: BlogPost[];
}

export function BlogListing({ posts }: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Tracking Architecture",
    "Conversion Tracking",
    "Privacy & Compliance",
    "Analytics Engineering",
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = post.title.toLowerCase().includes(q);
      const inExcerpt = post.excerpt.toLowerCase().includes(q);
      const inTags = post.tags.some((t) => t.toLowerCase().includes(q));

      return inTitle || inExcerpt || inTags;
    });
  }, [posts, activeCategory, searchQuery]);

  return (
    <div>
      {/* Search Bar & Category Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 text-xs md:text-sm font-medium rounded-xl transition-all cursor-pointer",
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-sm ring-1 ring-blue-600"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="blog-search"
            type="text"
            placeholder="Search by topic, keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-xs md:text-sm rounded-xl border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card
            key={post.slug}
            className="flex flex-col justify-between border-slate-200 hover:border-blue-300 hover:shadow-card transition-all bg-white"
          >
            <div>
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="blue">{post.category}</Badge>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 3" />
                    {post.readingTime}
                  </span>
                </div>

                <CardTitle className="text-base sm:text-lg leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </CardTitle>

                <CardDescription className="text-xs mt-2 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>

            <CardFooter className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>{formatDate(post.publishedAt)}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
              >
                <span>Read Analysis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-subtle p-8 max-w-lg mx-auto">
          <p className="text-base font-bold text-slate-900 mb-1">No articles matched your criteria</p>
          <p className="text-xs text-slate-500 mb-4">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm cursor-pointer"
          >
            Clear Filters & Search
          </button>
        </div>
      )}
    </div>
  );
}
