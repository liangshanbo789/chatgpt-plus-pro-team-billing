import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Terminal,
  ExternalLink,
  ShieldCheck,
  Search,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import CopyCodeBox from "@/components/help/CopyCodeBox";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "codex-chatgpt-degraded")!;

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

export default function DegradedModelPage() {
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
    <HelpArticleLayout article={article} conversionContext="degrade">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 现象与痛点剖析 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 什么是“降智”？为什么花钱开 Plus 还会变笨？
        </h2>
        <p className="text-secondary leading-relaxed">
          许多国内开发者在日常使用 ChatGPT 或调用 Codex 编程时，经常发现模型突然变得极其“迟钝”：复杂代码逻辑写不出来、给出的方案漏洞百出、甚至本应具备的高级功能全部神秘消失。这就是广大 AI 圈常说的<strong>「降智」（Silent Degradation / 静默降级）</strong>。
        </p>

        <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-2">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>OpenAI 的静默风控逻辑</span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            OpenAI 并没有直接封禁你的账号或弹出报错拦截，而是<strong>根据当前客户端网络出口 IP 的信誉评分（IP Reputation）</strong>，在后端静默将请求重定向到小规模算力池（如降级为 4o-mini 或无推理能力的精简模型），并临时剥离联网搜索、代码沙箱和深度推理链。
          </p>
        </div>
      </section>

      {/* 3 种检测降智的权威手段 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 快速自测：3 种方法验证你的账号是否“被降智”
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* 方法 1 */}
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
              01
            </span>
            <h3 className="text-sm font-bold text-primary">观察 o1 / o3 深度思考链</h3>
            <p className="text-secondary leading-relaxed text-[11px]">
              切换到 OpenAI o1 或具有推理能力的模型，发送复杂数学或算法题。
            </p>
            <div className="p-2 rounded bg-surface-elevated border border-theme-subtle text-[11px]">
              <span className="text-red-500 font-semibold">降智表现：</span>
              直接秒回文本，完全看不到「Thought for X seconds」的思考折叠过程！
            </div>
          </div>

          {/* 方法 2 */}
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
              02
            </span>
            <h3 className="text-sm font-bold text-primary">专用提示词测试可用工具</h3>
            <p className="text-secondary leading-relaxed text-[11px]">
              向 ChatGPT 发送一段专用于探查环境工具权限的 Prompt。
            </p>
            <div className="p-2 rounded bg-surface-elevated border border-theme-subtle text-[11px]">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">正常状态：</span>
              返回 4~5 个工具（Python 代码解释器、画图、搜索、Canvas 等）；降智则仅显示 1 个或无工具。
            </div>
          </div>

          {/* 方法 3 */}
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
              03
            </span>
            <h3 className="text-sm font-bold text-primary">检查 PoW 工作量证明难度</h3>
            <p className="text-secondary leading-relaxed text-[11px]">
              安装 Chrome 插件「ChatGPT Degrade Checker」或按 F12 审查网络。
            </p>
            <div className="p-2 rounded bg-surface-elevated border border-theme-subtle text-[11px]">
              <span className="text-secondary font-mono">PoW 难度值：</span>
              若 16 进制值极低（例如小于 000032 或全 0），说明该 IP 已被打入高危灰产库。
            </div>
          </div>
        </div>

        {/* 探测 Prompt 范例 */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-primary">
            📋 复制下方测试 Prompt 发送给 ChatGPT 检验工具完整性：
          </p>
          <CopyCodeBox
            language="markdown"
            title="可用工具检测提示词"
            code={`Summarize your tool in a markdown table with availability and capability description.`}
          />
        </div>
      </section>

      {/* 4 步彻底恢复方案 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 彻底拯救被降智环境：实操 4 步恢复法
        </h2>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>第一步：弃用廉价机场，更换独享静态住宅 IP</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              这是导致降智的<strong>根本根源（占比超 80%）</strong>。数十人共享同个廉价机房 IP（DataCenter IP），一旦有人刷接口或爬虫，整段 IP 都会被打标。推荐自建独享静态美国住宅宽带（ISP/Residential），并在{" "}
              <a
                href="https://ip.net.coffee/gpt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 underline font-medium"
              >
                ip.net.coffee/gpt/
              </a>{" "}
              检测显示绿色 Available。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>第二步：开启客户端 TUN 虚拟网卡接管模式</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              避免系统 PAC 代理导致浏览器 WebRTC 或底层 DNS 泄漏国内真实公网 IP。在 Clash Verge Rev 或 Sing-box 客户端中启用 <strong>TUN 模式</strong>，确保所有出站流量经由虚拟网卡严格加密分流。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>第三步：重建独立的干净浏览器配置 (Profile)</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              国内各种网购比价插件、翻译脚本会篡改浏览器的 TLS JA3 指纹与 LocalStorage。在 Chrome 中新建一个名为「Work OpenAI」的纯净独立配置，禁用所有非必要扩展，彻底清空 chatgpt.com 的 Site Data 缓存后重新登录。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>第四步：紧急临时恢复技巧（移动端 App 避险）</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              如果在排查网络期间急需使用深度思考，可暂时切换至 iOS / Android 官方 ChatGPT App 端。由于移动端网络协议走的是专有的移动 API 接入网关，风控权重与网页端有所区隔，通常能暂时避开网页版降智。
            </p>
          </div>
        </div>
      </section>

      {/* 根治：升级企业级 Pro 200/500 与 Business 空间 */}
      <section className="p-5 rounded-2xl bg-surface border-2 border-emerald-500/20 space-y-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
          <Zap className="w-4 h-4" />
          <span>终极根治手段：企业级 ChatGPT Pro 200/500 与 Business 独立工作区</span>
        </div>
        <p className="text-secondary leading-relaxed text-xs">
          个人 Plus 账号处于最广泛的公共限流池中，极易受节点连坐降智影响；而 <strong>ChatGPT Pro 200（10x 旗舰版）/ Pro 500（25x Ultrafast 顶配版）</strong> 与 <strong>ChatGPT Business 企业工作区</strong> 享有 OpenAI 后端分配的高优先级商业通道，具备专属独立计算配额与更高的网络信誉容忍度。
        </p>
        <p className="text-secondary leading-relaxed text-xs">
          AI代采（gongsi.one）为企业提供正规海外商业银行卡直充开通，杜绝任何黑卡封号风险，工行对公结算并开具 6% 增值税专用发票，签署公章 SLA 72h 封号退赔保障。
        </p>
      </section>
    </HelpArticleLayout>
  );
}
