import React from "react";
import ProjectCard from "../components/ProjectCard";
import ProfileCard from "../components/ProfileCard";
import {
  IconBrandReact,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandVite,
  IconBrandNextjs,
  IconBrandFirebase,
  IconBrandMongodb,
  IconServer,
  IconDeviceGamepad2,
  IconFileText,
  IconBrandMysql,
  IconBrandPython,
  IconBrandGithub,
} from "@tabler/icons-react";
import { FloatingNav } from "../components/Navbar";
import { LampDemo } from "../components/lamp";
import Link from "next/link";
import Footer from "../components/Footer";

const Page = () => {
  const techColors = {
    IconBrandReact: "#61DBFB",
    IconBrandTailwind: "#38BDF8",
    IconBrandNodejs: "#8CC84B",
    IconBrandVite: "#646CFF",
    IconBrandNextjs: "#FFFFFF",
    IconBrandFirebase: "#FFCA28",
    IconBrandMongodb: "#4DB33D",
    IconServer: "#A0AEC0",
    IconDeviceGamepad2: "#FF9800",
    IconFileText: "#F0DB4F",
    IconBrandMysql: "#00758F",
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <div className="m-4 lg:m-10">
        <FloatingNav />
      </div>
      <div className="fixed top-4 right-4 z-50">
        <Link
          target="_blank"
          href="https://github.com/Tanay04032006"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span className="hidden lg:inline">Github</span> <IconBrandGithub className="ml-2" />
          </span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[200px] p-4 lg:p-10 w-full max-w-7xl">
        <div className="absolute mb-7 inset-0 z-[-1] w-full">
          <LampDemo />
        </div>

        {/* Left Section */}
        <div className="w-full lg:w-1/3 h-auto lg:h-screen flex flex-col justify-center items-center lg:sticky lg:top-0">
          <div className="text-center max-w-2xl py-4 lg:py-10">
            <h1 className="text-5xl lg:text-9xl font-extrabold">
              <span className="text-white">MY</span>{" "}
              <span className="text-gray-700 dark:text-gray-500">PROJECTS</span>
            </h1>
            <p className="text-sm lg:text-lg text-gray-400 mt-4">
              A collection of my work, showcasing expertise in full-stack
              development, UI/UX, and problem-solving.
            </p>
          </div>
          <ProfileCard />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[65%] space-y-4 lg:space-y-6">
          <ProjectCard
            title="Flappy Bird"
            description="A Game that lets you fly through the pipes."
            image="/Flappy-bird.png"
            github="https://github.com/Tanay04032006/flappy-bird"
            live="https://flappy-bird-sandy-nine.vercel.app/"
            techStack={[
              { icon: IconBrandReact, color: techColors.IconBrandReact },
              { icon: IconBrandTailwind, color: techColors.IconBrandTailwind },
              { icon: IconDeviceGamepad2, color: techColors.IconDeviceGamepad2 },
            ]}
          />
          <ProjectCard
            title="HackMatch"
            description="A platform to connect developers for hackathons."
            image="/HackMatch.png"
            github="https://github.com/Tanay04032006/HackMatch"
            live="/projects"
            techStack={[
              { icon: IconBrandNextjs, color: techColors.IconBrandNextjs },
              { icon: IconBrandFirebase, color: techColors.IconBrandFirebase },
              { icon: IconBrandMongodb, color: techColors.IconBrandMongodb },
            ]}
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio showcasing skills & projects."
            image="/Portfolio.png"
            github="https://github.com/your-username/portfolio-website"
            live="https://your-portfolio.com"
            techStack={[
              { icon: IconBrandReact, color: techColors.IconBrandReact },
              { icon: IconBrandTailwind, color: techColors.IconBrandTailwind },
              { icon: IconBrandVite, color: techColors.IconBrandVite },
            ]}
          />
          <ProjectCard
            title="Markdown Previewer"
            description="A live markdown editor and previewer."
            image="https://codepen.io/JayV30/pen/zqBbqQ/image/large.png"
            github="https://github.com/Tanay04032006/Markdown-Previewer"
            live="/projects"
            techStack={[
              { icon: IconFileText, color: techColors.IconFileText },
              { icon: IconBrandReact, color: techColors.IconBrandReact },
              { icon: IconBrandTailwind, color: techColors.IconBrandTailwind },
            ]}
          />
          <ProjectCard
            title="Todo App"
            description="A simple and efficient task management app."
            image="/Todo.png"
            github="https://github.com/your-username/todo-app"
            live="https://todo-app.example.com"
            techStack={[
              { icon: IconBrandReact, color: techColors.IconBrandReact },
              { icon: IconBrandTailwind, color: techColors.IconBrandTailwind },
              { icon: IconBrandFirebase, color: techColors.IconBrandFirebase },
            ]}
          />
          <ProjectCard
            title="Expenze"
            description="A full-featured expense tracking application."
            image="/Expenze.png"
            github="https://github.com/Tanay04032006/Expenze"
            live="/projects"
            techStack={[
              { icon: IconBrandNextjs, color: techColors.IconBrandNextjs },
              { icon: IconBrandMongodb, color: techColors.IconBrandMongodb },
              { icon: IconBrandTailwind, color: techColors.IconBrandTailwind },
            ]}
          />
          <ProjectCard
            title="Jarvis AI"
            description="An AI-powered personal assistant."
            image="/jarvis-ai.png"
            github="https://github.com/Tanay04032006/Jarvis"
            live="/projects"
            techStack={[{ icon: IconBrandPython, color: techColors.IconBrandNodejs }]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;