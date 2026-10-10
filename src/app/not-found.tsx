import React from "react";
import Link from "next/link";
import {
  FileQuestion,
  Home,
  HelpCircle,
  Calculator,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Zap,
  Code2,
  Lock,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas text-primary flex flex-col justify-between selection:bg-[#10A37F]/30 selection:text-white transition-colors duration-200">
      {/* 顶部极简导航 */}
      <header className="border-b border-theme-subtle bg-surface/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <BrandLogo />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/help/"
              className="text-xs text-secondary hover:text-primary transition-colors flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>问题中心</span>
            </Link>
            <Link
              href="/"
              className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors shadow-xs"
            >
              返回官网首页
            </Link>
          </div>
        </div>
      </header>

      {/* 主屏 404 引导区块 */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* 404 状态标志 */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shadow-inner">
              <FileQuestion className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated border border-theme-default text-xs font-mono text-tertiary">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>HTTP 404 · PAGE NOT FOUND</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                您访问的页面不存在或已被迁移
              </h1>
              <p className="text-sm sm:text-base text-secondary max-w-xl mx-auto leading-relaxed">
                抱歉，该链接可能已被更新、移动或暂时下线。您可以直接返回首页，或查看下方企业客户高频访问的解决方案与排错手册。
              </p>
            </div>
          </div>

          {/* 核心快捷行动按钮 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-md hover:shadow-emerald-600/20"
            >
              <Home className="w-4 h-4" />
              <span>返回平台首页</span>
            </Link>
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-theme-default text-primary text-sm font-semibold transition-all"
            >
              <Calculator className="w-4 h-4 text-blue-500" />
              <span>阶梯采购价格测算</span>
            </Link>
            <Link
              href="/help/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-theme-default text-primary text-sm font-semibold transition-all"
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>排错自救中心</span>
            </Link>
          </div>

          {/* 推荐热门指引卡片网格 */}
          <div className="pt-4 text-left">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-tertiary mb-3 text-center">
              —— 研发团队与企业客户热门检索 ——
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {/* 卡片 1: Selected model is at capacity */}
              <Link
                href="/help/codex-model-at-capacity/"
                className="p-3.5 rounded-xl bg-surface border border-theme-subtle hover:border-amber-500/40 hover:bg-surface-elevated transition-all group flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5 text-amber-500">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-xs text-primary group-hover:text-amber-500 transition-colors flex items-center justify-between">
                    <span>Model is at capacity 解决</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                    算力挤兑、容量排队与账号降权实操自救
                  </p>
                </div>
              </Link>

              {/* 卡片 2: Codex 研发代采 */}
              <Link
                href="/solutions/codex-procurement/"
                className="p-3.5 rounded-xl bg-surface border border-theme-subtle hover:border-emerald-500/40 hover:bg-surface-elevated transition-all group flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-500">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-xs text-primary group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                    <span>Codex 研发代采方案</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                    对公转账 · 6% 增值税专票 · 72h 封号包赔
                  </p>
                </div>
              </Link>

              {/* 卡片 3: 新员工入职指南 */}
              <Link
                href="/guide/onboarding/"
                className="p-3.5 rounded-xl bg-surface border border-theme-subtle hover:border-blue-500/40 hover:bg-surface-elevated transition-all group flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 text-blue-500">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-xs text-primary group-hover:text-blue-500 transition-colors flex items-center justify-between">
                    <span>新员工 Codex 入职 SOP</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                    正版客户端下载 · 2FA 绑定 · 加入工作区
                  </p>
                </div>
              </Link>

              {/* 卡片 4: 官方代采阶梯报价手册 */}
              <Link
                href="/docs/pricing/"
                className="p-3.5 rounded-xl bg-surface border border-theme-subtle hover:border-purple-500/40 hover:bg-surface-elevated transition-all group flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5 text-purple-500">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-xs text-primary group-hover:text-purple-500 transition-colors flex items-center justify-between">
                    <span>企业代采官方阶梯报价单</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                    Plus / Pro 100~500 / Business 空间月付季付底价
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 底部版权 */}
      <footer className="border-t border-theme-subtle py-6 text-center text-xs text-tertiary">
        <p>© 2026 AI集采 gongsi.one · 企业级海外 AI 官方代采合规解决方案平台</p>
      </footer>
    </div>
  );
}
