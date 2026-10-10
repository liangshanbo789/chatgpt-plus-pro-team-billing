"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Info,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  category: "网络环境" | "客户端配置" | "浏览器与指纹" | "账号与日常";
  title: string;
  desc: string;
  linkText?: string;
  linkUrl?: string;
  critical: boolean; // 是否是关键红线项
  guideTip: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "ip_cleanliness",
    category: "网络环境",
    title: "IP 纯净度检测通过 (Fraud Score < 25)",
    desc: "使用专业检测工具，确认当前出口 IP 未被 Cloudflare 或 OpenAI 标记为垃圾流量/高危黑名单。",
    linkText: "打开 ip.net.coffee/gpt/ 检测",
    linkUrl: "https://ip.net.coffee/gpt/",
    critical: true,
    guideTip:
      "访问 ip.net.coffee/gpt/，若检测结果中 OpenAI Web/App 状态为绿色可用，且无 Cloudflare 风险拦截标记，即为合格。",
  },
  {
    id: "ip_residential",
    category: "网络环境",
    title: "非廉价数据中心机房 IP (ISP 原生/商业住宅佳)",
    desc: "避免使用 AWS、Oracle Cloud、DigitalOcean 等公开便宜机房网段，此类 IP 极易被一锅端连坐封禁。",
    linkText: "查询 IPinfo 组织类型",
    linkUrl: "https://ipinfo.io/",
    critical: true,
    guideTip:
      "在 ipinfo.io 查看 org 字段。若显示为 hosting/datacenter 则风险极高；若为 isp/residential 则是最理想的干净出口。",
  },
  {
    id: "tun_mode",
    category: "客户端配置",
    title: "代理客户端已开启 TUN 虚拟网卡模式",
    desc: "单纯的系统 HTTP 代理无法接管全部 UDP 流量与命令行工具。TUN 模式可实现系统级完整透明接管。",
    critical: true,
    guideTip:
      "在 Clash Verge Rev、Sing-box 或 Surge 中，找到并打开『TUN 模式（虚拟网卡）』开关，可确保系统级进程无漏包。",
  },
  {
    id: "dns_remote",
    category: "客户端配置",
    title: "配置远程 DoH/DoT 加密 DNS (防本地运营商污染)",
    desc: "严禁使用国内 114.114.114.114 或 223.5.5.5 解析 OpenAI 域名，必须使用 1.1.1.1 等加密远程 DNS。",
    critical: true,
    guideTip:
      "代理配置中设置 DNS nameserver 为 https://1.1.1.1/dns-query 或 8.8.8.8，并开启假 IP (Fake-IP) 或远程解析模式。",
  },
  {
    id: "node_stickiness",
    category: "客户端配置",
    title: "分流规则固定节点 (严禁使用『自动选择/URL-Test』)",
    desc: "OpenAI 专属分流组必须固定指向单一可用节点。若使用自动轮询测速，节点频繁跨区漂移会直接触发安全风控。",
    critical: true,
    guideTip:
      "检查客户端规则集，将 OpenAI / ChatGPT 策略组手动固定到某一个稳定的节点（如固定在 US-01），切勿选自动选择。",
  },
  {
    id: "webrtc_shield",
    category: "浏览器与指纹",
    title: "WebRTC 防泄漏已处理 (未外泄国内真实宽带 IP)",
    desc: "浏览器 WebRTC 协议可能会穿透代理直接向 OpenAI 暴露你的国内真实内网/公网 IP。",
    linkText: "BrowserLeaks WebRTC 测试",
    linkUrl: "https://browserleaks.com/webrtc",
    critical: false,
    guideTip:
      "打开 browserleaks.com/webrtc 检测。若在 Public IP 区域看到国内运营商真实 IP，需在 Chrome 安装 WebRTC Control 插件或修改 Flags 禁用。",
  },
  {
    id: "isolated_profile",
    category: "浏览器与指纹",
    title: "使用独立工作浏览器 Profile 或专用无痕窗口",
    desc: "避免在装满国内比价、广告拦截、网银控件的默认浏览器中使用，防止本地 Dirty Cookie 与指纹污染。",
    critical: false,
    guideTip:
      "在 Chrome / Edge 右上角点击头像新建一个专用的『OpenAI Work』Profile，不安装任何国内扩展，保持纯净环境。",
  },
  {
    id: "official_billing",
    category: "账号与日常",
    title: "正规海外商业银行卡渠道直充 (拒绝淘宝黑卡/共享车)",
    desc: "确保账号充值链路 100% 正规透明，具备带卡号尾数与税单的官方原版 Invoice，拒绝黑卡代充倒扣连坐。",
    linkText: "查阅 AI集采 SLA 保障",
    linkUrl: "/docs/sla/",
    critical: true,
    guideTip:
      "淘宝或非正规渠道的 30~50 元代充 90% 属于黑卡盗刷，一旦持卡人拒付 (Chargeback)，OpenAI 会直接永久封禁账号并不予解封。",
  },
];

