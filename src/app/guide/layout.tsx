import React from "react";
import Link from "next/link";
import SubpageHeader from "@/components/SubpageHeader";
import {
  ShieldCheck,
  Code2,
  Building2,
  Compass,
  HelpCircle,
  User,
  LayoutGrid,
} from "lucide-react";

const GUIDE_NAV = [
  {
    href: "/guide/",
    label: "指南总览",
    icon: LayoutGrid,
    badge: "Hub",
  },
  {
    href: "/guide/onboarding/",
    label: "员工入职与Codex",
    icon: Code2,
    badge: "实操",
  },
  {
    href: "/guide/personal/",
    label: "个人上手指南",
    icon: User,
    badge: "个人",
  },
  {
    href: "/guide/business/",
    label: "企业部署手册",
    icon: Building2,
    badge: "企业",
  },
  {
    href: "/guide/stability/",
    label: "稳定使用与网络自检",
    icon: Compass,
    badge: "必读",
  },
  {
    href: "/help/",
    label: "问题中心与排错FAQ",
    icon: HelpCircle,
    badge: "自救",
  },
  {
    href: "/solutions/codex-procurement/",
    label: "Codex 研发代采",
    icon: Code2,
    badge: "效能",
  },
  {
    href: "/solutions/gpt-bulk-procurement/",
    label: "企业 GPT 集采",
    icon: Building2,
    badge: "对公",
  },
];

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary transition-colors duration-200">
      {/* 顶部自适应导航 */}
      <SubpageHeader
        categoryTitle="技术避坑指南"
        categoryShortTitle="技术指南"
        badgeVariant="emerald"
        subnavLabel="知识库专区:"
        navItems={GUIDE_NAV}
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
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
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
                实用资源与方案
              </div>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link
                    href="/guide/personal/"
                    className="hover:text-primary transition-colors text-emerald-600 dark:text-emerald-400 font-medium"
                  >
                    • 个人 ChatGPT & Codex 极速上手全景指南
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guide/business/"
                    className="hover:text-primary transition-colors text-blue-600 dark:text-blue-400 font-medium"
                  >
                    • 企业 Business / Team 交付部署与管理手册
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guide/stability/"
                    className="hover:text-primary transition-colors"
                  >
                    • 国内稳定使用与 IP 检测自检指南
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
            © 2026 AI 集采 (gongsi.one) · 四川省成都市高新区AI创新中心 · 统一社会信用代码可查
          </div>
        </div>
      </footer>
    </div>
  );
}
