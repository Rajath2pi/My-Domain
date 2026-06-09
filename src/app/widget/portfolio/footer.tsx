import { Linkedin, Github, Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070a13] text-slate-400 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Side: Brand & Made in India */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <span className="text-white font-bold tracking-wider text-sm">
            RAJATH R PATIL
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>Made with</span>
            <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
            <span>in India &copy; {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center gap-3.5">
          <a
            href="https://www.linkedin.com/in/rajath-r-patil-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Rajath2pi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajath-r-patil-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Instagram Profile"
          >
            <Instagram size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}

