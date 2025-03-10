import React from "react";
import { FloatingNav } from "./components/Navbar";
import {
  IconBrandReact,
  IconHome,
  IconMessage,
  IconUser,
  IconArrowRight,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMysql,
  IconBrandPython,
  IconBrandTableau,
  IconBrandJava,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandMongodb,
  IconBrandUnity,
  IconBrandGit,
  IconBrandGithub,
} from "@tabler/icons-react";
import ProfileCard from "./components/ProfileCard";
import CodingStats from "./components/coding-stats";
import { LampContainer, LampDemo } from "./components/lamp";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      {/* GitHub Link */}
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

      {/* Hero Section */}
      <div className="bg-black bg-transparent h-screen w-screen">
        <FloatingNav />

        <div className="flex flex-col lg:flex-row items-center justify-center h-full mt-28 md:mt-32 lg:mt-0">
          <div className="absolute mb-7 inset-0 z-[-1]">
            <LampDemo />
          </div>
          {/* Add margin-top for smaller and medium screens */}
          <div className="ml-4 lg:ml-20 flex items-center justify-center mt-20 md:mt-32 lg:mt-0"> {/* Adjusted for small, medium, and large screens */}
            <ProfileCard />
          </div>
          <div className="relative flex justify-center items-center p-[20px] lg:p-[40px]">
            <IconArrowRight
              size={60}
              className="hidden lg:block -right-8 lg:-right-14 top-1/2 transform -translate-y-1/2 text-white animate-pulse"
            />
          </div>
          <div className="flex flex-col text-center md:text-left max-w-2xl py-10 px-4">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold">
              <span className="text-white">SOFTWARE</span>{" "}
              <span className="text-gray-700 dark:text-gray-500">ENGINEER</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-400 mt-4">
              Passionate about creating intuitive and engaging user experiences.
              Specialize in transforming ideas into beautifully crafted
              products.
            </p>
            <p className="text-lg md:text-2xl font-bold text-center text-gray-400 mt-4">
              Currently Exploring the fundamentals of Machine Learning and AI
            </p>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex flex-col z-10 md:flex-row items-center justify-center mx-auto w-full py-10 lg:py-20 px-4 lg:px-6 bg-gradient-to-r from-gray-50 to-gray-100 border-[20px] lg:border-[40px] border-b-slate-700">
        {/* Left Side: Heading */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold">
            <span className="text-black">ABOUT</span>{" "}
            <span className="text-gray-700">ME</span>
          </h1>
        </div>
        <div className="hidden md:block h-40 w-1 bg-gray-400 mx-10"></div>
        {/* Right Side: Description */}
        <div className="flex-1 md:ml-16 mt-10 md:mt-0 text-center md:text-left">
          <p className="text-base md:text-xl text-gray-800 leading-relaxed">
            A passionate software engineer dedicated to crafting seamless and
            engaging digital experiences. I thrive on solving complex problems
            through innovative solutions, constantly pushing boundaries in web
            development and AI.
          </p>
          <p className="text-base md:text-xl text-gray-800 mt-6 leading-relaxed">
            Currently expanding my expertise in{" "}
            <span className="text-black font-bold">Machine Learning</span> and{" "}
            <span className="text-black font-bold">
              Artificial Intelligence
            </span>
            , while building scalable, high-performance applications.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-center w-full mx-auto py-10 lg:py-20 px-4 lg:px-6 bg-gradient-to-r from-gray-100 to-gray-200">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-center">
          <span className="text-black">EDUCATION</span>
        </h1>

        <div className="mt-8 lg:mt-16 w-full max-w-4xl">
          {/* B.Tech Section */}
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg mb-8">
            <p className="font-bold text-xl lg:text-2xl text-gray-900">🎓 B.Tech, CSE</p>
            <p className="text-base lg:text-xl text-gray-700 mt-2">
              SRM Institute of Science and Technology, Kattankulathur
            </p>
            <p className="text-base lg:text-lg text-gray-600 mt-2">
              CGPA: 9.91 (III Semester)
            </p>
            <p className="text-base lg:text-lg text-gray-600 italic mt-4">
              Developing a strong foundation in cybersecurity, with a keen
              interest in web development and enthusiasm for learning.
            </p>
          </div>

          {/* Higher Secondary Section */}
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg">
            <p className="font-bold text-xl lg:text-2xl text-gray-900">
              🏫 Higher Secondary Education
            </p>
            <p className="text-base lg:text-xl text-gray-700 mt-2">
              Vivekanand School, D-Block Anand Vihar, Delhi-110092
            </p>
            <p className="text-base lg:text-lg text-gray-600 mt-2">
              Completed 10th and 12th
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl bg-slate-800 text-white font-extrabold text-center py-5">
        SKILLS
      </h1>
      <div className="flex items-center bg-slate-800 text-white py-10 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          {/* Skill Icons */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            <IconBrandReact className="h-12 w-12 lg:h-16 lg:w-16 text-blue-500" />
            <IconBrandNextjs className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
            <IconBrandTailwind className="h-12 w-12 lg:h-16 lg:w-16 text-sky-400" />
            <IconBrandJavascript className="h-12 w-12 lg:h-16 lg:w-16 text-yellow-400" />
            <IconBrandNodejs className="h-12 w-12 lg:h-16 lg:w-16 text-green-500" />
            <IconBrandPython className="h-12 w-12 lg:h-16 lg:w-16 text-yellow-500" />
            <IconBrandMysql className="h-12 w-12 lg:h-16 lg:w-16 text-blue-500" />
            <IconBrandMongodb className="h-12 w-12 lg:h-16 lg:w-16 text-green-500" />
            <IconBrandGit className="h-12 w-12 lg:h-16 lg:w-16 text-orange-500" />
            <IconBrandGithub className="h-12 w-12 lg:h-16 lg:w-16 text-gray-500" />
          </div>

          {/* Description */}
          <div className="mt-8 lg:mt-12 text-base lg:text-lg max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">🚀 Tools & Technologies I Use</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Frontend Development:</strong> React.js, Next.js, Tailwind CSS, JavaScript (ES6+)
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, Python
              </li>
              <li>
                <strong>Databases:</strong> MySQL, MongoDB
              </li>
              <li>
                <strong>Version Control & Tools:</strong> Git, GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;