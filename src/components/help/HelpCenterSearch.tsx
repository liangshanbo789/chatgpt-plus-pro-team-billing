"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  ArrowRight,
  Clock,
  AlertTriangle,
  Flame,
  CheckCircle,
  HelpCircle,
  Zap,
} from "lucide-react";
import { HELP_ARTICLES, HELP_CATEGORIES, HelpArticle } from "@/config/helpArticles";

export default function HelpCenterSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArticles = useMemo(() => {
    return HELP_ARTICLES.filter((article) => {
      // 分类筛选
      if (selectedCategory !== "all" && article.category !== selectedCategory) {
        return false;
      }

      // 关键词搜索
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      const matchTitle = article.title.toLowerCase().includes(query);
      const matchSummary = article.summary.toLowerCase().includes(query);
      const matchKeywords = article.keywords.some((k) =>
        k.toLowerCase().includes(query)
      );

      return matchTitle || matchSummary || matchKeywords;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* 搜索框与热搜标签专区 */}
      <div className="relative max-w-2xl mx-auto space-y-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-tertiary">
            <Search className="w-5 h-5 text-emerald-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索你遇到的报错或关键词，如：降智、429、403、card declined、终端代理..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface border-2 border-theme-subtle focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-primary placeholder:text-tertiary text-sm outline-none transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-tertiary hover:text-primary"
            >
              清空
            </button>
          )}
        </div>

        {/* 热门搜索高频词推荐 */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-secondary">
          <span className="text-tertiary flex items-center gap-1 font-mono text-[11px]">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            大家都在搜:
          </span>
          {[
            "降智",
            "429限流",
            "403被拒",
            "Your card has been declined",
            "Codex代理超时",
            "账号被封",
            "Team空间隔离",
          ].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSearchQuery(tag)}
              className="px-2 py-0.5 rounded-md bg-surface-elevated hover:bg-surface border border-theme-subtle text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 text-[11px] transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 分类筛选 Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 border-b border-theme-subtle">
        {HELP_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-emerald-500 text-zinc-950 font-bold shadow-xs"
                  : "bg-surface-elevated text-secondary hover:text-primary hover:bg-surface border border-theme-subtle"
              }`}
            >
              {cat.label}
              {cat.id === "all"
                ? ` (${HELP_ARTICLES.length})`
                : ` (${HELP_ARTICLES.filter((a) => a.category === cat.id).length})`}
            </button>
          );
        })}
      </div>

      {/* 文章卡片网格列表 */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12 rounded-2xl bg-surface border border-theme-subtle space-y-3">
          <HelpCircle className="w-10 h-10 text-tertiary mx-auto" />
          <h3 className="text-base font-bold text-primary">
            未找到包含“{searchQuery}”的相关解决方案
          </h3>
          <p className="text-xs text-secondary max-w-md mx-auto leading-relaxed">
            建议更换搜索关键词，或者直接查阅下方高频故障列表。您也可以直接联系微信客服{" "}
            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
              yqtp01
            </span>{" "}
            获取 1 对 1 技术诊断与代采支持。
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="btn-openai-white text-xs px-4 py-2 mt-2"
          >
            重置搜索与分类
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredArticles.map((article) => {
            const isCritical = article.urgency === "critical";
            return (
              <Link
                key={article.slug}
                href={`/help/${article.slug}/`}
                className="group p-5 rounded-2xl bg-surface border border-theme-subtle hover:border-emerald-500/50 hover:bg-surface-elevated transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                      {article.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          isCritical
                            ? "bg-red-500/10 text-red-500 border-red-500/20"
                            : "bg-surface-elevated text-tertiary border-theme-subtle"
                        }`}
                      >
                        {article.urgencyLabel}
                      </span>
                      <span className="text-[10px] text-tertiary font-mono">
                        {article.readingTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-theme-subtle/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {article.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] px-1.5 py-0.2 rounded bg-surface-elevated text-tertiary border border-theme-subtle"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                    <span>阅读排错方案</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
