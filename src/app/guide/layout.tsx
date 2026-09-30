import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";
import {
  ArrowLeft,
  ShieldCheck,
  Code2,
  Building2,
  BookOpen,
  Calculator,
  Compass,
} from "lucide-react";

const GUIDE_NAV = [
  {
    href: "/guide/stability/",
    label: "稳定使用与网络自检指南",
    icon: Compass,
    badge: "必读",
  },
  {
    href: "/solutions/codex-procurement/",
    label: "Codex 研发代采方案",
    icon: Code2,
    badge: "效能",
  },
  {
    href: "/solutions/gpt-bulk-procurement/",
    label: "企业 GPT 官方集采",
    icon: Building2,
    badge: "对公",
  },
  {
    href: "/docs/pricing/",
    label: "2026 最新代采阶梯报价单",
    icon: BookOpen,
    badge: "手册",
  },
];

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-200">
      {/* 顶部简明导航 */}
      <header className="sticky top-0 z-40 border-b border-theme-subtle bg-surface/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 group text-secondary hover:text-primary transition-colors"
              title="返回官网首页"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-medium">返回首页</span>
            </Link>

            <div className="h-4 w-px bg-theme-subtle" />

            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center justify-center shadow-xs">
                <BrandLogo size={16} variant="emerald" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-primary">
                  AI 代采
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  技术避坑指南
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/docs/sla/"
              className="text-xs text-secondary hover:text-primary transition-colors hidden md:inline-flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>72h 封号包赔协议</span>
            </Link>
            <ThemeToggle />
            <Link
              href="/#calculator"
              className="btn-openai-white text-xs px-3.5 py-1.5 hidden sm:inline-flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>测算集采预算</span>
            </Link>
          </div>
        </div>

        {/* 二级场景切换导航条 */}
        <div className="border-t border-theme-subtle bg-surface-elevated/60 overflow-x-auto scrollbar-none">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 py-2">
            <span className="text-[11px] font-mono text-tertiary mr-1 shrink-0">
              知识库专区:
            </span>
            {GUIDE_NAV.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-secondary hover:text-primary hover:bg-surface border border-transparent hover:border-theme-subtle transition-all shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-secondary" />
                  <span className="font-medium">{item.label}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-surface text-tertiary border border-theme-subtle font-mono">
                    {item.badge}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* 正文主体 */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      {/* 底部版权与生态网络 */}
      <footer className="border-t border-theme-subtle bg-surface-elevated text-xs text-secondary py-10 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-b border-theme-subtle/60 pb-6">
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                AI 代采 · 官方企业服务
              </div>
              <p className="text-secondary text-xs leading-relaxed">
                国内领先的海外 AI 生产力与 OpenAI Codex 代码助手官方代采平台。
                为企业提供 100% 正规海外商业银行卡直充、对公结算、6% 增值税专用发票与 SLA 72h 封号包赔兜底服务。
              </p>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                实用资源与方案
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link
                    href="/guide/stability/"
                    className="hover:text-primary transition-colors text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    • 国内稳定使用 ChatGPT & Codex 全景指南
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/codex-procurement/"
                    className="hover:text-primary transition-colors"
                  >
                    • 研发团队 OpenAI Codex / 代码助手企业代采
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/gpt-bulk-procurement/"
                    className="hover:text-primary transition-colors"
                  >
                    • 企业 GPT 官方集中采购 (集采) 方案
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
              </ul>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                合规保障与服务支持
              </div>
              <ul className="space-y-1.5 text-xs text-secondary">
                <li>• 对公账户：中国工商银行股份有限公司账户</li>
                <li>• 票据资质：国家税务数电 6% 增值税专用发票</li>
                <li>• 法律条款：盖公章《SLA 72h 封号包赔退款协议》</li>
                <li>• 技术与商务咨询微信：yqtp01 · 邮箱：liang@yqtp.cn</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-[11px] text-tertiary font-mono">
            © 2026 AI 代采 (gongsi.one) · 四川省成都市高新区AI创新中心 · 统一社会信用代码可查
          </div>
        </div>
      </footer>
    </div>
  );
}
