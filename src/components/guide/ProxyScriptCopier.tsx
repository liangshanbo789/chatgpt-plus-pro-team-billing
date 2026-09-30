"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Undo2 } from "lucide-react";

type OSTarget = "pwsh" | "cmd" | "bash" | "git" | "vscode";

export default function ProxyScriptCopier() {
  const [port, setPort] = useState<string>("7897");
  const [host, setHost] = useState<string>("127.0.0.1");
  const [protocol, setProtocol] = useState<"http" | "socks5">("http");
  const [activeTab, setActiveTab] = useState<OSTarget>("pwsh");
  const [copied, setCopied] = useState<boolean>(false);
  const [mode, setMode] = useState<"set" | "unset">("set");

  // 常见代理软件默认端口快捷切换
  const PRESET_PORTS = [
    { label: "Clash Verge Rev (7897)", value: "7897" },
    { label: "Clash 标准 (7890)", value: "7890" },
    { label: "v2rayN / Xray (10808)", value: "10808" },
    { label: "Surge / SOCKS (6152)", value: "6152" },
  ];

  const proxyUrl = `${protocol}://${host}:${port}`;

  const getScript = () => {
    if (mode === "unset") {
      switch (activeTab) {
        case "pwsh":
          return `# Windows PowerShell 取消终端代理
Remove-Item Env:HTTP_PROXY -ErrorAction SilentlyContinue
Remove-Item Env:HTTPS_PROXY -ErrorAction SilentlyContinue
Remove-Item Env:ALL_PROXY -ErrorAction SilentlyContinue
Write-Host ">>> 已清空 PowerShell 终端代理环境变量" -ForegroundColor Green`;

        case "cmd":
          return `:: Windows CMD 取消终端代理
set HTTP_PROXY=
set HTTPS_PROXY=
set ALL_PROXY=
echo Proxy cleared!`;

        case "bash":
          return `# macOS / Linux (Zsh & Bash) 取消终端代理
unset http_proxy
unset https_proxy
unset all_proxy
unset HTTP_PROXY
unset HTTPS_PROXY
unset ALL_PROXY
echo ">>> 已清空 Shell 终端代理环境变量"`;

        case "git":
          return `# 取消 Git 全局代理配置
git config --global --unset http.proxy
git config --global --unset https.proxy
git config --global --get http.proxy || echo ">>> Git 全局代理已成功移除"`;

        case "vscode":
          return `// VS Code / Cursor settings.json (清空代理)
{
  "http.proxy": "",
  "http.proxyStrictSSL": true
}`;
      }
    }

    switch (activeTab) {
      case "pwsh":
        return `# Windows PowerShell 临时启用终端代理 (仅对当前窗口生效)
$env:HTTP_PROXY="${proxyUrl}"
$env:HTTPS_PROXY="${proxyUrl}"
$env:ALL_PROXY="${proxyUrl}"
# 验证当前外网 IP 归属
curl.exe -s https://ip.net.coffee/gpt/ | Select-String -Pattern "IP" -Context 0,2`;

      case "cmd":
        return `:: Windows CMD 临时启用终端代理
set HTTP_PROXY=${proxyUrl}
set HTTPS_PROXY=${proxyUrl}
set ALL_PROXY=${proxyUrl}
curl -s https://ipinfo.io/json`;

      case "bash":
        return `# macOS / Linux / WSL (Zsh & Bash) 终端代理
export http_proxy="${proxyUrl}"
export https_proxy="${proxyUrl}"
export all_proxy="${proxyUrl}"
export HTTP_PROXY="${proxyUrl}"
export HTTPS_PROXY="${proxyUrl}"
export ALL_PROXY="${proxyUrl}"

# 验证连通性与出口 IP
curl -s https://ipinfo.io/json`;

      case "git":
        return `# 设置 Git 全局 HTTP/HTTPS 代理 (拉取 GitHub / OpenAI 仓库)
git config --global http.proxy ${proxyUrl}
git config --global https.proxy ${proxyUrl}

# 查看是否设置成功
git config --global --get http.proxy`;

      case "vscode":
        return `// 将以下配置添加到 VS Code / Cursor / Windsurf 的 settings.json 中
{
  "http.proxy": "${proxyUrl}",
  "http.proxySupport": "override",
  "http.proxyStrictSSL": false
}`;
    }
  };

  const handleCopy = async () => {
    const text = getScript();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="rounded-2xl border border-theme-default bg-surface/90 backdrop-blur-xl p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-theme-subtle">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-primary">
              Codex / CLI 终端代理命令一键生成器
            </h4>
            <p className="text-[11px] text-tertiary">
              为 VS Code、Cursor、Git 及各种命令行编译工具配置精准本地中继
            </p>
          </div>
        </div>

        {/* 模式切换：配置 vs 清除 */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-elevated border border-theme-subtle self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setMode("set")}
            className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
              mode === "set"
                ? "bg-surface text-primary shadow-xs font-semibold"
                : "text-secondary hover:text-primary"
            }`}
          >
            启用代理
          </button>
          <button
            type="button"
            onClick={() => setMode("unset")}
            className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors inline-flex items-center gap-1 ${
              mode === "unset"
                ? "bg-surface text-primary shadow-xs font-semibold"
                : "text-secondary hover:text-primary"
            }`}
          >
            <Undo2 className="w-3 h-3" />
            <span>还原/清除</span>
          </button>
        </div>
      </div>

      {/* 参数微调区 */}
      {mode === "set" && (
        <div className="p-3.5 rounded-xl bg-surface-elevated/70 border border-theme-subtle space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-tertiary font-mono">常见端口预设:</span>
            {PRESET_PORTS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => setPort(preset.value)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono border transition-colors cursor-pointer ${
                  port === preset.value
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-semibold"
                    : "bg-surface text-secondary border-theme-subtle hover:text-primary hover:bg-surface-hover"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-[11px] text-tertiary font-mono mb-1">
                协议类型
              </label>
              <select
                value={protocol}
                onChange={(e) =>
                  setProtocol(e.target.value as "http" | "socks5")
                }
                className="w-full px-2.5 py-1.5 rounded-lg bg-surface border border-theme-subtle text-primary text-xs focus:outline-hidden focus:border-emerald-500"
              >
                <option value="http">http (最通用，兼容性最高)</option>
                <option value="socks5">socks5 (纯净轻量)</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] text-tertiary font-mono mb-1">
                监听地址 (Host)
              </label>
              <input
                type="text"
                value={host}
                onChange={(e) => setHost(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-surface border border-theme-subtle text-primary text-xs font-mono focus:outline-hidden focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[11px] text-tertiary font-mono mb-1">
                端口 (Port)
              </label>
              <input
                type="text"
                value={port}
                onChange={(e) => setPort(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-surface border border-theme-subtle text-primary text-xs font-mono focus:outline-hidden focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* OS Tab 选项卡 */}
      <div className="flex flex-wrap items-center gap-1 border-b border-theme-subtle pb-1">
        <button
          type="button"
          onClick={() => setActiveTab("pwsh")}
          className={`px-3 py-1.5 rounded-t-lg text-xs font-medium cursor-pointer transition-colors ${
            activeTab === "pwsh"
              ? "border-b-2 border-emerald-500 text-primary font-bold"
              : "text-secondary hover:text-primary"
          }`}
        >
          PowerShell (Win)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("cmd")}
          className={`px-3 py-1.5 rounded-t-lg text-xs font-medium cursor-pointer transition-colors ${
            activeTab === "cmd"
              ? "border-b-2 border-emerald-500 text-primary font-bold"
              : "text-secondary hover:text-primary"
          }`}
        >
          CMD (Win)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("bash")}
          className={`px-3 py-1.5 rounded-t-lg text-xs font-medium cursor-pointer transition-colors ${
            activeTab === "bash"
              ? "border-b-2 border-emerald-500 text-primary font-bold"
              : "text-secondary hover:text-primary"
          }`}
        >
          macOS / Linux / WSL
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("git")}
          className={`px-3 py-1.5 rounded-t-lg text-xs font-medium cursor-pointer transition-colors ${
            activeTab === "git"
              ? "border-b-2 border-emerald-500 text-primary font-bold"
              : "text-secondary hover:text-primary"
          }`}
        >
          Git CLI 专配
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("vscode")}
          className={`px-3 py-1.5 rounded-t-lg text-xs font-medium cursor-pointer transition-colors ${
            activeTab === "vscode"
              ? "border-b-2 border-emerald-500 text-primary font-bold"
              : "text-secondary hover:text-primary"
          }`}
        >
          VS Code / Cursor
        </button>
      </div>

      {/* 代码预览与一键复制 */}
      <div className="relative group">
        <pre className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs overflow-x-auto leading-relaxed border border-zinc-800 shadow-inner">
          <code>{getScript()}</code>
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 text-xs font-medium flex items-center gap-1.5 shadow-sm transition-all cursor-pointer border border-zinc-700 active:scale-95"
          title="复制命令"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">已复制!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>复制代码</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] text-tertiary">
        <span>
          💡 贴士：终端环境变量仅在当前打开的 Shell
          窗口中临时生效，关闭窗口自动失效，安全无污染。
        </span>
      </div>
    </div>
  );
}
