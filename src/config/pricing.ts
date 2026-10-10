export type BillingCycle = "monthly" | "quarterly" | "yearly";

export interface TierPrice {
  monthly: number;
  quarterly: number;
  yearly: number;
}

export type ProductId =
  | "plus"
  | "pro100"
  | "pro200"
  | "pro500"
  | "business_std"
  | "business_pre"
  | "pro5x"
  | "pro20x"
  | "team";

export interface ProductPricingConfig {
  id: string;
  category: "individual" | "pro" | "business";
  categoryLabel: string;
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  officialUsd: number;
  officialPriceDisplay: string;
  minSeats: number;
  baseMonthlyRmb: number; // 1~4席月付基准价 (单席对公基准价)
  lowestPriceRmb: number; // 大客户集采低至价 (20+席年付)
  perkPerSeatMonth: number;
  description: string;
  features: string[];
  highlight?: boolean;
  tiers: {
    individual: TierPrice; // 1~4 席
    team: TierPrice;       // 5~19 席
    enterprise: TierPrice; // 20+ 席
  };
}

export const PRODUCTS_CONFIG: Record<string, ProductPricingConfig> = {
  plus: {
    id: "plus",
    category: "individual",
    categoryLabel: "基础普及",
    name: "ChatGPT Plus",
    shortName: "Plus",
    tagline: "个人账号转企业统一报销首选",
    badge: "高频普及款",
    badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
    officialUsd: 20,
    officialPriceDisplay: "$20 / 月",
    minSeats: 1,
    baseMonthlyRmb: 165,
    lowestPriceRmb: 135,
    perkPerSeatMonth: 15,
    description: "畅享最新 GPT-6 Astra 与 GPT-5.6 前沿旗舰，满足出海电商文案主笔、日常翻译、海外客服及职能部门的高频交互需求。",
    features: [
      "优先接入最新 GPT-6 Astra 旗舰基石模型",
      "GPT-5.6 (Sol / Terra) 稳定高频调用与智能路由",
      "高峰期免排队优先响应网络与高维记忆库",
      "高级数据分析 (Python) 与 OpenAI Codex 辅助编程",
      "支持企业员工现有个人邮箱直接官方直充",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 165, quarterly: 155, yearly: 148 },
      team: { monthly: 155, quarterly: 148, yearly: 140 },
      enterprise: { monthly: 145, quarterly: 140, yearly: 135 },
    },
  },
  pro100: {
    id: "pro100",
    category: "pro",
    categoryLabel: "高算力 Pro 系列",
    name: "ChatGPT Pro 100",
    shortName: "Pro 100 (5x)",
    tagline: "5x 高倍算力攻坚与百万 Token 长文本",
    badge: "5x 算力进阶",
    badgeColor: "bg-surface-elevated text-secondary border-theme-subtle",
    officialUsd: 100,
    officialPriceDisplay: "$100 / 月",
    minSeats: 1,
    baseMonthlyRmb: 790,
    lowestPriceRmb: 650,
    perkPerSeatMonth: 60,
    description: "官方定价 $100/月，享有 5 倍于 Plus 的算力配额。适合资深独立站运营、高级研发工程及需要超长上下文研判的人员。",
    features: [
      "5 倍于 Plus 版本的 GPT-6 Astra 与 GPT-5.6 频次限额",
      "支持 GPT-6 Astra 深度思考推理与长程规划",
      "支持 100 万 (1M Token) 超长上下文记忆分析",
      "Deep Research 深度全网科研级调研能力",
      "支持按月/按季灵活调整账号分配，按需弹性增减",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 790, quarterly: 740, yearly: 710 },
      team: { monthly: 740, quarterly: 690, yearly: 670 },
      enterprise: { monthly: 690, quarterly: 660, yearly: 650 },
    },
  },
  pro200: {
    id: "pro200",
    category: "pro",
    categoryLabel: "高算力 Pro 系列",
    name: "ChatGPT Pro 200",
    shortName: "Pro 200 (10x 旗舰)",
    tagline: "OpenAI $200 研发主力旗舰 · 10x 满血推理算力",
    badge: "研发与算法团队标配",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30",
    officialUsd: 200,
    officialPriceDisplay: "$200 / 月",
    minSeats: 1,
    baseMonthlyRmb: 1490,
    lowestPriceRmb: 1360,
    perkPerSeatMonth: 120,
    description: "专为算法科学家、系统架构师及攻坚团队打造。搭载最新 GPT-6 Astra 满血深度推理，免除 5 小时常规频次上限。",
    features: [
      "搭载 OpenAI 满血旗舰 GPT-6 Astra 深度推理集群",
      "10 倍高倍用量配额，免除 5 小时常规用量限制",
      "突破性 Computer Operator 智能体操控与多步工程",
      "满血 OpenAI Codex 代码生成、系统架构设计与审计",
      "专属高端商业卡段绑定，附带大客户战略集采礼包",
    ],
    highlight: true,
    tiers: {
      individual: { monthly: 1490, quarterly: 1450, yearly: 1420 },
      team: { monthly: 1460, quarterly: 1420, yearly: 1390 },
      enterprise: { monthly: 1430, quarterly: 1390, yearly: 1360 },
    },
  },
  pro500: {
    id: "pro500",
    category: "pro",
    categoryLabel: "高算力 Pro 系列",
    name: "ChatGPT Pro 500",
    shortName: "Pro 500 (25x 顶配)",
    tagline: "25x 极限算力 · 独占 Ultrafast 300 tps 极速模式",
    badge: "独占 Ultrafast 极速",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30",
    officialUsd: 500,
    officialPriceDisplay: "$500 / 月",
    minSeats: 1,
    baseMonthlyRmb: 3880,
    lowestPriceRmb: 3180,
    perkPerSeatMonth: 300,
    description: "OpenAI 顶配 Pro 订阅，25 倍海量算力。独占 Ultrafast 极速模式（token 生成高达 300 tps），无 5 小时上限，满足极限制程与量化模型攻坚。",
    features: [
      "独占 Ultrafast 极速模式（生成速率高达 300 tokens/s）",
      "25 倍于 Plus 的顶级极限算力与全量并发通道",
      "解除 5 小时使用限制，超长不间断深度科研运算",
      "顶级优先调度集群，零等待接入最新实验性特性",
      "专属大客户 VIP 渠道开通，配备 7×24H 专人技术保障",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 3880, quarterly: 3680, yearly: 3480 },
      team: { monthly: 3680, quarterly: 3450, yearly: 3300 },
      enterprise: { monthly: 3450, quarterly: 3300, yearly: 3180 },
    },
  },
  business_std: {
    id: "business_std",
    category: "business",
    categoryLabel: "企业空间 Business",
    name: "ChatGPT Business (Standard)",
    shortName: "Business 标准版",
    tagline: "原 Team 空间全新升级 · 商业数据 100% 隔离不入训",
    badge: "企业协作标配",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    officialUsd: 25,
    officialPriceDisplay: "$25 / 人 / 月",
    minSeats: 2,
    baseMonthlyRmb: 225,
    lowestPriceRmb: 188,
    perkPerSeatMonth: 20,
    description: "OpenAI Team 全新更名升级。适合 2 人以上协作团队，统一工作空间，商业数据与代码严格隔离、绝不参与模型训练。",
    features: [
      "企业内部商业数据与代码默认 100% 不参与模型训练",
      "全员享有 GPT-6 Astra 与 GPT-5.6 前沿模型能力",
      "集中管理后台（统一分配/回收席位，集中账单管理）",
      "共享团队内部专属企业 GPTs 知识库与工作区工作流",
      "最低 2 席起购，支持按月/按季灵活调整人员配额",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 225, quarterly: 218, yearly: 208 },
      team: { monthly: 218, quarterly: 210, yearly: 198 },
      enterprise: { monthly: 210, quarterly: 202, yearly: 188 },
    },
  },
  business_pre: {
    id: "business_pre",
    category: "business",
    categoryLabel: "企业空间 Business",
    name: "ChatGPT Business (Premium)",
    shortName: "Business 尊享版",
    tagline: "企业尊享 5x 高算力席位 · 免 5 小时频次限制",
    badge: "高算力空间",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/30",
    officialUsd: 125,
    officialPriceDisplay: "$125 / 人 / 月",
    minSeats: 2,
    baseMonthlyRmb: 1020,
    lowestPriceRmb: 920,
    perkPerSeatMonth: 80,
    description: "为企业核心高强度用量团队打造。单席享有 5x 高倍用量配额，免除 5 小时用量封顶，全面支持 SAML SSO 与审计控制。",
    features: [
      "单席享有 5 倍于标准版的高倍算力与深度推理额度",
      "免除 5 小时用量封顶，保障关键业务全天候高频调用",
      "数据 100% 隔离不参与训练，支持企业 SAML SSO 单点登录",
      "支持在同一 Workspace 内与 Standard 标准席按需混搭",
      "出具统一企业 6% 专票，专享企业级合规财务平账与 SLA",
    ],
    highlight: false,
    tiers: {
      individual: { monthly: 1020, quarterly: 990, yearly: 960 },
      team: { monthly: 995, quarterly: 965, yearly: 940 },
      enterprise: { monthly: 970, quarterly: 940, yearly: 920 },
    },
  },
};

