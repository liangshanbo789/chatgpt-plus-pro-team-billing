import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users,
  ShieldCheck,
  FileCheck,
  CreditCard,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Mail,
  UserPlus,
  RefreshCw,
  FolderGit2,
  BookOpen,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "企业 ChatGPT Business / Team 交付与管理全景手册 | 工作区激活·席位分配·合规防训练 - AI集采",
  description:
    "专为企业 IT 负责人、CTO 与团队主管打造的 ChatGPT Business / Team 官方管理手册。涵盖企业工作区交付激活、批量邀请员工、席位权限与离职回收、员工个人号与企业空间无缝切换、数据隐私与禁止模型训练（Zero Training）、对公专票结算全流程。",
  keywords: [
    "ChatGPT Business使用指南",
    "ChatGPT Team教程",
    "ChatGPT企业版管理",
    "ChatGPT工作区激活",
    "ChatGPT邀请员工",
    "ChatGPT席位管理",
    "ChatGPT企业数据防投喂",
    "ChatGPT企业对公专票",
    "AI集采企业指南",
  ],
  alternates: {
    canonical: "https://gongsi.one/guide/business/",
  },
  openGraph: {
    title: "企业 ChatGPT Business / Team 交付与管理全景手册 | AI集采",
    description:
      "工作区开通激活、员工席位批量发放、个人/企业空间物理隔离、官方不训练商业数据承诺与对公报销全流程指南。",
    url: "https://gongsi.one/guide/business/",
    siteName: "AI集采 gongsi.one",
    locale: "zh_CN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "企业 ChatGPT Business 部署手册",
      },
    ],
  },
};

