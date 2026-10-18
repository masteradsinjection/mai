import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { constructMetadata } from "@/lib/seo/metadata";
import { blogPosts, BlogPost } from "@/content/blog";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ConsultationCta } from "@/components/sections/ConsultationCta";

export const metadata: Metadata = constructMetadata({
  title: "Technical Marketing & Tracking Blog",
  description:
    "Engineering insights on server-side tracking, Meta CAPI, Google Ads value-based bidding, GA4 e-commerce setups, and conversion rate optimization.",
  path: "/blog",
});

export default function BlogListingPage() {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      {/* Header */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container>
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
              Technical Knowledgebase
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
              Performance Advertising & Tracking Engineering
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              In-depth technical articles, architecture teardowns, and actionable code tutorials for digital marketers, technical founders, and analytics engineers.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <Container>
            <div className="mb-4">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                Featured Analysis
              </span>
            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white shadow-card hover:shadow-floating transition-all">
              <div className="flex flex-wrap items-center gap-3 text-xs text-blue-300 mb-4">
                <span className="bg-blue-600/80 text-white px-2.5 py-0.5 rounded-full font-semibold">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(featuredPost.publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readingTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 leading-snug">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  By <strong className="text-white">{featuredPost.author.name}</strong> •{" "}
                  {featuredPost.author.role}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors shadow-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-200/80">
        <Container>
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              All Technical Guides & Tutorials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.slug}
                className="flex flex-col justify-between border-slate-200 hover:border-blue-300 transition-all bg-white"
              >
                <div>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge variant="blue">{post.category}</Badge>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>

                    <CardTitle className="text-base sm:text-lg">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>

                    <CardDescription className="text-xs mt-2 line-clamp-3">
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

                <CardFooter className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span>{formatDate(post.publishedAt)}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
