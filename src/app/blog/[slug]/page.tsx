import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Tag, BookOpen, ArrowRight } from "lucide-react";
import { blogPosts, BlogPost } from "@/content/blog";
import { constructMetadata } from "@/lib/seo/metadata";
import { ArticleJsonLd } from "@/lib/seo/json-ld";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultationCta } from "@/components/sections/ConsultationCta";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.publishedAt,
    authors: [post.author.name],
  });
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        datePublished={post.publishedAt}
        authorName={post.author.name}
      />

      {/* Header */}
      <section className="pt-10 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <Container size="narrow">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
              <Badge variant="blue">{post.category}</Badge>
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between gap-4 py-4 border-y border-slate-200/80 text-xs text-slate-600">
              <div>
                Written by <strong className="text-slate-900">{post.author.name}</strong> •{" "}
                {post.author.role}
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/blog"
                  className="font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> All Articles
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <article className="py-16 bg-white">
        <Container size="narrow">
          <div className="space-y-12 text-slate-800">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.codeBlock && (
                  <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 shadow-card">
                    {section.codeBlock.caption && (
                      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                        <span>{section.codeBlock.caption}</span>
                        <span className="uppercase text-blue-400 font-semibold">
                          {section.codeBlock.language}
                        </span>
                      </div>
                    )}
                    <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-blue-200">
                      <code>{section.codeBlock.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-14 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Related Technical Analyses
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <div
                  key={related.slug}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
                      {related.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {related.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {related.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span>{related.readingTime}</span>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </article>

      {/* Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
