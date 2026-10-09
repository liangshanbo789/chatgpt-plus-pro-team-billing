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
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const allProducts: ProductPricingConfig[] = [
    PRODUCTS_CONFIG.pro200,
    PRODUCTS_CONFIG.business_std,
    PRODUCTS_CONFIG.pro100,
    PRODUCTS_CONFIG.pro500,
    PRODUCTS_CONFIG.business_pre,
    PRODUCTS_CONFIG.plus,
  ];

  const filteredProducts =
    filterCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === filterCategory);

  return (
    <section id="products" className="py-20 relative bg-canvas transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="codex-pill mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#10A37F]" />
            <span>全版本官方代采 · 2026 OpenAI 最新产品矩阵 · 7×24H 极速开通</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mb-4">
            满足企业从高算力研发到全员协同的全部需求
          </h2>
          <p className="text-sm sm:text-base text-secondary">
            涵盖最新 <strong className="text-primary font-medium">ChatGPT Pro 100 / 200 / 500</strong> 算力系列与全新更名的 <strong className="text-primary font-medium">ChatGPT Business</strong> 企业协作空间。支持对公含税转账、6% 增值税专票与大宗采购阶梯立减。
          </p>
        </div>

        {/* 分类切换器 Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: "all", label: "全部版本 (6大规格)", icon: Layers },
            { id: "pro", label: "高算力 Pro 系列 (100/200/500)", icon: Cpu },
            { id: "business", label: "企业 Business 空间 (原Team升级)", icon: Users },
            { id: "individual", label: "基础普及 (Plus)", icon: Sparkles },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const active = filterCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  active
                    ? "bg-primary text-canvas shadow-xs font-semibold"
                    : "bg-surface-elevated text-secondary border border-theme-subtle hover:text-primary hover:border-theme-hover"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid: 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const iconMeta = PRODUCT_ICONS[product.id] || {
              icon: Cpu,
              iconColor: "text-secondary",
            };
            const Icon = iconMeta.icon;

            return (
              <div
                key={product.id}
                className={`codex-panel-interactive flex flex-col justify-between p-6 sm:p-7 relative rounded-2xl ${
                  product.highlight
                    ? "border-amber-400/50 dark:border-amber-400/30 bg-gradient-to-b from-amber-500/[0.05] to-transparent dark:from-zinc-900 dark:to-[#121215] shadow-sm ring-1 ring-amber-400/20"
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
                  <p className="text-xs text-secondary mb-4 min-h-[32px] leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Pricing Box - Direct Bulk Tier Matrix Display */}
                  <div className="p-3.5 rounded-xl bg-surface-elevated border border-theme-subtle mb-5 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-medium text-secondary">
                        单席对公基准价
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
                        {product.category === "business"
                          ? "/人/月 (含6%税)"
                          : "/月/席 (含6%税)"}
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
                    <span>测算采购成本</span>
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
      </div>
    </section>
  );
}

