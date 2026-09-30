import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  Server,
  AlertTriangle,
  ExternalLink,
  Laptop,
  Sparkles,
  Lock,
  Check,
  Radio,
} from "lucide-react";
import StabilityChecklist from "@/components/guide/StabilityChecklist";
import ProxyScriptCopier from "@/components/guide/ProxyScriptCopier";

export const metadata: Metadata = {
  title:
    "国内稳定使用 ChatGPT & Codex 全景实操指南 | IP纯净度自检与防封避坑手册 - AI代采",
  description:
    "专为国内开发者与企业技术团队打造的 ChatGPT / OpenAI Codex 稳定使用与网络自检全景指南。深度详解使用 ip.net.coffee/gpt/ 检测出口 IP 质量与欺诈分、TUN 虚拟网卡模式设置、DoH 远程 DNS 防泄漏、WebRTC 防穿透、独立 Chrome Profile 隔离、终端代理脚本一键生成与日常避坑十诫，彻底告别 403 Access Denied 与封号困扰。",
  keywords: [
    "ChatGPT稳定使用",
    "Codex稳定使用",
    "ip.net.coffee gpt",
    "OpenAI IP检测",
    "ChatGPT防封号",
    "OpenAI欺诈分检测",
    "TUN模式设置",
    "WebRTC泄露检测",
    "Codex终端代理",
    "ChatGPT 403排查",
    "OpenAI官方代采",
    "AI代采",
  ],
  alternates: {
    canonical: "https://gongsi.one/guide/stability/",
  },
  openGraph: {
    title: "国内稳定使用 ChatGPT & Codex 全景实操指南 | AI代采",
    description:
      "从 IP 质量自检到防封号环境隔离。详解 ip.net.coffee/gpt/ 质量检测、TUN 模式配置与日常避坑十诫，保障研发与出海业务连续稳定。",
    url: "https://gongsi.one/guide/stability/",
    siteName: "AI代采 gongsi.one",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "国内稳定使用 ChatGPT & Codex 全景实操指南",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "国内稳定使用 ChatGPT & Codex 全景实操指南 | AI代采",
    description:
      "从 IP 纯净度检测到防封号环境隔离，助您与企业团队告别 403 阻断与封号风险。",
    images: ["/og-image.png"],
  },
};

