import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  Server,
  CreditCard,
  Code2,
} from "lucide-react";
import HelpCenterSearch from "@/components/help/HelpCenterSearch";
import { HELP_ARTICLES } from "@/config/helpArticles";

export const metadata: Metadata = {
  title: "OpenAI & Codex 问题中心与技术自救指南 | 降智·限流·403·代充避坑 - AI代采",
  description:
    "专为国内开发者与研发团队打造的 OpenAI Codex / ChatGPT 常见问题排查与技术自救中心。涵盖模型降智（PoW检测）、429限流突破、403 Access Denied、Stripe支付被拒（Your card has been declined）、终端代理配置与封号申诉，并提供官方正规企业代充与对公专票服务。",
  keywords: [
    "Codex常见问题",
    "ChatGPT问题中心",
    "ChatGPT降智排查",
    "Codex 429限流",
    "ChatGPT 403被拒",
    "Your card has been declined解决",
    "Codex终端代理",
    "ChatGPT代充避坑",
    "AI代采帮助中心",
  ],
  alternates: {
    canonical: "https://gongsi.one/help/",
  },
  openGraph: {
    title: "OpenAI & Codex 常见问题排查与技术自救中心 | AI代采",
    description:
      "一站式排查 ChatGPT / Codex 降智、429限流、403被拒与银行卡支付失败。掌握避坑自救技巧，提供正规企业代充保障。",
    url: "https://gongsi.one/help/",
    siteName: "AI代采 gongsi.one",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenAI & Codex 问题中心与技术自救指南",
      },
    ],
  },
};

export default function HelpCenterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HELP_ARTICLES.map((article) => ({
      "@type": "Question",
      name: article.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: article.summary,
      },
    })),
  };

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 顶部 Hero 专区 */}
      <section className="relative overflow-hidden rounded-3xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 sm:p-10 shadow-sm text-center space-y-5">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>开发者与技术团队实操排障 · 拒绝空话套话</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
            OpenAI & Codex 故障排查与技术自救中心
          </h1>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            遭遇 <strong>模型降智、429 频次限流、403 阻断、Stripe 绑卡被拒或账号被封</strong>？
            收录一线研发团队最常踩的深坑，提供真实可验证的技术自救方案与企业合规代采通道。
          </p>
        </div>

        {/* 交互式搜索与分类组件 */}
        <div className="relative z-10 pt-2">
          <HelpCenterSearch />
        </div>
      </section>

      {/* 4 大常见核心阻断极速定位 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-theme-subtle pb-2">
          <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>高频突发故障极速对号入座</span>
          </h2>
          <span className="text-xs text-tertiary">点击直达专属解决方案</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <Link
            href="/help/codex-chatgpt-degraded/"
            className="p-4 rounded-xl bg-surface border border-theme-subtle hover:border-emerald-500/40 hover:bg-surface-elevated transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              模型变傻 / 严重降智
            </h3>
            <p className="text-[11px] text-secondary leading-relaxed line-clamp-2">
              o1 无思考过程、强制退回 4o-mini、无联网生图。教你查 PoW 难度。
            </p>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium pt-1">
              查看解除降智技巧 →
            </div>
          </Link>

          <Link
            href="/help/codex-rate-limit-429/"
            className="p-4 rounded-xl bg-surface border border-theme-subtle hover:border-emerald-500/40 hover:bg-surface-elevated transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              429 限流 / 额度耗尽
            </h3>
            <p className="text-[11px] text-secondary leading-relaxed line-clamp-2">
              You&apos;ve reached the current usage cap。指数退避代码与 Pro 200/500 算力。
            </p>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium pt-1">
              查看配额突破方案 →
            </div>
          </Link>

          <Link
            href="/help/access-denied-403-cloudflare/"
            className="p-4 rounded-xl bg-surface border border-theme-subtle hover:border-emerald-500/40 hover:bg-surface-elevated transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              <Server className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              403 阻断 / 验证码死循环
            </h3>
            <p className="text-[11px] text-secondary leading-relaxed line-clamp-2">
              Access Denied 1020 与人机验证重复弹出。IP信誉自检与 TUN 网卡接管。
            </p>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium pt-1">
              查看网络修复清单 →
            </div>
          </Link>

          <Link
            href="/help/payment-card-declined/"
            className="p-4 rounded-xl bg-surface border border-theme-subtle hover:border-emerald-500/40 hover:bg-surface-elevated transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              <CreditCard className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              绑卡失败 Card Declined
            </h3>
            <p className="text-[11px] text-secondary leading-relaxed line-clamp-2">
              国内双币信用卡 100% 报错。警惕虚拟卡暴雷，海外实体商业卡正规代充。
            </p>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium pt-1">
              查看合规代充指南 →
            </div>
          </Link>
        </div>
      </section>

      {/* 底部业务代充转化横幅 */}
      <section className="p-7 sm:p-10 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white border border-zinc-800 text-center space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4" />
          <span>还在为海外信用卡被拒与代充封号提心吊胆？</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
          AI 代采 · 官方正规企业代充服务 · 支持 6% 专票与 72h 封号包赔
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          我们为国内工程师与企业团队提供 100% 海外正规实体商业银行卡直充。支持开具【信息技术服务 软件技术服务费】6% 增值税专用发票、中国工商银行网银对公转账，并盖公章签署《SLA 售后退赔协议》。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/#calculator"
            className="btn-openai-white w-full sm:w-auto text-xs px-6 py-2.5 shadow-md text-center"
          >
            测算企业采购预算
          </Link>
          <Link
            href="/docs/pricing/"
            className="btn-openai-secondary w-full sm:w-auto text-xs px-5 py-2.5"
          >
            查看 2026 阶梯报价手册
          </Link>
          <Link
            href="/solutions/codex-procurement/"
            className="text-xs text-zinc-400 hover:text-white transition-colors underline py-1"
          >
            了解 Codex 研发代采方案 →
          </Link>
        </div>
      </section>
    </div>
  );
}
