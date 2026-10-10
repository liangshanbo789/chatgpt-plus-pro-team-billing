import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  ShieldCheck,
  KeyRound,
  Users,
  Code2,
  Terminal,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Laptop,
  Smartphone,
  Monitor,
  HelpCircle,
  FileCode,
  Zap,
  Lock,
  Layers,
  Check,
} from "lucide-react";
import OnboardingChecklist from "@/components/guide/OnboardingChecklist";

export const metadata: Metadata = {
  title:
    "新员工入职从 0 到 1 实操教程 | 从下载GPT、2FA绑定、加入工作区到使用Codex全流程 - AI集采",
  description:
    "专为加入企业 ChatGPT / Codex 工作区的新员工打造的标准入职实操手册 (SOP)。涵盖官方全平台正版客户端下载验证、账号安全首登、强制 2FA 双重身份验证与恢复码备份、企业邀请邮件查收与工作空间切换 (Workspace Switcher)、Canvas 独立代码协同与 Codex 研发实战全流程。",
  keywords: [
    "新员工ChatGPT教程",
    "Codex使用教程",
    "OpenAI Codex实操指南",
    "ChatGPT工作空间邀请",
    "ChatGPT 2FA设置",
    "ChatGPT双重验证绑定",
    "ChatGPT加入企业空间",
    "ChatGPT工作区切换",
    "Canvas代码协同",
    "AI集采员工指南",
  ],
  alternates: {
    canonical: "https://gongsi.one/guide/onboarding/",
  },
  openGraph: {
    title: "新员工入职从 0 到 1 实操教程 | 从下载GPT到玩转Codex全流程 - AI集采",
    description:
      "新员工零基础开箱指南：从下载正版客户端、设置 2FA、接受工作区邀请切换空间，到熟练使用 Codex / Canvas 辅助编程全流程标准化教学。",
    url: "https://gongsi.one/guide/onboarding/",
    siteName: "AI集采 gongsi.one",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "新员工 ChatGPT & Codex 零基础入职实操指南",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "新员工入职从 0 到 1 实操教程 | 从下载GPT到玩转Codex全流程 - AI集采",
    description:
      "新员工零基础开箱指南：官方正版下载、2FA 双重验证、加入企业工作区与 Codex 代码实战。",
    images: ["/og-image.png"],
  },
};

