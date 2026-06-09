import { GraduationCap, Calendar, MapPin } from "lucide-react";

type EducationItem = {
  specialization: string;
  Collage: string;
  place: string;
  graduateYear: string;
};

export default function Education({ data }: { data: any }) {
  const educationList: EducationItem[] = data?.education || [];

  if (!educationList.length) return null;

  return (
    <div className="space-y-12 py-4">
      {/* Title Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Education & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Academics</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          My academic foundation in engineering that fostered my problem-solving abilities and logical analytical mindset.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        
        {/* Left Side: Video Media */}
        <div className="flex justify-center relative">
          {/* Glowing back-layer decoration */}
          <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-slate-800 shadow-xl overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-full filter brightness-95"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/education.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Side: Education Info Cards */}
        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="relative overflow-hidden p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#111827]/60 to-[#0b0f19]/80 border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 shadow-md group"
            >
              {/* Decorative Corner cap icon */}
              <div className="absolute right-6 top-6 text-slate-800 group-hover:text-indigo-950 transition-colors duration-300">
                <GraduationCap size={48} />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-indigo-300 bg-indigo-950/45 border border-indigo-850">
                  Degree Completed
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {edu.specialization}
                </h3>

                <div className="space-y-2 text-sm text-slate-400">
                  <p className="font-semibold text-slate-300">{edu.Collage}</p>
                  
                  <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-indigo-400" />
                      <span>{edu.place}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-teal-400" />
                      <span>Class of {edu.graduateYear}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
