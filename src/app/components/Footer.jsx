import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-6 text-center">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Copyright */}
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Tanay. All Rights Reserved.</p>
          
          {/* Center: Social Links */}
          <div className="flex gap-6 mt-4 mx-3 md:mt-0">
            <a href="https://github.com/Tanay04032006" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <IconBrandGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/tanay-gupta-8ab736296/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
          </div>
          
          {/* Right Side: Contact */}
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
           Come on <span className="text-blue-400">People!</span>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;