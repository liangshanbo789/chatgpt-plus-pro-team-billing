import React from "react";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import {
  Code2,
  Building2,
  BookOpen,
} from "lucide-react";

const SOLUTIONS_NAV = [
  {
    href: "/solutions/codex-procurement/",
    label: "Codex 研发代码助手采购",
    icon: Code2,
    badge: "研发效能",
  },
  {
    href: "/solutions/gpt-bulk-procurement/",
    label: "企业 GPT 官方集中采购",
    icon: Building2,
    badge: "阶梯集采",
  },
];

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-200">
      {/* 顶部自适应导航 */}
      <SubpageHeader
        categoryTitle="行业解决方案"
        categoryShortTitle="解决方案"
        badgeVariant="emerald"
        subnavLabel="方案场景:"
        navItems={SOLUTIONS_NAV}
        calculatorText="测算集采预算"
        rightCustomLinks={
          <Link
            href="/docs/pricing/"
            className="text-xs text-secondary hover:text-primary transition-colors hidden md:inline-flex items-center gap-1 shrink-0 whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>知识库文档</span>
          </Link>
        }
      />

      {/* 方案正文主体 */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* 底部版权与内链网络 */}
      <footer className="border-t border-theme-subtle bg-surface-elevated text-xs text-secondary py-10 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-b border-theme-subtle/60 pb-6">
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                AI 集采 · 官方企业服务
              </div>
              <p className="text-secondary text-xs leading-relaxed">
                专注为国内研发技术团队、出海机构及中大型企业提供 OpenAI
                官方代采、GPT 战略集采、对公结算与 6% 增值税专用发票开具服务。
              </p>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                核心方案专区
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link
                    href="/solutions/codex-procurement/"
                    className="hover:text-primary transition-colors"
                  >
                    • 研发团队 OpenAI Codex / 代码助手对公代采
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/gpt-bulk-procurement/"
                    className="hover:text-primary transition-colors"
                  >
                    • 大中型企业 GPT 官方集中采购 (集采) 方案
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/pricing/"
                    className="hover:text-primary transition-colors"
                  >
                    • 2026 最新官方代采阶梯报价单手册
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guide/stability/"
                    className="hover:text-primary transition-colors text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    • 国内稳定使用 ChatGPT & Codex 全景指南
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                合规与支持
              </div>
              <ul className="space-y-1.5 text-xs text-secondary">
                <li>• 结算银行：中国工商银行股份有限公司对公账户</li>
                <li>• 发票资质：国家税务数电 6% 增值税专用发票</li>
                <li>• 兜底协议：公章法律效力《SLA 72h 封号包赔协议》</li>
                <li>• 咨询微信：yqtp01 · 邮箱：liang@yqtp.cn</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-[11px] text-tertiary font-mono">
            © 2026 AI 集采 (gongsi.one) ·
            四川省成都市高新区AI创新中心 · 统一社会信用代码可查
          </div>
        </div>
      </footer>
    </div>
  );
}
