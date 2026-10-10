"use client";

import React, { useState } from "react";
import {
  Check,
  Sparkles,
  Zap,
  Cpu,
  Users,
  Flame,
  Building2,
  ArrowRight,
  Layers,
  ShieldCheck,
  RotateCcw,
  Lock,
  Boxes,
  HelpCircle,
} from "lucide-react";
import { PRODUCTS_CONFIG, ProductPricingConfig } from "@/config/pricing";

interface ProductCatalogProps {
  onSelectProduct: (productId: string) => void;
  onOpenContact: (source?: string) => void;
}

const PRODUCT_ICONS: Record<
  string,
  { icon: React.ElementType; iconColor: string }
> = {
  plus: {
    icon: Sparkles,
    iconColor: "text-secondary",
  },
  pro100: {
    icon: Zap,
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  pro200: {
    icon: Cpu,
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  pro500: {
    icon: Flame,
    iconColor: "text-purple-500 dark:text-purple-400",
  },
  business_std: {
    icon: Users,
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  business_pre: {
    icon: Building2,
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
};

export default function ProductCatalog({
  onSelectProduct,
  onOpenContact,
}: ProductCatalogProps) {
  // 默认定位在最关键的 business 或 all，支持双轨精准切换
  const [filterCategory, setFilterCategory] = useState<string>("business");
  const [showDecisionGuide, setShowDecisionGuide] = useState<boolean>(false);

  const allProducts: ProductPricingConfig[] = [
    PRODUCTS_CONFIG.business_std,
    PRODUCTS_CONFIG.business_pre,
    PRODUCTS_CONFIG.pro200,
    PRODUCTS_CONFIG.pro100,
    PRODUCTS_CONFIG.pro500,
    PRODUCTS_CONFIG.plus,
  ];

  const filteredProducts =
    filterCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === filterCategory);

  return (
    <section id="products" className="py-20 relative bg-canvas transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="codex-pill mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>全版本官方代采 · 2026 OpenAI 最新产品矩阵 · 7×24H 极速开通</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            精准匹配企业安全合规与研发极致算力
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            企业组织空间与个人/研发专席诉求根本不同。我们彻底拆分业务场景，提供从
            <strong className="text-primary font-medium"> 数据 100% 隔离的企业空间 (Business)</strong> 到
            <strong className="text-primary font-medium"> 满血免限额的研发专席 (Pro 系列)</strong> 的清晰路径。
          </p>
        </div>

        {/* 核心需求场景卡片 (Scenario Intent Banners) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
          {/* Card 1: Enterprise Business */}
          <div
            onClick={() => setFilterCategory("business")}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative text-left ${
              filterCategory === "business"
                ? "border-emerald-500/80 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.08] ring-1 ring-emerald-500/30 shadow-xs"
                : "border-theme-subtle bg-surface hover:border-theme-hover"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-primary">
                  企业组织空间 Business
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                企业大客户首选
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed mb-3">
              面向企业 IT、合规总监与协作部门。原 Team 升级，专注<strong>商业数据不入训、统一控制台与离职资产回收</strong>。
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-tertiary font-mono">
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                🛡️ 默认不训练
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                👥 Admin 统一分配
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                🔑 SAML SSO
              </span>
            </div>
          </div>

          {/* Card 2: Pro Compute Series */}
          <div
            onClick={() => setFilterCategory("pro")}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative text-left ${
              filterCategory === "pro"
                ? "border-amber-500/80 bg-amber-500/[0.04] dark:bg-amber-500/[0.08] ring-1 ring-amber-500/30 shadow-xs"
                : "border-theme-subtle bg-surface hover:border-theme-hover"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-primary">
                  研发高算力专席 Pro 系列
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                核心架构攻坚
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed mb-3">
              面向核心算法专家、架构师与量化工程师。专享 <strong>10x~25x 极端算力、突破 5 小时限流、300 tps 极速推理</strong>。
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-tertiary font-mono">
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                ⚡ 免 5 小时限额
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                🚀 Ultrafast 300 tps
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                🧠 满血 Astra 推理
              </span>
            </div>
          </div>

          {/* Card 3: Individual Plus */}
          <div
            onClick={() => setFilterCategory("individual")}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative text-left ${
              filterCategory === "individual"
                ? "border-blue-500/80 bg-blue-500/[0.04] dark:bg-blue-500/[0.08] ring-1 ring-blue-500/30 shadow-xs"
                : "border-theme-subtle bg-surface hover:border-theme-hover"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-sm text-primary">
                  基础日常普及 Plus
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-elevated text-secondary border border-theme-subtle font-medium">
                单兵轻量办公
              </span>
            </div>
            <p className="text-xs text-secondary leading-relaxed mb-3">
              面向外贸文案、客服、日常翻译及个人自费转企业报销。<strong>员工已有个人邮箱官方直充，提供 6% 专票报销</strong>。
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] text-tertiary font-mono">
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                💰 极致性价比
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                📧 个人号直接直充
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface border border-theme-subtle">
                🧾 合规专票报销
              </span>
            </div>
          </div>
        </div>

        {/* 分类快捷切换器 Filter Tabs */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full sm:flex-wrap">
            {[
              { id: "business", label: "🏢 企业空间 Business (原Team升级)", shortLabel: "🏢 企业 Business", count: "2 款" },
              { id: "pro", label: "⚡ 高算力 Pro 系列 (100/200/500)", shortLabel: "⚡ 研发 Pro", count: "3 款" },
              { id: "individual", label: "👤 基础普及 (Plus)", shortLabel: "👤 基础 Plus", count: "1 款" },
              { id: "all", label: "🔀 全部对比视图", shortLabel: "🔀 全部对比", count: "6 款" },
            ].map((tab) => {
              const active = filterCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilterCategory(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? "bg-primary text-canvas shadow-xs font-semibold"
                      : "bg-surface-elevated text-secondary border border-theme-subtle hover:text-primary hover:border-theme-hover"
                  }`}
                >
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  <span className={`text-[10px] font-mono px-1 rounded ${
                    active ? "bg-canvas/20 text-canvas" : "text-tertiary"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setShowDecisionGuide(!showDecisionGuide)}
            className="flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-surface-elevated border border-transparent hover:border-theme-subtle"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>{showDecisionGuide ? "收起 30 秒选型指南" : "企业选型指南：我该选哪种？"}</span>
          </button>
        </div>

        {/* 30 秒选型对照指南展开卡 (Decision Guide Matrix) */}
        {showDecisionGuide && (
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-surface border border-theme-subtle text-xs space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-theme-subtle pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10A37F]" />
                <h4 className="font-semibold text-primary text-sm">
                  为什么企业大客户不能让员工自行购买个人版？关键决策对照
                </h4>
              </div>
              <span className="text-[11px] text-tertiary font-mono">
                数据安全法与财税合规指引
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-surface-elevated border border-emerald-500/20 space-y-2">
                <div className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>企业空间版 (Business)</span>
                </div>
                <ul className="text-secondary space-y-1.5 leading-relaxed">
                  <li>• <strong>数据隔离：</strong>商业 Prompt 与内部代码 100% 隔离，绝不参与模型训练。</li>
                  <li>• <strong>资产归属：</strong>员工离职，管理员后台<strong>一键注销并无损收回席位</strong>重新流转。</li>
                  <li>• <strong>协同工作：</strong>共享企业私有 GPTs 与知识库，支持 SAML SSO 与审计日志。</li>
                  <li>• <strong>适合人群：</strong>全员规模化使用、涉及核心商业数据与代码安全的企业。</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-surface-elevated border border-amber-500/20 space-y-2">
                <div className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>高算力专席 (Pro 系列)</span>
                </div>
                <ul className="text-secondary space-y-1.5 leading-relaxed">
                  <li>• <strong>算力突破：</strong>独占 10x~25x 极端算力通道，<strong>彻底解除 5 小时常规频次上限</strong>。</li>
                  <li>• <strong>顶尖功能：</strong>支持 Ultrafast 300 tps 极速模式、百万 Token 上下文与深度规划。</li>
                  <li>• <strong>单兵效率：</strong>针对核心骨干单兵效率最大化，适合高价值技术攻坚。</li>
                  <li>• <strong>适合人群：</strong>算法科学家、系统架构师、科研负责人、量化研究员。</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-surface-elevated border border-blue-500/20 space-y-2">
                <div className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>基础普及版 (Plus)</span>
                </div>
                <ul className="text-secondary space-y-1.5 leading-relaxed">
                  <li>• <strong>个人绑定：</strong>绑定员工个人邮箱，离职后账号由个人持有，无法收回。</li>
                  <li>• <strong>无后台：</strong>无组织管理员后台，无法统一配置权限与查看团队审计。</li>
                  <li>• <strong>合规报销：</strong>由我们提供对公付款与 6% 专票，解决个人无法开票问题。</li>
                  <li>• <strong>适合人群：</strong>日常文案撰写、跨国客服等非涉密轻量职能岗位。</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const iconMeta = PRODUCT_ICONS[product.id] || {
              icon: Cpu,
              iconColor: "text-secondary",
            };
            const Icon = iconMeta.icon;
            const isBusiness = product.category === "business";
            const isPro = product.category === "pro";

            return (
              <div
                key={product.id}
                className={`codex-panel-interactive flex flex-col justify-between p-6 sm:p-7 relative rounded-2xl ${
                  product.highlight
                    ? "border-amber-400/50 dark:border-amber-400/30 bg-gradient-to-b from-amber-500/[0.05] to-transparent dark:from-zinc-900 dark:to-[#121215] shadow-sm ring-1 ring-amber-400/20"
                    : isBusiness
                    ? "border-emerald-500/20 dark:border-emerald-500/20 bg-surface"
                    : "border-theme-subtle bg-surface"
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`p-2 rounded-lg bg-surface-elevated border border-theme-subtle ${iconMeta.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-tertiary px-2 py-0.5 rounded bg-surface border border-theme-subtle">
                      {product.categoryLabel}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                </div>

                {/* Product Name & Tagline */}
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl font-semibold text-primary">
                      {product.name}
                    </h3>
                    <span className="text-xs font-mono text-tertiary">
                      {product.officialPriceDisplay}
                    </span>
                  </div>
                  <p className="text-xs text-secondary mb-3 min-h-[32px] leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* 核心定位利益点标签条 */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {isBusiness ? (
                      <>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          🛡️ 数据不入训
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-secondary border border-theme-subtle">
                          👥 统一 Admin 后台
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-secondary border border-theme-subtle">
                          🔄 离职可回收
                        </span>
                      </>
                    ) : isPro ? (
                      <>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          ⚡ 免 5 小时限额
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-secondary border border-theme-subtle">
                          🚀 高倍算力通道
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-secondary border border-theme-subtle">
                          🧠 研发核心专席
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          💳 个人号官方代充
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-secondary border border-theme-subtle">
                          🧾 6% 对公专票报销
                        </span>
                      </>
                    )}
                  </div>

                  {/* Pricing Box - Direct Bulk Tier Matrix Display */}
                  <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle mb-5 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-medium text-secondary">
                        {isBusiness ? "单人对公基准价" : "单席对公基准价"}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                        阶梯立减 · 量大从优
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-2.5">
                      <span className="text-2xl font-bold text-primary tracking-tight">
                        ¥ {product.baseMonthlyRmb.toLocaleString()}
                      </span>
                      <span className="text-xs text-secondary">
                        {isBusiness ? "/人/月 (含6%税)" : "/月/席 (含6%税)"}
                      </span>
                    </div>

                    {/* 阶梯价格梯度展示 */}
                    <div className="space-y-1.5 pt-2 border-t border-theme-subtle/60 text-[11px]">
                      <div className="flex justify-between items-center text-secondary">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                          <span>
                            {product.minSeats > 1 ? `${product.minSeats}~4 席` : "1~4 席"} (月付基准)
                          </span>
                        </span>
                        <span className="font-mono text-primary">
                          ¥{product.tiers.individual.monthly}/月
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-secondary">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>5~19 席 (团队阶梯)</span>
                        </span>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                          ¥{product.tiers.team.monthly}/月
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-secondary">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>20+ 席 (年采低至)</span>
                        </span>
                        <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">
                          ¥{product.lowestPriceRmb}/月
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-secondary mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feat, fidx) => (
                      <div
                        key={fidx}
                        className="flex items-start gap-2 text-xs text-secondary"
                      >
                        <Check className="w-3.5 h-3.5 text-[#10A37F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-theme-subtle flex flex-col gap-2">
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className={`w-full py-2.5 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      product.highlight
                        ? "btn-openai-white !w-full"
                        : "btn-openai-secondary !w-full"
                    }`}
                  >
                    <span>测算该版本预算</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenContact(`product-${product.id}`)}
                    className="w-full py-1.5 text-[11px] text-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    咨询大客户专属对公方案
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 企业客户常见混合搭配采买方案 (Mix & Match Guidance Banner) */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-theme-subtle flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-primary text-canvas shrink-0">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-sm text-primary">
                  企业高阶实践：支持多版本「混合采买」方案
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                  灵活配比
                </span>
              </div>
              <p className="text-xs text-secondary leading-relaxed max-w-3xl">
                超过 80% 的中大型企业采取混合策略：为全员配置 <strong>Business Standard (保障数据绝不入训与资产回收)</strong>，同时为核心架构师定向配置 <strong>Pro 200 (满血算力突破限额)</strong>。我们支持在同一采购合同下合并结算，统一开具一张 6% 增值税专用发票。
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenContact("mix-match-guidance")}
            className="btn-openai-secondary whitespace-nowrap text-xs shrink-0 cursor-pointer"
          >
            定制企业混合配比方案
          </button>
        </div>
      </div>
    </section>
  );
}
