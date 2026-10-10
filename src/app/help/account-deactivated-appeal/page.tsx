import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Mail,
  ShieldCheck,
  FileText,
  LifeBuoy,
  Download,
  ArrowRight,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import CopyCodeBox from "@/components/help/CopyCodeBox";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "account-deactivated-appeal")!;

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

export default function AccountDeactivatedPage() {
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

  const appealEmailEn = `Subject: Urgent: Appeal for Account Reactivation - [Your Email Address]

Dear OpenAI Support Team,

I am writing to respectfully appeal the recent deactivation of my ChatGPT account associated with this email address: [Your Email Address].

I believe this deactivation may have been triggered mistakenly by automated security mechanisms. I am a software engineer and researcher who uses ChatGPT strictly for legitimate software development, debugging, and academic productivity. 

Recently, I encountered frequent network routing shifts due to my local corporate VPN/proxy configurations, which may have caused anomalous IP locations. I have now fixed my connection to a static, dedicated network to prevent any further fluctuations.

I have strictly adhered to the OpenAI Terms of Use and Never engaged in any abusive queries, jailbreaks, or commercial resale. My account contains extensive proprietary coding notes and development workflows critical to my daily work.

Could you please review my account history and consider restoring access? If any additional verification is required, I am more than willing to provide it immediately.

Thank you very much for your time, understanding, and assistance.

Sincerely,
[Your Name]
Registered Email: [Your Email Address]`;

  return (
    <HelpArticleLayout article={article} conversionContext="ban">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 封号警报 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          一、 突发噩耗：账号被停用（Your account was deactivated）
        </h2>
        <p className="text-secondary leading-relaxed">
          当你兴冲冲准备开始一天的工作，登录页面却突然跳出一行猩红字迹：<strong>「Your account was deactivated」</strong>，或者邮件通知账号已被关闭。多年的提示词沉淀、宝贵的代码记录和自定义 GPTs 瞬间化为乌有。
        </p>

        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 space-y-2">
          <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>自查清单：到底触发了哪条致命红线？</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3 rounded-lg bg-surface border border-theme-subtle">
              <span className="font-bold text-red-500">1. 淘宝/低价黑卡代充拒付 (90% 占比)</span>
              <p className="text-secondary text-[11px] mt-1">
                贪便宜购买几十元所谓“特惠 Plus”。黑产刷的是海外被盗卡，银行一旦发起拒付退款，OpenAI 立即铁腕封号并列入风控黑名单。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface border border-theme-subtle">
              <span className="font-bold text-amber-500">2. 节点跨洲秒级漂移</span>
              <p className="text-secondary text-[11px] mt-1">
                同一账号上午在美国、中午在日本、晚上在德国，物理上不可能的旅行轨迹直接触发机器风控反盗号机制。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface border border-theme-subtle">
              <span className="font-bold text-purple-500">3. 越狱与红线攻击 (Jailbreak)</span>
              <p className="text-secondary text-[11px] mt-1">
                频繁尝试利用恶意提示词绕过安全护栏、注入黑客攻击指令，多次被安全拦截器打标后账号作废。
              </p>
            </div>
            <div className="p-3 rounded-lg bg-surface border border-theme-subtle">
              <span className="font-bold text-blue-500">4. 机器号与公共接码平台连坐</span>
              <p className="text-secondary text-[11px] mt-1">
                网上买的几块钱成品号，注册时使用的是公开接码平台的手机号和黑产批量脚本，遭遇厂商定期清洗。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 官方中英文申诉邮件模板 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          二、 官方申诉技巧与中英文范本
        </h2>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          若确认自己<strong>没有使用黑卡盗刷</strong>（例如自己用海外实体卡充值，仅因代理波动被误杀），可通过 OpenAI 官方 Help Center (help.openai.com) 提交申诉工单，或发送邮件至 <code>support@openai.com</code>。
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-primary flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>英文专业申诉邮件范本（点击一键复制，替换中括号内容）：</span>
            </span>
          </div>
          <CopyCodeBox
            language="markdown"
            title="OpenAI 官方申诉邮件范本 (English)"
            code={appealEmailEn}
          />
        </div>

        <div className="p-3 rounded-xl bg-surface border border-theme-subtle text-xs space-y-1">
          <div className="font-semibold text-primary">💡 申诉加分项核心技巧：</div>
          <p className="text-secondary leading-relaxed text-[11px]">
            1. 语气诚恳专业，明确说明自己是合法工程师/科研人员；2. 承认可能由于公司 VPN 路由波动造成 IP 漂移，并强调已固定为单一网络；3. 说明账号中有大量关键开发项目记录；4. 切忌在申诉邮件中使用过激辱骂言辞。
          </p>
        </div>
      </section>

      {/* 历史数据导出拯救 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
          三、 数据资产抢救：如何申请导出历史聊天记录？
        </h2>
        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          根据欧盟 GDPR 及数据隐私法规，即使账号被停用，用户依然拥有对自己产生的数据进行导出的合法权利。
        </p>

        <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-primary">
            <Download className="w-4 h-4 text-emerald-500" />
            <span>向 OpenAI 隐私保护团队请求数据导出</span>
          </div>
          <p className="text-secondary leading-relaxed">
            使用注册邮箱发送邮件至 <code>privacy@openai.com</code>，邮件主题注明：
            <code className="text-primary font-mono text-[11px] block mt-1 p-1 rounded bg-surface-elevated">
              Data Subject Access Request (DSAR) - Request for Chat History Export
            </code>
            表明希望根据隐私条款获取被封停账号下的历史对话导出文件（JSON/HTML 格式），官方通常会在 15 个工作日内向邮箱发送数据归档下载链接。
          </p>
        </div>
      </section>

      {/* 避坑兜底：AI集采 SLA */}
      <section className="p-5 rounded-2xl bg-surface border-2 border-emerald-500/20 space-y-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>彻底告别封号焦虑：AI集采公章《SLA 售后协议》</span>
        </div>
        <p className="text-secondary leading-relaxed text-xs">
          个人自行买号或找电商代充犹如走钢丝。AI集采为企业提供 100% 正规海外实体商业银行卡直充与席位订阅：
        </p>
        <ul className="space-y-1.5 text-xs text-secondary">
          <li>• <strong>72 小时闪电保换：</strong>开通 72 小时内若遭遇官方波动封号，2 小时内免费更换补全；</li>
          <li>• <strong>全周期按天折算退款：</strong>在后续使用周期内若遇到任何不可抗力，严格按照剩余未生效天数公对公原路退回！</li>
        </ul>
      </section>
    </HelpArticleLayout>
  );
}
