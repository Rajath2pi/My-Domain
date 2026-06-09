import Image from "next/image";
import { ArrowRight, MessageSquare, Briefcase, Award } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  if (!data) return null;

  const metrics = [
    { value: "3+", label: "Years Experience", icon: Briefcase, color: "text-indigo-400" },
    { value: "15+", label: "Tech Stack Skills", icon: Award, color: "text-teal-400" },
    { value: "20%", label: "Speed Optimization", icon: ArrowRight, color: "text-amber-400" },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-8 lg:pt-16">
        
        {/* Left Side Info */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-indigo-300 bg-indigo-950/45 border border-indigo-800/40 w-fit mx-auto lg:mx-0 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            WELCOME TO MY SPACE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">{data.profileName}</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-slate-300 tracking-wide">
            {data.jobTitle}
          </p>

          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
            {data.summery}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e293b]/50 hover:bg-[#1e293b]/80 border border-slate-700/60 text-slate-200 font-medium rounded-full hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
              <MessageSquare size={16} />
            </a>
          </div>

          {/* Skill Mini-Icons */}
          <div className="pt-6 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-slate-500 text-center lg:text-left uppercase">
              Primary Tech Stack
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              {data.skillsImages.map((imageUrl: string, index: number) => (
                <div
                  key={`${imageUrl}_${index}`}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
                >
                  <Image
                    width={24}
                    height={24}
                    src={imageUrl}
                    alt={`Skill logo ${index + 1}`}
                    className="object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative flex-shrink-0">
          {/* Outer glowing ambient layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl" />
          
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 border border-white/5 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden relative border border-slate-800">
              <Image
                fill
                src={data.profileImage}
                alt={data.profileName}
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* About & Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="relative overflow-hidden group p-6 rounded-2xl bg-gradient-to-b from-[#111827]/60 to-[#0b0f19]/80 border border-slate-800/80 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/[0.02] transition-all duration-300"
            >
              {/* Corner Glow decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 ${metric.color}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-slate-400">
                    {metric.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
