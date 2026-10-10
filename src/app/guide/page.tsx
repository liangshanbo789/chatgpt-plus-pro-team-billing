import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  User,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Download,
  KeyRound,
  Users,
  Lock,
  Globe,
  Radio,
  HelpCircle,
  Code2,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "使用指南与技术知识库总览 | 个人上手·企业部署·稳定自检 - AI集采",
  description:
    "AI集采官方使用指南与技术知识中心。专为国内个人用户与企业客户提供 ChatGPT & Codex 全生命周期实操指南：包括全平台官方正版下载验证、新号首登冷启动、企业 Business 工作区部署与席位管理、国内网络 IP 纯净度检测及避坑十诫。",
  keywords: [
    "ChatGPT使用指南",
    "ChatGPT教程",
    "OpenAI Codex实操指南",
    "ChatGPT官方正版下载",
    "ChatGPT企业版教程",
    "ChatGPT稳定指南",
    "AI集采知识库",
  ],
  alternates: {
    canonical: "https://gongsi.one/guide/",
  },
  openGraph: {
    title: "使用指南与技术知识库总览 | AI集采",
    description:
      "个人极速上手指南、企业 Business 交付部署手册、国内网络 IP 纯净度检测与稳定使用指南全景聚合。",
    url: "https://gongsi.one/guide/",
    siteName: "AI集采 gongsi.one",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI集采使用指南总览",
      },
    ],
  },
};

export default function GuideOverviewPage() {
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
        name: "使用指南与技术知识库",
        item: "https://gongsi.one/guide/",
      },
    ],
  };

  return (
    <article className="space-y-10 sm:space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* 顶部 Hero 欢迎区域 */}
      <section className="relative overflow-hidden rounded-3xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 sm:p-10 shadow-sm text-left">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI 集采 · 官方全场景使用指南与知识中枢</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
            全生命周期使用指南
            <span className="block mt-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              从新手安装、团队部署到稳定运行
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            无论您是刚开启首个 Plus / Pro 订阅的<strong>个人创作者与工程师</strong>，还是统筹几十上百席位的<strong>企业 IT 与业务主管</strong>，或是追求 7×24 小时不中断调用的<strong>研发团队</strong>，本知识库提供针对性且切实可行的标准化指引。
          </p>
        </div>
      </section>

      {/* 三大核心指南支柱卡片 */}
      <section className="space-y-6 text-left">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-primary tracking-tight">
            指南核心专区（按角色与场景选择）
          </h2>
          <span className="text-xs text-tertiary font-mono">持续保持最新 2026 规范</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* 卡片一：新员工从0到1入职与 Codex 实操指南 (新增) */}
          <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 via-surface to-surface p-6 flex flex-col justify-between space-y-5 hover:border-emerald-500/60 hover:shadow-md transition-all group relative">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono font-bold border border-emerald-500/30">
                  新员工必读 SOP
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  员工入职与 Codex 实操
                </h3>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  从下载GPT、2FA绑定到进入工作区玩转 Codex。
                </p>
              </div>

              <ul className="space-y-2 text-xs text-secondary border-t border-theme-subtle pt-3">
                <li className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>正版客户端下载与安全首登冷启动</span>
                </li>
                <li className="flex items-center gap-2">
                  <KeyRound className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>强制开启 2FA 与抄写 16 位恢复码</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>接受企业邀请与工作区 (Workspace) 切换</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Canvas 协同编辑、Python 沙箱与排错</span>
                </li>
              </ul>
            </div>

            <Link
              href="/guide/onboarding/"
              className="btn-openai-white text-xs w-full py-2.5 flex items-center justify-center gap-2 shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors"
            >
              <span>阅读员工入职指南</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 卡片二：个人极速上手指南 */}
          <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-500/5 via-surface to-surface p-6 flex flex-col justify-between space-y-5 hover:border-emerald-500/50 hover:shadow-md transition-all group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono border border-emerald-500/20">
                  个人客户首选
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  个人客户上手指南
                </h3>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  从官方正版下载到高效进阶全景实操。
                </p>
              </div>

              <ul className="space-y-2 text-xs text-secondary border-t border-theme-subtle pt-3">
                <li className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>macOS / Win / iOS / 安卓全平台正版下载</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>首次登录 24 小时冷启动防封规则</span>
                </li>
                <li className="flex items-center gap-2">
                  <KeyRound className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>强制开启 2FA 双重身份验证防止被盗</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Canvas 协同与深度思考模型 (o1) 唤醒</span>
                </li>
              </ul>
            </div>

            <Link
              href="/guide/personal/"
              className="btn-openai-white text-xs w-full py-2.5 flex items-center justify-center gap-2 shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors"
            >
              <span>阅读个人上手指南</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 卡片二：企业 Business 部署手册 */}
          <div className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-b from-blue-500/5 via-surface to-surface p-6 flex flex-col justify-between space-y-5 hover:border-blue-500/50 hover:shadow-md transition-all group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono border border-blue-500/20">
                  团队与企业管理
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  企业 Business 部署手册
                </h3>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  工作区激活、团队席位分配与合规防训练。
                </p>
              </div>

              <ul className="space-y-2 text-xs text-secondary border-t border-theme-subtle pt-3">
                <li className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>收到官方邀请邮件的工作区初始化流程</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>三层角色矩阵与员工邮箱批量发放/回收</span>
                </li>
                <li className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>官方 Zero Training 商业数据不训练承诺</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>6% 增值税专用发票开具与按需弹性增席</span>
                </li>
              </ul>
            </div>

            <Link
              href="/guide/business/"
              className="btn-openai-white text-xs w-full py-2.5 flex items-center justify-center gap-2 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              <span>阅读企业部署手册</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 卡片三：稳定使用与网络自检指南 */}
          <div className="rounded-2xl border-2 border-teal-500/30 bg-gradient-to-b from-teal-500/5 via-surface to-surface p-6 flex flex-col justify-between space-y-5 hover:border-teal-500/50 hover:shadow-md transition-all group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono border border-teal-500/20">
                  底层环境必备
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-primary group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  稳定使用与 IP 检测指南
                </h3>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  ip.net.coffee 测速防封、TUN 模式与避坑十诫。
                </p>
              </div>

              <ul className="space-y-2 text-xs text-secondary border-t border-theme-subtle pt-3">
                <li className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  <span>ip.net.coffee/gpt/ 原生节点连通性检测</span>
                </li>
                <li className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  <span>客户端 TUN 虚拟网卡防 DNS 泄露配置</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  <span>终端 Terminal / PowerShell 一键代理脚本</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  <span>国内稳定访问避坑十诫守则</span>
                </li>
              </ul>
            </div>

            <Link
              href="/guide/stability/"
              className="btn-openai-white text-xs w-full py-2.5 flex items-center justify-center gap-2 shadow-xs group-hover:bg-teal-600 group-hover:text-white transition-colors"
            >
              <span>阅读网络稳定指南</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 联动问题中心 */}
      <section className="rounded-2xl border border-theme-default bg-surface p-6 sm:p-8 space-y-4 text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-base sm:text-lg text-primary">遇到系统报错、降智或限流？</h3>
            </div>
            <p className="text-xs text-secondary">
              查阅我们的《问题中心与技术自救中心》，汇集了国内高频出现的 403 阻断、PoW 降智、429 超限及信用卡被拒排错自救方案。
            </p>
          </div>
          <Link
            href="/help/"
            className="btn-openai-secondary text-xs px-4 py-2 inline-flex items-center gap-2 shrink-0"
          >
            <span>访问问题中心 FAQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
