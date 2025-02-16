"use client"
import { motion } from "framer-motion";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const CodingStats = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg mt-6 w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
    >
      {/* LeetCode Stats */}
      <div className="flex flex-col w-full sm:w-1/3">
        <p className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center mb-3">
          <SiLeetcode className="text-[#FFA539] text-lg mr-2" />
          LeetCode Stats:
        </p>
        <ul className="ml-5 text-gray-700 dark:text-gray-400 text-sm space-y-1">
          <li>
            <span className="font-medium">Rank:</span> 2,066,586
          </li>
          <li>
            <span className="font-medium">Problems Solved:</span> 35
          </li>
          <li>
            <span className="font-medium">Easy:</span> 14, <span className="font-medium">Medium:</span> 20,{" "}
            <span className="font-medium">Hard:</span> 1
          </li>
        </ul>
      </div>

      {/* HackerRank Badges */}
      <div className="flex flex-col w-full sm:w-1/3 mt-5 sm:mt-0">
        <p className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center mb-3">
          <SiHackerrank className="text-green-500 text-lg mr-2" />
          HackerRank Badges:
        </p>
        <ul className="ml-5 text-gray-700 dark:text-gray-400 text-sm space-y-1">
          <li>
            <span className="font-medium">Problem Solving:</span> 4 stars
          </li>
          <li>
            <span className="font-medium">C++:</span> 5 stars
          </li>
        </ul>
      </div>

      {/* CodeChef Stats */}
      <div className="flex flex-col w-full sm:w-1/3 mt-5 sm:mt-0">
        <p className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center mb-3">
          <span className="text-orange-500 text-lg mr-2">👨‍💻</span>
          CodeChef Stats:
        </p>
        <ul className="ml-5 text-gray-700 dark:text-gray-400 text-sm space-y-2">
          <li className="font-medium">Skill Tests</li>
          <li>
            <span className="font-medium">Java Online Test & Quiz</span>
          </li>
          <li>
            <span className="font-medium">Data Structures and Algorithms in C Test</span>
          </li>
          <li>
            <span className="font-medium">Operating Systems Skill Test</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CodingStats;
