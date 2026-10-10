import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Apple,
  Monitor,
  Smartphone,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap,
  KeyRound,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Terminal,
  HelpCircle,
  Compass,
  Laptop,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "个人 ChatGPT & Codex 极速上手全景指南 | 官方正版下载·首登避坑·高效使用 - AI代采",
  description:
    "专为国内个人开发者、科研学者与出海从业者打造的 ChatGPT (Plus/Pro) 与 Codex 上手实操指南。涵盖 macOS/Windows/iOS/Android 全平台正版下载验证、新号首次登录冷启动防封禁、2FA双重验证、核心功能进阶与常见报错自救。",
  keywords: [
    "ChatGPT下载",
    "ChatGPT官方正版下载",
    "ChatGPT电脑客户端",
    "ChatGPT iOS下载",
    "ChatGPT Windows安装包",
    "ChatGPT首次登录避坑",
    "ChatGPT防封号",
    "ChatGPT新手教程",
    "AI代采个人指南",
  ],
  alternates: {
    canonical: "https://gongsi.one/guide/personal/",
  },
  openGraph: {
    title: "个人 ChatGPT & Codex 极速上手全景指南 | 官方正版下载与避坑 - AI代采",
    description:
      "全平台正版客户端下载验证、首登 24 小时冷启动守则、2FA 绑定与高效使用技巧，杜绝盗版与封号风险。",
    url: "https://gongsi.one/guide/personal/",
    siteName: "AI代采 gongsi.one",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "个人 ChatGPT 极速上手指南",
      },
    ],
  },
};