export default function StabilityGuidePage() {
  return (
    <article className="space-y-12 sm:space-y-16">
      {/* 顶部 Hero 专区 */}
      <section className="relative overflow-hidden rounded-3xl border border-theme-default bg-surface/90 backdrop-blur-xl p-8 sm:p-12 shadow-sm text-left">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 最新官方风控对抗实战手册 · 研发与企业团队必读</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-primary leading-tight">
            国内稳定使用 ChatGPT & Codex
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              全景自检与防封避坑指南
            </span>
          </h1>

          <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-3xl">
            国内访问 OpenAI（ChatGPT Plus / Pro / Team）及代码大模型（Codex /
            Cursor / 命令行）常遭遇
            <strong className="text-primary font-semibold">
              「403 Access Denied」、「Cloudflare 验证码死循环」
            </strong>
            甚至
            <strong className="text-primary font-semibold">
              「批量封号」
            </strong>
            。 绝大多数故障并非账号问题，而是
            <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
              出口 IP 纯净度不达标、DNS/WebRTC 泄露或多机房漂移
            </strong>
            触发了厂商风控模型。按照本指南 5 步 SOP
            排查配置，可杜绝 99% 的运行异常。
          </p>

          {/* 3 大核心优势指标卡 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-surface-elevated/80 border border-theme-subtle space-y-1">
              <div className="text-2xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                99.8%
              </div>
              <div className="text-xs font-semibold text-primary">
                异常与封号可被事前预防
              </div>
              <div className="text-[11px] text-tertiary">
                规范 IP 质量与环境隔离即可根治
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-surface-elevated/80 border border-theme-subtle space-y-1">
              <div className="text-2xl font-extrabold font-mono text-blue-600 dark:text-blue-400">
                0 秒
              </div>
              <div className="text-xs font-semibold text-primary">
                终端 Codex 脚本即贴即用
              </div>
              <div className="text-[11px] text-tertiary">
                支持 Win / Mac / Linux / VS Code
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-surface-elevated/80 border border-theme-subtle space-y-1">
              <div className="text-2xl font-extrabold font-mono text-amber-600 dark:text-amber-400">
                72h
              </div>
              <div className="text-xs font-semibold text-primary">
                SLA 兜底退赔服务支持
              </div>
              <div className="text-[11px] text-tertiary">
                AI代采官方渠道商业卡直充保障
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 快速直达锚点胶囊导航条 */}
      <nav
        aria-label="指南章节目录"
        className="sticky top-18 z-30 p-2 rounded-2xl bg-surface/95 backdrop-blur-xl border border-theme-default shadow-sm overflow-x-auto scrollbar-none flex items-center gap-1.5 text-xs font-medium"
      >
        <span className="text-[11px] font-mono text-tertiary px-2 shrink-0">
          章节快速直达:
        </span>
        <a
          href="#doctor"
          className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-secondary transition-colors shrink-0"
        >
          01. 网络医生自测
        </a>
        <a
          href="#ip-quality"
          className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-secondary transition-colors shrink-0"
        >
          02. IP 纯净度检测
        </a>
        <a
          href="#client-config"
          className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-secondary transition-colors shrink-0"
        >
          03. TUN 与 DNS 防漏
        </a>
        <a
          href="#browser-isolation"
          className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-secondary transition-colors shrink-0"
        >
          04. 浏览器环境隔离
        </a>
        <a
          href="#codex-terminal"
          className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-secondary transition-colors shrink-0"
        >
          05. Codex 终端配置
        </a>
        <a
          href="#ten-rules"
          className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-secondary transition-colors shrink-0"
        >
          06. 避坑十诫守则
        </a>
        <a
          href="#troubleshooting"
          className="px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 text-secondary transition-colors shrink-0"
        >
          07. 常见报错自救 SOP
        </a>
      </nav>

      {/* 模块一：交互式网络健康度自测打分器 */}
      <section id="doctor" className="scroll-mt-32">
        <StabilityChecklist />
      </section>

      {/* 模块二：第一步 · IP 纯净度与连通性自检（重点聚焦 ip.net.coffee） */}
      <section id="ip-quality" className="space-y-6 scroll-mt-32">
        <div className="space-y-1">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
            STEP 01 · FOUNDATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            第一步：使用专业工具核验出口 IP 纯净度与欺诈评分
          </h2>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            OpenAI 全站接入了 Cloudflare Turnstile 与 Kasada
            反爬/防欺诈系统。一旦你的出口 IP
            是廉价机房或者被同行滥用过，即使输入正确账密也会遭遇“Access
            Denied”或极速封号。
          </p>
        </div>

        {/* 核心检测工具 Spotlight：ip.net.coffee/gpt/ */}
        <div className="rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-surface to-surface p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                ★ 官方连通性专用判定推荐
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                ip.net.coffee/gpt/ · OpenAI 连通性与欺诈度自测平台
              </h3>
              <p className="text-xs sm:text-sm text-secondary">
                最权威、直观的专用检测页面，一秒判定当前 IP 是否具备访问 OpenAI
                原生服务的能力。
              </p>
            </div>
            <a
              href="https://ip.net.coffee/gpt/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-openai-white text-xs px-5 py-2.5 inline-flex items-center gap-2 shrink-0 shadow-md group cursor-pointer"
            >
              <span>立即打开检测页面</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <Globe className="w-4 h-4 text-emerald-500" />
                <span>Web / App 端访问权限</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                测试结果应显示为绿色勾选（Available）。若为红色
                Blocked，说明该节点已被 OpenAI 域名库列入物理屏蔽名单。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Cloudflare 质询等级</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                显示人机验证概率（Challenge
                Risk）。低风险节点直接透明放行；高风险节点会强制陷入无限打勾循环。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <Server className="w-4 h-4 text-emerald-500" />
                <span>IP 属性识别 (ISP vs DC)</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                清晰识别是原生家庭住宅宽带（Residential）还是托管机房（DataCenter）。家庭宽带稳定性远优于机房。
              </p>
            </div>
          </div>
        </div>

        {/* 辅助检测矩阵 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-sm text-primary">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Scamalytics 欺诈分查询</span>
              </div>
              <a
                href="https://scamalytics.com/ip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                <span>查询</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              业界通用的黑产风控指标。Fraud Score 满分 100 分。建议
              <strong className="text-primary font-semibold"> 分数 &lt; 20</strong> 为极佳；若 &gt; 40 分，OpenAI 注册与支付将百分之百被拒。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-sm text-primary">
                <Radio className="w-4 h-4 text-purple-500" />
                <span>BrowserLeaks WebRTC 泄漏测试</span>
              </div>
              <a
                href="https://browserleaks.com/webrtc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-1"
              >
                <span>检测</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              打开后观察“Public IP
              Addresses”。如果你在里面看到了自己中国大陆的运营商（电信/联通/移动）真实公网
              IP，说明你的代理被浏览器协议穿透泄漏了！
            </p>
          </div>
        </div>

        {/* 为什么机房 IP 不如住宅原生 IP 对比卡片 */}
        <div className="overflow-x-auto rounded-2xl border border-theme-subtle bg-surface">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-elevated text-secondary font-mono border-b border-theme-subtle">
              <tr>
                <th className="p-3.5">对比维度</th>
                <th className="p-3.5 text-emerald-600 dark:text-emerald-400">
                  原生商业住宅宽带 IP (ISP)
                </th>
                <th className="p-3.5 text-red-500">
                  便宜数据中心机房 IP (Hosting/DC)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-theme-subtle text-secondary">
              <tr>
                <td className="p-3.5 font-medium text-primary">
                  OpenAI 默认信任级别
                </td>
                <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  高（视同海外普通家庭网民）
                </td>
                <td className="p-3.5 text-red-500">
                  极低（视同黑客爬虫或批量机器人）
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-primary">
                  Cloudflare 验证码频率
                </td>
                <td className="p-3.5">极罕见出现，基本无感知放行</td>
                <td className="p-3.5">高频触发旋转验证码或直接 403 阻断</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-primary">连带连坐封禁风险</td>
                <td className="p-3.5">独立私有信誉，互不影响</td>
                <td className="p-3.5">邻居若用同网段刷垃圾接口，整个网段账号连坐封杀</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-primary">企业研发使用建议</td>
                <td className="p-3.5 font-medium text-primary">
                  首选：企业专线出口或原生住宅代理
                </td>
                <td className="p-3.5">坚决弃用 AWS/Oracle 等公共机房直连</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 警惕 Anycast 广播 IP 陷阱 */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold">
              避坑警告：谨防 Anycast 广播 IP 导致的地区跳跃
            </div>
            <p className="leading-relaxed text-amber-700 dark:text-amber-300">
              部分机场宣称是“美国西雅图”节点，但实际是 BGP
              广播给香港机房的任何播（Anycast）路由。当请求到达 OpenAI CDN
              时，其就近识别为非支持区域（香港），进而直接弹窗提示“Not available
              in your country”。请务必在 ip.net.coffee/gpt/
              核实真实路由落地国家。
            </p>
          </div>
        </div>
      </section>

      {/* 模块三：第二步 · 客户端代理工具与分流最佳实践 */}
      <section id="client-config" className="space-y-6 scroll-mt-32">
        <div className="space-y-1">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
            STEP 02 · CLIENT ROUTING
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            第二步：客户端代理工具与分流内核配置
          </h2>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            普通浏览器代理插件（如 SwitchyOmega）只管 HTTP 网页，不管 UDP、DNS
            与 IDE 终端命令。必须使用具备 TUN 虚拟网卡接管能力的现代客户端。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold font-mono text-emerald-600 dark:text-emerald-400 text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-primary">
              开启 TUN 虚拟网卡模式
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              推荐使用 <strong>Clash Verge Rev</strong> 或{" "}
              <strong>Sing-box</strong>。在设置中开启「TUN 模式（虚拟网卡）」。
              虚拟网卡会在操作系统驱动层接管整机流量，保证哪怕命令行没有配
              proxy，流量也绝不从裸网流出。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold font-mono text-blue-600 dark:text-blue-400 text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-primary">
              远程 DoH 加密 DNS 防泄漏
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              严禁使用运营商默认的 114 或 223 解析国外域名。
              在代理客户端配置中，将 remote-dns 设置为{" "}
              <code className="px-1 py-0.5 rounded bg-surface-elevated font-mono">
                https://1.1.1.1/dns-query
              </code>{" "}
              或{" "}
              <code className="px-1 py-0.5 rounded bg-surface-elevated font-mono">
                8.8.8.8
              </code>
              ，彻底封堵本地 DNS 污染。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-bold font-mono text-purple-600 dark:text-purple-400 text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-primary">
              固定单一出口（严禁自动测速）
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              很多人将 OpenAI 分流策略组设为了“自动选择（URL-Test /
              Fallback）”。每隔几分钟测一次延时并自动切换节点，
              这在安全风控系统看来就是“账号在同一小时内穿越多个国家”，属极高危行为！务必固定某一个可靠节点。
            </p>
          </div>
        </div>
      </section>

      {/* 模块四：第三步 · 浏览器环境隔离与反指纹穿透 */}
      <section id="browser-isolation" className="space-y-6 scroll-mt-32">
        <div className="space-y-1">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
            STEP 03 · BROWSER INTEGRITY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            第三步：浏览器工作环境隔离与反指纹穿透
          </h2>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            绝不要使用日常查淘宝、刷微博、安装了几十个不可信国内插件的主力浏览器登录
            ChatGPT。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-4">
            <div className="flex items-center gap-2.5">
              <Laptop className="w-5 h-5 text-emerald-500" />
              <h3 className="text-base font-bold text-primary">
                1. 建立独立的「OpenAI 工作 Profile」
              </h3>
            </div>
            <div className="space-y-2 text-xs text-secondary leading-relaxed">
              <p>
                在 Chrome / Edge 浏览器右上角点击你的头像，选择【添加其他个人资料
                (Add Profile)】，命名为「OpenAI Work」。
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-primary">
                <li>该 Profile 内不安装任何国内扩展与比价插件；</li>
                <li>不与百度、淘宝、微信网页版同会话共存；</li>
                <li>避免因插件注入恶意 script 导致 Cloudflare 安全拦截；</li>
                <li>或者直接在浏览器的【无痕窗口 (Incognito)】中工作。</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-4">
            <div className="flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-blue-500" />
              <h3 className="text-base font-bold text-primary">
                2. 禁用 WebRTC 泄漏真实 IP
              </h3>
            </div>
            <div className="space-y-2 text-xs text-secondary leading-relaxed">
              <p>
                WebRTC
                是网页音视频通信协议，具备直接穿透本地代理获取局域网与广域网真实
                IP 的能力。
              </p>
              <div className="p-3 rounded-xl bg-surface-elevated font-mono text-[11px] space-y-1">
                <div className="text-tertiary">推荐处理方式：</div>
                <div className="text-primary">
                  1. Chrome 应用商店搜索安装【WebRTC Control】插件并设为
                  Block；
                </div>
                <div className="text-primary">
                  2. 或在 chrome://flags 中关闭 WebRTC STUN 探索支持。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 模块五：第四步 · 开发者 Codex / 终端与 IDE 网络配置 */}
      <section id="codex-terminal" className="space-y-6 scroll-mt-32">
        <div className="space-y-1">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
            STEP 04 · DEVELOPER WORKSPACE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            第四步：Codex 研发代码助手与终端代理一键配
          </h2>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            工程师在 VS Code / Cursor / Windsurf 中使用 OpenAI Codex
            代码模型，经常遇到扩展连接超时。
            在终端敲命令行拉取大模型权重或调用 API
            时，需在当前会话注入精准的本地代理环境变量。
          </p>
        </div>

        {/* 交互式终端脚本一键生成器 */}
        <ProxyScriptCopier />

        {/* 开发者避坑补充 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="text-xs font-semibold text-primary flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>VS Code / Cursor 证书错误</span>
            </div>
            <p className="text-[11px] text-secondary leading-relaxed">
              若代理开启后 IDE 提示{" "}
              <code className="text-primary font-mono">
                unable to get local issuer certificate
              </code>
              ，请在 VS Code 设置中搜索{" "}
              <code className="text-primary font-mono">
                Http: Proxy Strict SSL
              </code>{" "}
              并取消勾选即可恢复。
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="text-xs font-semibold text-primary flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Node / Python API 超时处理</span>
            </div>
            <p className="text-[11px] text-secondary leading-relaxed">
              Node.js 默认不会读取系统的 HTTP_PROXY，可在启动脚本前加入{" "}
              <code className="text-primary font-mono">
                NODE_OPTIONS=&quot;--dns-result-order=ipv4first&quot;
              </code>{" "}
              或使用全局 socks-proxy-agent 封装请求。
            </p>
          </div>
        </div>
      </section>

      {/* 模块六：第五步 · 规避封号风控的「避坑十诫」 */}
      <section id="ten-rules" className="space-y-6 scroll-mt-32">
        <div className="space-y-1">
          <div className="text-xs font-mono text-red-500 uppercase tracking-wider font-semibold">
            STEP 05 · CRITICAL POLICIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            第五步：防封号风控的「避坑十诫」（严守生命线）
          </h2>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            根据 OpenAI 与 Stripe 的多维度欺诈防护模型，以下 10
            项行为极易直接导致账号被停用（Account Deactivated）：
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              id: "01",
              title: "忌短时间内跨大洲高频瞬移",
              desc: "早晨东京、中午伦敦、傍晚旧金山。物理上不可能的旅行轨迹是触发机器风控的第一杀手。必须固定单一区域出口。",
              level: "极度高危",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "02",
              title: "忌低价公开万人骑机房机场",
              desc: "某几十块包年的大机场，上百人共用一个出口 IP。只要同网段有人涉嫌黑灰产或滥刷接口，整个网段账号连带一锅端。",
              level: "极度高危",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "03",
              title: "忌多设备同账号突发高并发请求",
              desc: "将个人 Plus 账号同时给整个部门 5 个人共用并同时高频提问，会触发非正常人机交互阈值报警并被判定为商用转售。",
              level: "中度危险",
              color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
            },
            {
              id: "04",
              title: "忌在网页端反复频繁登出与登入",
              desc: "不要每次关闭电脑都特意点击 Log Out。正常的海外用户都会保持 Cookie 会话长久登录，频繁登入登出极易导致刷新令牌失效。",
              level: "轻度风险",
              color: "text-blue-500 border-blue-500/20 bg-blue-500/5",
            },
            {
              id: "05",
              title: "忌输入触发核心安全防线的敏感 Prompt",
              desc: "连续尝试越狱（Jailbreak）、注入恶意攻击指令或高危政治黑客内容，会被安全过滤器打标，累积多次后账号永久作废。",
              level: "极度高危",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "06",
              title: "忌使用淘宝黑卡/低价盗刷代充",
              desc: "低于官方 $20 美金成本的所谓“特价代充”，全都是盗刷海外信用卡。一旦真正持卡人向银行发起拒付，该账号立刻死刑且不可申诉。",
              level: "必定封禁",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "07",
              title: "忌在同一浏览器历史混用多个账号",
              desc: "如果前一个账号刚被封，绝对不能在同一个浏览器直接登录新号！必须彻底清除该域名的 Cookie / LocalStorage 或新建独立 Profile。",
              level: "高危连坐",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "08",
              title: "忌遭遇 403 页面时反复暴力按 F5 刷新",
              desc: "当遭遇 Cloudflare 403 挑战失败时，连续狂按 F5 会使你的 IP 惩罚分瞬间飙升至顶峰。应立即关闭网页，更换节点并隔 10 分钟后再试。",
              level: "中度风险",
              color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
            },
            {
              id: "09",
              title: "宜保持长连接 Session 心跳与环境纯净",
              desc: "尽量将工作习惯固定在每日稳定时间段，使用官方允许的正常工作提示词交互，营造与真实白领研发人员完全一致的使用画像。",
              level: "稳健推荐",
              color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
            },
            {
              id: "10",
              title: "企业团队宜采用集中出口与官方集采",
              desc: "企业研发团队应由 IT 部门统筹独立固定的出海专线网关，并为员工统一配备官方合法代采的独立账密与 SLA 保障，严禁员工私下乱买。",
              level: "企业必做",
              color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
            },
          ].map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border ${item.color} space-y-2`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold">{item.id}.</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-current">
                  {item.level}
                </span>
              </div>
              <h3 className="text-sm font-bold text-primary">{item.title}</h3>
              <p className="text-xs text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 模块七：常见报错与网络医生紧急排查 SOP */}
      <section id="troubleshooting" className="space-y-6 scroll-mt-32">
        <div className="space-y-1">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
            STEP 06 · EMERGENCY RECOVERY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
            突发报错自救手册（网络医生 4 大 SOP）
          </h2>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            遇到报错请勿慌张，95%
            的报错按照以下标准流程可以在几分钟内快速恢复。
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <h3 className="text-base font-bold text-primary">
                报错 01：403 Forbidden 或 Cloudflare 旋转验证码死循环
              </h3>
            </div>
            <div className="text-xs text-secondary leading-relaxed pl-4 border-l-2 border-theme-subtle space-y-1.5">
              <p>
                <strong className="text-primary">病因定位：</strong>当前出口 IP
                的 Cloudflare 欺诈评分过高，或者你的浏览器 WebRTC
                泄露了国内真实 IP。
              </p>
              <p>
                <strong className="text-emerald-600 dark:text-emerald-400">
                  标准处置 SOP：
                </strong>
                ① 立即关闭当前浏览器窗口，不要按 F5；② 切换至
                ip.net.coffee/gpt/ 测试合格的全新住宅节点；③ 按 Ctrl+Shift+N
                打开无痕窗口重新访问 chatgpt.com。
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <h3 className="text-base font-bold text-primary">
                报错 02：Not available in your country (地区不受支持)
              </h3>
            </div>
            <div className="text-xs text-secondary leading-relaxed pl-4 border-l-2 border-theme-subtle space-y-1.5">
              <p>
                <strong className="text-primary">病因定位：</strong>
                DNS 发生泄漏回源到了中国大陆，或者使用了 Anycast 广播落入香港、俄罗斯等非官方支持区域的节点。
              </p>
              <p>
                <strong className="text-emerald-600 dark:text-emerald-400">
                  标准处置 SOP：
                </strong>
                ① 检查代理分流规则，确认 openai.com走的是美、日、欧合规节点；②
                代理客户端开启 TUN 模式并换用 1.1.1.1 远程加密 DNS。
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h3 className="text-base font-bold text-primary">
                报错 03：Something went wrong. Please try again later (白屏)
              </h3>
            </div>
            <div className="text-xs text-secondary leading-relaxed pl-4 border-l-2 border-theme-subtle space-y-1.5">
              <p>
                <strong className="text-primary">病因定位：</strong>本地
                LocalStorage 中的 session token 损坏，或国内翻译插件篡改了 DOM
                结构导致 React 渲染抛错。
              </p>
              <p>
                <strong className="text-emerald-600 dark:text-emerald-400">
                  标准处置 SOP：
                </strong>
                在浏览器开发者工具 (F12) 中进入【Application】→【Storage】点击
                Clear site data，关闭网页翻译插件后刷新即可。
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-theme-subtle space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <h3 className="text-base font-bold text-primary">
                报错 04：Your account was deactivated (账号已停用)
              </h3>
            </div>
            <div className="text-xs text-secondary leading-relaxed pl-4 border-l-2 border-theme-subtle space-y-1.5">
              <p>
                <strong className="text-primary">病因定位：</strong>
                多为非正规充值渠道使用了黑卡盗刷被持卡人 Chargeback
                退单，或连续严重违规。
              </p>
              <p>
                <strong className="text-emerald-600 dark:text-emerald-400">
                  标准处置 SOP：
                </strong>
                若是在 <strong>AI代采 (gongsi.one)</strong> 采购的官方正规账号，
                激活 72 小时内由我们的公章《SLA 售后协议》直接 2
                小时内免费换新补发；后续在订阅期内严格按天折算退款，资金与业务绝不蒙受损失。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 模块八：企业研发团队合规出海与 SLA 转化 CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white border border-zinc-800 text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>企业合规集采 · 让技术团队不再把精力浪费在折腾网络上</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            专注研发创新，把底层合规与 SLA 兜底交给我们
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            AI 代采（gongsi.one）专为中国技术团队与出海机构提供 OpenAI Codex /
            ChatGPT Plus / Pro (5x/20x) / Team 企业级官方合规代采通道。
            支持中国工商银行网银对公转账、开具国家税务 6%
            增值税专用发票（信息技术服务费），提供 72h
            封号免费包赔与全周期按天折算退赔保障。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              href="/#calculator"
              className="btn-openai-white w-full sm:w-auto text-xs sm:text-sm px-7 py-3.5 shadow-lg text-center"
            >
              前往实时测算集采预算
            </Link>
            <Link
              href="/docs/pricing/"
              className="btn-openai-secondary w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5"
            >
              查阅 2026 最新官方阶梯报价
            </Link>
            <Link
              href="/solutions/codex-procurement/"
              className="w-full sm:w-auto text-xs text-zinc-400 hover:text-white transition-colors underline py-2"
            >
              了解 Codex 研发代采方案 →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
