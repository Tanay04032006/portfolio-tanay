import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, image, github, live, techStack = [] }) => {
  return (
<div className="flex items-center justify-between p-6 rounded-2xl w-full shadow-lg border border-transparent transition-all duration-300 hover:shadow-[0_0_15px_rgb(0,191,255),0_0_15px_rgb(0,255,127)] hover:border-[rgb(0,191,255)]">

      
      {/* Left: Image */}
      <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Middle: Title, Description & Tech Stack */}
      <div className="ml-6 flex-1">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>

        {/* Tech Stack Icons */}
        <div className="flex gap-4 mt-3">
  {techStack.length > 0 ? (
    techStack.map(({ icon: Icon, color }, index) =>
      React.createElement(Icon, {
        key: index,
        className: "text-2xl hover:scale-110 transition",
        style: { color }, // Apply the specified color
      })
    )
  ) : (
    <p className="text-gray-500 text-sm">No tech stack listed</p>
  )}
</div>

      </div>

      {/* Right: GitHub & Live Links */}
      <div className="flex gap-6">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 hover:text-white text-3xl transition" />
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-orange-400 hover:text-white text-3xl transition" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
