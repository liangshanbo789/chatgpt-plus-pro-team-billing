import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Code2,
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import CopyCodeBox from "@/components/help/CopyCodeBox";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "codex-rate-limit-429")!;

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

export default function RateLimitPage() {
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

  const pythonBackoffCode = `import time
import random
from openai import OpenAI, RateLimitError

client = OpenAI()

def call_codex_with_retry(prompt, max_retries=5, base_delay=1.0):
    """
    指数退避 + 全抖动 (Full Jitter) 算法：
    防止并发请求同时重试引发第二次限流风暴
    """
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model="o1-mini",
                messages=[{"role": "user", "content": prompt}]
            )
            return response.choices[0].message.content
        except RateLimitError as e:
            if attempt == max_retries - 1:
                raise e  # 超过最大重试次数抛出异常
            
            # 指数级等待时间并加入随机抖动
            sleep_time = min(32, base_delay * (2 ** attempt)) + random.uniform(0, 1)
            print(f"遇到 429 限流，等待 {sleep_time:.2f} 秒后进行第 {attempt + 1} 次重试...")
            time.sleep(sleep_time)

# 示例调用
result = call_codex_with_retry("请编写高效快速排序实现")
print(result)`;

  return (
    <HelpArticleLayout article={article} conversionContext="limit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 429 报错定位 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 错误定位：看懂 429 报错的不同类型
        </h2>
        <p className="text-secondary leading-relaxed">
          在日常使用 ChatGPT 网页端或通过 Codex 插件写代码时，最崩溃的时刻莫过于思维正高速运转，屏幕上突然跳出限制提示。首先要分清你遭遇的是哪一种 429：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-amber-500 font-bold">
              <Clock className="w-4 h-4" />
              <span>网页端使用上限 (Usage Cap)</span>
            </div>
            <p className="text-secondary leading-relaxed">
              <strong>提示：</strong>
              <code className="text-primary font-mono text-[11px] block mt-1 p-1 rounded bg-surface-elevated">
                You&apos;ve reached the current usage cap for GPT-4 / o1, please try again after XX:XX.
              </code>
            </p>
            <p className="text-tertiary text-[11px]">
              <strong>原因：</strong>普通 Plus 账号对高级推理模型有固定的 3 小时条数限制（通常为 40~80 条）。高频提问很快打满配额，必须干等计时器重置。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-red-500 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>终端 API / Codex 限流 (Rate Limit)</span>
            </div>
            <p className="text-secondary leading-relaxed">
              <strong>提示：</strong>
              <code className="text-primary font-mono text-[11px] block mt-1 p-1 rounded bg-surface-elevated">
                429 Too Many Requests: Rate limit reached for requests (RPM/TPM)
              </code>
            </p>
            <p className="text-tertiary text-[11px]">
              <strong>原因：</strong>每分钟请求次数 (RPM) 或每分钟 Token 消耗 (TPM) 瞬间突发。组织处于 Tier 1 等级或共享同一 API Key 导致。
            </p>
          </div>
        </div>
      </section>

      {/* 3 大核心技术优化方案 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 开发技术侧实操：4 招规避 429 报错
        </h2>

        <div className="space-y-4 text-xs sm:text-sm">
          {/* 策略 1 */}
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-3">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs">
                01
              </span>
              <span>引入“带全抖动的指数退避”重试算法 (Exponential Backoff)</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              标准的 API 重试绝不能使用固定间隔的死循环重试，否则瞬间产生二次并发风暴。官方推荐采用<strong>指数退避结合随机抖动</strong>：
            </p>
            <CopyCodeBox
              language="python"
              title="Python 指数退避重试实操范例"
              code={pythonBackoffCode}
            />
          </div>

          {/* 策略 2 */}
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs">
                02
              </span>
              <span>长对话会话“瘦身”：避免单个 Session 膨胀</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              很多开发者习惯在同一个聊天窗口里持续聊几天几万字。每次发送新问题时，客户端都会把<strong>前面的所有历史上下文全量重复打包发送</strong>！这会导致单个请求消耗几万 Token，不仅极大增加响应延迟，而且极易单次打爆 TPM（每分钟 Token 限额）。
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              💡 良好习惯：每完成一个独立模块或 Bug 修复，点击「New Chat」开启新对话，或将前序背景压缩成 3 行要点摘要提供。
            </p>
          </div>

          {/* 策略 3 */}
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs">
                03
              </span>
              <span>任务轻重分流：模型梯队化组合</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              把常规任务分流：日常变量命名、正则表达式生成、简单的格式转换交给 <strong>GPT-4o-mini</strong>（配额极高且速度快）；而系统架构设计、复杂并发算法设计才动用 <strong>o1 / Codex 高推理模型</strong>，将宝贵的高级算力留给刀刃上。
            </p>
          </div>
        </div>
      </section>

      {/* 商业根治：Pro 200/500 与 Business 空间 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 彻底解决生产力瓶颈：升级 ChatGPT Pro 200 / 500 算力版
        </h2>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          对于高强度的专业工程师与软件研发团队而言，代码思路被打断 3 小时的隐性时间成本远超过工具费用。
        </p>

        <div className="p-5 rounded-2xl bg-surface border-2 border-emerald-500/20 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
            <Zap className="w-4 h-4" />
            <span>ChatGPT Pro 200 / 500 高算力版的核心优势</span>
          </div>
          <ul className="space-y-2 text-xs text-secondary">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
              <span><strong>高倍满血推理：</strong>Pro 200 享有 10x 高算力且免 5 小时常规限制；顶配 Pro 500 独占 <strong>Ultrafast 300 tps</strong> 极速生成，打破一切排队限制。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
              <span><strong>独占顶级优先计算队列：</strong>晚高峰期间免受全球算力动态限流压制，100 万长上下文从容理解复杂系统。</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
              <span><strong>企业正规代采保障：</strong>支持中国工商银行网银对公转账，开具 6% 增值税专用发票（软件技术服务费），公章签署 SLA 72h 封号包赔协议。</span>
            </li>
          </ul>
        </div>
      </section>
    </HelpArticleLayout>
  );
}
