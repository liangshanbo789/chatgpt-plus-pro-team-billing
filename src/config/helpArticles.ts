export interface HelpArticle {
  slug: string;
  title: string;
  shortTitle: string;
  category: "stability" | "limit" | "payment" | "account" | "cli";
  categoryLabel: string;
  summary: string;
  keywords: string[];
  readingTime: string;
  updateDate: string;
  urgency: "high" | "critical" | "medium";
  urgencyLabel: string;
  badge: string;
  seoTitle: string;
  seoDescription: string;
  relatedSlugs: string[];
}

export const HELP_CATEGORIES = [
  { id: "all", label: "全部问题" },
  { id: "limit", label: "限流与降智" },
  { id: "stability", label: "网络与 403 阻断" },
  { id: "cli", label: "Codex / 终端开发" },
  { id: "payment", label: "支付与订阅被拒" },
  { id: "account", label: "账号封禁与管理" },
] as const;

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: "codex-chatgpt-degraded",
    title: "ChatGPT & Codex 严重“降智”排查指南：PoW 难度检测、o1 思考缺失与模型回退终极拯救",
    shortTitle: "ChatGPT / Codex 降智自救指南",
    category: "limit",
    categoryLabel: "模型降智",
    summary:
      "花钱开了 Plus/Pro 却感觉模型变傻？深度剖析 OpenAI 静默降级机制：PoW 难度暴跌、o1 思考过程丢失、强制分流 4o-mini 的 3 种检测法与彻底恢复方案。",
    keywords: [
      "ChatGPT降智",
      "Codex降智",
      "ChatGPT被降智怎么办",
      "ChatGPT没有思考过程",
      "PoW难度检测",
      "ChatGPT变笨了",
      "o1没有thinking",
      "ChatGPT Degrade Checker",
      "OpenAI静默降级",
    ],
    readingTime: "5 分钟",
    updateDate: "2026-03",
    urgency: "critical",
    urgencyLabel: "高频痛点",
    badge: "热搜第一",
    seoTitle: "ChatGPT & Codex 降智排查自救指南 | PoW难度检测与恢复方案 - AI集采",
    seoDescription:
      "详细解析 ChatGPT 和 OpenAI Codex 遭遇降智的表现（o1无思考过程、强制退回 4o-mini、无联网）、PoW 工作量难度自测方法与网络环境彻底恢复策略。了解企业独享 Pro 200 算力与 Business 空间纯净解决方案。",
    relatedSlugs: ["codex-rate-limit-429", "access-denied-403-cloudflare", "codex-cli-terminal-proxy"],
  },
  {
    slug: "codex-rate-limit-429",
    title: "Codex & ChatGPT 限流突破全解：429 Too Many Requests、Usage Cap 额度用尽与排队优化",
    shortTitle: "429 限流与使用额度耗尽解决",
    category: "limit",
    categoryLabel: "频次限流",
    summary:
      "写代码一半提示「You've reached the current usage cap」或报错 429 Too Many Requests？掌握指数退避重试代码、会话瘦身压缩、轻重任务分流与高并发破解方案。",
    keywords: [
      "ChatGPT限流",
      "Codex 429",
      "You've reached the current usage cap",
      "429 Too Many Requests",
      "ChatGPT使用额度已满",
      "Codex rate limit exceeded",
      "ChatGPT频次限制怎么解",
      "ChatGPT Pro 200算力",
      "ChatGPT Pro 500 Ultrafast",
    ],
    readingTime: "6 分钟",
    updateDate: "2026-03",
    urgency: "high",
    urgencyLabel: "研发阻断",
    badge: "高发问题",
    seoTitle: "Codex & ChatGPT 429 Too Many Requests 限流突破全解 - AI集采",
    seoDescription:
      "解决 Codex CLI 与 ChatGPT 遭遇 429 Too Many Requests 限流、You've reached the current usage cap 额度用尽的完整技术方案。详解指数退避、Session 上下文瘦身与企业 Pro 200/500 独享算力升级。",
    relatedSlugs: ["codex-chatgpt-degraded", "codex-cli-terminal-proxy", "team-workspace-setup"],
  },
  {
    slug: "access-denied-403-cloudflare",
    title: "彻底解决 OpenAI 403 Access Denied 与 Cloudflare 验证码死循环：国内访问网络排查手册",
    shortTitle: "403 Access Denied 与人机死循环",
    category: "stability",
    categoryLabel: "网络连通",
    summary:
      "挂了代理仍打不开 ChatGPT，提示 403 Access Denied 或验证码点了又弹死循环？手把手教你排查 IP 信誉分、WebRTC/DNS 泄漏、浏览器指纹污染与 TUN 网卡终极接管。",
    keywords: [
      "ChatGPT 403 Access Denied",
      "Cloudflare验证码死循环",
      "ChatGPT点验证码一直刷新",
      "OpenAI 403报错",
      "Just a moment死循环",
      "ChatGPT WebRTC泄漏",
      "TUN模式防403",
    ],
    readingTime: "7 分钟",
    updateDate: "2026-03",
    urgency: "critical",
    urgencyLabel: "完全阻断",
    badge: "网络必读",
    seoTitle: "彻底解决 ChatGPT 403 Access Denied 与 Cloudflare 验证码死循环 - AI集采",
    seoDescription:
      "国内访问 OpenAI / Codex 遭遇 403 Access Denied 与 Cloudflare 人机验证死循环的根本原因剖析与 5 步排查清单。详解住宅 IP 筛选、DNS/WebRTC 防漏、TUN 虚拟网卡配置与合规企业代采服务。",
    relatedSlugs: ["codex-chatgpt-degraded", "login-loop-error", "payment-card-declined"],
  },
  {
    slug: "payment-card-declined",
    title: "订阅被拒 Your card has been declined？国内银行卡绑定失败全原因剖析与合规代充指南",
    shortTitle: "信用卡支付被拒与代充避坑",
    category: "payment",
    categoryLabel: "支付充值",
    summary:
      "国内双币/全币卡 100% 提示「Your card has been declined」？虚拟卡平台开卡费贵且极易暴雷封号？揭秘 Stripe 严苛风控逻辑与正规海外企业商业实体卡直充渠道。",
    keywords: [
      "Your card has been declined",
      "ChatGPT无法绑定信用卡",
      "ChatGPT绑卡失败",
      "OpenAI信用卡被拒",
      "ChatGPT代充靠谱吗",
      "ChatGPT虚拟卡封号",
      "ChatGPT对公转账代充",
      "ChatGPT开增值税专票",
    ],
    readingTime: "5 分钟",
    updateDate: "2026-03",
    urgency: "high",
    urgencyLabel: "支付受阻",
    badge: "充值必备",
    seoTitle: "ChatGPT 订阅被拒 Your card has been declined 解决办法与合规代充 - AI集采",
    seoDescription:
      "深度剖析升级 ChatGPT Plus / Pro 提示 Your card has been declined 的根本原因：Stripe 区域风控、AVS 地址校验与虚拟卡暴雷风险。提供正规企业商业卡代付、工行对公转账与 6% 专票合规方案。",
    relatedSlugs: ["account-deactivated-appeal", "team-workspace-setup", "codex-rate-limit-429"],
  },
  {
    slug: "codex-cli-terminal-proxy",
    title: "Codex CLI / VS Code / Cursor 报错 fetch failed 与 Connection Refused：终端代理配置排错指南",
    shortTitle: "Codex 命令行与编辑器代理报错",
    category: "cli",
    categoryLabel: "终端开发",
    summary:
      "浏览器能正常访问 ChatGPT，但终端运行 codex、Cursor 或 VS Code 插件却报 fetch failed、连接超时或 SSL 证书错误？全面解析终端环境变量与代码工具代理注入命令。",
    keywords: [
      "Codex终端连接超时",
      "VSCode Codex代理设置",
      "Cursor fetch failed",
      "终端无法访问OpenAI",
      "PowerShell HTTP_PROXY",
      "Codex CLI代理配置",
      "Node.js fetch failed proxy",
    ],
    readingTime: "6 分钟",
    updateDate: "2026-03",
    urgency: "high",
    urgencyLabel: "研发报错",
    badge: "开发者常备",
    seoTitle: "Codex CLI / VS Code / Cursor 终端代理报错 fetch failed 解决指南 - AI集采",
    seoDescription:
      "解决 Codex 命令行、Cursor、VS Code 插件调用 OpenAI 报错 fetch failed、Connection refused 与 SSL 错误的权威指南。提供 Windows PowerShell、CMD、macOS/Linux 一键代理脚本与 TUN 配置。",
    relatedSlugs: ["codex-rate-limit-429", "codex-chatgpt-degraded", "access-denied-403-cloudflare"],
  },
  {
    slug: "account-deactivated-appeal",
    title: "ChatGPT 账号被停用 Your account was deactivated？官方申诉中英文模板与防封策略",
    shortTitle: "账号被封自救与申诉退款指南",
    category: "account",
    categoryLabel: "账号安全",
    summary:
      "登录提示「Your account was deactivated」心急如焚？剖析淘宝黑卡盗刷连坐封号、跨洲瞬移等四大封号元凶，提供官方申诉中英文范本、历史对话导出救援技巧及企业 SLA 换新兜底方案。",
    keywords: [
      "ChatGPT账号被封",
      "Your account was deactivated",
      "ChatGPT封号申诉模板",
      "OpenAI账号被停用怎么解决",
      "ChatGPT代充被封",
      "ChatGPT退款申诉",
      "ChatGPT防封避坑十诫",
    ],
    readingTime: "6 分钟",
    updateDate: "2026-03",
    urgency: "critical",
    urgencyLabel: "资产止损",
    badge: "防封避坑",
    seoTitle: "ChatGPT 账号被停用 Your account was deactivated 申诉模板与防封指南 - AI集采",
    seoDescription:
      "详解 ChatGPT / OpenAI 账号被封原因（黑卡连坐、跨洲瞬移、违规越狱），提供官方中英文申诉邮件范本与历史数据导出方法。介绍正规代采 72h 免费保换与全周期按天折算退款保障。",
    relatedSlugs: ["payment-card-declined", "access-denied-403-cloudflare", "team-workspace-setup"],
  },
  {
    slug: "team-workspace-setup",
    title: "ChatGPT Business 企业工作空间搭建全解 (原Team全新升级)：Standard与Premium双席位选型、数据隔离与专票报销",
    shortTitle: "ChatGPT Business (原Team) 空间配置指南",
    category: "account",
    categoryLabel: "企业管理",
    summary:
      "OpenAI Team 全新更名为 ChatGPT Business！Standard 与 Premium (5x算力) 怎么选？加入 Business 会被管理员看私人聊天吗？一文理清商业数据 100% 不入训、多席位分配及工行对公专票报销流程。",
    keywords: [
      "ChatGPT Business空间怎么用",
      "ChatGPT Team更名Business",
      "ChatGPT Business Standard和Premium区别",
      "ChatGPT团队版开票",
      "ChatGPT成员加入个人记录",
      "ChatGPT Business工作区隔离",
      "ChatGPT企业版升级",
      "ChatGPT对公专票报销",
    ],
    readingTime: "5 分钟",
    updateDate: "2026-03",
    urgency: "medium",
    urgencyLabel: "企业协同",
    badge: "企业必看",
    seoTitle: "ChatGPT Business 企业空间搭建全解 (原Team升级) - AI集采",
    seoDescription:
      "ChatGPT Business (原Team) 企业空间搭建全流程指南：Standard 与 Premium 席位混搭选型、个人与企业工作区隔离、数据隐私合规。支持企业工行对公结算与 6% 增值税专用发票开具。",
    relatedSlugs: ["payment-card-declined", "codex-rate-limit-429", "account-deactivated-appeal"],
  },
  {
    slug: "login-loop-error",
    title: "ChatGPT 登录死循环、Oops! We ran into an issue 与页面白屏卡死极速排错手册",
    shortTitle: "登录无限跳回与白屏排错",
    category: "stability",
    categoryLabel: "登录异常",
    summary:
      "点击 Log In 之后无限跳回首页？输入密码提示 Oops! We ran into an issue？或者页面直接白屏？手把手教你修复 Auth0 鉴权分流缺失、清理 IndexedDB 僵尸缓存与浏览器环境重建。",
    keywords: [
      "ChatGPT登录无限循环",
      "Oops! We ran into an issue while signing in",
      "ChatGPT打不开白屏",
      "ChatGPT登录死循环",
      "OpenAI登录鉴权失败",
      "Auth0分流规则",
      "ChatGPT清空缓存",
    ],
    readingTime: "4 分钟",
    updateDate: "2026-03",
    urgency: "high",
    urgencyLabel: "登录受阻",
    badge: "速查急救",
    seoTitle: "ChatGPT 登录死循环与 Oops We ran into an issue 排障手册 - AI集采",
    seoDescription:
      "解决访问 ChatGPT 出现的登录页面无限死循环跳转、Oops! We ran into an issue 报错与白屏不加载问题。详解 Auth0 域名分流补全、Service Worker 缓存清理与纯净 Profile 建议。",
    relatedSlugs: ["access-denied-403-cloudflare", "codex-chatgpt-degraded", "account-deactivated-appeal"],
  },
];
