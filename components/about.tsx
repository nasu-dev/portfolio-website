"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        ご覧いただきありがとうざいます。Aki🇯🇵と申します。
        <br />
        Webエンジニア就職👨‍💻を目指し、独学でCS学習中の25歳です。
        <br />
        現在は<span className="font-semibold">React</span>や
        <span className="font-semibold">TypeScript</span>
        などを中心に技術習得を進めています。
        <br />
      </p>
      <p>
        大学では<span className="font-semibold">社会科学</span>を専攻し、新卒で
        <span className="font-semibold">
          総合系コンサルティングティングファーム
        </span>
        に入社しました。<br />
        主に不動産投資法人や総合商社に対する脱炭素関連のコンサルティングや、自社サービスである<span className="font-semibold">CO2排出量可視化SaaS「Cyanoba」🌱</span> のシステム導入、運用を担当していました。
        <br />
      </p>
      <br />
      <p>
        趣味は<span className="font-semibold">英語学習📝</span>と<span className="font-semibold">クラフトビール🍻</span>です。 <br />
        大学在学中にはカナダ🇨🇦やアイルランド🇮🇪での<span className="font-semibold">海外インターン</span>を経験し、
        <br />
        将来的には<span className="font-semibold">グローバル環境</span>での就労や国際的なビジネスにも興味があります。
      </p>
    </motion.section>
  );
}
