/**
 * 搜索引擎主动收录推送脚本
 * 1. 必应 (Bing) / IndexNow 实时推送 (秒级触达微软必应、Copilot、Yandex 等)
 * 2. 百度搜索资源平台 API 主动推送 (普通收录)
 * 
 * 运行方式:
 * node scripts/push-seo.mjs
 * 
 * 若需推送百度，请设置环境变量:
 * $env:BAIDU_PUSH_TOKEN="your_baidu_token" (PowerShell)
 * export BAIDU_PUSH_TOKEN="your_baidu_token" (Bash)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = "gongsi.one";
const BASE_URL = `https://${HOST}`;
const INDEXNOW_KEY = "18b3e34bca8f4e6988894178a9c2be0b";
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// 静态基础与核心栏目页面
const STATIC_ROUTES = [
  "", // 首页
  "solutions/codex-procurement/",
  "solutions/gpt-bulk-procurement/",
  "guide/",
  "guide/personal/",
  "guide/business/",
  "guide/stability/",
  "guide/onboarding/", // 新员工入职实操手册 SOP
  "help/",
  "docs/proposal/",
  "docs/pricing/",
  "docs/sla/",
  "docs/agreement/",
];

// 动态读取 helpArticles.ts 中的所有文章 slugs
function getHelpArticleSlugs() {
  try {
    const helpFile = path.resolve(__dirname, "../src/config/helpArticles.ts");
    const content = fs.readFileSync(helpFile, "utf-8");
    const matches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
    return [...new Set(matches)];
  } catch (err) {
    console.warn("⚠️ 读取 helpArticles.ts 失败，使用兜底列表:", err.message);
    return [
      "codex-model-at-capacity",
      "codex-chatgpt-degraded",
      "codex-rate-limit-429",
      "access-denied-403-cloudflare",
      "payment-card-declined",
      "codex-cli-terminal-proxy",
      "account-deactivated-appeal",
      "team-workspace-setup",
      "login-loop-error",
    ];
  }
}

// 组合生成全站最新完整的规范 URL 列表
const helpSlugs = getHelpArticleSlugs();
const helpRoutes = helpSlugs.map((slug) => `help/${slug}/`);

const ALL_PATHS = [...STATIC_ROUTES, ...helpRoutes];
const URLS = ALL_PATHS.map((route) => `${BASE_URL}/${route}`);

async function pushToIndexNow() {
  console.log("\n==========================================");
  console.log("[1/2] 正在向微软必应 IndexNow API 推送 URL...");
  console.log("==========================================");

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ IndexNow 推送成功！HTTP 状态码: ${res.status}`);
      console.log(`已将 ${URLS.length} 个核心页面通知 Bing / Yandex / Copilot 实时抓取。`);
    } else {
      const text = await res.text();
      console.warn(`⚠️ IndexNow 响应状态码: ${res.status}，响应内容: ${text}`);
    }
  } catch (err) {
    console.error("❌ IndexNow 推送失败:", err.message);
  }
}

async function pushToBaidu() {
  console.log("\n==========================================");
  console.log("[2/2] 正在向百度搜索资源平台推送 URL...");
  console.log("==========================================");

  const token = process.env.BAIDU_PUSH_TOKEN;
  if (!token) {
    console.log("ℹ️ 未检测到环境变量 BAIDU_PUSH_TOKEN。");
    console.log("提示: 登录百度搜索资源平台 (ziyuan.baidu.com) -> 普通收录 -> API提交，获取准入密钥 token。");
    console.log("配置环境变量后即可自动推送收录。");
    return;
  }

  const endpoint = `http://data.zz.baidu.com/urls?site=${encodeURIComponent(BASE_URL)}&token=${token}`;
  const bodyData = URLS.join("\n");

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: bodyData,
    });

    const data = await res.json();
    if (data.success) {
      console.log(`✅ 百度 API 推送成功！本次成功推送: ${data.success} 条，今日剩余额度: ${data.remain}`);
    } else {
      console.warn(`⚠️ 百度 API 推送提示:`, data);
    }
  } catch (err) {
    console.error("❌ 百度 API 推送失败:", err.message);
  }
}

async function main() {
  console.log(`🚀 开始执行 SEO 主动推送，目标站点: ${BASE_URL}`);
  console.log(`已自动聚合全站 ${URLS.length} 个规范 URL:`);
  URLS.forEach((u, i) => console.log(`  ${String(i + 1).padStart(2, " ")}. ${u}`));

  await pushToIndexNow();
  await pushToBaidu();

  console.log("\n🎉 SEO 主动推送任务执行完毕！\n");
}

main();