export default function PersonalGuidePage() {
  return (
    <article className="space-y-10 sm:space-y-12">
      {/* 顶部 Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 sm:p-10 shadow-sm text-left">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>个人客户专享 · Plus / Pro / Codex · 2026 最新官方实操</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
            个人 ChatGPT & Codex 极速上手
            <span className="block mt-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              从官方正版下载到高效进阶全景指南
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            无论您是通过我司代充升级了已有的个人邮箱账号，还是购买了即用型算力账号，在正式开始前，请务必认准<strong>全平台官方正版客户端</strong>并遵守<strong>新号首登“冷启动”法则</strong>。谨防国内山寨套壳扣费软件，从源头远离封号与数据泄漏。
          </p>

          {/* 快速执行流程线 */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-medium">
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ① 下载正版客户端
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ② 首次安全登录
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ③ 绑定 2FA 防盗
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ④ 解锁高阶效能
            </span>
          </div>

          <div className="pt-2 text-xs text-secondary flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold">🏢 团队/企业员工提示:</span>
            <span>若是公司采购分配给您的席位，请查阅专门的</span>
            <Link
              href="/guide/onboarding/"
              className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline inline-flex items-center gap-0.5"
            >
              <span>《新员工从 0 到 1 Codex 上手实操指南》</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 模块一：全平台官方正版下载矩阵 */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第一步：全平台官方正版下载与验证渠道
          </h2>
        </div>
        <p className="text-xs text-secondary">
          市场上充斥着大量冒充官方的钓鱼应用、吸费软件和二级代理套壳应用。请严格通过以下官方直连渠道获取正版：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* macOS 客户端 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-4 hover:border-emerald-500/30 transition-colors shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Apple className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">macOS 官方桌面端</h3>
                  <p className="text-[11px] text-tertiary font-mono">支持 Apple Silicon (M1/M2/M3/M4) 与 Intel 架构</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono border border-emerald-500/20">
                推荐首选
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              支持快捷键 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px] text-primary">Option + Space</kbd> 全局随处呼出浮窗、桌面截图即问、高级语音与代码编辑器配合。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">官方下载直链: openai.com</span>
              <a
                href="https://openai.com/chatgpt/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-white text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>官网下载 DMG</span>
              </a>
            </div>
          </div>

          {/* Windows 客户端 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-4 hover:border-emerald-500/30 transition-colors shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">Windows 10 / 11 桌面端</h3>
                  <p className="text-[11px] text-tertiary font-mono">微软应用商店 / 官方 MSIX 安装包</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono border border-blue-500/20">
                原生极速
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              支持快捷键 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px] text-primary">Alt + Space</kbd> 伴随浮窗提问、文件随手拖拽分析。国内用户需切换 Microsoft Store 区域至美区或使用官方安装包。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">微软商店 / 官网通道</span>
              <a
                href="https://openai.com/chatgpt/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-white text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>官网获取 Windows 版</span>
              </a>
            </div>
          </div>

          {/* iOS / iPadOS 客户端 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-4 hover:border-emerald-500/30 transition-colors shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">iOS / iPadOS (iPhone / iPad)</h3>
                  <p className="text-[11px] text-tertiary font-mono">需海外 Apple ID 登录 App Store 下载</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono border border-purple-500/20">
                双工语音
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              中国区 App Store 未上架。请在 App Store 切换至美区/日区账号搜索下载。认准开发者名称为 <strong>OpenAI</strong>，白色图标黑底或纯白简约线条，谨防高仿诱导内购应用。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">App Store: 开发者 OpenAI</span>
              <a
                href="https://apps.apple.com/us/app/chatgpt/id6448311069"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-secondary text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>美区 App Store 页面</span>
              </a>
            </div>
          </div>

          {/* Android 客户端 */}
          <div className="rounded-2xl border border-theme-default bg-surface p-5 space-y-4 hover:border-emerald-500/30 transition-colors shadow-xs">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-theme-subtle flex items-center justify-center text-primary">
                  <Smartphone className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-primary">Android 安卓客户端</h3>
                  <p className="text-[11px] text-tertiary font-mono">Google Play 官方商店 / 官方纯净分发</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-elevated text-secondary font-mono border border-theme-subtle">
                Google 框架
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              安卓设备需具备 Google Play 基础运行环境。请在 Google Play 商店搜索并安装由 OpenAI 官方发行的 ChatGPT。避免在未验证的第三方应用市场下载经二次打包修改的 APK。
            </p>
            <div className="pt-2 border-t border-theme-subtle flex items-center justify-between">
              <span className="text-[11px] text-tertiary font-mono">Play Store: OpenAI</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.openai.chatgpt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-openai-secondary text-xs px-3 py-1.5 inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Google Play 页面</span>
              </a>
            </div>
          </div>
        </div>

        {/* 网页版备用入口提示 */}
        <div className="p-4 rounded-xl border border-theme-subtle bg-surface-elevated flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-secondary">
            <Laptop className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              浏览器直连：随时访问官方网页端 <code className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle font-mono text-[11px] text-primary">chatgpt.com</code>。建议使用 Chrome 或 Edge 纯净模式。
            </span>
          </div>
          <Link
            href="/guide/stability/"
            className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium shrink-0 inline-flex items-center gap-1"
          >
            <span>检查网络与 IP 纯净度</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 模块二：首次登录与安全冷启动原则 */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第二步：新账号首次登录与 24 小时“冷启动”法则
          </h2>
        </div>
        <p className="text-xs text-secondary">
          OpenAI 的安全风控系统对新开通的订阅账号或首次异地登录的账号最为敏感。遵循以下规范，可规避 99% 的封号与降智：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>1. 登录前开启 TUN 模式</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              绝不能仅开启浏览器插件代理或普通规则代理。在客户端中打开 TUN 模式（虚拟网卡全局接管），防止 DNS 泄露导致被 Cloudflare 识别为代理特征。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>2. 24 小时内固定单一节点</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              切忌在刚登录的前 24 小时内频繁切换节点。如果在 10 分钟内先使用日本节点、紧接着切换到美国西海岸，风控系统会判定为多地账号共享或被盗并触发冻结。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>3. 循序渐进提问与调用</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              首次登录先进行常规的文本交互和提问，避免直接发起脚本高频批量请求或尝试触发系统安全审查底线的问题，让账号建立健康的初始行为基线。
            </p>
          </div>
        </div>

        {/* 2FA 双重认证警告 */}
        <div className="rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-surface to-surface p-5 space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
            <KeyRound className="w-4 h-4" />
            <span>强烈建议：立即在账号设置中开启 2FA (双重身份验证)</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            近年来黑产撞库严重，开启 2FA 可以彻底锁死账号资产。操作路径：点击左下角头像 → <strong>Settings</strong> → <strong>Security</strong> → 找到 <strong>Multi-factor authentication (MFA)</strong>，使用 Google Authenticator、1Password 或微软身份验证器扫码绑定。
          </p>
        </div>
      </section>

      {/* 模块三：个人进阶高效玩法 */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第三步：解锁 ChatGPT Plus / Pro 核心生产力特性
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="font-bold text-sm text-primary flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span>深度思考模型 (o1 / GPT-6 Astra) 充分唤醒</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              针对复杂算法设计、数理推导、长架构方案，在顶部模型选择器中切换到 o1 系列。遇到复杂问题给予明确目标并要求输出推理链（Thinking Process），避免使用简单指令。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="font-bold text-sm text-primary flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span>Canvas 交互画布：沉浸式修改代码与长文</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              在对话框中输入 <code className="px-1 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px]">use canvas</code>，右侧将展开独立编辑器。可对具体代码块逐行提问、重构、添加调试日志，极大提升研发与内容创作效率。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="font-bold text-sm text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>高级数据分析 (Python 沙盒运行)</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              直接向对话窗口拖入 CSV、Excel、JSON 或图片。ChatGPT 会自动启动专属云端 Python 沙盒环境执行清洗、数据可视化与回归建模，并提供处理后文件的一键下载。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="font-bold text-sm text-primary flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>Deep Research 深度全网科研级调研</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              Pro 订阅专享功能。可自主拆解数十步检索路径、搜集海量权威外文文献与学术源，自动生成长达数十页结构严谨的高质量研报与对比评测。
            </p>
          </div>
        </div>
      </section>

      {/* 模块四：遇到问题？直达自救 */}
      <section className="rounded-2xl border border-theme-default bg-surface-elevated/70 p-6 space-y-4 text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base text-primary">使用过程中遇到常见异常与报错？</h3>
          </div>
          <Link
            href="/help/"
            className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
          >
            <span>进入问题中心全库</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <p className="text-xs text-secondary">
          若在使用中出现页面打不开、模型回答突然变短变蠢，请参考对应的深度解决方案：
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
          <Link
            href="/help/codex-chatgpt-degraded/"
            className="p-3 rounded-lg bg-surface border border-theme-subtle hover:border-emerald-500/40 transition-colors space-y-1 block"
          >
            <div className="font-semibold text-primary">模型疑似被“降智”？</div>
            <div className="text-[11px] text-tertiary">PoW难度自测与恢复方案</div>
          </Link>

          <Link
            href="/help/access-denied-403-cloudflare/"
            className="p-3 rounded-lg bg-surface border border-theme-subtle hover:border-emerald-500/40 transition-colors space-y-1 block"
          >
            <div className="font-semibold text-primary">403 Access Denied</div>
            <div className="text-[11px] text-tertiary">Cloudflare 阻断与伪造绕过</div>
          </Link>

          <Link
            href="/help/codex-rate-limit-429/"
            className="p-3 rounded-lg bg-surface border border-theme-subtle hover:border-emerald-500/40 transition-colors space-y-1 block"
          >
            <div className="font-semibold text-primary">429 限流 / 额度用尽</div>
            <div className="text-[11px] text-tertiary">Usage Cap 突破与错峰使用</div>
          </Link>

          <Link
            href="/guide/stability/"
            className="p-3 rounded-lg bg-surface border border-theme-subtle hover:border-emerald-500/40 transition-colors space-y-1 block"
          >
            <div className="font-semibold text-primary">IP 纯净度与避坑十诫</div>
            <div className="text-[11px] text-tertiary">ip.net.coffee 连通性核验</div>
          </Link>
        </div>
      </section>

      {/* 底部 CTA 引导与企业通道 */}
      <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-surface to-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
        <div className="space-y-1.5 max-w-xl">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono">
            TEAM & ENTERPRISE
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-primary">
            准备为公司或研发团队开通多席位 Business 空间？
          </h3>
          <p className="text-xs text-secondary leading-relaxed">
            企业集中采购支持统一对公转账、6% 增值税专用发票、工作区专属域名与严禁数据模型训练（Zero Training on Business Data）。
          </p>
        </div>
        <Link
          href="/guide/business/"
          className="btn-openai-white text-xs px-5 py-2.5 inline-flex items-center gap-2 shrink-0 shadow-sm"
        >
          <span>查看企业 Business 部署手册</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </article>
  );
}
