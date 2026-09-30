import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  Server,
  AlertTriangle,
  ExternalLink,
  Sparkles,
  Check,
  Radio,
} from "lucide-react";
import ProxyScriptCopier from "@/components/guide/ProxyScriptCopier";

export const metadata: Metadata = {
  title:
    "国内稳定使用 ChatGPT & Codex 全景实操指南 | IP质量自检与避坑十诫 - AI代采",
  description:
    "专为国内开发者与企业技术团队打造的 ChatGPT / OpenAI Codex 稳定使用极简指南。使用 ip.net.coffee/gpt/ 快速自测 IP 纯净度、客户端 TUN 模式防漏、终端代理一键配置与日常避坑十诫，彻底告别 403 Access Denied 与封号困扰。",
  keywords: [
    "ChatGPT稳定使用",
    "Codex稳定使用",
    "ip.net.coffee gpt",
    "OpenAI IP检测",
    "ChatGPT防封号",
    "避坑十诫",
    "TUN模式设置",
    "Codex终端代理",
    "AI代采",
  ],
  alternates: {
    canonical: "https://gongsi.one/guide/stability/",
  },
  openGraph: {
    title: "国内稳定使用 ChatGPT & Codex 全景实操指南 | AI代采",
    description:
      "直奔核心：IP 质量自测、客户端 3 件事、避坑十诫守则与 Codex 终端配置，保障业务稳定连续。",
    url: "https://gongsi.one/guide/stability/",
    siteName: "AI代采 gongsi.one",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "国内稳定使用 ChatGPT & Codex 指南",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "国内稳定使用 ChatGPT & Codex 全景实操指南 | AI代采",
    description: "直奔核心：IP 质量自测、避坑十诫守则与 Codex 终端配置。",
    images: ["/og-image.png"],
  },
};

