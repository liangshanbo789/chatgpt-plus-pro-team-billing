import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  CreditCard,
  Building2,
  FileCheck,
  ShieldCheck,
  Ban,
  ArrowRight,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "payment-card-declined")!;

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

export default function PaymentCardDeclinedPage() {
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

  return (
    <HelpArticleLayout article={article} conversionContext="payment">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 报错现象直击 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 普遍痛点：为什么国内信用卡绑卡 100% 失败？
        </h2>
        <p className="text-secondary leading-relaxed">
          许多国内用户尝试在 OpenAI 官方绑卡升级 ChatGPT Plus（$20/月）或 Pro（$200/月）时，无论使用国内招商银行、工商银行、中国银行发行的 Visa 还是 Mastercard 双币信用卡，点击提交后几乎全被无情拒绝：
        </p>

        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 space-y-2">
          <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
            <CreditCard className="w-4 h-4" />
            <span>常见拦截报错信息</span>
          </div>
          <ul className="text-xs text-secondary font-mono space-y-1">
            <li>• Your card has been declined. (您的卡片已被拒绝)</li>
            <li>• Unable to authorize payment method. (无法授权当前付款方式)</li>
            <li>• The card issuer declined the request. (发卡机构拒绝了交易请求)</li>
            <li>• Payment method not supported in your country. (当前地区不支持该付款方式)</li>
          </ul>
        </div>
      </section>

      {/* 根源剖析：Stripe 的 3 层严苛风控 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 深入底层：Stripe 与 OpenAI 支付风控的三大铁律
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center font-mono">
              01
            </div>
            <h3 className="font-bold text-primary text-sm">卡号 BIN 码物理区域封锁</h3>
            <p className="text-secondary leading-relaxed text-[11px]">
              信用卡前 6 位为 BIN（Bank Identification Number）。Stripe 在输入卡号的瞬间即可识别出发卡地为中国大陆，由于 OpenAI 商业政策限制，该类卡段直接在前端被系统物理拒付。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold flex items-center justify-center font-mono">
              02
            </div>
            <h3 className="font-bold text-primary text-sm">AVS 账单地址与 IP 交叉验证</h3>
            <p className="text-secondary leading-relaxed text-[11px]">
              欧美支付体系强制要求 AVS（Address Verification System）。Stripe 会核验支付时填写的账单地址、当前访问客户端的地理 IP 与卡片注册地址是否一致。任意一项冲突即判定为盗刷。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="w-7 h-7 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 font-bold flex items-center justify-center font-mono">
              03
            </div>
            <h3 className="font-bold text-primary text-sm">高频重试触发欺诈黑名单</h3>
            <p className="text-secondary leading-relaxed text-[11px]">
              如果用户在同一天内连续更换卡片或反复点击「Pay」超过 3 次，该 OpenAI 账号的 Stripe 客户档案会被打上高危标记，之后即便换上正规海外卡也会提示被拒。
            </p>
          </div>
        </div>
      </section>

      {/* 揭秘虚拟卡与低价代充的陷阱 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 警惕虚拟卡与第三方低价代充的致命深坑
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-amber-500/20 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold">
              <Ban className="w-4 h-4" />
              <span>虚拟信用卡 (VCC) 的致命隐患</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-secondary leading-relaxed">
              <li>• <strong>高昂手续费与开卡费：</strong>充值加价率普遍高达 8%~15%，且不支持小额提现。</li>
              <li>• <strong>全网黑名单连坐：</strong>虚拟卡平台使用的预付卡号段被万人共享，极易被 OpenAI 批量扫荡风控连坐封号。</li>
              <li>• <strong>企业无法报销：</strong>无法提供中国税务合规的增值税专用发票，个人倒贴费用。</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-red-500/20 space-y-2">
            <div className="flex items-center gap-1.5 text-red-500 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>电商低价代充：99% 涉及盗刷黑卡</span>
            </div>
            <ul className="space-y-1.5 text-[11px] text-secondary leading-relaxed">
              <li>• <strong>盗刷拒付（Chargeback）：</strong>黑产使用被盗取的海外实体卡盗刷充值，1~2 个月后真卡主向海外银行发起拒付，账号必定立即死刑停用！</li>
              <li>• <strong>毫无售后保障：</strong>买完一两周店铺跑路或直接拉黑，没有任何法律合同约束。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 正规解决之道：企业代采 */}
      <section className="p-5 rounded-2xl bg-surface border-2 border-emerald-500/20 space-y-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>正规企业代充标准：AI集采 (gongsi.one)</span>
        </div>
        <p className="text-secondary leading-relaxed text-xs">
          与其折腾高风险虚拟卡或担惊受怕，技术团队与企业采购应选择阳光正规的专业服务：
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-2.5 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span><strong>100% 正规海外商业银行实体卡</strong>代付</span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>提供 OpenAI <strong>官方原版带卡号 Invoice</strong></span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>中国工商银行<strong>网银对公转账</strong></span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-elevated border border-theme-subtle flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>开具 <strong>6% 增值税专用发票</strong>（软件技术服务）</span>
          </div>
        </div>
      </section>
    </HelpArticleLayout>
  );
}
