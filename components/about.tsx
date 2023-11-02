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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-10 break-words whitespace-pre-wrap"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  ご覧いただきありがとうざいます。<span>Aki🇯🇵と申します。</span>
  <br />
  <span>Webエンジニア就職👨‍💻を目指し、独学でCS学習中の25歳です。</span> <br className="hidden md:inline-block"/>
  <span>現在は</span><span className="font-semibold">React</span><span>や</span>
  <span className="font-semibold">TypeScript</span>
  <span>などを中心に技術習得を進めています。</span>
  <br />
</p>
<p>
  <span>大学では</span><span className="font-semibold">社会科学</span><span>を専攻し、新卒で</span>
  <span className="font-semibold">総合系コンサルティングティングファーム</span>
  <span>に<br className="hidden md:inline-block"/>入社しました。</span>
  <span>主に不動産投資法人や総合商社に対する脱炭素関連のコンサルティングや、自社サービスである</span><span className="font-semibold">CO2排出量可視化SaaS「Cyanoba」🌱</span>
  <span>のシステム導入、運用を担当していました。</span>
  <br />
</p>
<br />
<p>
  <span>趣味は</span><span className="font-semibold">英語学習📝</span><span>と</span><span className="font-semibold">クラフトビール🍻</span><span>です。</span> <br />
  <span>大学在学中にはカナダ🇨🇦やアイルランド🇮🇪での</span><span className="font-semibold">海外インターン</span><span>を経験し、</span><br className="hidden md:inline-block"/>
  <span>将来的には</span><span className="font-semibold">グローバル環境</span><span>での就労や国際的なビジネスにも興味があります。</span>
</p>

    </motion.section>
  );
}
