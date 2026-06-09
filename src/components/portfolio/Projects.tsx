import { ExternalLink, Folder } from "lucide-react";

type Project = {
  title: string;
  subTitle: string;
  description: string[];
};

export default function Projects({ data }: { data: any }) {
  const projectsList: Project[] = data?.projects || [];

  if (!projectsList.length) return null;

  // Helper function to extract tags from subtitle
  const getTags = (subTitle: string) => {
    const parts = subTitle.split(":");
    const tagsSource = parts[1] || parts[0];
    return tagsSource
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0 && !tag.toLowerCase().includes("platform") && !tag.toLowerCase().includes("application"));
  };

  // Helper to parse description items and separate normal bullet points from raw link items
  const parseDescriptionItem = (item: string) => {
    const linkRegex = /(.+)\s*:\s*(https?:\/\/\S+)/;
    const match = item.match(linkRegex);
    if (match) {
      return {
        isLink: true,
        label: match[1].trim(),
        url: match[2].trim(),
      };
    }
    return {
      isLink: false,
      text: item,
    };
  };

  return (
    <div className="space-y-12 py-4">
      {/* Title Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Featured <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          A showcase of commercial systems and personal creations demonstrating clean architecture and scalable code.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project, index) => {
          const tags = getTags(project.subTitle);
          const parsedDesc = project.description.map(parseDescriptionItem);
          const hasLinks = parsedDesc.some((item) => item.isLink);

          return (
            <div
              key={`${project.title}_${index}`}
              className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#111827]/60 to-[#0b0f19]/80 border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 shadow-md group relative"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-indigo-500/5 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="space-y-5">
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-indigo-400 group-hover:text-indigo-350 transition-colors">
                    <Folder size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Subtitle / Category info */}
                <p className="text-xs font-semibold text-indigo-400/90 tracking-wide uppercase">
                  {project.subTitle.split(":")[0]}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold text-slate-300 bg-slate-900/80 border border-slate-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description bullet points (non-links) */}
                <ul className="space-y-2 list-none p-0 m-0 text-slate-400 text-sm leading-relaxed">
                  {parsedDesc
                    .filter((item) => !item.isLink)
                    .map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-slate-700"
                      >
                        {item.text}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Action Link Buttons (rendered if project has external URLs) */}
              {hasLinks && (
                <div className="mt-6 pt-5 border-t border-slate-800/60 flex flex-col gap-2">
                  {parsedDesc
                    .filter((item) => item.isLink)
                    .map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60 hover:border-indigo-500/20 transition-all duration-300 group/link"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={12} className="text-slate-500 group-hover/link:text-indigo-400 transition-colors" />
                      </a>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
