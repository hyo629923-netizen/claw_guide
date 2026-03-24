# GitHubClaw 技術導覽 (GitHubClaw Guide)

![Build Status](https://img.shields.io/github/actions/workflow/status/hyo629923-netizen/claw_guide/deploy.yml?branch=main&label=Deployment)
![Node Version](https://img.shields.io/badge/node-%3E%3D24-blue)
![PWA](https://img.shields.io/badge/pwa-ready-orange)

這是 **GitHubClaw** 的官方自動化部署技術手冊。本手冊採用現代化的 PWA 技術開發，支援桌面與行動裝置的離線閱讀模式。

## 🚀 專案特點
- **離線閱讀 (PWA)**：支援 Service Worker 緩存，無網路狀態下依然可以隨時查閱。
- **現代化介面**：基於 Vite + TypeScript 構建，具備亮暗模式切換與流暢的動態效果。
- **極致響應式**：針對行動端優化的導覽區域，支援單手操作與水平滑動頁籤。
- **Stitch MCP 強化設計**：整合 Google Stitch 設計系統與 MCP 協定，透過原子化設計 (Atomic Design) 提供極致的視覺美學與動態效果。
- **自動部署**：整合 GitHub Actions，推送至 `main` 分支後自動更新 GitHub Pages 手冊。

## 🛠️ 開發環境與技術棧
- **核心架構**：Vite 8+ (TypeScript)
- **設計協定**：Stitch MCP (Atomic Design Patterns)
- **Node 環境**：Node.js v24+
- **樣式系統**：純原生 CSS 變數 + Fluid Typography (clamp) + Glassmorphism
- **部署平台**：GitHub Pages (GitHub Actions)

## 📦 本地開發指南

確保您的 Node.js 版本大於 24。

1. **安裝依賴**：
   ```bash
   npm install
   ```

2. **啟動開發伺服器**：
   ```bash
   npm run dev
   ```

3. **生產環境建置**：
   ```bash
   npm run build
   ```

## 📂 目錄結構說明
- `index.html`：網頁進入點。
- `src/`：TypeScript 與 CSS 源碼。
- `public/`：靜態資源（圖片、Manifest、Service Worker）。
- `.github/workflows/`：GitHub Actions 自動部署腳本。

---
© 2026 GitHubClaw Team. All rights reserved.
