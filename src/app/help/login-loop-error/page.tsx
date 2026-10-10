import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Globe,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import CopyCodeBox from "@/components/help/CopyCodeBox";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "login-loop-error")!;

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
    siteName: "AI集采 gongsi.one",
    locale: "zh_CN",
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function LoginLoopErrorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Organization",
      name: "AI集采技术团队",
    },
    datePublished: "2026-03-01",
    dateModified: "2026-03-25",
  };

  const domainRules = `# 完整的 OpenAI / ChatGPT 关键鉴权分流域名列表 (确保均走代理通道)：
DOMAIN-SUFFIX,chatgpt.com
DOMAIN-SUFFIX,openai.com
DOMAIN-SUFFIX,oaistatic.com
DOMAIN-SUFFIX,oaiusercontent.com
DOMAIN-SUFFIX,auth0.openai.com
DOMAIN-SUFFIX,challenges.cloudflare.com
DOMAIN-SUFFIX,tcr9i.chat.openai.com
DOMAIN-SUFFIX,identrust.com
DOMAIN-KEYWORD,openaicom`;

  return (
    <HelpArticleLayout article={article} conversionContext="general">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 常见登录报错 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 常见登录阻断：为什么永远跳不进聊天界面？
        </h2>
        <p className="text-secondary leading-relaxed">
          许多国内用户在登录 ChatGPT 时，常遭遇令人抓狂的登录循环或页面崩溃问题：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-red-500/20 bg-red-500/5 space-y-2">
            <div className="flex items-center gap-2 text-red-500 font-bold">
              <RefreshCw className="w-4 h-4" />
              <span>登录页面死循环 (Login Loop)</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              点击「Log In」输入账号密码或通过 Google 授权，页面加载了几秒后，又奇迹般地跳回了最开始的登录迎宾页，周而复始。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-amber-500/20 bg-amber-500/5 space-y-2">
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>Oops! We ran into an issue / 白屏卡死</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              提示「Oops! We ran into an issue while signing in, please try again」，或者页面只显示黑底或白底，完全不渲染任何输入框。
            </p>
          </div>
        </div>
      </section>

      {/* 根源剖析：Auth0 域名漏走代理 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 核心真相：鉴权域名（Auth0）分流规则缺失
        </h2>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          ChatGPT 登录并不是单个域名的请求，而是涉及一套复杂的 OAuth 鉴权集群。很多客户端的分流规则库中只收录了 <code>chatgpt.com</code>，却漏掉了负责底层认证的 Auth0 与静态资源域名！
        </p>

        <div className="space-y-2">
          <p className="text-xs font-medium text-primary">
            📋 确保你的代理客户端规则中完整包含了以下 OpenAI 全家桶域名：
          </p>
          <CopyCodeBox
            language="yaml"
            title="OpenAI 核心分流域名补全清单"
            code={domainRules}
          />
        </div>
      </section>

      {/* 4 步极速排错自救 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 4 步排错清单：从根源清除僵尸缓存
        </h2>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="font-bold text-primary flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center">
                01
              </span>
              <span>注销并彻底清除 Service Worker 与 IndexedDB</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              打开浏览器按 <kbd className="px-1 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px]">F12</kbd> → 进入【Application】→ 左侧找到【Service Workers】，点击【Unregister】；然后点击【Storage】→ 点击【Clear site data】。这将彻底清除死锁的本地客户端缓存。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="font-bold text-primary flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center">
                02
              </span>
              <span>关闭所有国内翻译与去广告浏览器扩展</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              许多国内网页翻译插件会在 DOM 渲染阶段强制修改 HTML 属性，直接破坏 React 的客户端 Hydration 树结构，导致页面发生 JavaScript 致命异常而白屏。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="font-bold text-primary flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center">
                03
              </span>
              <span>优先选择账密直接登录，而非三方快捷授权</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              Google / Microsoft 单点登录涉及复杂的跨域回调（Redirect URI）。在代理网络不稳定的情况下极易在回调中断。直接使用「邮箱 + 密码」登录稳定性显著高于三方授权。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <div className="font-bold text-primary flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center">
                04
              </span>
              <span>开启 TUN 模式并在无痕窗口重新访问</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              按 <kbd className="px-1 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px]">Ctrl+Shift+N</kbd> 呼出 Chrome 无痕窗口，在无扩展干扰的干净沙箱中完成初次登录并保持会话。
            </p>
          </div>
        </div>
      </section>
    </HelpArticleLayout>
  );
}
