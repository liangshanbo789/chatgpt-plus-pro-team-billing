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
  ShieldAlert,
  Server,
  RefreshCw,
  Cpu,
  Terminal,
  HelpCircle,
  FileText,
  Mail,
  Lock,
} from "lucide-react";
import HelpArticleLayout from "@/components/help/HelpArticleLayout";
import CopyCodeBox from "@/components/help/CopyCodeBox";
import { HELP_ARTICLES } from "@/config/helpArticles";

const article = HELP_ARTICLES.find((a) => a.slug === "codex-model-at-capacity")!;

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

export default function ModelAtCapacityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Organization",
      name: "AI集采技术团队",
    },
    datePublished: "2026-03-30",
    dateModified: "2026-03-30",
  };

  const gitCheckCode = `# 1. 查看本地工作区状态，确认刚才的代码未被意外修改或冲突
git status

# 2. 检查暂存区与未暂存的代码差异
git diff

# 3. 如有重要代码改动，先创建一个临时保护提交或 stash
git stash save "temp-save-before-retry"
# 或创建本地救援分支
git checkout -b feat/backup-wip && git commit -am "wip: save state before capacity retry"`;

  const appealEmailTemplate = `Subject: Inquiry regarding degraded model availability and capacity limits for my account

Dear OpenAI Support Team,

I hope this message finds you well.

I am writing as an active user of ChatGPT / Codex under the email address [你的注册邮箱]. Over the past few days, I have frequently encountered the error message: "Selected model is at capacity. Please try a different model" continuously across multiple sessions, models, and networks.

I have always relied on OpenAI to deliver high-quality, dependable AI assistance for my daily development workflow. I completely understand that computing clusters experience temporary peak loads; however, in my case, the limitation persists persistently even outside peak hours and on lighter models, which suggests my account routing might have been unintentionally deprioritized or flagged by automated security heuristics.

Could you kindly check my account status and help reset or restore normal service allocation routing? Here is the relevant summary:
- Account Email: [你的注册邮箱]
- Subscription Tier: Plus / Pro / Business
- Affected Interfaces: Codex CLI / ChatGPT Web / API
- Observed Error: "Selected model is at capacity. Please try a different model."
- Actions Already Attempted: Cleared session cache, logged out of all active devices, and rotated IP environment.

Thank you very much for your time, support, and continuous dedication to building world-class AI tools.

Warm regards,
[你的姓名或团队名称]`;

  return (
    <HelpArticleLayout article={article} conversionContext="limit">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 核心结论与速查警示 */}
      <section className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 space-y-3">
        <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-amber-700 dark:text-amber-400">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>突发提示「Selected model is at capacity」？切忌疯狂连击重试！</span>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-secondary">
          很多工程师在 Codex 终端跑任务或在 ChatGPT 对话时，屏幕突然跳出一行灰字：
          <code className="mx-1 px-1.5 py-0.5 rounded bg-surface-elevated font-mono text-[11px] text-primary border border-theme-subtle">
            Selected model is at capacity. Please try a different model.
          </code>
          <strong>第一原则：</strong>该报错发生在模型生成之前，<strong>你的本地代码与文件绝对没有损坏</strong>。
          请先将未发出的 Prompt 存入本地剪贴板或临时文件，不要连续狂点重试（否则会被 API 认定为高频爬取进而触发多重封锁）。
        </p>
      </section>

      {/* 一、本质辨析 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
          <span>一、 本质辨析：三“非”法则看懂报错语义</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          逐词拆解：<code className="text-primary font-mono text-xs">Selected model</code>（你所选定的特定模型版本）
          <code className="text-primary font-mono text-xs">is at capacity</code>（在当前接入的数据中心可用区内，算力并发队列已饱和）。
          要正确处理，必须先搞清楚它<strong>不是什么</strong>：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>不是账号被封 (Not Banned)</span>
            </div>
            <p className="text-secondary leading-relaxed">
              账号状态完全健康，聊天历史、设置面板、登录态完全正常，<strong>绝非封号或停用</strong>（封号会直接弹出 <code className="text-primary">Your account was deactivated</code>）。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>不是额度耗尽 (Not Usage Cap)</span>
            </div>
            <p className="text-secondary leading-relaxed">
              与每 3 小时限制或月度 Token 额度无关。如果是额度耗尽，会有明确的 <code className="text-primary">usage cap reached</code> 及重置倒计时时间点。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>不是普通 429 限流</span>
            </div>
            <p className="text-secondary leading-relaxed">
              普通 429 强调客户端短时间发起了过多并发请求；而 Capacity 强调的是 <strong>OpenAI 服务端算力基础设施的供不应求</strong>。付费 Plus / Pro 用户同样会偶发碰到。
            </p>
          </div>
        </div>
      </section>

      {/* 二、黄金第一法则：保住现场 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
          <span>二、 黄金第一法则：保护现场比盲目重试更重要</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          当出现 capacity 提示时，很多开发者手忙脚乱地关掉终端或狂点重试，导致精心编写的复杂 Prompt 丢失或引起 Git 冲突。请严格执行以下三步：
        </p>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs">
                1
              </span>
              <span>立即将未发出的 Prompt 存入本地</span>
            </div>
            <p className="text-secondary leading-relaxed text-xs">
              在终端或网页端按 <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px]">Ctrl+A</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-surface-elevated border border-theme-subtle font-mono text-[10px]">Cmd+A</kbd> 将长提示词复制到剪贴板，或存入项目根目录的临时文件（如 <code className="text-primary">prompt_backup.md</code>），防止后续刷新页面导致内容蒸发。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs">
                2
              </span>
              <span>使用 Git 快速确认本地工作区状态</span>
            </div>
            <p className="text-secondary leading-relaxed text-xs">
              由于报错发生在模型推理之前，本地代码改动不会被回滚破坏。运行以下命令确认代码状态：
            </p>
            <CopyCodeBox
              title="终端状态自检与备份命令"
              language="bash"
              code={gitCheckCode}
            />
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs">
                3
              </span>
              <span>坚决杜绝无脑连击重试</span>
            </div>
            <p className="text-secondary leading-relaxed text-xs">
              不要按住回车键狂点，连击重试不仅无法穿透排队队列，反而会使你的 IP / 客户端指纹在 OpenAI 接入风控网关中被记录为异常攻击行为，延长限制恢复时间。
            </p>
          </div>
        </div>
      </section>

      {/* 三、4 类根本诱因诊断矩阵 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
          <span>三、 4 类根本诱因排查矩阵：对号入座，拒绝瞎折腾</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          不同原因引发的 Capacity 报错，其应对方式完全不同。如果是官方集群算力吃紧，折腾本地配置毫无意义；如果是账号被降权，死等也不会恢复：
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse border border-theme-subtle rounded-xl overflow-hidden">
            <thead className="bg-surface-elevated text-primary font-semibold border-b border-theme-subtle">
              <tr>
                <th className="p-3">故障类型</th>
                <th className="p-3">典型表现与特征</th>
                <th className="p-3">根本诱因</th>
                <th className="p-3">首选处置操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-theme-subtle text-secondary">
              <tr className="hover:bg-surface/50">
                <td className="p-3 font-medium text-primary">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[11px]">
                    类型 A
                  </span>
                  <div className="mt-1 font-bold">偶发短暂算力峰值</div>
                </td>
                <td className="p-3 leading-relaxed">
                  平时一直正常，偶尔跑一个大任务时突然中断，等 5~15 分钟后自然恢复。
                </td>
                <td className="p-3 leading-relaxed">
                  全球瞬时大并发、旗舰模型上线或官方算力集群突发热点调度。
                </td>
                <td className="p-3 font-medium text-emerald-600 dark:text-emerald-400">
                  受控静置 5~15 分钟，或无缝切换同档备选模型。
                </td>
              </tr>

              <tr className="hover:bg-surface/50">
                <td className="p-3 font-medium text-primary">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-[11px]">
                    类型 B
                  </span>
                  <div className="mt-1 font-bold">区域时段性容量挤兑</div>
                </td>
                <td className="p-3 leading-relaxed">
                  固定在工作高峰期（如亚太上午 9:30~11:30、欧美白天）频繁出现。
                </td>
                <td className="p-3 leading-relaxed">
                  所连代理出口对应的数据中心边缘节点负载打满，新请求被丢弃。
                </td>
                <td className="p-3 font-medium text-emerald-600 dark:text-emerald-400">
                  错峰执行超大任务，或配置海外专线/纯净独享出口。
                </td>
              </tr>

              <tr className="hover:bg-surface/50">
                <td className="p-3 font-medium text-primary">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[11px]">
                    类型 C
                  </span>
                  <div className="mt-1 font-bold">单个会话上下文卡死</div>
                </td>
                <td className="p-3 leading-relaxed">
                  只有这一个特定的对话窗口/会话反复报错，新建一个 New Chat 却完全正常。
                </td>
                <td className="p-3 leading-relaxed">
                  会话历史堆积过大（如数十万 Token），或服务端关联的状态上下文悬挂。
                </td>
                <td className="p-3 font-medium text-emerald-600 dark:text-emerald-400">
                  果断新建会话，仅带入核心代码与精简指令继续跑。
                </td>
              </tr>

              <tr className="hover:bg-surface/50">
                <td className="p-3 font-medium text-primary">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-[11px]">
                    类型 D
                  </span>
                  <div className="mt-1 font-bold">账号隐性风控被降权</div>
                </td>
                <td className="p-3 leading-relaxed">
                  同一个账号连续数小时甚至数天，<strong>换模型、换网络、换电脑依然疯狂报 capacity</strong>。
                </td>
                <td className="p-3 leading-relaxed">
                  多人共享、频繁跨国跳 IP 或被判定为异常环境，系统将其服务优先级降级。
                </td>
                <td className="p-3 font-medium text-red-600 dark:text-red-400">
                  执行深度恢复方案：改密踢设备静置 3h 或冷处理 48h，必要时提交工单。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 四、官方正规 4 步应急路径 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
          <span>四、 官方正规 4 步应急路径（成本最低解法）</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          对于类型 A/B 的临时性容量拥挤，按以下顺序操作能够以最低成本恢复工作流：
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>步骤 1：受控等待 5~15 分钟再探活</span>
            </div>
            <p className="text-secondary leading-relaxed">
              OpenAI 的模型集群具备弹性伸缩能力，容量通常以波谷形式恢复。倒一杯咖啡等待 10 分钟，先用一句极短的指令（例如“仅回复 1，无需修改代码”）进行探活，确认通道畅通后再发送复杂 Prompt。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <RefreshCw className="w-4 h-4 text-blue-500" />
              <span>步骤 2：切换同档或降档备用模型</span>
            </div>
            <p className="text-secondary leading-relaxed">
              这是官方和全球技术社区最推崇的高效对策。日常写单测、重构函数、补齐类型声明或写注释，切换到吞吐量大、负载较低的模型（如轻量模型或同代备选模型），往往立刻就能流畅生成，丝毫耽误不到进度。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <Server className="w-4 h-4 text-purple-500" />
              <span>步骤 3：查看 OpenAI 官方系统状态页</span>
            </div>
            <p className="text-secondary leading-relaxed">
              访问 <a href="https://status.openai.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline font-mono">status.openai.com</a>。如果官方状态面板上标有 <span className="text-amber-500 font-semibold">Elevated Error Rates</span> 或 <span className="text-red-500 font-semibold">Partial Outage</span>，说明全球正处于大面积事故中，此时安心等待官方修复，严禁折腾本地。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 font-bold text-primary">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>步骤 4：任务拆解，拒绝全库式超长 Prompt</span>
            </div>
            <p className="text-secondary leading-relaxed">
              单次把数万行代码和几十个文件全部打包塞进上下文，在服务器算力紧张时更容易被调度网关排队或超时。将“整体架构规划”、“核心逻辑编写”、“测试用例完善”拆解成小步执行，成功率显著提升。
            </p>
          </div>
        </div>
      </section>

      {/* 五、账号被风控降权：3 套实操恢复方案 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
          <span>五、 深度顽疾：账号被风控降权的 3 套恢复方案</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          如果你的账号<strong>换了多个模型、换了多条干净线路、连续 12 小时以上</strong>依然逢发必报 <code className="text-primary font-mono text-xs">Selected model is at capacity</code>，说明账号已被安全风控标记，分配到了最低优先级的受限集群。按社区实测经验依次执行以下三套方案：
        </p>

        {/* 方案一 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-theme-subtle space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-primary text-sm sm:text-base">
              <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">
                01
              </span>
              <span>方案一：改密码 + 重置 2FA + 踢除所有设备，静置 3 小时（轻量切断）</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              推荐首选 · 操作成本低
            </span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            <strong>原理：</strong>彻底切断所有历史活跃会话与设备指纹的弱信誉关联，迫使 OpenAI 安全系统以全新的环境对账号进行再评估。
          </p>
          <div className="text-xs text-secondary space-y-1.5 pl-3 border-l-2 border-emerald-500/40">
            <div>1. 登录 ChatGPT 网页端，进入 <strong>Settings &gt; Security</strong>；</div>
            <div>2. 修改登录密码，若未开启两步验证（2FA）建议立即绑定 Authenticator；</div>
            <div>3. 点击 <strong>Log out of all devices</strong>（注销所有设备）；</div>
            <div>4. 关闭所有浏览器标签和终端进程，<strong>保持账号静置约 3 小时不要登录</strong>；</div>
            <div>5. 3 小时后在单一纯净网络环境下重新登录测试。</div>
          </div>
        </div>

        {/* 方案二 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-theme-subtle space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-primary text-sm sm:text-base">
              <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-mono text-xs font-bold">
                02
              </span>
              <span>方案二：注销全部接入授权，深度冷处理静置 48 小时（重度风控）</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
              风控较重时适用
            </span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            <strong>原理：</strong>在机器学习安全风控模型中，短期高频行为异常的评分会在时间窗口内逐步衰减。完全切断调用可以让安全风险分自然回落至安全基线。
          </p>
          <div className="text-xs text-secondary space-y-1.5 pl-3 border-l-2 border-amber-500/40">
            <div>1. 在网页端设备管理中将全部移动端、IDE 插件、CLI 凭证移除；</div>
            <div>2. <strong>在接下来的 48 小时内，完全不要登录该账号，不要发起任何 API / Codex / Chat 请求</strong>；</div>
            <div>3. 48 小时冷冻期结束后，先用网页端发起简单的普通查询，通常容量限制已完全解除。</div>
          </div>
        </div>

        {/* 方案三 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-theme-subtle space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-primary text-sm sm:text-base">
              <span className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono text-xs font-bold">
                03
              </span>
              <span>方案三：向 help.openai.com 提交高情商工单申诉（附真实可用模版）</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
              终极人工介入
            </span>
          </div>
          <p className="text-xs text-secondary leading-relaxed">
            <strong>技巧：</strong>提交工单时<strong>切忌使用愤怒抱怨的语气</strong>，而应以长期依赖其服务的付费忠实用户角度，委婉描述“服务质量严重下滑与异常持续”，请求技术支持检查调度策略。
          </p>
          <CopyCodeBox
            title="OpenAI 官方工单申诉中英文对照范本（可一键复制）"
            language="markdown"
            code={appealEmailTemplate}
          />
        </div>
      </section>

      {/* 六、开发者常见误区排雷 */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
          <span>六、 开发者常见误区排雷（避开无效操作）</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-red-500 font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>误区一：卸载重装 Codex 或 CLI</span>
            </div>
            <p className="text-secondary leading-relaxed">
              报错是服务端算力集群或云端返回的 503/429 变体，客户端代码是完全健康的。重装不仅无法解决问题，还可能丢失本地配置和 Token 凭据。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-red-500 font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>误区二：盲目充值更多 API 余额</span>
            </div>
            <p className="text-secondary leading-relaxed">
              Capacity 代表的是算力容量饱和，不是额度账单欠费。多充几十美元无法插队进入已满载的模型集群，切勿盲目充值造成资金沉淀。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-2">
            <div className="flex items-center gap-2 text-red-500 font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>误区三：疯狂切换不同国家的节点</span>
            </div>
            <p className="text-secondary leading-relaxed">
              在几分钟内从美西切到新加坡、日本、德国，频繁的“地理跨洲瞬移”是触发 OpenAI 账户安全风控的头号元凶，极易直接导致降智或连环受限。
            </p>
          </div>
        </div>
      </section>

      {/* 七、团队高可用长效架构建议 */}
      <section className="p-6 sm:p-8 rounded-3xl bg-surface border border-theme-subtle space-y-4 text-xs sm:text-sm">
        <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-500" />
          <span>七、 团队与企业研发：如何实现 99.9% 算力高可用？</span>
        </h2>
        <p className="text-secondary leading-relaxed">
          对于把 AI 编码深度整合进日常研发流水线的企业与团队，容量阻断意味着全员研发停滞。要彻底杜绝此类隐患，建议从架构与采购层面建立长效保障：
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
            <div className="font-bold text-primary flex items-center gap-1.5 text-xs">
              <Lock className="w-3.5 h-3.5 text-emerald-500" />
              <span>1. 专人专号，严禁多人接力混用</span>
            </div>
            <p className="text-[11px] text-secondary leading-relaxed">
              多人共用一个账号会导致设备指纹、会话模式剧烈冲突，极易被风控系统降权并频繁触发 Capacity 报错。
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle space-y-1.5">
            <div className="font-bold text-primary flex items-center gap-1.5 text-xs">
              <Cpu className="w-3.5 h-3.5 text-emerald-500" />
              <span>2. 升级 ChatGPT Business / Pro 专属通道</span>
            </div>
            <p className="text-[11px] text-secondary leading-relaxed">
              升级至 Pro 200 (10x算力) 或 ChatGPT Business 企业空间，拥有官方独立优先算力池，高峰期享有更高的队列优先级与免拥挤保障。
            </p>
          </div>
        </div>
      </section>

      {/* 八、常见 FAQ 模块 */}
      <section className="space-y-4 pt-2">
        <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-500" />
          <span>常见疑问解答 (FAQ)</span>
        </h2>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <h3 className="font-bold text-primary">
              Q1: Selected model is at capacity, please try a different model 是封号的前兆吗？
            </h3>
            <p className="text-secondary leading-relaxed text-xs">
              不是。这是 OpenAI 官方服务端标准负载控制提示，绝非封号预警。只要没有违规提示或账户停用邮件，账号本身是安全的。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <h3 className="font-bold text-primary">
              Q2: 为什么我的同事在同一个办公室可以用，而我却报 capacity？
            </h3>
            <p className="text-secondary leading-relaxed text-xs">
              OpenAI 在分发请求时不仅根据 IP，还会综合考虑会话当前绑定的后端集群节点、历史用量负载及账号当前的优先级权重。同事的会话可能路由到了负载较轻的另一组服务器。此时新建一个全新会话往往能解决。
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-theme-subtle space-y-1.5">
            <h3 className="font-bold text-primary">
              Q3: 付费的 ChatGPT Plus / Pro 也会遇到这个错误吗？
            </h3>
            <p className="text-secondary leading-relaxed text-xs">
              会遇到。虽然付费用户拥有远高于免费用户的队列调度优先级，但在全球算力发生局部故障或极端流量突增时，依然会偶发触发。升级至 Pro 200 算力或 Business 企业空间能大幅降低偶发概率。
            </p>
          </div>
        </div>
      </section>
    </HelpArticleLayout>
  );
}