export default function OnboardingGuidePage() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "配置指南",
            item: "https://gongsi.one/guide/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "新员工入职从 0 到 1 实操教程",
            item: "https://gongsi.one/guide/onboarding/",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "新员工入职从 0 到 1 实操教程：从下载GPT、2FA绑定到使用Codex全流程",
        description:
          "专为加入企业 ChatGPT / Codex 工作区的新员工打造的标准入职实操手册 (SOP)。涵盖客户端下载、账号首登、强制 2FA 绑定、接受企业邀请与 Codex 研发实战。",
        totalTime: "PT15M",
        step: [
          {
            "@type": "HowToStep",
            name: "官方正版客户端下载与验签",
            text: "仅通过 OpenAI 官方下载通道获取 Windows、macOS 或移动端安装包，严禁从第三方网盘或破解站下载，避免木马注入窃取企业代码与 Token。",
            url: "https://gongsi.one/guide/onboarding/#step-1",
          },
          {
            "@type": "HowToStep",
            name: "账号注册首登与网络环境合规",
            text: "使用公司分配的企业企业邮箱完成注册登录，避免在同一浏览器频繁切换节点，防止触发官方批量风控封锁。",
            url: "https://gongsi.one/guide/onboarding/#step-2",
          },
          {
            "@type": "HowToStep",
            name: "强制开启 2FA 双重身份验证",
            text: "在 ChatGPT 账号设置的安全中心开启 2FA，使用身份验证器扫描密钥二维码，并安全备份 16 位应急恢复代码 (Recovery Codes)。",
            url: "https://gongsi.one/guide/onboarding/#step-3",
          },
          {
            "@type": "HowToStep",
            name: "查收邮件接受企业邀请与工作区切换",
            text: "在企业邮箱查收 OpenAI 发送的 Join Workspace 邀请邮件，点击接受后，在客户端左下角 Workspace Switcher 切换至企业空间。",
            url: "https://gongsi.one/guide/onboarding/#step-4",
          },
          {
            "@type": "HowToStep",
            name: "Codex 与 Canvas 代码助手研发提效实战",
            text: "掌握 Canvas 窗口独立编辑模式、代码生成、重构审查、单元测试编写与终端 CLI 代理配置，实现研发效能数倍跃升。",
            url: "https://gongsi.one/guide/onboarding/#step-5",
          },
        ],
      },
    ],
  };

  return (
    <article className="space-y-12 sm:space-y-16 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {/* 顶部 Hero 专区 */}
      <section className="relative overflow-hidden rounded-3xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 sm:p-10 shadow-sm">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>新员工入职·研发/业务入驻指南 · 标准操作规范 (SOP)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
            新员工从 0 到 1 实操指南
            <span className="block mt-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              从下载 GPT、绑定 2FA、进入工作区到玩转 Codex
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            公司已为您采购并开通了官方 <strong>ChatGPT Business / Team / Codex 企业工作空间</strong> 席位。无论您此前是否接触过 AI 工具，请严格按照本指南完成<strong>正版客户端安装、安全首登、强制 2FA 绑定、工作空间切换</strong>，并快速掌握 <strong>Codex / Canvas 代码协同</strong> 高效用法。
          </p>

          {/* 5 步速览路线图 */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-medium">
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ① 官方正版下载
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ② 账号注册首登
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ③ 强制开启 2FA
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ④ 进入企业工作区
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ⑤ 玩转 Codex 协同
            </span>
          </div>
        </div>
      </section>

      {/* 嵌入新员工入职打卡核验交互组件 */}
      <section>
        <OnboardingChecklist />
      </section>

      {/* 步骤一：正版客户端下载与环境准备 */}
      <section id="step-1-download" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第一步：全平台官方正版客户端下载与网络准备
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
          <div className="space-y-1">
            <strong>警惕国内山寨高仿与套壳应用：</strong>
            <p className="text-[11px] leading-relaxed text-amber-700 dark:text-amber-400">
              市场上存在大量名字极其相似的套壳收费软件和虚假钓鱼下载站。官方网页端唯一域名为 <code className="font-mono bg-amber-500/20 px-1 py-0.5 rounded">chatgpt.com</code>。请务必使用下方官方正版分发通道下载，切勿在未认证的第三方软件站下载经二次打包的安装包。
            </p>
          </div>
        </div>

        {/* 四端下载矩阵 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* macOS */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Laptop className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">macOS 原生客户端 (Apple Silicon / Intel)</h3>
                  <p className="text-[11px] text-tertiary font-mono">官方 DMG 直接安装 / Mac App Store</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                研发推荐
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              支持全局快捷键 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px] text-primary">Option + Space</kbd> 极速呼出伴随提问窗口、直接读取 Xcode / VS Code 屏幕上下文、原生语音交互。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">OpenAI 官方源</span>
              <a
                href="https://openai.com/chatgpt/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-white text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>官网获取 macOS 版</span>
              </a>
            </div>
          </div>

          {/* Windows */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Monitor className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">Windows 10 / 11 桌面端</h3>
                  <p className="text-[11px] text-tertiary font-mono">微软应用商店 / 官方 MSIX 安装包</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                办公主力
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              支持快捷键 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px] text-primary">Alt + Space</kbd> 伴随浮窗提问、支持文件拖拽分析。国内用户需切换 Microsoft Store 区域至美区或使用官方安装包。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">官方 MSIX 通道</span>
              <a
                href="https://openai.com/chatgpt/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-white text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>官网获取 Win 版</span>
              </a>
            </div>
          </div>

          {/* Web 浏览器端 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Terminal className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">Web 网页端 (Chrome / Edge / Safari)</h3>
                  <p className="text-[11px] text-tertiary font-mono">官方唯一入口: chatgpt.com</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono">
                免安装
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              支持完整的 Canvas 独立代码编辑面板、Advanced Data Analysis (Python 沙箱)、文件上传与团队共享 GPTs 库。推荐优先使用 Chrome 或 Edge 纯净模式访问。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">官方直达</span>
              <a
                href="https://chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-white text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>打开 chatgpt.com</span>
              </a>
            </div>
          </div>

          {/* 移动端 iOS / Android */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Smartphone className="w-5 h-5 text-teal-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">iOS / Android 移动端</h3>
                  <p className="text-[11px] text-tertiary font-mono">美区 App Store / Google Play 认准 OpenAI</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono">
                移动随行
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              中国区应用商店未上架。iOS 需在 App Store 登录美区/日区账号搜索 <code className="font-mono bg-surface-elevated px-1 py-0.5 rounded">ChatGPT</code>（认准开发者为 OpenAI）；Android 需具备 Google 基础服务并在 Play 商店下载。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">官方移动入口</span>
              <a
                href="https://openai.com/chatgpt/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-secondary text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>查看移动端指引</span>
              </a>
            </div>
          </div>
        </div>

        {/* 网络环境自检小提示 */}
        <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>网络自检要点：开启 TUN 模式与 IP 纯净度</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            国内访问 OpenAI 服务需要稳定的海外原生网络环境。请确保代理工具（如 Clash Verge Rev、Sing-box 等）已开启 <strong>TUN 模式（虚拟网卡全局接管）</strong>，防止桌面客户端进程或终端命令行绕过代理发生 DNS 污染。
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://ip.net.coffee/gpt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-mono inline-flex items-center gap-1"
            >
              <span>自测 IP 纯净度 (ip.net.coffee/gpt/)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-theme-subtle">|</span>
            <Link
              href="/guide/stability/"
              className="text-xs text-secondary hover:text-primary hover:underline"
            >
              阅读《稳定使用与网络自检指南》
            </Link>
          </div>
        </div>
      </section>

      {/* 步骤二：账号准备与首次安全登录 */}
      <section id="step-2-login" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第二步：账号规范、注册与首次安全登录
          </h2>
        </div>

        <div className="rounded-2xl border border-theme-default bg-surface p-5 sm:p-6 space-y-4">
          <h3 className="font-bold text-sm text-primary flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-500" />
            <span>1. 邮箱规范选择：优先企业邮箱或专属海外邮箱</span>
          </h3>
          <ul className="space-y-2 text-xs text-secondary leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>企业专属邮箱（最佳）：</strong>若公司为员工配置了带有公司域名的企业邮箱（如 <code className="font-mono bg-surface-elevated px-1 py-0.5 rounded">name@company.com</code>），请务必使用该邮箱注册与接收邀请。便于统一资产管理，离职时也方便归档移交。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>个人专属海外邮箱：</strong>若公司未分配独立域名邮箱，建议使用稳定的个人专属 Outlook、Gmail 或 ProtonMail。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                <strong>严禁使用临时临时邮箱或合租公开邮箱：</strong>临时临时邮箱极易因无法再次接收验证码而导致账号永久丢失，且无法开通 2FA。
              </span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-theme-default bg-surface space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>2. 新员工尚未注册 OpenAI 账号</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              打开 <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-mono underline">chatgpt.com</a> 点击 <strong>Sign Up (注册)</strong>。输入您的邮箱，按照邮件验证码完成邮箱确认，设置高强度密码（含大小写字母、数字与符号）。
            </p>
            <div className="text-[11px] text-tertiary bg-surface-elevated p-2.5 rounded-lg border border-theme-subtle">
              💡 提示：如果收到管理员的邀请邮件，直接点击邮件内的 <strong>Accept Invite</strong> 也会直接引导您完成注册并一步加入工作区。
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-theme-default bg-surface space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Check className="w-4 h-4 text-blue-500" />
              <span>3. 首次登录“冷启动”防风控守则</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              账号首次成功登录后的 24 小时内为系统基础信任建立期。<strong>切勿在短时间内频繁切换美/日/英多个不同节点登录</strong>，避免使用公共低价免费节点。
            </p>
            <div className="text-[11px] text-tertiary bg-surface-elevated p-2.5 rounded-lg border border-theme-subtle">
              🛡 建议：选定一个稳定的优质住宅/商宽节点，登录后保持同一会话窗口持续使用。
            </div>
          </div>
        </div>
      </section>

      {/* 步骤三：强制开启 2FA (双重身份验证) */}
      <section id="step-3-2fa" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第三步：强制开启 2FA 双重身份验证与抄录恢复密钥 (极其重要)
          </h2>
        </div>

        {/* 为什么必须开 2FA */}
        <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
            <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>为什么公司必须要求员工开启 2FA (MFA)？</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            加入企业工作区后，您的账号将直接与公司的企业数字资产、私有知识库以及核心代码协同关联。弱密码或邮箱密码撞库可能导致公司商业秘密面临泄露风险。OpenAI 目前通过<strong>个人维度的 MFA (多因素认证)</strong> 守护资产，每一位成员都必须在入职首日完成绑定。
          </p>
        </div>

        {/* 2FA 设置步骤卡片 */}
        <div className="rounded-2xl border border-theme-default bg-surface p-5 sm:p-6 space-y-5">
          <h3 className="font-bold text-sm text-primary flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-emerald-500" />
            <span>2FA 极简配置 4 步走实操说明</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface text-tertiary">
                Step 3.1
              </span>
              <h4 className="font-bold text-primary">进入 Settings 设置</h4>
              <p className="text-secondary text-[11px] leading-relaxed">
                点击左下角（或右上角）个人头像，在弹出菜单中点击 <strong>Settings (设置)</strong>。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface text-tertiary">
                Step 3.2
              </span>
              <h4 className="font-bold text-primary">切换至 Security 安全</h4>
              <p className="text-secondary text-[11px] leading-relaxed">
                在设置弹窗左侧菜单选择 <strong>Security & login (安全与登录)</strong>。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface text-tertiary">
                Step 3.3
              </span>
              <h4 className="font-bold text-primary">启用 2FA 并扫码</h4>
              <p className="text-secondary text-[11px] leading-relaxed">
                找到 <strong>Multi-Factor Authentication (MFA)</strong>，点击 <strong>Turn on</strong>，使用验证器扫码。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface text-tertiary">
                Step 3.4
              </span>
              <h4 className="font-bold text-primary">输入 6 位动态码激活</h4>
              <p className="text-secondary text-[11px] leading-relaxed">
                输入工具实时生成的 6 位数字，点击确认即可激活成功。
              </p>
            </div>
          </div>

          {/* 2FA 丰富工具矩阵：网页免装 / 浏览器插件 / 手机原生 App */}
          <div className="pt-3 border-t border-theme-subtle space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-xs sm:text-sm text-primary flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-emerald-500" />
                <span>2FA 身份验证多渠道工具箱（按您的使用习惯自由选择）：</span>
              </h4>
              <span className="text-[11px] text-tertiary font-mono">
                支持网页免装 · 插件常驻 · 原生手机 App
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {/* 优先推荐一：Authenticator.cc 浏览器插件 */}
              <div className="p-3.5 rounded-xl bg-surface border-2 border-emerald-500/40 hover:border-emerald-500/60 transition-all flex flex-col justify-between space-y-3 relative shadow-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Authenticator 浏览器插件</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono font-bold border border-emerald-500/30">
                      ⭐ 电脑办公首推
                    </span>
                  </div>
                  <p className="text-secondary text-[11px] leading-relaxed">
                    <strong>研发与办公首选。</strong>适配 Chrome / Edge / Firefox。常驻浏览器工具栏，无需每次掏手机扫码，点击扩展图标即可秒出动态码与一键自动填充。
                  </p>
                </div>
                <a
                  href="https://authenticator.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-openai-white text-[11px] py-1.5 w-full flex items-center justify-center gap-1 shadow-xs"
                >
                  <span>获取 Authenticator.cc 插件</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* 优先推荐二：手机原生 App 官方正版渠道 */}
              <div className="p-3.5 rounded-xl bg-surface border-2 border-blue-500/30 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-3 shadow-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>主流手机端原生 App</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono font-bold border border-blue-500/20">
                      ⭐ 移动安全主力
                    </span>
                  </div>
                  <p className="text-secondary text-[11px] leading-relaxed">
                    <strong>安全稳定、防丢有保障。</strong>微软验证器支持企业级云备份；谷歌验证器极简；苹果 iOS 自带钥匙串自动填充。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <a
                    href="https://www.microsoft.com/en-us/security/mobile-authenticator-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded bg-surface-elevated border border-theme-subtle text-[10px] text-center hover:border-primary transition-colors truncate"
                    title="Microsoft Authenticator 官网下载"
                  >
                    微软验证器 ↗
                  </a>
                  <a
                    href="https://support.google.com/accounts/answer/1066447"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded bg-surface-elevated border border-theme-subtle text-[10px] text-center hover:border-primary transition-colors truncate"
                    title="Google Authenticator 官方指引"
                  >
                    谷歌验证器 ↗
                  </a>
                  <a
                    href="https://support.apple.com/zh-cn/102637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded bg-surface-elevated border border-theme-subtle text-[10px] text-center hover:border-primary transition-colors truncate"
                    title="Apple iOS / Mac 钥匙串自动验证码"
                  >
                    iOS 自带钥匙串 ↗
                  </a>
                  <a
                    href="https://bitwarden.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded bg-surface-elevated border border-theme-subtle text-[10px] text-center hover:border-primary transition-colors truncate"
                    title="Bitwarden 密码管理器"
                  >
                    Bitwarden ↗
                  </a>
                </div>
              </div>

              {/* 备用应急：2fa.fun 在线网页换码 */}
              <div className="p-3.5 rounded-xl bg-surface-elevated/70 border border-theme-subtle hover:border-theme-hover transition-colors flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400" />
                      <span>2FA.fun 在线网页生成</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-surface text-tertiary font-mono border border-theme-subtle">
                      临时 / 应急备选
                    </span>
                  </div>
                  <p className="text-secondary text-[11px] leading-relaxed">
                    身边暂无手机或无法安装插件时的应急方案。直接在网页输入 OpenAI Secret Key 密钥即可即时计算换取 6 位 TOTP 动态码。
                  </p>
                </div>
                <a
                  href="https://2fa.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-openai-secondary text-[11px] py-1.5 w-full flex items-center justify-center gap-1"
                >
                  <span>访问 2FA.fun 网页版</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 贴心教学：如何获取明文 Secret Key */}
            <div className="p-3 rounded-xl bg-surface border border-theme-subtle text-[11px] text-secondary space-y-1">
              <div className="font-semibold text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>没有手机摄像头或扫码失败？如何使用 Secret Key 密钥快速绑定：</span>
              </div>
              <p className="leading-relaxed text-tertiary">
                在 OpenAI 屏幕展示二维码的下方，点击灰色小字 <strong>「Can&apos;t scan QR code?」</strong> 或 <strong>「Manual Entry (手动输入)」</strong>，屏幕将显示由字母数字组成的明文密钥（Secret Key）。将其复制并粘贴到 <a href="https://2fa.fun/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline font-mono">2FA.fun</a> 或 <a href="https://authenticator.cc/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline font-mono">Authenticator 浏览器插件</a> 中，即可无需摄像头直接获取 6 位有效验证码！
              </p>
            </div>
          </div>
        </div>

        {/* 核心告警：抄录恢复密钥 */}
        <div className="p-5 rounded-2xl border-2 border-rose-500/30 bg-rose-500/5 space-y-3">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span>血泪教训必读：务必备份 16 位紧急恢复密钥 (Recovery Codes)</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            在开启 2FA 的最后一步，OpenAI 会在屏幕上展示一段 <strong>16 位的紧急恢复代码 (Recovery Code)</strong>。
          </p>
          <ul className="text-xs text-secondary space-y-1.5 list-disc list-inside">
            <li>
              <strong>请立即点击「Copy」</strong>，将其保存在公司的 1Password / 密码管理器，或保存在安全本地备忘录中；
            </li>
            <li>
              <strong>切勿仅截一张图放在手机相册：</strong>若手机遗失、系统刷机或误删验证器 App，<strong>OpenAI 官方不提供通过邮箱邮件重置 2FA 的途径</strong>，人工客服申诉周期漫长且往往无法找回。该恢复代码是您未来换手机或丢失验证器时<strong>唯一</strong>的自救救命凭证！
            </li>
          </ul>
        </div>
      </section>

      {/* 步骤四：企业管理员“拉人”与接受邀请加入工作区 */}
      <section id="step-4-workspace" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第四步：接受企业管理员邀请与无缝切换工作空间 (Workspace Switcher)
          </h2>
        </div>

        {/* 邮件认准与点击 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Users className="w-4 h-4 text-emerald-500" />
              <span>1. 查收 OpenAI 官方邀请邮件</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              企业管理员在后台为您分配席位后，您的注册邮箱将收到一封官方系统邮件：
            </p>
            <div className="p-3 rounded-xl bg-surface-elevated border border-theme-subtle text-xs space-y-1 font-mono">
              <div className="text-tertiary text-[11px]">发件人: noreply@tm.openai.com 或 OpenAI</div>
              <div className="text-primary font-bold">
                标题: You&apos;ve been invited to join [公司名称] on ChatGPT
              </div>
            </div>
            <div className="text-[11px] text-tertiary bg-surface-elevated p-2.5 rounded-lg border border-theme-subtle">
              ⚠️ 如果未在收件箱看到，请务必检查<strong>垃圾邮件箱 (Spam / Junk)</strong>，或确认企业邮件网关未将海外域名拦截。
            </div>
          </div>

          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>2. 点击「Accept Invite」完成加入</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              打开邮件，点击正文中的绿色主按钮 <strong>Accept Invite (接受邀请)</strong>。
            </p>
            <ul className="text-xs text-secondary space-y-1.5 leading-relaxed">
              <li>
                • <strong>已登录账号：</strong>系统会自动将当前已登录的账号加入该企业工作区；
              </li>
              <li>
                • <strong>未登录/新账号：</strong>页面会自动跳转至登录页，使用收到邀请的同一邮箱登录或设置密码即可顺利入驻。
              </li>
            </ul>
          </div>
        </div>

        {/* 核心避坑：工作空间切换器 */}
        <div className="rounded-2xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-500/5 via-surface to-surface p-5 sm:p-7 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>新手最高频困惑：为什么加入后依然显示 Free 免费版？</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              必看避坑
            </span>
          </div>

          <p className="text-xs text-secondary leading-relaxed">
            很多新员工在点击接受邀请后，打开 ChatGPT 界面发现依然显示“Upgrade to Plus”或只能使用基础模型，以为公司“没给开通成功”。<strong>真相是：您停留在个人的「Personal」工作区，没有切换到公司的「企业工作区」！</strong>
          </p>

          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-3">
            <h4 className="font-bold text-xs text-primary flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>两步掌握 Workspace Switcher (工作空间切换器)：</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-surface border border-theme-subtle space-y-1">
                <div className="font-semibold text-primary flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span>👤 Personal (个人独立空间)</span>
                </div>
                <p className="text-[11px] text-secondary leading-relaxed">
                  属于员工个人私有的空间。默认显示 Free 免费版，对话历史仅个人可见，公司管理员无权查看。
                </p>
              </div>

              <div className="p-3 rounded-lg bg-surface border border-emerald-500/30 space-y-1">
                <div className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>🏢 [贵司企业名称] (企业工作空间)</span>
                </div>
                <p className="text-[11px] text-secondary leading-relaxed">
                  <strong>这是公司采购的权益所在！</strong>享有 Business / Team / Codex 专属高配算力、长上下文、企业级数据防训练合规。
                </p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-secondary flex items-center gap-2">
              <span className="font-bold text-primary">切换方法：</span>
              <span>
                点击界面左下角（网页/桌面端）的个人名字头像，在弹出菜单顶部直接点击贵司的企业名称，页面刷新后即切换成功！
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 步骤五：零基础玩转 Codex 与代码辅助全流程 */}
      <section id="step-5-codex" className="space-y-6 scroll-mt-24">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第五步：零基础玩转 Codex 与代码开发实操 (核心技能)
          </h2>
        </div>

        {/* 认识 Codex */}
        <div className="rounded-2xl border border-theme-default bg-surface p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span>全面认识 Codex：从底层推理到日常开发协同</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            <strong>OpenAI Codex</strong> 是专为计算机软件开发调优的深度代码模型与推理引擎。在最新的 ChatGPT 体系中，Codex 能力已全面无缝融入<strong>桌面客户端、Web 网页端、Canvas 协同编辑界面与 Python 沙箱运行环境</strong>。您不需要死记复杂的命令，只需要掌握以下 4 种最常用的日常高频用法：
          </p>
        </div>

        {/* 四大核心用法 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 用法一：Canvas 独立代码协同编辑 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FileCode className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-primary">1. Canvas 沉浸式代码协同面板</h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                日常最高频
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              当您要求 AI 编写或重构一段完整代码时，界面右侧会自动滑出独立的 <strong>Canvas 代码面板</strong>。
            </p>
            <ul className="text-xs text-secondary space-y-1.5 border-t border-theme-subtle pt-2.5">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">•</span>
                <span><strong>行内划词提问：</strong>鼠标选中某几行代码，直接点击弹出浮窗提要求（如“将这部分改为异步执行”）；</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-500 font-bold">•</span>
                <span><strong>右下角魔棒菜单：</strong>一键执行 <code className="font-mono bg-surface-elevated px-1 py-0.2 rounded text-[11px]">Fix bugs</code> (修补漏洞)、<code className="font-mono bg-surface-elevated px-1 py-0.2 rounded text-[11px]">Add logs</code> (补全日志)、<code className="font-mono bg-surface-elevated px-1 py-0.2 rounded text-[11px]">Code review</code> (代码审查)。</span>
              </li>
            </ul>
          </div>

          {/* 用法二：Python 沙箱与自动化数据执行 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-primary">2. Python 沙箱自动化执行与分析</h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                无需配环境
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              无需在您的电脑上安装 Python 或 Pandas。直接将 Excel 表格、CSV 文件或服务器日志拖入对话框。
            </p>
            <ul className="text-xs text-secondary space-y-1.5 border-t border-theme-subtle pt-2.5">
              <li className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">•</span>
                <span>Codex 会在云端沙箱中自动编写 Python 脚本并执行；</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-500 font-bold">•</span>
                <span>自动提取关键指标、清洗异常脏数据、绘制统计折线图与柱状图并提供加工后的文件下载。</span>
              </li>
            </ul>
          </div>

          {/* 用法三：报错堆栈与架构 Bug 精准定位 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Terminal className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-primary">3. 报错堆栈 (Stack Trace) 精准排错</h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono">
                研发调试
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              遇到控制台红色报错、编译失败或单元测试不通过时，无需逐行人工猜原因。
            </p>
            <div className="p-2.5 rounded-lg bg-surface-elevated border border-theme-subtle text-[11px] font-mono text-secondary space-y-1">
              <div className="text-primary font-bold">💡 推荐提示词模版：</div>
              <div className="text-tertiary">
                “我在使用 [框架版本如 Next.js 15 / Spring Boot 3] 运行以下代码时遇到报错：[完整贴入堆栈报错]。请分析报错根本诱因并提供修复补丁。”
              </div>
            </div>
          </div>

          {/* 用法四：桌面端全局极速快捷唤起 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-3.5 hover:border-emerald-500/30 transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <Laptop className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-primary">4. 桌面端伴随窗口随时唤起</h3>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-mono">
                不切屏幕
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              无论正在 VS Code、IDEA 还是终端中打代码，无需在浏览器和 IDE 之间来回切换视窗。
            </p>
            <ul className="text-xs text-secondary space-y-1.5 border-t border-theme-subtle pt-2.5">
              <li className="flex items-start gap-1.5">
                <span className="text-teal-500 font-bold">•</span>
                <span><strong>Windows 用户：</strong>按 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px]">Alt + Space</kbd>；</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-teal-500 font-bold">•</span>
                <span><strong>macOS 用户：</strong>按 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px]">Option + Space</kbd>；</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-teal-500 font-bold">•</span>
                <span>浮窗悬浮在当前编辑器上方，随手询问语法参数，问完即走。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 步骤六：企业合规与数据安全守则 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            SECURITY
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            企业数据安全守则：官方 Zero Training 与使用边界
          </h2>
        </div>

        <div className="rounded-2xl border border-theme-default bg-surface p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>官方承诺：企业工作区默认不训练 (Zero Data Retention)</span>
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
              商业合规
            </span>
          </div>

          <p className="text-xs text-secondary leading-relaxed">
            不同于免费版个人账号，<strong>ChatGPT Business / Team 企业工作区</strong> 享受 OpenAI 官方最高级别的商业数据隐私保护：您在企业空间内输入的所有代码片段、业务文档与讨论内容，<strong>官方承诺绝不会用于未来公共模型的训练与迭代</strong>。
          </p>

          <div className="p-4 rounded-xl bg-surface-elevated border border-theme-subtle space-y-2 text-xs">
            <div className="font-bold text-primary flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              <span>新员工日常三大红线纪律：</span>
            </div>
            <ul className="space-y-1.5 text-secondary list-disc list-inside text-[11px] leading-relaxed">
              <li>
                <strong>严禁明文输入核心生产凭证：</strong>请勿在提问中直接贴入包含生产数据库真实明文密码、未脱敏的用户身份证/手机号、真实的支付私钥等敏感凭证（贴入前请先做占位脱敏，如用 <code className="font-mono bg-surface px-1 py-0.2 rounded">***REDACTED***</code> 代替）；
              </li>
              <li>
                <strong>严禁安装未审计的盗版插件：</strong>不要在浏览器中安装来源不明的第三方“ChatGPT 增强/汉化”套壳扩展，防止会话 Cookie 被窃取；
              </li>
              <li>
                <strong>席位专人专用禁止外借：</strong>企业席位直接关联企业资产与审计日志，严禁将账号转借给非公司编制的外部人员使用。
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 步骤七：常见踩坑与排错自救 FAQ */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
              新员工常见入职卡点与排错自救 (FAQ)
            </h2>
          </div>
          <span className="text-xs text-tertiary font-mono">秒级排障</span>
        </div>

        <div className="space-y-3.5">
          {/* FAQ 1 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-2">
            <h3 className="font-bold text-sm text-primary flex items-center gap-2">
              <span className="text-emerald-500 font-mono">Q1:</span>
              <span>邮箱始终收不到 OpenAI 发来的邀请邮件怎么办？</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed pl-6">
              首先检查邮箱的<strong>垃圾邮件箱 (Spam / Junk)</strong> 和企业邮箱拦截日志；如果依然没有，请让企业管理员在 Workspace 成员管理后台点击该员工邮箱旁的 <strong>Resend Invite (重新发送邀请)</strong>。也可请管理员直接点击「Copy Invite Link」通过飞书/企业微信私信发给您，点击链接即可直接激活。
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-2">
            <h3 className="font-bold text-sm text-primary flex items-center gap-2">
              <span className="text-emerald-500 font-mono">Q2:</span>
              <span>点击 Accept Invite 提示 &ldquo;Invalid invitation link&rdquo; 或 &ldquo;Access Denied&rdquo;？</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed pl-6">
              常见原因有两个：① 管理员在发信后重新生成或重发了邀请，导致旧链接失效，请使用最新一封邮件里的链接；② 您的当前浏览器中已登录了另一个不同的个人账号造成会话冲突。<strong>解决方法：</strong>复制邀请链接，在浏览器的<strong>无痕/隐私窗口 (Incognito Window)</strong> 中打开并使用收到邀请的同一邮箱登录即可。
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-2">
            <h3 className="font-bold text-sm text-primary flex items-center gap-2">
              <span className="text-emerald-500 font-mono">Q3:</span>
              <span>我切换到企业工作区后，我以前自己聊天的历史记录会被公司领导看到吗？</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed pl-6">
              <strong>完全不会！</strong>OpenAI 采用强空间物理隔离机制。您在 <strong>Personal (个人空间)</strong> 里的所有私人对话记录只有您自己可见；企业管理员只能看到您在<strong>企业工作区 (Company Workspace)</strong> 内的调用统计与共享 GPTs，无权穿透读取您个人的私有聊天记录。
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-2">
            <h3 className="font-bold text-sm text-primary flex items-center gap-2">
              <span className="text-emerald-500 font-mono">Q4:</span>
              <span>输入 2FA 验证器的 6 位验证码时，系统总是提示 &ldquo;Invalid Code&rdquo;？</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed pl-6">
              这是典型的<strong>设备时间同步偏差</strong>问题。动态验证码每 30 秒轮转一次，高度依赖精确网络时间。请打开手机设置 → 通用 → 日期与时间，确保勾选了<strong>「自动设置时间」</strong>。在 Google Authenticator 的设置中也可以点击「时间校准 (Time correction for codes)」。
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-2">
            <h3 className="font-bold text-sm text-primary flex items-center gap-2">
              <span className="text-emerald-500 font-mono">Q5:</span>
              <span>未来如果离职，我的个人账号和个人数据会被注销吗？</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed pl-6">
              不会。当管理员在企业后台收回席位时，只是从企业工作区中移除了您的成员身份，企业空间内沉淀的数据归企业；<strong>您绑定的个人邮箱账号依然完好无损保留</strong>，您可以继续登录您的 Personal 个人空间使用免费功能或自行订阅。
            </p>
          </div>
        </div>
      </section>

      {/* 底部导航卡片 */}
      <section className="rounded-2xl border border-theme-default bg-surface p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-base sm:text-lg text-primary">
              想了解更多企业管理与稳定自检技巧？
            </h3>
            <p className="text-xs text-secondary">
              管理员可查阅《企业 Business 部署手册》了解批量席位分配与对公发票开具；研发团队可查阅《网络稳定与 IP 质量自检指南》。
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/guide/business/"
              className="btn-openai-secondary text-xs px-3.5 py-2 inline-flex items-center gap-1.5"
            >
              <span>企业管理手册</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/guide/stability/"
              className="btn-openai-white text-xs px-3.5 py-2 inline-flex items-center gap-1.5"
            >
              <span>网络稳定指南</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
