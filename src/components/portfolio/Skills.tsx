'use client';

import { useState } from "react";
import Image from "next/image";

type SkillKey = {
  key: string;
  image: string;
  route: string;
};

type SkillDomain = {
  skillDomain: string;
  skillKeys: SkillKey[];
};

export default function Skills({ data }: { data: any }) {
  const skillsList: SkillDomain[] = data?.skills || [];
  const [activeTab, setActiveTab] = useState<string>(skillsList[0]?.skillDomain || "Frontend");

  if (!skillsList.length) return null;

  const currentDomain = skillsList.find((domain) => domain.skillDomain === activeTab);

  return (
    <div className="space-y-10 py-4">
      {/* Title Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Technical <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          A collection of languages, frameworks, and developer utilities that I've mastered over my 3+ years of professional development.
        </p>
      </div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto p-1.5 rounded-full bg-[#111827]/40 border border-slate-800/80 backdrop-blur-md">
        {skillsList.map((domain) => {
          const isActive = domain.skillDomain === activeTab;
          return (
            <button
              key={domain.skillDomain}
              onClick={() => setActiveTab(domain.skillDomain)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
              }`}
            >
              {domain.skillDomain}
            </button>
          );
        })}
      </div>

      {/* Skills Content Grid */}
      <div className="min-h-[220px]">
        {currentDomain && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {currentDomain.skillKeys.map((skill, index) => (
              <div
                key={`${skill.key}_${index}`}
                className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-b from-[#111827]/60 to-[#0b0f19]/80 border border-slate-800/80 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/[0.02] rounded-2xl transition-all duration-300" />
                
                {/* Icon Wrapper */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-900/80 border border-slate-800 group-hover:border-indigo-500/30 group-hover:bg-slate-900 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.1)] transition-all duration-300">
                  <Image
                    width={32}
                    height={32}
                    src={skill.image}
                    alt={skill.key}
                    className="object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>

                {/* Skill Title */}
                <span className="mt-3.5 text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {skill.key}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