export default function StabilityChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    ip_cleanliness: true,
    tun_mode: true,
    dns_remote: true,
    node_stickiness: true,
    official_billing: true,
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectAll = () => {
    const all: Record<string, boolean> = {};
    CHECKLIST_ITEMS.forEach((i) => (all[i.id] = true));
    setCheckedItems(all);
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  // 计算健康度得分
  const totalCount = CHECKLIST_ITEMS.length;
  const checkedCount = CHECKLIST_ITEMS.filter((i) => checkedItems[i.id]).length;
  const score = Math.round((checkedCount / totalCount) * 100);

  // 关键项是否未达标
  const unfulfilledCritical = CHECKLIST_ITEMS.filter(
    (i) => i.critical && !checkedItems[i.id]
  );

  let statusConfig = {
    badge: "极度安全 · 稳如磐石",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    barColor: "bg-emerald-500",
    desc: "您的网络与操作环境已达到官方合规使用的严苛标准，遭遇 Cloudflare 挑战或被封号的概率趋近于 0。",
  };

  if (score < 50 || unfulfilledCritical.length >= 3) {
    statusConfig = {
      badge: "极度高危 · 强烈警惕",
      badgeColor: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
      barColor: "bg-red-500",
      desc: "存在严重网络隐患（如脏 IP、DNS/WebRTC 泄露或自动跳节点），极易遭遇 403 阻断或触发 OpenAI 批量风控封号！",
    };
  } else if (score < 80 || unfulfilledCritical.length > 0) {
    statusConfig = {
      badge: "中度风险 · 存在短板",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      barColor: "bg-amber-500",
      desc: "基础功能可用，但存在部分易触发风控的薄弱环节，遇到 OpenAI 升级风控规则时可能发生掉线或人机验证死循环。",
    };
  }

  return (
    <div className="rounded-2xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 sm:p-8 shadow-sm transition-all duration-300">
      {/* 头部评分卡 */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-theme-subtle">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border bg-surface-elevated text-secondary">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>交互式网络医生 · 环境健康度自诊</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            OpenAI & Codex 运行环境健康度自测
          </h3>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed">
            依据 OpenAI 与 Cloudflare 最新防欺诈体系设计。逐项核对您的网络与客户端设置，量化防封抗阻断能力。
          </p>
        </div>

        {/* 动态仪表盘 */}
        <div className="w-full lg:w-72 p-4 rounded-xl bg-surface-elevated border border-theme-subtle flex flex-col gap-2 shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-tertiary">综合安全评分</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border font-medium ${statusConfig.badgeColor}`}
            >
              {statusConfig.badge}
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold font-mono text-primary">
              {score}
            </span>
            <span className="text-xs font-mono text-tertiary">/ 100 分</span>
            <span className="ml-auto text-xs text-secondary font-mono">
              达标 {checkedCount} / {totalCount} 项
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-surface overflow-hidden border border-theme-subtle">
            <div
              className={`h-full transition-all duration-500 ${statusConfig.barColor}`}
              style={{ width: `${score}%` }}
            />
          </div>
          <p className="text-[11px] text-tertiary leading-tight mt-1">
            {statusConfig.desc}
          </p>
        </div>
      </div>

      {/* 快捷操作条 */}
      <div className="flex items-center justify-between py-3 border-b border-theme-subtle text-xs text-secondary">
        <span className="font-medium">
          请勾选您当前已经满足的条件（点击项目可展开优化指引）：
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={selectAll}
            className="text-[11px] hover:text-emerald-500 transition-colors font-medium cursor-pointer"
          >
            全部勾选
          </button>
          <span className="text-tertiary">|</span>
          <button
            type="button"
            onClick={resetAll}
            className="text-[11px] hover:text-red-500 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>重置</span>
          </button>
        </div>
      </div>

      {/* 清单列表 */}
      <div className="divide-y divide-theme-subtle">
        {CHECKLIST_ITEMS.map((item, index) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              className={`py-3.5 transition-colors ${
                isChecked ? "bg-transparent" : "bg-red-500/[0.02]"
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="mt-0.5 shrink-0 focus:outline-hidden cursor-pointer"
                  aria-label={`切换 ${item.title}`}
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/10 transition-transform active:scale-90" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-theme-hover hover:border-emerald-500 transition-colors" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-tertiary">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-elevated text-secondary font-mono border border-theme-subtle">
                      {item.category}
                    </span>
                    {item.critical && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 font-mono border border-red-500/20">
                        核心红线
                      </span>
                    )}
                    <span
                      onClick={() => toggleItem(item.id)}
                      className={`text-sm font-semibold cursor-pointer transition-colors ${
                        isChecked
                          ? "text-primary"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <p className="text-xs text-secondary leading-relaxed mb-1.5">
                    {item.desc}
                  </p>

                  {/* 优化排查建议 */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px]">
                    <div className="inline-flex items-center gap-1.5 text-tertiary">
                      <Info className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                      <span>{item.guideTip}</span>
                    </div>

                    {item.linkUrl && (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium hover:underline ml-auto shrink-0"
                      >
                        <span>{item.linkText || "前往核验"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 底部警告与提示 */}
      {unfulfilledCritical.length > 0 && (
        <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold">
              检测到 {unfulfilledCritical.length} 项关键红线指标尚未达标：
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-amber-700 dark:text-amber-300">
              {unfulfilledCritical.map((c) => (
                <li key={c.id}>{c.title}</li>
              ))}
            </ul>
            <p className="pt-1 text-[11px] text-amber-600 dark:text-amber-400">
              建议根据后文详细指引逐一进行客户端优化；若企业网络限制严格，可咨询我们的工程师为您定制企业级独立原生网关方案。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
