import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Globe,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Lock,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "access-denied-403-cloudflare")!;

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

export default function AccessDeniedPage() {
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

      {/* 痛点与典型报错 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 常见阻断现象：403 Access Denied 与人机死循环
        </h2>
        <p className="text-secondary leading-relaxed">
          国内开发者在打开 ChatGPT 官网（chatgpt.com）时，最常见的两类致命网络拦截是：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-red-500/20 bg-red-500/5 space-y-2">
            <div className="flex items-center gap-2 text-red-500 font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>403 Forbidden / Access Denied</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              页面直接显示黑色大字「Access Denied」，并附带一行 Ray ID 或「Error 1020」。说明当前 IP 在 Cloudflare WAF 网关层就被硬拦截，根本没到达 OpenAI 后端。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-amber-500/20 bg-amber-500/5 space-y-2">
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <RefreshCw className="w-4 h-4" />
              <span>Cloudflare 验证码死循环 (Just a moment)</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              勾选「我是人类」的复选框，打勾成功后页面立即重新刷新，又弹出一个新的验证框。反反复复点十几遍永远进不去。
            </p>
          </div>
        </div>
      </section>

      {/* 根源剖析 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 为什么挂了代理还是 403？四大隐形元凶
        </h2>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>1. 节点 IP 被 Cloudflare 灰产黑名单全局标记</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              廉价机场使用的机房 VPS（如部分便宜的 Linode、Vultr、DigitalOcean 网段），由于曾被爬虫滥用，IP 欺诈分高达 80+，Cloudflare 会无条件阻断或施加最高等级人机挑战。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>2. WebRTC 穿透泄漏国内真实公网 IP</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              浏览器内置的 WebRTC 协议可以绕过普通的系统代理设置，直接向 STUN 服务器探测你的局域网和国内真实公网 IP。OpenAI 前端脚本一旦抓取到 WebRTC 的国内 IP，立即拉响警报触发 403。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>3. 浏览器扩展篡改 TLS 指纹 (JA3/JA4)</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              安装了某些国产的去广告扩展、抢票脚本或改报头的插件，会导致浏览器的 SSL/TLS 握手特征指纹与正常原版 Chrome 产生巨大偏差，直接被 Cloudflare 识别为人机伪造客户端。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>4. 遭遇 403 时疯狂按 F5 刷新导致惩罚拉满</span>
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              许多用户在看到 403 时习惯下意识狂按 F5。高频刷新会让 Cloudflare 的速率限制规则（Rate Limiting）直接判定你为 CC 攻击发起者，封禁时间从数秒延长到数小时！
            </p>
          </div>
        </div>
      </section>

      {/* 5 步标准排查与修复 SOP */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 5 步排障自救 SOP：按图索骥恢复访问
        </h2>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">
              01
            </div>
            <div className="space-y-1">
              <div className="font-bold text-primary">第一步：自测 IP 连通性（立即停用被拉黑节点）</div>
              <p className="text-xs text-secondary leading-relaxed">
                打开{" "}
                <a
                  href="https://ip.net.coffee/gpt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 underline font-medium"
                >
                  ip.net.coffee/gpt/
                </a>
                ，检查是否显示为绿色 <strong className="text-emerald-600">Available</strong>。若为红色 Blocked，该节点已废，请勿在该节点上继续尝试。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">
              02
            </div>
            <div className="space-y-1">
              <div className="font-bold text-primary">第二步：检测 WebRTC 防泄漏</div>
              <p className="text-xs text-secondary leading-relaxed">
                访问{" "}
                <a
                  href="https://browserleaks.com/webrtc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 dark:text-emerald-400 underline font-medium"
                >
                  browserleaks.com/webrtc
                </a>
                ，检查「Public IP Address」一栏。如果出现中国大陆 IP，说明 WebRTC 穿透泄漏，需在浏览器设置中停用 WebRTC 或开启客户端 TUN 模式。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">
              03
            </div>
            <div className="space-y-1">
              <div className="font-bold text-primary">第三步：开启客户端 TUN 模式，固定单一节点</div>
              <p className="text-xs text-secondary leading-relaxed">
                在 Clash Verge Rev 或 Sing-box 中勾选 <strong>TUN 模式</strong>，接管全局虚拟网卡流量。在节点选择中，<strong>切忌使用“自动测速轮询 (URL-Test)”</strong>，必须手动选定单一美/日节点。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">
              04
            </div>
            <div className="space-y-1">
              <div className="font-bold text-primary">第四步：清理 chatgpt.com 站点缓存与 Cookie</div>
              <p className="text-xs text-secondary leading-relaxed">
                按下键盘 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[11px]">F12</kbd> 打开开发者工具，切换到【Application】标签页，在左侧选择【Storage】，点击【Clear site data】彻底清除失效的 Cloudflare 会话标识。
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">
              05
            </div>
            <div className="space-y-1">
              <div className="font-bold text-primary">第五步：在全新无痕窗口 (Incognito) 重新打开</div>
              <p className="text-xs text-secondary leading-relaxed">
                按下 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[11px]">Ctrl+Shift+N</kbd> 打开纯净无痕窗口，重新访问 chatgpt.com。此时环境处于最纯净状态，验证码一次通过！
              </p>
            </div>
          </div>
        </div>
      </section>
    </HelpArticleLayout>
  );
}
