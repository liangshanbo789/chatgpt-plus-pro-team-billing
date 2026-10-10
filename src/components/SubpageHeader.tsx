"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Calculator } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";

export interface SubpageNavItem {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface SubpageHeaderProps {
  /** 主模块全称，如 "行业解决方案"、"问题中心与排障" */
  categoryTitle: string;
  /** 小屏极窄设备下的精简名称，如 "解决方案"、"问题中心" */
  categoryShortTitle?: string;
  /** 徽章色系，默认 emerald */
  badgeVariant?: "emerald" | "blue" | "amber";
  /** 二级导航的前缀提示文本，如 "方案场景:"、"快速直达:" */
  subnavLabel?: string;
  /** 二级导航项目列表 */
  navItems: SubpageNavItem[];
  /** 桌面端额外快捷操作链接 */
  rightCustomLinks?: React.ReactNode;
  /** 测算预算按钮文本 */
  calculatorText?: string;
  /** 测算预算链接跳转地址，默认 "/#calculator" */
  calculatorHref?: string;
}

export default function SubpageHeader({
  categoryTitle,
  categoryShortTitle,
  badgeVariant = "emerald",
  subnavLabel,
  navItems,
  rightCustomLinks,
  calculatorText = "测算集采预算",
  calculatorHref = "/#calculator",
}: SubpageHeaderProps) {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  // 监听二级横向导航条滚动状态，动态展示左右淡入淡出提示阴影
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkScroll = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [navItems]);

  // 路径规范化判定激活状态
  const isItemActive = (targetHref: string) => {
    if (!pathname) return false;
    const normalize = (path: string) => path.replace(/\/+$/, "") || "/";
    const current = normalize(pathname);
    const target = normalize(targetHref);
    return current === target;
  };

  // 模块徽章配色
  const badgeStyleMap = {
    emerald:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    blue: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
    amber:
      "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
  };
  const badgeClass = badgeStyleMap[badgeVariant] || badgeStyleMap.emerald;

  return (
    <header className="sticky top-0 z-40 border-b border-theme-subtle bg-surface/90 backdrop-blur-md">
      {/* 顶部主导航栏：高度在手机端紧凑至 56px，桌面端 64px */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* 左侧：返回首页 + 品牌Logo与模块徽章 */}
        <div className="flex items-center gap-1.5 sm:gap-3.5 min-w-0 shrink-0">
          {/* 返回首页快捷键 */}
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-1.5 py-1 px-1.5 sm:px-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-elevated active:scale-95 transition-all shrink-0 text-xs font-medium group"
            title="返回官网首页"
          >
            <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
            <span className="whitespace-nowrap hidden min-[360px]:inline sm:hidden">
              首页
            </span>
            <span className="whitespace-nowrap hidden sm:inline">返回首页</span>
          </Link>

          {/* 装饰分割线 */}
          <div className="h-3.5 w-px bg-theme-subtle shrink-0 hidden min-[360px]:block" />

          {/* 品牌与当前模块标贴 */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center shadow-xs shrink-0 group-hover:border-theme-hover transition-colors">
              <BrandLogo size={16} variant="emerald" />
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="font-semibold text-sm tracking-tight text-primary whitespace-nowrap shrink-0">
                AI 集采
              </span>
              <span
                className={`text-[11px] font-mono px-1.5 py-0.5 rounded border whitespace-nowrap shrink-0 ${badgeClass}`}
              >
                <span className="hidden sm:inline">{categoryTitle}</span>
                <span className="sm:hidden">
                  {categoryShortTitle || categoryTitle}
                </span>
              </span>
            </div>
          </Link>
        </div>

        {/* 右侧：操作区（完全自适应，杜绝挤压变形） */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* 桌面端专属快速直达链接 */}
          {rightCustomLinks}

          {/* 主题模式切换：桌面端胶囊带字，移动端精致单图标 */}
          <div className="hidden sm:block shrink-0">
            <ThemeToggle variant="pill" />
          </div>
          <div className="sm:hidden shrink-0">
            <ThemeToggle variant="icon" />
          </div>

          {/* 测算预算按钮：移动端精致单图标，桌面端全宽高反差胶囊 */}
          <Link
            href={calculatorHref}
            className="sm:hidden w-8 h-8 rounded-lg border border-theme-subtle bg-surface-elevated text-secondary hover:text-primary active:scale-95 flex items-center justify-center transition-all shrink-0 shadow-xs"
            title={calculatorText}
            aria-label={calculatorText}
          >
            <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </Link>

          <Link
            href={calculatorHref}
            className="btn-openai-white text-xs px-3.5 py-1.5 hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{calculatorText}</span>
          </Link>
        </div>
      </div>

      {/* 二级方案/场景横向滑动导航条 */}
      <div className="relative border-t border-theme-subtle bg-surface-elevated/60 backdrop-blur-sm overflow-hidden">
        {/* 左侧可滑动微渐变遮罩 */}
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-surface-elevated to-transparent z-10 transition-opacity" />
        )}

        {/* 滚动容器 */}
        <div
          ref={scrollRef}
          className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-2.5 py-2 overflow-x-auto scrollbar-none scroll-smooth"
        >
          {subnavLabel && (
            <span className="text-[11px] font-mono text-tertiary mr-0.5 sm:mr-1 shrink-0 hidden xs:inline whitespace-nowrap">
              {subnavLabel}
            </span>
          )}

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isItemActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs whitespace-nowrap shrink-0 transition-all font-medium ${
                  active
                    ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/35 font-semibold shadow-xs"
                    : "text-secondary hover:text-primary hover:bg-surface border border-transparent hover:border-theme-subtle"
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      active ? "text-emerald-600 dark:text-emerald-400" : "text-secondary"
                    }`}
                  />
                )}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono shrink-0 ${
                      active
                        ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                        : "bg-surface text-tertiary border border-theme-subtle"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* 右侧可滑动微渐变遮罩 */}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-elevated to-transparent z-10 transition-opacity" />
        )}
      </div>
    </header>
  );
}
