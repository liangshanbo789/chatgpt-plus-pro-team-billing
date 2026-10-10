import React from "react";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import {
  ShieldCheck,
  Receipt,
  FileText,
  FileCheck,
  Compass,
} from "lucide-react";

const DOCS_NAV = [
  {
    href: "/guide/stability/",
    label: "稳定使用与IP检测指南",
    icon: Compass,
    badge: "避坑必读",
  },
  {
    href: "/docs/proposal",
    label: "立项呈批模板",
    icon: FileText,
    badge: "采购汇报",
  },
  {
    href: "/docs/pricing",
    label: "阶梯代采报价单",
    icon: Receipt,
    badge: "2026最新",
  },
  {
    href: "/docs/sla",
    label: "SLA退赔保障条款",
    icon: ShieldCheck,
    badge: "72h兜底",
  },
  {
    href: "/docs/agreement",
    label: "代采购合作协议",
    icon: FileCheck,
    badge: "法务合规",
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-200">
      {/* 顶部自适应导航 */}
      <SubpageHeader
        categoryTitle="文档知识库"
        categoryShortTitle="知识库"
        badgeVariant="emerald"
        subnavLabel="知识库目录:"
        navItems={DOCS_NAV}
        calculatorText="测算对公预算"
        rightCustomLinks={
          <>
            <Link
              href="/solutions/codex-procurement/"
              className="text-xs text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hidden md:inline-flex items-center gap-1 font-medium shrink-0 whitespace-nowrap"
            >
              <span>Codex研发代采</span>
            </Link>
            <Link
              href="/solutions/gpt-bulk-procurement/"
              className="text-xs text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hidden md:inline-flex items-center gap-1 font-medium shrink-0 whitespace-nowrap"
            >
              <span>企业GPT集采</span>
            </Link>
          </>
        }
      />

      {/* 正文主体 */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* 底部版权与免责说明 */}
      <footer className="border-t border-theme-subtle bg-surface-elevated text-xs text-secondary py-8 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="text-secondary">
            AI 集采 (gongsi.one) · 企业级海外 AI 官方代采与对公合规解决方案
          </p>
          <p className="text-[11px] text-tertiary font-mono">
            四川省成都市高新区AI创新中心 · 官方客服微信：yqtp01 ·
            邮箱：liang@yqtp.cn
          </p>
        </div>
      </footer>
    </div>
  );
}
