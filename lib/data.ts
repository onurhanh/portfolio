import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import zimmetlemeImg from "@/public/zimmetleme.png";
import ipadresstrackerImg from "@/public/ip-adress-tracker.png";
import fequizImg from "@/public/fe-quiz.png";
import markdownImg from "@/public/markdown.png";
import haircodeImg from "@/public/haircode.png";
import jobsdraftImg from "@/public/jobs-draft.png";
import entertainmentImg from "@/public/entertainment.png"

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
    title: "Acun Medya Akademi - Student",
    location: "Istanbul",
    description:
      "My six-month training at Acunmedya Academy was more than just a technical education — it was a comprehensive journey where I discovered the dynamics of teamwork, project management, and digital production.Throughout this period, I received hands-on training in areas ranging from JavaScript and React to version control systems and user experience design. Working on projects based on real-world briefs allowed me to strengthen my frontend development skills while also improving my communication, content creation, and presentation abilities. Mentored by industry professionals, I gained valuable insights within a collaborative environment that closely mirrored real-world scenarios.The discipline and vision I acquired during this experience continue to fuel my passion for building and creating today.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Acun Medya Akademi - Business Analyst Intern",
    location: "Istanbul",
    description:
      "My time as a Business Analyst at Acunmedya Academy was a pivotal phase where I learned to approach software development not only from a technical perspective but also through the lens of business needs, user expectations, and strategic goals.I worked on real-world projects, analyzing user requirements, preparing functional documentation, and acting as a bridge between stakeholders and technical teams. By collaborating closely with product owners, developers, and designers, I helped transform ideas into functional and actionable solutions.Throughout this process, I sharpened my analytical thinking and gained firsthand experience in how a user-centric mindset contributes to project success. This role taught me to ask not just what should be built, but why and how — a mindset I now carry into every project I take on.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Hair Code Suadiye Website",
    description:
      "A responsive website built with Next.js App Router, TailwindCSS, Framer Motion, and ShadCN UI. Features include smooth animations, Instagram integration, a custom gradient footer, and embedded Google Maps.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "ShadCN UI"],
    imageUrl: haircodeImg,
    link: "https://www.haircodesuadiye.net"
  },
    {
    title: "Entertainment Web App",
    description:
      "A modern web application built with Next.js and TailwindCSS that displays a list of movies and TV shows. Users can bookmark content, which is persistently stored using localStorage and displayed on a dedicated bookmarks page.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: entertainmentImg,
    link: "https://entertainment-app-beige.vercel.app/"
  },
  {
    title: "Zimmetleme Web App",
    description:
      "Developed for Acunmedya Akademi’s user portal, this module offers a clean yet powerful interface that simplifies the process of assigning devices to individuals.  By digitizing what was once a manual workflow, the module enhances both transparency and operational efficiency.",
    tags: ["Next.js", "Tailwind", "Shadcn"],
    imageUrl: zimmetlemeImg,
    link: "https://zimmetleme-webapp-ucfy.vercel.app/"
  },
  {
    title: "Ip Address Tracker",
    description:
      "IP Address Tracker is a simple and interactive web application that allows users to track and view detailed information about any IP address. The app fetches geolocation data such as country, city, timezone, and ISP, and displays it alongside a dynamic map view.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: ipadresstrackerImg,
    link: "https://ip-address-tracker-blond-delta.vercel.app/"
  },
  {
    title: "Markdown Editor",
    description:
      "Markdown Editor is a modern single-page application where users can create, edit, and preview their own markdown documents. Built with React, this editor instantly converts your content into HTML and displays it in the preview area.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: markdownImg,
    link: "https://markdown-editor-react-eta.vercel.app/"
  },
  {
    title: "FE Quiz WebApp",
    description:
      "This project is a responsive quiz application built using HTML, CSS, and JavaScript. It features a user-friendly interface and adapts seamlessly to different screen sizes, ensuring smooth performance on both desktop and mobile devices.",
    tags: ["Javascript", "CSS"],
    imageUrl: fequizImg,
    link: "https://fe-quiz-app-swart.vercel.app/"
  },
  {
    title: "Jobs Draft",
    description:
      "A user‑friendly web application where developers can dynamically view and filter job listings.",
    tags: ["React", "Tailwind"],
    imageUrl: jobsdraftImg,
    link: "https://jobs-draft.vercel.app/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Motion",
] as const;