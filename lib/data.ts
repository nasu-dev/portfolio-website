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
    title: "Sales and Marketing",
    location: "NED College | Dublin, Ireland",
    description:
      "I took a break from Univercity. I used working Holiday Visa and found a job as a Japan's Market Specialist at a local Irish Company.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2020",
  },
  {
    title: "Graduated University",
    location: "Waseda University | Tokyo, Japan",
    description:
      "I majored in Social Sciences at Waseda University.  I studied economics, accounting, and sociology etc. I also enjoyed playing soccer and backpacking around the world in the school life.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "IT Consultant",
    location: "ABeam Consulting | Tokyo, Japan",
    description:
      "I worked as a IT consultant at ABeam Consurlting that is know for one of the greatest global consulting firm from Asia. I helped clients such as a real estate investment and a trading company. I also operated and implemented a SaaS service specializing in CO2 visualization.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Learning WEB Development",
    location: "Home",
    description:
      "I mainly focus on front-end development. Lerning by Recursion (Online CS study platform), YouTube, udemy, and books.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;


export const projectsData = [
  {
    title: "QuizGenius",
    description:
      " A web app that generates quizzes with ChatGPT. I made this app to learn Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "ChatGPT", "Shadcn"],
    imageUrl: quizGrusImg,
  },
  {
    title: "Tetris",
    description:
      "A Tetris game made with BootStrap and JavaScript. I made this game to learn Git and Team Development.",
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