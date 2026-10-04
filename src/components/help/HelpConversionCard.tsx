import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
} from "lucide-react";

interface HelpConversionCardProps {
  context?: "limit" | "degrade" | "payment" | "ban" | "general";
}

export default function HelpConversionCard({
  context = "general",
}: HelpConversionCardProps) {
  const getContextContent = () => {
    switch (context) {
      case "degrade":
        return {
          tag: "告别廉价共享节点连坐",
          title: "遭遇模型降智？升级企业 Pro 20x 算力与纯净独享通道",
          desc: "公开机场/廉价 VPS 邻居混杂，最易触发 OpenAI PoW 降级与静默分流。AI代采为企业提供 100% 正规海外商业实体卡直充通道与专属 Team 空间，保障研发团队随时享有顶配推理能力。",
          highlight: "独享企业级通道 · 无静默降级 · 72h 封号包赔",
        };
      case "limit":
        return {
          tag: "研发提效不中断",
          title: "Plus 频次被卡？解锁 ChatGPT Pro 20x 与 Team 独立配额",
          desc: "普通 Plus 每 3 小时限制严重阻断高强度 Coding 灵感。AI代采支持开通 Pro (20x 高算力版) 及企业 Team 空间，各席位额度独立不冲突，支持中国工商银行对公转账与 6% 增值税专用发票。",
          highlight: "20倍算力配额 · 团队席位独立分配 · 对公专票全额抵扣",
        };
      case "payment":
        return {
          tag: "拒绝黑卡盗刷风险",
          title: "解决国内银行卡支付被拒：正规海外商业银行卡直充",
          desc: "自己绑定国内双币卡或虚拟卡常遭 Stripe 拦截甚至秒封。AI代采严格使用海外正规商业银行卡代付，提供 OpenAI 官方带卡号原版 Invoice，支持公司网银对公结算，让采购全程合规透明。",
          highlight: "100% 官方原版 Invoice · 银行对公结算 · 增值税 6% 专票",
        };
      case "ban":
        return {
          tag: "公章协议法律级兜底",
          title: "拒绝淘宝暴雷封号：签署盖章《SLA 72h 包赔协议》",
          desc: "淘宝低价代充 99% 是黑卡盗刷，一旦卡主发起争议账号必定死刑。AI代采与企业直签采购合同，承诺 72 小时内被风控免费重置换新，使用期内若停用按剩余天数对公秒退款。",
          highlight: "72h 免费闪电换新 · 按天折算退款 · 杜绝黑卡封号",
        };
      default:
        return {
          tag: "企业级海外 AI 官方代采",
          title: "专注核心研发业务，把环境合规与采购琐事交给我们",
          desc: "AI代采（gongsi.one）专为中国技术团队提供 OpenAI Codex / ChatGPT Plus / Pro (5x/20x) / Team 企业级合规采购。支持中国工商银行网银对公转账与官方带卡号 Invoice 核验。",
          highlight: "对公打款 · 开具 6% 专票 · 官方原版收据 · 72h 封号包赔",
        };
    }
  };

  const info = getContextContent();

  return (
    <section className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white p-6 sm:p-8 my-8 shadow-xl">
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{info.tag}</span>
          </span>
          <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SLA 72h 封号退赔兜底</span>
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {info.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
            {info.desc}
          </p>
        </div>

        {/* 亮点保障清单 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-zinc-200">工行对公转账 · 6% 专票</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-zinc-200">海外正规商业实体卡直充</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-zinc-200">72h 封号包换 · 按天折退</span>
          </div>
        </div>

        {/* 转化操作按钮组 */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-white/10">
          <Link
            href="/#calculator"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
          >
            <Zap className="w-4 h-4" />
            <span>立即在线测算采购预算</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/solutions/codex-procurement/"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-colors"
          >
            <span>了解 Codex 研发代采方案</span>
          </Link>

          <Link
            href="/docs/pricing/"
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-zinc-300 hover:text-white font-medium text-xs flex items-center justify-center gap-1 transition-colors underline"
          >
            <span>查阅 2026 阶梯报价单</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
