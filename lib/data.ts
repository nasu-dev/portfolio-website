import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quizGrusImg from "@/public/quizgenius.png";
import tetrisImg from "@/public/tetris.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "セールス＆マーケティング",
    location: "NED College | ダブリン, アイルランド🇮🇪",
    description:
      "大学を休学し、アイルランド現地の語学学校でインターンとして活動。職場唯一の日本人として学生サポートやSNS運用などのマーケティング業務を経験。",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2020",
  },
  {
    title: "学士号取得",
    location: "早稲田大学 | 東京, 日本",
    description:
      "社会科学部に在籍し、経営学や会計などのビジネス領域を中心に専攻。ゼミではヨーロッパ地域の移民政策や異文化を中心に学習。その他フットサルサークルでの活動や世界15カ国訪問のバックパッカーも経験。",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "経営｜IT｜GXコンサルタント",
    location: "ABeam Consulting | 東京, 日本",
    description:
      "新卒で入社した総合系コンサルファームにて、脱炭素関連のコンサルティング業務や自社SaaSサービスの運用、導入業務を担当。業務内で特にIT領域に興味を持ち、独学でプログラミング学習を開始。",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "WEB開発｜フロントエンド学習",
    location: "Somewhere | 東京, 日本",
    description:
      "オンラインCS学習プラットフォーム「Recursion」を通じて、フロントエンド開発を学習。現在はNext.jsやTypeScriptを用いた開発を中心に学習中。",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;


export const projectsData = [
  {
    title: "QuizGenius",
    description:
      " ChatGPTを用いたクイズアプリ。好きなお題を入力するとAIが自動で問題を作成します。モダンなUIコンポーネントを用い、レスポンシブデザインに拘りました。",
    tags: ["Next.js", "TypeScript", "Tailwind", "ChatGPT",　"Prisma",  "Shadcn"],
    imageUrl: quizGrusImg,
  },
  {
    title: "Tetris",
    description:
      "オンラインCS学習プラットフォーム「Recursion」のチーム開発にて、テトリスゲームを自力で実装しました。Gitの使用方法や、DOM操作等のJavaScriptの基礎的な関数の習得に役立ちました。",
    tags: ["Git", "JavaScript", "BootStap"],
    imageUrl: tetrisImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "BootStrap",
  "Tailwind",
  "Express",
  "MySQL",
  "Prisma",
  "ChatGPT",
  "Shadcn",
  "Framer Motion",
  "AWS"
] as const;