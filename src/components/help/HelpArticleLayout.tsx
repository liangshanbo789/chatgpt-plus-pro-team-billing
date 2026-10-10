import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { HELP_ARTICLES, HelpArticle } from "@/config/helpArticles";
import HelpConversionCard from "./HelpConversionCard";

interface HelpArticleLayoutProps {
  article: HelpArticle;
  children: React.ReactNode;
  conversionContext?: "limit" | "degrade" | "payment" | "ban" | "general";
}

export default function HelpArticleLayout({
  article,
  children,
  conversionContext = "general",
}: HelpArticleLayoutProps) {
  // 获取相关推荐文章
  const relatedArticles = HELP_ARTICLES.filter((item) =>
    article.relatedSlugs.includes(item.slug)
  );

  // 面包屑结构化数据 (SEO Rich Snippets)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: "https://gongsi.one/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "问题排障中心",
        item: "https://gongsi.one/help/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.shortTitle,
        item: `https://gongsi.one/help/${article.slug}/`,
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto space-y-8 sm:space-y-10 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 顶部面包屑导航 */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-xs text-secondary overflow-x-auto scrollbar-none py-1"
      >
        <Link href="/" className="hover:text-primary transition-colors shrink-0">
          首页
        </Link>
        <span className="text-tertiary">/</span>
        <Link
          href="/help/"
          className="hover:text-primary transition-colors shrink-0 flex items-center gap-1"
        >
          <HelpCircle className="w-3 h-3 text-emerald-500" />
          <span>问题中心</span>
        </Link>
        <span className="text-tertiary">/</span>
        <span className="text-primary font-medium truncate max-w-xs">
          {article.shortTitle}
        </span>
      </nav>

      {/* 文章 Header 专区 */}
      <header className="space-y-4 pb-6 border-b border-theme-subtle">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
            {article.categoryLabel}
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-elevated text-secondary border border-theme-subtle">
            {article.badge}
          </span>
          <span className="text-xs text-tertiary flex items-center gap-1 ml-auto">
            <Clock className="w-3 h-3" />
            <span>阅读约 {article.readingTime}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-primary leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-secondary leading-relaxed bg-surface-elevated/70 p-4 rounded-xl border border-theme-subtle">
          💡 <strong>核心速览：</strong>
          {article.summary}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-tertiary">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>更新时间: {article.updateDate} (针对最新规则实测)</span>
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>技术团队实战验证</span>
            </span>
          </div>

          <Link
            href="/help/"
            className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>返回问题中心列表</span>
          </Link>
        </div>
      </header>

      {/* 正文插槽 */}
      <div className="prose prose-zinc dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-6">
        {children}
      </div>

      {/* 文章专属转化卡片 */}
      <HelpConversionCard context={conversionContext} />

      {/* 关联问题互链 (SEO 站内权重传递) */}
      {relatedArticles.length > 0 && (
        <section className="pt-6 border-t border-theme-subtle space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>相关技术排障与常见问题推荐</span>
            </h3>
            <Link
              href="/help/"
              className="text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>查看全部问题</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/help/${rel.slug}/`}
                className="p-3.5 rounded-xl bg-surface border border-theme-subtle hover:border-emerald-500/40 hover:bg-surface-elevated transition-all group flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {rel.categoryLabel}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {rel.shortTitle}
                  </h4>
                  <p className="text-[11px] text-secondary line-clamp-2 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>
                <div className="pt-2 text-[10px] text-tertiary flex items-center justify-between border-t border-theme-subtle/50 mt-2">
                  <span>{rel.readingTime}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    查看解法 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 底部快速返回 */}
      <div className="pt-4 flex items-center justify-between text-xs text-tertiary">
        <Link
          href="/help/"
          className="inline-flex items-center gap-1 text-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>返回问题中心</span>
        </Link>
        <Link
          href="/guide/stability/"
          className="text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          查阅《国内稳定使用 ChatGPT & Codex IP自检与避坑十诫》→
        </Link>
      </div>
    </article>
  );
}
