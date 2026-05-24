# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # ウォッチモードでビルド（開発時）
npm run build    # プロダクションビルド（minify・sourcemap無し）
npm run chrome   # web-extでChromiumに読み込んで起動
npm run lint     # Biomeで静的解析・自動修正
```

## Architecture

**エントリポイント:** `src/` 以下の `.js/.ts/.tsx` ファイルをすべて自動検出してバンドル。

**ソース構成:**
- `src/popup/Popup.tsx` — ポップアップUIのReactコンポーネント（Mantine使用）
- `src/popup/popup.html` — ポップアップのHTMLエントリ
- `src/context-script.ts` — コンテンツスクリプト（`manifest.json` の `content_scripts` で注入先URLを指定）
- `src/types.ts` — 共有型定義（`SendMessageWithValue<T>` など）
- `manifest.json` — 拡張機能マニフェスト（`src/` 外に配置、ビルド時に `dist/` へコピー）

**メッセージング:** ポップアップ → コンテンツスクリプト間は `browser.tabs.sendMessage` / `browser.runtime.onMessage` で通信。メッセージ型は `SendMessageWithValue<T>` (`action: string`, `value: T`)。


## Conventions

- 変数・関数・型名はキャメルケース、クラス名はパスカルケース
- コメントは日本語で記述
- `any` の使用は避ける（Biomeで警告）
- フォーマットはBiome（シングルクォート、セミコロンあり、インデント2スペース、行幅120）
