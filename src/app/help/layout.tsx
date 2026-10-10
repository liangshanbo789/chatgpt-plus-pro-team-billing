import React from "react";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import {
  ShieldCheck,
  Code2,
  Building2,
  BookOpen,
  Compass,
  HelpCircle,
  Zap,
} from "lucide-react";

const HELP_NAV = [
  {
    href: "/help/",
    label: "问题中心首页",
    icon: HelpCircle,
    badge: "汇总",
  },
  {
    href: "/help/codex-model-at-capacity/",
    label: "算力容量与模型挤兑",
    icon: Zap,
    badge: "热点",
  },
  {
    href: "/help/codex-chatgpt-degraded/",
    label: "降智排查与拯救",
    icon: Zap,
    badge: "热搜",
  },
  {
    href: "/help/codex-rate-limit-429/",
    label: "429 限流与配额",
    icon: Code2,
    badge: "高发",
  },
  {
    href: "/help/payment-card-declined/",
    label: "支付被拒与代充",
    icon: Building2,
    badge: "合规",
  },
  {
    href: "/guide/stability/",
    label: "网络自检与十诫",
    icon: Compass,
    badge: "底座",
  },
  {
    href: "/docs/pricing/",
    label: "2026 最新报价单",
    icon: BookOpen,
    badge: "手册",
  },
];

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-200">
      {/* 顶部自适应导航 */}
      <SubpageHeader
        categoryTitle="问题中心与排障"
        categoryShortTitle="问题中心"
        badgeVariant="emerald"
        subnavLabel="快速直达:"
        navItems={HELP_NAV}
        calculatorText="测算集采预算"
        rightCustomLinks={
          <Link
            href="/docs/sla/"
            className="text-xs text-secondary hover:text-primary transition-colors hidden md:inline-flex items-center gap-1 shrink-0 whitespace-nowrap"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>72h 封号包赔协议</span>
          </Link>
        }
      />

      {/* 正文主体 */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {children}
      </main>

      {/* 底部版权与生态网络 */}
      <footer className="border-t border-theme-subtle bg-surface-elevated text-xs text-secondary py-10 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left border-b border-theme-subtle/60 pb-6">
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                AI 集采 · 官方企业服务
              </div>
              <p className="text-secondary text-xs leading-relaxed">
                国内领先的海外 AI 生产力与 OpenAI Codex 代码助手官方代采平台。
                为企业提供 100% 正规海外商业银行卡直充、对公结算、6% 增值税专用发票与 SLA 72h 封号包赔兜底服务。
              </p>
            </div>
            <div>
              <div className="font-semibold text-primary mb-2 text-sm">
                热门故障排查与指南
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link
                    href="/help/codex-model-at-capacity/"
                    className="hover:text-primary transition-colors text-amber-600 dark:text-amber-400 font-medium"
                  >
                    • Selected model is at capacity 原因与恢复方案
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help/codex-chatgpt-degraded/"
                    className="hover:text-primary transition-colors text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    • ChatGPT & Codex 降智判定与 PoW 恢复指南
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help/codex-rate-limit-429/"
                    className="hover:text-primary transition-colors"
                  >
                    • 429 Too Many Requests 限流与配额用尽破解
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help/payment-card-declined/"
                    className="hover:text-primary transition-colors"
                  >
                    • 订阅被拒 Your card has been declined 原因与正规代充
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guide/stability/"
                    className="hover:text-primary transition-colors"
                  >
                    • 国内稳定使用 ChatGPT & Codex IP自检与十诫
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
            © 2026 AI 集采 (gongsi.one) · 四川省成都市高新区AI创新中心 · 统一社会信用代码可查
          </div>
        </div>
      </footer>
    </div>
  );
}
