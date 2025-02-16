"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  IconBrandDribbble, 
  IconFlame, 
  IconBrandLeetcode, 
  IconMail,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandGithub,
  IconBrandInstagram
} from "@tabler/icons-react";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1E1E1E] p-6 rounded-2xl shadow-[0_0_15px_rgb(135,206,250),0_0_15px_rgb(255,255,255)] w-[350px] text-center border border-[rgb(135,206,250)]"
    >
      {/* Profile Image */}
      <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center border-4 border-black">
        <img
          src="/tanay.jpg" // Replace with actual profile image
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Fire Icon with Dotted Curve */}
      <div className="relative flex justify-center m-6 mb-10">
        <IconFlame className="text-orange-500" size={30} />
        <svg width="100" height="50" viewBox="0 0 100 50" className="absolute top-6">
          <path d="M10 10 Q 50 50, 90 10" stroke="orange" strokeWidth="3" fill="transparent" strokeDasharray="6 4" />
        </svg>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold mt-4 text-white z-10">TANAY GUPTA</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-3">
      A passionate Software Engineer with a strong foundation in web development, exploring machine learning, and continuously building innovative solutions. 🚀
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-5">
       <Link
       href="https://leetcode.com/u/Tanay_Gupta18/"
       target="_blank"
       >
       
        <IconBrandLeetcode
          className="text-yellow-500 hover:text-yellow-700 cursor-pointer" 
          size={24} 
        />
       </Link>

       <Link
       href="https://github.com/tanay04032006/"
       target="_blank"
       >
        <IconBrandGithub
          className="text-white hover:text-gray-400 cursor-pointer" 
          size={24} 
        />
       </Link>
        <IconBrandInstagram
          className="text-pink-500 hover:text-pink-700 cursor-pointer" 
          size={24} 
        />
       
      </div>

      {/* Email */}
      <p className="text-gray-400 text-sm mt-4">📧 tanay.gupta13865@gmail.com</p>
      <p className="text-gray-400 text-sm mt-4">📧 tg7803@srmist.edu.in</p>
    </motion.div>
  );
};

export default ProfileCard;