export default function StabilityGuidePage() {
  return (
    <article className="space-y-10 sm:space-y-12">
      {/* 顶部 Hero 专区：清爽聚焦 */}
      <section className="relative overflow-hidden rounded-3xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 sm:p-10 shadow-sm text-left">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>实战干货 · 拒绝废话 · 研发与企业团队必读</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
            国内稳定使用 ChatGPT & Codex
            <span className="block mt-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              IP 自检与日常避坑指南
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            国内访问 OpenAI 或使用 Codex
            常遭遇「403 阻断」、「Cloudflare 验证码死循环」或封号。
            绝大多数问题都源于<strong>出口 IP 质量差、节点频繁漂移或环境污染</strong>。
            掌握以下 <strong>自检方法 + 避坑十诫</strong>，即可从源头杜绝 99% 的异常。
          </p>

          {/* 3 步执行极简路径条 */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-medium">
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ① 查 IP 纯净度
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ② 客户端配好 3 件事
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ③ 严守避坑十诫
            </span>
          </div>
        </div>
      </section>

      {/* 模块一：第一步 · IP 纯净度自检（重点突出 ip.net.coffee） */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            STEP 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第一步：使用专业工具，先查出口 IP 纯净度
          </h2>
        </div>

        {/* 核心卡片：ip.net.coffee/gpt/ */}
        <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-surface to-surface p-5 sm:p-7 space-y-5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-500" />
                <h3 className="text-base sm:text-lg font-bold text-primary">
                  ip.net.coffee/gpt/ · OpenAI 专属连通性检测
                </h3>
              </div>
              <p className="text-xs text-secondary">
                国内最权威直观的检测工具，一键判断你的节点是否具备访问资格。
              </p>
            </div>
            <a
              href="https://ip.net.coffee/gpt/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-openai-white text-xs px-4 py-2 inline-flex items-center gap-1.5 shrink-0 group cursor-pointer shadow-sm"
            >
              <span>立即去检测当前 IP</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* 3 条大白话判别法 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
            <div className="p-3.5 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
              <div className="font-semibold text-primary flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>1. Web/App 访问连通性</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                检测结果需显示为绿色 <strong className="text-emerald-600 dark:text-emerald-400">Available</strong>。
                若为红色 Blocked，表明该节点已被物理拉黑，请立即换节点。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
              <div className="font-semibold text-primary flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-emerald-500" />
                <span>2. IP 宿主类型识别</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                住宅宽带（Residential / ISP）优于机房（DataCenter）。
                便宜机房 IP 邻居混杂，最容易遭遇连坐封号。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
              <div className="font-semibold text-primary flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-emerald-500" />
                <span>3. 警惕 Anycast 地区漂移</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                确认落地国家是否为支持区域（美、日、欧等）。
                若广播落到了香港或国内，会直接提示“Not available in your country”。
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-theme-subtle text-[11px] text-tertiary">
            <span>
              💡 进阶辅助工具：
              <a
                href="https://scamalytics.com/ip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline ml-1 mr-2"
              >
                Scamalytics 欺诈分查询 (&lt;20为优)
              </a>
              |
              <a
                href="https://browserleaks.com/webrtc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline ml-1"
              >
                BrowserLeaks WebRTC 防泄漏测试
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* 模块二：第二步 · 客户端与环境搞定 3 件事 */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            STEP 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第二步：客户端与环境配置，只需搞定 3 件事
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
              01
            </div>
            <h3 className="text-sm font-bold text-primary">开启 TUN 虚拟网卡模式</h3>
            <p className="text-xs text-secondary leading-relaxed">
              在 Clash Verge Rev / Sing-box 中打开 <strong>TUN 模式</strong>。
              虚拟网卡接管整机流量，确保终端命令、系统后台与 UDP 请求绝不从国内裸网漏出。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
              02
            </div>
            <h3 className="text-sm font-bold text-primary">固定节点，切忌自动测速轮询</h3>
            <p className="text-xs text-secondary leading-relaxed">
              OpenAI 分流组<strong>必须手动固定在单一稳定节点</strong>。
              如果设为“自动选择/最快节点 (URL-Test)”，节点频繁跨区漂移，系统直接判定异地盗号。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface border border-theme-subtle space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-mono font-bold text-xs">
              03
            </div>
            <h3 className="text-sm font-bold text-primary">专用浏览器 Profile / 无痕窗口</h3>
            <p className="text-xs text-secondary leading-relaxed">
              在 Chrome 右上角新建一个独立的「OpenAI Work」工作配置，或者在无痕窗口登录。
              避免国内恶意的比价、广告拦截插件篡改网页指纹导致 403。
            </p>
          </div>
        </div>
      </section>

      {/* 模块三：第三步 · Codex 开发者专区（终端代理脚本一键配置） */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-bold border border-purple-500/20">
            STEP 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第三步：研发 Codex / 命令行代理一键生成
          </h2>
        </div>
        <p className="text-xs text-secondary leading-relaxed">
          针对 VS Code、Cursor、Git 及命令行调用大模型，在终端一键注入临时代理变量（随用随走，关闭终端自动失效）：
        </p>

        {/* 交互式生成器组件 */}
        <ProxyScriptCopier />
      </section>

      {/* 模块四：核心主角 · 日常使用「避坑十诫」（核心生命线） */}
      <section className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-theme-subtle pb-3">
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>CORE RULES · 核心生命线</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              日常使用「避坑十诫」（防封必背）
            </h2>
          </div>
          <span className="text-xs text-tertiary">
            违反任意一条核心红线，账号都有被风控停用风险
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {[
            {
              id: "01",
              title: "忌短时间内跨大洲高频瞬移",
              desc: "上午东京、中午法兰克福、晚上旧金山。物理上不可能的旅行轨迹是触发机器风控的第一杀手。务必固定单一出口。",
              level: "极度高危",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "02",
              title: "忌低价公开万人骑机房机场",
              desc: "几十块包年的廉价机场，上百人共用同个机房 IP。一旦同网段有人涉嫌黑灰产或滥刷接口，整个网段账号连带一网打尽。",
              level: "极度高危",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "03",
              title: "忌多设备同账号突发高并发请求",
              desc: "把个人 Plus 账号同时分享给团队 5 个人同时高频提问，会触发非正常人机交互阈值报警，被识别为非法商用转售。",
              level: "中度危险",
              color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
            },
            {
              id: "04",
              title: "忌在网页端反复频繁登出与登入",
              desc: "不需要每次关电脑都点 Log Out。保持正常的 Cookie 会话即可，频繁登出重新登入极易导致 Refresh Token 异常失效。",
              level: "轻度风险",
              color: "text-blue-500 border-blue-500/20 bg-blue-500/5",
            },
            {
              id: "05",
              title: "忌输入触发核心防线的敏感 Prompt",
              desc: "连续尝试越狱（Jailbreak）、注入攻击指令或违规黑客内容，会被安全机制自动打标，累积多次后账号永久作废。",
              level: "极度高危",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "06",
              title: "忌使用淘宝黑卡/低价盗刷代充",
              desc: "低于官方 $20 美金成本的所谓“特价”，几乎全是用被盗海外信用卡。一旦卡主向银行发起拒付，账号立刻死刑且无法申诉。",
              level: "必定封禁",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "07",
              title: "忌在同一浏览器历史混用多个账号",
              desc: "若前一个账号被封，切勿在同个浏览器直接登录新号！必须彻底清除该域名的 Cookie / LocalStorage 或新建独立 Profile。",
              level: "高危连坐",
              color: "text-red-500 border-red-500/20 bg-red-500/5",
            },
            {
              id: "08",
              title: "忌遭遇 403 页面时反复暴力按 F5 刷新",
              desc: "遭遇 Cloudflare 403 时狂按 F5 会让 IP 惩罚分瞬间拉满。应立即关闭网页，换一个纯净节点隔 10 分钟后再试。",
              level: "中度风险",
              color: "text-amber-500 border-amber-500/20 bg-amber-500/5",
            },
            {
              id: "09",
              title: "宜保持长连接 Session 心跳与环境纯净",
              desc: "尽量将工作习惯固定在每日稳定时间段，保持真实白领研发人员的使用习惯画像，稳定长效运行。",
              level: "稳健推荐",
              color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
            },
            {
              id: "10",
              title: "企业团队宜采用集中出口与官方集采",
              desc: "企业研发团队应统筹固定的出海专线网关，并为员工统一配备正规代采的独立账密与发票，杜绝员工私下乱买乱用。",
              level: "企业必做",
              color: "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
            },
          ].map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl border ${item.color} space-y-1.5 transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold">{item.id}.</span>
                <span className="text-[10px] font-mono px-2 py-0.2 rounded-full border border-current">
                  {item.level}
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-primary">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 模块五：常见报错极速自救 SOP */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          常见突发报错极速自救 (SOP)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="font-semibold text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <span>403 Access Denied / 验证码死循环</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              <strong>解法：</strong>关闭网页不要按 F5；切换至 ip.net.coffee 检测合格的纯净节点；按 Ctrl+Shift+N 打开无痕窗口重新访问。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="font-semibold text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              <span>Not available in your country</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              <strong>解法：</strong>分流规则被广播漂移带到了香港或国内；确认客户端开启 TUN 模式，并将出口固定在美、日合规节点。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="font-semibold text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span>Something went wrong (白屏/页面崩溃)</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              <strong>解法：</strong>浏览器按 F12 进入【Application】→【Storage】点击 Clear site data，并关闭国内网页翻译插件。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="font-semibold text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              <span>Your account was deactivated (账号已停用)</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              <strong>解法：</strong>若为 AI代采 官方代采账号，享受公章《SLA 售后协议》72小时闪电免费换新，全周期按天折算退款。
            </p>
          </div>
        </div>
      </section>

      {/* 底部转化 CTA 模块 */}
      <section className="p-7 sm:p-10 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white border border-zinc-800 text-center space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4" />
          <span>专注研发，把底层合规与 SLA 兜底交给我们</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          企业级正规渠道直充 · 支持 6% 专票与 72h 封号包赔
        </h3>

        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          AI 代采（gongsi.one）专为中国技术团队提供 OpenAI Codex / ChatGPT Plus / Pro (5x/20x) / Team 企业级合规采购。支持中国工商银行网银对公转账与官方带卡号 Invoice 核验。
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
    </article>
  );
}
