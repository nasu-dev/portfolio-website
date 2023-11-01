## プロジェクトについて

<img width="1469" alt="スクリーンショット 2023-10-10 14 32 21" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/dc482eee-1412-471c-a0b8-92131966b3a0">

自己紹介Webサイトです。モダンなフロントエンド技術に慣れるため、Next.js、TypeScript、Tailwind CSSを使用しました。

URL： https://akito-portfolio-site.vercel.app

<p align="center">
<a href=https://github.com/nasu-dev/portfolio-website target="_blank">
</a>
</p>

<p align="center">
<img src="https://img.shields.io/github/contributors/nasu-dev/portfolio-website" alt="GitHub contributors" />
<img src="https://img.shields.io/github/discussions/nasu-dev/portfolio-website" alt="GitHub discussions" />
<img src="https://img.shields.io/github/issues/nasu-dev/portfolio-website" alt="GitHub issues" />
<img src="https://img.shields.io/github/issues-pr/nasu-dev/portfolio-website" alt="GitHub pull request" />
</p>

<p></p>
<p></p>

## 🔍 目次

* [💻 Stack](#stack)

* [📝 プロジェクト概要](#project-summary)

* [⚙️ セットアップ](#setting-up)

* [🚀 ローカルでの実行](#run-locally)

* [🙌 コントリビューター](#contributors)

* [📄 ライセンス](#license)

## 💻 Stack
<a id="stack"></a>
- [react](https://reactjs.org/): ユーザーインターフェースを構築するためのJavaScriptライブラリ。
- [react-dom](https://reactjs.org/docs/react-dom.html): アプリのトップレベルでReactコンポーネントをDOMにレンダリングするために使用できるDOM固有のメソッドを提供します。
- [next](https://nextjs.org/): サーバーサイドレンダリングおよび静的にエクスポートされたアプリケーションを構築するためのReactフレームワーク。
- [tailwindcss](https://tailwindcss.com/): カスタムデザインを迅速に構築するためのユーティリティファーストCSSフレームワーク。
- [typescript](https://www.typescriptlang.org/): JavaScriptのタイプ指定サプセットで、プレーンなJavaScriptにコンパイルされます。
- [eslint](https://eslint.org/): コーディングスタイルを強制し、一般的なエラーをキャッチするためのプラガブルなJavaScriptリンター。
- [prettier](https://prettier.io/): プロジェクト全体で一貫したコードスタイルを強制するための意見の分かれるコードフォーマッター。
- [react-icons](https://react-icons.github.io/react-icons/): アプリケーションで簡単に使用するための人気のあるアイコンのReactコンポーネントのコレクション。


## 📝 プロジェクトの要約
<a id="project-summary"></a>
- [.vscode](.vscode): Visual Studio Codeエディターの設定ファイル。
- [actions](actions): 状態管理のためのReduxアクションが含まれています。
- [app](app): 主要なアプリケーションロジックおよびエントリーポイント。
- [components](components): アプリケーション全体で使用される再利用可能なUIコンポーネント。
- [context](context): グローバルな状態管理のためのReactコンテキストプロバイダー。
- [email](email): メール通信に関連する機能。
- [lib](lib): 外部ライブラリとユーティリティ関数。
- [public](public): クライアントに提供される静的アセットとファイル。

## ⚙️ セットアップ

#### 環境変数の設定

- ステップ 1
  .envファイルにRESEND_API_KEYを追加してください。

- ステップ 2
 send-email.tsファイル内の"to "e-mailをご自身のe-mailに変更してください。

## 🚀 ローカルで実行
1. portfolio-websiteリポジトリをクローンします:
```sh
git clone https://github.com/nasu-dev/portfolio-website
