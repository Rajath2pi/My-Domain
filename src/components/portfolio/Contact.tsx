import Image from "next/image";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

type ContactItem = {
  key: string;
  image: string;
  route: string;
};

export default function ContactMe({ data }: { data: any }) {
  const contacts: ContactItem[] = data?.contact || [];

  if (!contacts.length) return null;

  // Helper to fetch icon corresponding to contact method
  const getContactDetails = (key: string) => {
    switch (key.toLowerCase()) {
      case "gmail":
        return {
          icon: Mail,
          label: "yathrika2pi@gmail.com",
          cta: "Send an Email",
          color: "text-red-400 border-red-500/10 hover:border-red-500/30",
          glow: "group-hover:bg-red-500/[0.02]",
        };
      case "linkedin":
        return {
          icon: Linkedin,
          label: "Rajath R Patil",
          cta: "Connect on LinkedIn",
          color: "text-blue-400 border-blue-500/10 hover:border-blue-500/30",
          glow: "group-hover:bg-blue-500/[0.02]",
        };
      default:
        return {
          icon: Mail,
          label: "Contact",
          cta: "Visit Link",
          color: "text-indigo-400 border-indigo-500/10 hover:border-indigo-500/30",
          glow: "group-hover:bg-indigo-500/[0.02]",
        };
    }
  };

  return (
    <div className="space-y-12 py-4">
      {/* Title Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Get In <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          I'm currently open to new opportunities, collaborations, and tech discussions. Drop a line, and let's construct something extraordinary.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        
        {/* Left Side: Handshake Visual Banner */}
        <div className="space-y-6 text-center md:text-left pr-0 md:pr-6">
          <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-4">
            {/* Soft decorative background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <Image
              width={220}
              height={180}
              src="/images/appcontent/business-hand-shake.png"
              alt="Business handshake indicator"
              className="object-contain filter drop-shadow-[0_4px_20px_rgba(99,102,241,0.15)] hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Let's establish a partnership!
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Based in Bangalore, India, and working globally. I typically respond within a few hours to schedule a Zoom or Google Meet session.
            </p>
          </div>
        </div>

        {/* Right Side: Quick Action Tiles */}
        <div className="space-y-4">
          {contacts.map((contact, index) => {
            const details = getContactDetails(contact.key);
            const Icon = details.icon;

            return (
              <a
                key={`${contact.key}_${index}`}
                href={contact.key.toLowerCase() === "gmail" ? "mailto:yathrika2pi@gmail.com" : contact.route}
                target={contact.key.toLowerCase() === "gmail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-b from-[#111827]/60 to-[#0b0f19]/80 border ${details.color} hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300`}
              >
                {/* Glow layer */}
                <div className={`absolute inset-0 rounded-2xl ${details.glow} transition-colors duration-300 pointer-events-none`} />

                <div className="flex items-center gap-4 relative z-10">
                  {/* Icon Frame */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-805 text-slate-300 group-hover:text-white transition-colors duration-300">
                    <Icon size={22} className={contact.key.toLowerCase() === 'gmail' ? 'text-red-400' : 'text-blue-400'} />
                  </div>
                  
                  {/* Text Details */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                      {contact.key}
                    </h4>
                    <p className="text-sm font-semibold text-slate-200">
                      {details.label}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-white transition-colors relative z-10 pr-2">
                  <span className="hidden sm:inline">{details.cta}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}
