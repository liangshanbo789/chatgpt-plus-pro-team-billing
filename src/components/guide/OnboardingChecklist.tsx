"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  ShieldCheck,
  Download,
  KeyRound,
  Users,
  Code2,
  Share2,
} from "lucide-react";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  summary: string;
  targetAnchor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ONBOARDING_STEPS: StepItem[] = [
  {
    id: "step_download",
    stepNumber: "01",
    title: "下载全平台官方正版客户端并做好网络自检",
    summary: "认准官方 chatgpt.com、Mac App Store 或微软商店正版安装包，开启 TUN 虚拟网卡接管。",
    targetAnchor: "#step-1-download",
    icon: Download,
  },
  {
    id: "step_login",
    stepNumber: "02",
    title: "使用规范邮箱注册/登录并完成首次安全登录",
    summary: "优先使用企业邮箱或专属常用邮箱，首登保持原生海外节点，避免高频跳换节点引起风控。",
    targetAnchor: "#step-2-login",
    icon: ShieldCheck,
  },
  {
    id: "step_2fa",
    stepNumber: "03",
    title: "在个人安全设置中强制开启 2FA 并抄录恢复密钥",
    summary: "支持 2fa.fun 在线网页、authenticator.cc 插件或微软/谷歌 App 绑定，务必保存 16 位恢复码。",
    targetAnchor: "#step-3-2fa",
    icon: KeyRound,
  },
  {
    id: "step_workspace",
    stepNumber: "04",
    title: "查收邀请邮件并切换至企业工作区 (Workspace)",
    summary: "点击 Accept Invite 接受企业管理员邀请，通过左下角切换器进入企业空间以解锁高级权益。",
    targetAnchor: "#step-4-workspace",
    icon: Users,
  },
  {
    id: "step_codex",
    stepNumber: "05",
    title: "开启 Codex 与 Canvas 代码协同实战",
    summary: "掌握 Canvas 行内审查、Python 云端沙箱执行、报错堆栈精准排错与桌面端全局快捷唤起。",
    targetAnchor: "#step-5-codex",
    icon: Code2,
  },
];

const STORAGE_KEY = "aidaicai_employee_onboarding_progress_v1";

export default function OnboardingChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch {
      // 容错处理
    }
  }, []);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // 容错处理
      }
      return next;
    });
  };

  const resetAll = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // 容错处理
    }
  };

  const completedCount = ONBOARDING_STEPS.filter(
    (step) => checkedItems[step.id]
  ).length;
  const progressPercent = Math.round(
    (completedCount / ONBOARDING_STEPS.length) * 100
  );

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://gongsi.one/guide/onboarding/";
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  return (
    <div className="rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-b from-emerald-500/5 via-surface to-surface p-5 sm:p-7 space-y-6 shadow-sm">
      {/* 头部进度与动作栏 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-theme-subtle pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-bold text-base sm:text-lg text-primary flex items-center gap-2">
              <span>新员工入职配置 5 步核验清单</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                SOP 打卡
              </span>
            </h3>
          </div>
          <p className="text-xs text-secondary">
            每完成一步即可勾选打卡，本地自动持久化保存进度。支持直接复制本教程链接发给新同事。
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyLink}
            className="btn-openai-white text-xs px-3 py-1.5 inline-flex items-center gap-1.5 shadow-xs"
            title="一键复制本教程链接，可发送至飞书/企业微信给入职员工"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  已复制教程链接
                </span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-secondary" />
                <span>复制教程发给员工</span>
              </>
            )}
          </button>

          {mounted && completedCount > 0 && (
            <button
              type="button"
              onClick={resetAll}
              className="text-xs text-tertiary hover:text-secondary px-2.5 py-1.5 rounded-lg border border-theme-subtle hover:bg-surface-elevated transition-colors inline-flex items-center gap-1"
              title="重置所有打卡状态"
            >
              <RotateCcw className="w-3 h-3" />
              <span>重置</span>
            </button>
          )}
        </div>
      </div>

      {/* 进度百分比指示条 */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-secondary flex items-center gap-1.5">
            <span>当前入职入驻进度:</span>
            <strong className="text-primary font-bold">
              {completedCount} / {ONBOARDING_STEPS.length} 项完成
            </strong>
          </span>
          <span
            className={`font-bold ${
              progressPercent === 100
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-secondary"
            }`}
          >
            {progressPercent}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-elevated overflow-hidden border border-theme-subtle">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {progressPercent === 100 && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              🎉 <strong>太棒了！</strong>您已完成全部入职配置与安全加固，企业工作区与 Codex 代码助手已就绪，祝编码愉快！
            </span>
          </div>
        )}
      </div>

      {/* 5 个步骤交互核验项 */}
      <div className="space-y-2.5">
        {ONBOARDING_STEPS.map((step) => {
          const isDone = mounted ? !!checkedItems[step.id] : false;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              onClick={() => toggleItem(step.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 select-none ${
                isDone
                  ? "border-emerald-500/40 bg-emerald-500/5 hover:border-emerald-500/60"
                  : "border-theme-default bg-surface hover:border-theme-hover hover:bg-surface-elevated/40"
              }`}
            >
              <div className="flex items-start gap-3 min-w-0">
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors border ${
                    isDone
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "border-theme-subtle bg-surface-elevated text-transparent"
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surface-elevated border border-theme-subtle text-tertiary">
                      STEP {step.stepNumber}
                    </span>
                    <h4
                      className={`text-xs sm:text-sm font-semibold tracking-tight ${
                        isDone
                          ? "line-through text-tertiary"
                          : "text-primary"
                      }`}
                    >
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-secondary leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>

              <a
                href={step.targetAnchor}
                onClick={(e) => e.stopPropagation()}
                className="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline shrink-0 flex items-center gap-1 font-mono pt-1"
              >
                <span>跳转实操</span>
                <span>→</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