export default function BusinessGuidePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: "https://gongsi.one/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "使用指南",
        item: "https://gongsi.one/guide/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "企业 Business 部署手册",
        item: "https://gongsi.one/guide/business/",
      },
    ],
  };

  return (
    <article className="space-y-10 sm:space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* 顶部 Hero 专区 */}
      <section className="relative overflow-hidden rounded-3xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 sm:p-10 shadow-sm text-left">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Building2 className="w-3.5 h-3.5" />
            <span>企业管理员 / IT / CTO / 部门主管手册 · 官方直订交付标准</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
            企业 ChatGPT Business & Team
            <span className="block mt-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 bg-clip-text text-transparent">
              交付部署与团队管理实操手册
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            企业采购 ChatGPT 不仅仅是解决付费与发票，更关键在于<strong>企业数字资产安全沉淀、员工席位统一调度与合规防泄密</strong>。本手册指导企业管理员在完成代采交付后，快速完成工作区初始化、员工批量入驻与数据隔离策略。
          </p>

          {/* 5 步交付闭环 */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-medium">
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ① 激活工作区
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ② 批量分配席位
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ③ 配置数据防训练
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ④ 员工无缝切换
            </span>
            <span className="text-tertiary">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-surface-elevated text-primary border border-theme-subtle">
              ⑤ 财务专票对账
            </span>
          </div>
        </div>
      </section>

      {/* 模块一：工作区首次交付与激活 */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            PHASE 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第一阶段：企业工作区首次交付与激活确认
          </h2>
        </div>
        <p className="text-xs text-secondary">
          我司为贵司完成官方直付或企业对公代开后，管理员邮箱将收到来自 OpenAI 官方的开通邮件：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-theme-default bg-surface space-y-3">
            <div className="flex items-center gap-2.5 text-primary font-bold text-sm">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>1. 查收 OpenAI 官方邀请邮件</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              管理员企业邮箱将收到发件人为 <code className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[11px] text-primary">noreply@tm.openai.com</code> 的官方邮件，标题通常为 <em>“You have been invited to join [Workspace Name]”</em> 或订阅确认函。
            </p>
            <div className="text-[11px] text-tertiary bg-surface-elevated p-2.5 rounded-lg border border-theme-subtle">
              ⚠️ 注意事项：认准官方发信域名，切勿点击非 openai.com 结尾的仿冒邮件链接。
            </div>
          </div>

          <div className="p-5 rounded-2xl border border-theme-default bg-surface space-y-3">
            <div className="flex items-center gap-2.5 text-primary font-bold text-sm">
              <FolderGit2 className="w-4 h-4 text-blue-500" />
              <span>2. 设定工作区企业标识</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              点击邮件中的 <strong>Accept Invitation / Get Started</strong>，使用管理员账号登录。首次进入请前往 <strong>Workspace Settings</strong> 设定贵司正式中文/英文名称，便于后续员工加入时清晰辨识所属组织。
            </p>
            <div className="text-[11px] text-tertiary bg-surface-elevated p-2.5 rounded-lg border border-theme-subtle">
              💡 建议设置：上传企业官方高清 Logo 图标，员工客户端界面左上角将自动展现企业品牌。
            </div>
          </div>
        </div>
      </section>

      {/* 模块二：席位分配与员工管理（管理员视角） */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            PHASE 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第二阶段：团队席位分配与人员生命周期管理 (Admin)
          </h2>
        </div>

        {/* 权限三层分级 */}
        <div className="rounded-2xl border border-theme-default bg-surface p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-primary flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>工作区三层角色权限矩阵 (Role Hierarchy)</span>
            </h3>
            <span className="text-[11px] text-tertiary font-mono">严格遵循最小权限原则</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
              <div className="font-bold text-primary flex items-center justify-between">
                <span>Workspace Owner</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono">最高权限</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                企业法人或主要负责人。拥有工作区注销、最高账单管理、法务所有权转让及所有 Admin 的任免权。通常配置 1~2 人。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
              <div className="font-bold text-primary flex items-center justify-between">
                <span>Workspace Admin</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">IT / 主管</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                部门主管或 IT 运维。负责日常批量邀请成员、重置离职员工席位、配置共享 Custom GPTs 及查看调用用量。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
              <div className="font-bold text-primary flex items-center justify-between">
                <span>Workspace Member</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">普通成员</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                业务线员工。拥有专属无限制的高频对话界面与企业专属 GPTs 使用权，但无法查看账单或其他成员的历史私密对话。
              </p>
            </div>
          </div>
        </div>

        {/* 批量邀请与离职回收 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="font-bold text-sm text-primary flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-emerald-500" />
              <span>快速发放：批量导入员工邮箱邀请</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              进入 <strong>Manage Workspace</strong> → <strong>Members</strong> → 点击 <strong>Invite Members</strong>。支持一行一个直接粘贴企业员工邮箱（推荐使用公司域名邮箱如 <code className="text-primary font-mono">user@corp.com</code>），系统将秒级发送激活邀请。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="font-bold text-sm text-primary flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-amber-500" />
              <span>人员离职：一键回收席位与资产保护</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              当员工调岗或离职时，Admin 点击该员工右侧菜单选择 <strong>Remove from workspace</strong>。其企业空间访问权瞬间被切断，席位立即释放给新员工使用，且离职人员无法导出企业内部创建的保密 GPTs 知识库。
            </p>
          </div>
        </div>
      </section>

      {/* 模块三：员工端加入与空间切换（员工视角） */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            PHASE 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第三阶段：员工端体验 · 个人账号与企业空间物理隔离
          </h2>
        </div>
        <p className="text-xs text-secondary">
          很多员工顾虑：“加入公司工作区后，我以前的私人聊天记录老板能看到吗？”答案是<strong>绝对物理隔离</strong>。
        </p>

        <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-surface to-surface p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>核心机制：左下角工作区切换器 (Workspace Switcher)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
              <div className="font-semibold text-primary">① 员工已有个人号 (Personal Space)</div>
              <p className="text-secondary leading-relaxed text-[11px]">
                员工原本的聊天记录、个人 GPTs 保留在“Personal”独立空间中。企业管理员没有任何权限查看或导出该个人空间内的任何内容。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
              <div className="font-semibold text-primary">② 公司企业工作区 (Business Workspace)</div>
              <p className="text-secondary leading-relaxed text-[11px]">
                员工在左下角一键切换至企业空间进行日常工作开发。享受企业高额度算力、共享知识库，且受企业级安全与禁用训练策略保护。
              </p>
            </div>
          </div>

          {/* 新员工入职教程直达转发盒子 */}
          <div className="p-4 rounded-xl bg-surface-elevated border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <div className="font-bold text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                <span>新员工入职零培训：一键转发《新员工从 0 到 1 Codex 实操指南》</span>
              </div>
              <p className="text-secondary text-[11px]">
                涵盖客户端正版下载、首登 24h 防封、强制 2FA 绑定、接受邀请与 Codex / Canvas 辅助编程全流程，配有打卡清单。
              </p>
            </div>
            <Link
              href="/guide/onboarding/"
              className="btn-openai-white text-xs px-3.5 py-1.5 shrink-0 inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>查看新员工实操手册</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 模块四：企业数据安全与合规审计 */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            PHASE 04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第四阶段：数据隐私安全 · 官方承诺不训练商业数据
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Lock className="w-4 h-4 text-blue-500" />
              <span>Zero Training 零训练承诺</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              OpenAI 官方商用协议明确约束：Business / Team 工作区内传输的所有代码片段、业务报表和商业对话，<strong>默认且强制不参与任何基础模型的训练或迭代</strong>。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span>SOC2 Type 2 与数据加密</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              所有交互数据采用 TLS 1.3 传输加密与 AES-256 静态存储加密。满足海外出海合规与大型上市企业安全审查基线。
            </p>
          </div>

          <div className="p-4 rounded-xl border border-theme-default bg-surface space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <FileCheck className="w-4 h-4 text-blue-500" />
              <span>单点登录 (SSO) 与审计对接</span>
            </div>
            <p className="text-secondary leading-relaxed text-[11px]">
              Enterprise / 高阶方案支持与企业内部 Okta、Azure AD (Entra ID) 或企业微信/飞书身份提供商打通 SAML SSO，实现人员入职即开通、离职即禁用。
            </p>
          </div>
        </div>
      </section>

      {/* 模块五：财务专票与弹性增减席位 */}
      <section className="space-y-4 text-left">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold border border-blue-500/20">
            PHASE 05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            第五阶段：财务结算 · 6% 增值税专用发票与弹性增减席位
          </h2>
        </div>

        <div className="rounded-2xl border border-theme-default bg-surface p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2">
              <div className="font-bold text-sm text-primary flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span>中途业务扩张：随时增减席位 (Prorated)</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                企业业务处于快速增长期？无需等到下个计费年。Admin 可随时联系我司专属商务经理增加 5 席、10 席或更多席位。系统按当月/当季剩余天数折算费用，无缝秒级开通。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-sm text-primary flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-blue-500" />
                <span>正规对公：6% 数电增值税专用发票</span>
              </div>
              <p className="text-secondary leading-relaxed text-[11px]">
                支持中国工商银行等对公账户电汇直付。开具开票品目为 <strong>*信息技术服务*软件服务费</strong> 或 <strong>*信息技术服务*技术咨询费</strong> 的国家正规数电专票，财务合规 100% 抵扣进项税。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA 引导与相关资料 */}
      <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-surface to-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
        <div className="space-y-1.5 max-w-xl">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
            ENTERPRISE PROCUREMENT
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-primary">
            需要官方代采报价单或企业立项可行性报告？
          </h3>
          <p className="text-xs text-secondary leading-relaxed">
            我们已整理完整的阶梯报价明细手册、企业立项采购模板与对公采购协议标准合同，支持法务与财务快速合规过审。
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/docs/pricing/"
            className="btn-openai-secondary text-xs px-4 py-2 inline-flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>查看集采报价手册</span>
          </Link>
          <Link
            href="/solutions/gpt-bulk-procurement/"
            className="btn-openai-white text-xs px-4 py-2 inline-flex items-center gap-1.5 shadow-sm"
          >
            <span>企业 GPT 集采方案</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
