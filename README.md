## My Portfolio

#### デプロイ先URL：[Personal Portfolio](https://akito-portfolio-site.vercel.app)
<img width="1440" alt="スクリーンショット 2023-11-02 19 55 43" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/e70b789d-2311-4d23-992c-53485e769b35">



---

## 🔍 目次

* [📝 プロジェクト概要](#project-summary)

* [🔧 機能一覧](#functions)
  
* [💻 技術スタック](#stack)

* [🔖 工夫点](#pickup)

* [📌 今後の課題](#issues)

* [🚀 ローカルでの実行](#run-locally)

---

<a id="project-summary"></a>
## 📝 プロジェクト概要
#### アプリケーションについて
<p>これまでの経歴やポートフォリオなどの成果物をまとめた自己紹介Webページです。</p>

#### 作成理由
フロントエンド領域の技術力向上と、プロフィールサイト作成が目的です。<br/>
技術面ではReactやNext.js、TypeScriptの使い方に慣れることを目的に、海外の教材を参考に作成しました。<br/>
ダークモードやリッチなアニメーションなど、見栄えやUIにもこだわり作成しました。

---

<a id="functions"></a>
## 🔧 セクション一覧

#### NavBar、Home
<img width="1466" alt="スクリーンショット 2023-11-02 19 43 35" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/b3a70ea4-73a6-4dae-9ac1-c80e9efa6302">

#### About
<img width="1341" alt="スクリーンショット 2023-11-02 19 53 13" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/c716b20f-521b-4d9a-9b2d-3096e4024aa7">


#### Projects:
<img width="1297" alt="スクリーンショット 2023-11-02 19 53 43" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/dc32ed39-748d-480c-a065-d500ef7f5a17">

#### Skills: 
<img width="1193" alt="スクリーンショット 2023-11-02 19 54 04" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/921c6de0-be73-45a0-8321-900ad7a820eb">

#### Experience: 
<img width="1313" alt="スクリーンショット 2023-11-02 19 54 18" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/c941f561-bb1d-452f-9ab7-c0e9a47db0e2">


#### Contact: 
<img width="1196" alt="スクリーンショット 2023-11-02 19 54 29" src="https://github.com/nasu-dev/portfolio-website/assets/114811498/02298a42-3780-4f66-b5e0-2f222bf6a4b5">

---

<a id="stack"></a>
## 💻 技術スタック
### フロントエンド

- [React](https://reactjs.org/)

- [Next.js 13](https://nextjs.org/)

- [Tailwind CSS](https://tailwindcss.com/)

- [TypeScript](https://www.typescriptlang.org/)

### 開発ツール

- [ESLint](https://eslint.org/)

- [Prettier](https://prettier.io/)

  
### アイコンとアニメーション

- [React Icons](https://react-icons.github.io/react-icons/): Font AwsomeのようなReact用のアイコンライブラリ。豊富な種類のアイコンが揃っておりシンプルで使いやすい。
  
- [Framer Motion](https://www.npmjs.com/package/framer-motion): Framer社が開発元の React アニメーションライブラリ。App StoreにあるUIのようなリッチなアニメーションが誰でも簡単に実装可能。

### その他主要なライブラリ

- [@react-email](https://www.npmjs.com/package/@react-email/components): メールテンプレートを作るライブラリ。Resendと組み合わせて使用。

- [Resend](https://www.npmjs.com/package/resend): Email を API 経由で送信する次世代メールサービス。メール機能のインフラ部分。開発者体験がよく、無料で使用可能。

- [React-hot-toast](https://www.npmjs.com/package/react-hot-toast): すでに複数定義されたデザインでトースト機能を実装できるライブラリ。メール送信時の通知に使用。

- [React-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component): My Experienceセクションの表示に使用。簡単にストーリータイムラインの実装が可能。


---

<a id="run-locally"></a>
## 🚀 ローカルでの実行
- ステップ 1
  .envファイルにRESEND_API_KEYを追加。

- ステップ 2
 send-email.tsファイル内の"to e-mail"を変更。

