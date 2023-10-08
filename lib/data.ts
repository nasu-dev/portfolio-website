import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Sales and Marketing",
    location: "Dublin, Ireland",
    description:
      "I took a break from Univercity. I used working Holiday Visa and found a job as a Japan's Market Specialist at a local Irish Company.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2020",
  },
  {
    title: "Graduated University",
    location: "Tokyo, Japan",
    description:
      "I majored in Social Sciences at Waseda University.  I studied economics, accounting, and sociology etc. I also enjoyed playing soccer and backpacking around the world in the school life.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "IT Consultant",
    location: "Tokyo, Japan",
    description:
      "I worked as a IT consultant at ABeam Consurlting that is know for one of the greatest global consulting firm from Asia. I helped clients such as a real estate investment and a trading company. I also operated and implemented a SaaS service specializing in CO2 visualization.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Learning Computer Science",
    location: "Home",
    description:
      "I mainly focus on front-end development. Lerning by Recursion (Online CS study platform), YouTube, udemy, and books.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;


export const projectsData = [
  {
    title: "CorpComment(TBR)",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev(TBR)",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics(TBR)",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "MongoDB",
  "Express",
  "MySQL",
  "Framer Motion",
  "AWS"
] as const;