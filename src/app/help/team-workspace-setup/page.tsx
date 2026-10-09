import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Building2,
  Lock,
  Receipt,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "team-workspace-setup")!;

export const metadata: Metadata = {
  title: article.seoTitle,
  description: article.seoDescription,
  keywords: article.keywords,
  alternates: {
    canonical: `https://gongsi.one/help/${article.slug}/`,
  },
  openGraph: {
    title: article.seoTitle,
    description: article.seoDescription,
    url: `https://gongsi.one/help/${article.slug}/`,
    siteName: "AI代采 gongsi.one",
    locale: "zh_CN",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function TeamWorkspacePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Organization",
      name: "AI代采技术团队",
    },
    datePublished: "2026-03-01",
    dateModified: "2026-03-25",
  };

  return (
    <HelpArticleLayout article={article} conversionContext="general">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 团队诉求与背景 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 升级必读：ChatGPT Team 已全面更名为 ChatGPT Business
        </h2>
        <p className="text-secondary leading-relaxed">
          OpenAI 在 2026 最新企业架构中，已将原先的 <strong>ChatGPT Team</strong> 正式升级更名为 <strong>ChatGPT Business</strong>。针对企业不同用量人员，官方推出了 <strong>Standard（标准席）</strong> 与 <strong>Premium（高算力尊享席）</strong> 两种席位，最低 2 席起订，且支持在同一个企业工作区内弹性混搭。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
              <Lock className="w-4 h-4" />
              <span>数据 100% 隔离不入训</span>
            </div>
            <p className="text-secondary text-[11px] leading-relaxed">
              官方服务条款明文承诺：Business 工作区内的所有提问、代码和业务数据默认<strong>不用于模型训练</strong>，符合企业安全合规要求。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400">
              <Users className="w-4 h-4" />
              <span>Standard 与 Premium 双席位</span>
            </div>
            <p className="text-secondary text-[11px] leading-relaxed">
              Standard 适合常规职能协同；Premium 则享有 <strong>5x 高算力</strong> 且<strong>免除 5 小时常规用量封顶</strong>，满足研发与算法密集调度。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-purple-600 dark:text-purple-400">
              <Building2 className="w-4 h-4" />
              <span>统一席位管理与工作区</span>
            </div>
            <p className="text-secondary text-[11px] leading-relaxed">
              管理员后台可一键邀请新员工、回收离职员工席位，支持 SAML SSO 单点登录，并支持共享企业自定义 GPTs 知识库与工作流。
            </p>
          </div>
        </div>
      </section>

      {/* 员工最关心的隐私问题 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 核心避坑：加入公司 Team 后，老板能看我的聊天记录吗？
        </h2>

        <div className="p-4 rounded-xl bg-surface border border-emerald-500/30 bg-emerald-500/5 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>答案是：完全看不到！工作区与个人空间彻底物理隔离</span>
          </div>
          <p className="text-secondary leading-relaxed text-xs">
            OpenAI 设计了极其严格的租户权限边界：
          </p>
          <ul className="space-y-2 text-xs text-secondary leading-relaxed">
            <li>
              • <strong>双空间自由切换：</strong>在 ChatGPT 左上角，用户可以随时在【Personal（个人空间）】与【Company Workspace（企业工作区）】之间无缝切换。
            </li>
            <li>
              • <strong>个人隐私绝对保密：</strong>你在 Personal 空间里的所有历史对话、私人提问，企业管理员没有任何权限查看。
            </li>
            <li>
              • <strong>工作区对话仅本人可见：</strong>即便在公司工作区下，除非你主动点击「Share Link」公开分享会话，管理员在后台也只能看到成员席位状态，<strong>无法阅读员工与 AI 的具体对话内容</strong>！
            </li>
          </ul>
        </div>
      </section>

      {/* 席位分配与财务报销合规 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 企业财务合规全解：如何开具 6% 增值税专用发票？
        </h2>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          OpenAI 官方直接扣款只能提供海外形式发票（Invoice），中国境内企业无法直接用于增值税进项抵扣与冲账。
        </p>

        <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-3 text-xs sm:text-sm">
          <div className="font-bold text-primary flex items-center gap-2">
            <Receipt className="w-4 h-4 text-emerald-500" />
            <span>AI代采的企业 GPT 集采交付闭环：</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-secondary">
            <div className="p-3 rounded-lg bg-surface-elevated border border-theme-subtle space-y-1">
              <span className="font-bold text-primary">1. 对公直签合同</span>
              <p className="text-[11px]">提供盖公章的正式企业代采框架合作协议，满足法务内控审查。</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-elevated border border-theme-subtle space-y-1">
              <span className="font-bold text-primary">2. 工商银行网银对公结算</span>
              <p className="text-[11px]">财务直接公对公电汇打款，资金流向合规阳光，拒绝员工垫资。</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-elevated border border-theme-subtle space-y-1">
              <span className="font-bold text-primary">3. 6% 增值税专用发票</span>
              <p className="text-[11px]">开具【信息技术服务 软件技术服务费】数电专票，支持 100% 进项税额抵扣。</p>
            </div>
            <div className="p-3 rounded-lg bg-surface-elevated border border-theme-subtle space-y-1">
              <span className="font-bold text-primary">4. 大客户阶梯让利</span>
              <p className="text-[11px]">5~19 席立享优惠，20 席以上解锁战略集采底价，最高节省 25% 预算。</p>
            </div>
          </div>
        </div>
      </section>
    </HelpArticleLayout>
  );
}
