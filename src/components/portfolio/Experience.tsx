import Image from "next/image";
import { Briefcase, Calendar, MapPin } from "lucide-react";

type Designation = {
  designationName: string;
  servedTime: string;
};

type WorkExperience = {
  companyName: string;
  place: string;
  workType: string;
  totalWorkingYears: string;
  companyLogo?: string;
  designations: Designation[];
  rolesAndResponsibilities: string[];
};

export default function Experience({ data }: { data: any }) {
  const experienceList: WorkExperience[] = data?.workExperienceData || [];

  if (!experienceList.length) return null;

  return (
    <div className="space-y-12 py-4">
      {/* Title Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Work <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          My professional timeline details my journey and technical achievements in building commercial-grade single-page applications.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-slate-800/80 ml-4 md:ml-32 space-y-12">
        {experienceList.map((work, index) => (
          <div key={`${work.companyName}_${index}`} className="relative pl-8 sm:pl-12">
            
            {/* Timeline Dot with Company Logo */}
            <div className="absolute -left-6 top-1.5 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-2 border-indigo-500/40 overflow-hidden shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              {work.companyLogo ? (
                <Image
                  width={40}
                  height={40}
                  src={work.companyLogo.startsWith('/') ? work.companyLogo : `/${work.companyLogo}`}
                  alt={`${work.companyName} logo`}
                  className="object-contain"
                />
              ) : (
                <Briefcase size={20} className="text-indigo-400" />
              )}
            </div>

            {/* Content Flexbox for Side details vs Roles */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              
              {/* Left Side: Meta Info */}
              <div className="w-full lg:w-1/4 space-y-2 lg:pt-2">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {work.companyName}
                </h3>
                
                <div className="flex flex-col gap-1.5 text-xs sm:text-sm font-medium text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-indigo-400" />
                    <span>{work.place}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-teal-400" />
                    <span>{work.totalWorkingYears}</span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 mt-1 text-xs font-semibold text-indigo-400 bg-indigo-950/45 border border-indigo-800/30 rounded-full w-fit">
                    {work.workType}
                  </span>
                </div>
              </div>

              {/* Right Side: Designations & Responsibilities Card */}
              <div className="flex-1 w-full p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#111827]/60 to-[#0b0f19]/80 border border-slate-800/80 shadow-md space-y-6">
                {/* Designations */}
                <div className="space-y-3">
                  {work.designations.map((desig, i) => (
                    <div key={i} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-800/60 pb-2">
                      <h4 className="text-lg font-bold text-slate-200">
                        {desig.designationName}
                      </h4>
                      <span className="text-xs font-medium text-slate-400 italic">
                        {desig.servedTime}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Roles and Responsibilities */}
                <div className="space-y-3">
                  <h5 className="text-sm font-bold tracking-wider text-slate-400 uppercase">
                    Key Deliverables & Responsibilities
                  </h5>
                  <ul className="space-y-2.5 list-none p-0 m-0 text-slate-400 text-sm leading-relaxed">
                    {work.rolesAndResponsibilities.map((role, i) => (
                      <li key={i} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-indigo-500/80">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