// 兼容别名映射 (向后兼容旧 ID 引用)
PRODUCTS_CONFIG.pro5x = PRODUCTS_CONFIG.pro100;
PRODUCTS_CONFIG.pro20x = PRODUCTS_CONFIG.pro200;
PRODUCTS_CONFIG.team = PRODUCTS_CONFIG.business_std;

export interface QuotationResult {
  product: ProductPricingConfig;
  seats: number;
  billingCycle: BillingCycle;
  cycleMonths: number;
  cycleName: string;
  tierType: "individual" | "team" | "enterprise";
  tierLabel: string;
  unitPrice: number;
  rawTotalWithoutDiscount: number;
  totalAmount: number;
  totalSavings: number;
  totalPerksAmount: number;
}

export function calculateQuotation(
  productId: string,
  rawSeats: number,
  billingCycle: BillingCycle
): QuotationResult {
  const product = PRODUCTS_CONFIG[productId] || PRODUCTS_CONFIG.pro200;
  const seats = Math.max(rawSeats, product.minSeats);

  let tierType: "individual" | "team" | "enterprise" = "individual";
  let tierLabel = "基础单席阶梯";

  if (seats >= 20) {
    tierType = "enterprise";
    tierLabel = "🔥 已触发大客户战略集采阶梯 (大宗专属底价)";
  } else if (seats >= 5) {
    tierType = "team";
    tierLabel = "👍 已触发团队优惠阶梯";
  }

  let cycleMonths = 1;
  let cycleName = "按月结算";
  if (billingCycle === "quarterly") {
    cycleMonths = 3;
    cycleName = "按季度结算 (季付立减)";
  } else if (billingCycle === "yearly") {
    cycleMonths = 12;
    cycleName = "按年度结算 (推荐 · 折上折)";
  }

  const unitPrice = product.tiers[tierType][billingCycle];
  const rawTotalWithoutDiscount = product.baseMonthlyRmb * seats * cycleMonths;
  const totalAmount = unitPrice * seats * cycleMonths;
  const totalSavings = rawTotalWithoutDiscount - totalAmount;
  const totalPerksAmount = product.perkPerSeatMonth * seats * cycleMonths;

  return {
    product,
    seats,
    billingCycle,
    cycleMonths,
    cycleName,
    tierType,
    tierLabel,
    unitPrice,
    rawTotalWithoutDiscount,
    totalAmount,
    totalSavings,
    totalPerksAmount,
  };
}

