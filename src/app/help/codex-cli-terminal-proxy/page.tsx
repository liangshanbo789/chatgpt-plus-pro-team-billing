import type { Metadata } from "next";
import Link from "next/link";
import {
  Terminal,
  Code2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import CopyCodeBox from "@/components/help/CopyCodeBox";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "codex-cli-terminal-proxy")!;

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

export default function TerminalProxyPage() {
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

  const powershellCode = `# 临时为当前 PowerShell 终端设置 HTTP/HTTPS 代理 (默认端口通常为 7890)
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"
$env:ALL_PROXY="socks5://127.0.0.1:7890"

# 测试是否成功连通 OpenAI
curl -I https://api.openai.com/v1/models`;

  const bashCode = `# 临时为当前 Bash / Zsh 终端注入代理 (关闭窗口后自动失效)
export HTTP_PROXY="http://127.0.0.1:7890"
export HTTPS_PROXY="http://127.0.0.1:7890"
export ALL_PROXY="socks5://127.0.0.1:7890"

# 测试连通性
curl -I https://api.openai.com/v1/models`;

  const vscodeSettingsCode = `// 在 VS Code 用户设置 (settings.json) 中添加：
{
  "http.proxy": "http://127.0.0.1:7890",
  "http.proxyStrictSSL": false,
  "http.proxySupport": "on"
}`;

  const gitProxyCode = `# 为 Git 设置专属代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

# 若需取消 Git 代理：
# git config --global --unset http.proxy
# git config --global --unset https.proxy`;

  return (
    <HelpArticleLayout article={article} conversionContext="limit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 现象与疑问 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 常见困惑：为什么网页能打开，终端和代码插件却连不上？
        </h2>
        <p className="text-secondary leading-relaxed">
          许多开发者在 VS Code、Cursor 或终端命令行中运行 <code>codex</code> 相关的 CLI 脚本或 AI 代码助手时，经常遭遇以下报错：
        </p>

        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 space-y-2">
          <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
            <Terminal className="w-4 h-4" />
            <span>开发者控制台常见报错日志</span>
          </div>
          <ul className="text-xs text-secondary font-mono space-y-1">
            <li>• TypeError: fetch failed (cause: ConnectTimeoutError)</li>
            <li>• Client.Timeout exceeded while awaiting headers</li>
            <li>• Error: connect ECONNREFUSED 127.0.0.1:443</li>
            <li>• UNABLE_TO_VERIFY_LEAF_SIGNATURE (自签名证书拦截)</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2 text-xs">
          <div className="font-bold text-primary flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>核心技术原因：操作系统网络分层机制</span>
          </div>
          <p className="text-secondary leading-relaxed">
            Windows / macOS 桌面托盘的「系统代理」开关（WinINet API）<strong>仅对 Chrome、Edge 等浏览器生效</strong>。系统终端（CMD、PowerShell、Bash）以及底层的 Node.js、Python、Go 运行时，默认根本不会读取系统托盘的代理注册表！因此代码请求全部直连国内裸网，必然超时失败。
          </p>
        </div>
      </section>

      {/* 一键配置命令 */}
      <section className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 各环境终端代理一键注入命令 (随用随走)
        </h2>

        {/* PowerShell */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-primary">
            <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs flex items-center justify-center">
              PS
            </span>
            <span>Windows PowerShell / Windows Terminal</span>
          </div>
          <p className="text-xs text-secondary">
            打开 PowerShell 窗口，直接粘贴执行（注意将 7890 替换为你代理客户端的实际本地混合端口）：
          </p>
          <CopyCodeBox
            language="powershell"
            title="PowerShell 临时代理环境变量"
            code={powershellCode}
          />
        </div>

        {/* Bash / macOS */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-primary">
            <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center justify-center">
              SH
            </span>
            <span>macOS / Linux / Git Bash / WSL</span>
          </div>
          <CopyCodeBox
            language="bash"
            title="Bash / Zsh 临时代理环境变量"
            code={bashCode}
          />
        </div>

        {/* VS Code */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-primary">
            <Code2 className="w-4 h-4 text-purple-500" />
            <span>VS Code / Cursor 插件全局代理与证书配置</span>
          </div>
          <p className="text-xs text-secondary">
            若 VS Code 插件报 <code>UNABLE_TO_VERIFY_LEAF_SIGNATURE</code>，通常是开启了本地 HTTPS 解密抓包导致的根证书不信任，按如下配置即可完美解决：
          </p>
          <CopyCodeBox
            language="json"
            title="VS Code settings.json 代理配置"
            code={vscodeSettingsCode}
          />
        </div>

        {/* Git Proxy */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-primary">
            <Terminal className="w-4 h-4 text-amber-500" />
            <span>Git 命令行全局代理配置</span>
          </div>
          <CopyCodeBox
            language="bash"
            title="Git 命令代理"
            code={gitProxyCode}
          />
        </div>
      </section>

      {/* 最佳实践：TUN 虚拟网卡 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 一劳永逸方案：开启客户端 TUN 模式
        </h2>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          每次打开终端都要敲一次 export / $env 确实麻烦。最推荐的做法是在客户端（如 Clash Verge Rev、Sing-box）中直接开启 <strong>TUN 模式</strong>（虚拟网卡模式）：
        </p>

        <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2 text-xs">
          <div className="font-semibold text-primary">TUN 虚拟网卡工作原理：</div>
          <p className="text-secondary leading-relaxed">
            TUN 驱动在操作系统网络层创建一张虚拟网卡，强制接管整台机器的所有出站 TCP/UDP 数据包。无论是终端命令行、VS Code、Docker 容器还是 Node.js，无需设置任何环境变量，流量全自动经由代理分流，彻底杜绝漏网和报错！
          </p>
        </div>
      </section>
    </HelpArticleLayout>
  );
}
