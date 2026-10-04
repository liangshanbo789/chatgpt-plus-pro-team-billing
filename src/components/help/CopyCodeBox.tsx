"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyCodeBoxProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CopyCodeBox({
  code,
  language = "bash",
  title,
}: CopyCodeBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 兼容非安全上下文
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-xl border border-theme-subtle bg-surface-elevated overflow-hidden my-4 shadow-xs">
      <div className="flex items-center justify-between px-4 py-2 border-b border-theme-subtle bg-surface text-xs font-mono text-secondary">
        <span className="font-semibold text-primary">{title || language}</span>
        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-elevated hover:bg-surface border border-theme-subtle text-secondary hover:text-primary transition-colors cursor-pointer text-[11px]"
          title="点击一键复制代码"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-medium">已复制到剪贴板</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>复制代码</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed bg-[#0d1117] text-[#c9d1d9]">
        <pre className="m-0 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
