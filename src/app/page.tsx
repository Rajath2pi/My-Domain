import profileData from "@/assets/lib/profileinfo.json";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import ContactMe from "@/components/portfolio/Contact";
import NavBar from "./widget/portfolio/navbar";
import Footer from "./widget/portfolio/footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="bg-[#0b0f19] text-[#e2e8f0] min-h-screen font-sans selection:bg-purple-500/30 selection:text-white relative overflow-hidden">
        {/* Dynamic light glows and modern grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0,transparent_60%)] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06)_0,transparent_60%)] pointer-events-none z-0" />
        <div className="absolute top-[40%] right-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.04)_0,transparent_60%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-24 pt-20">
          <section id="home" className="scroll-mt-28">
            <Hero data={profileData} />
          </section>
          
          <section id="experience" className="scroll-mt-28">
            <Experience data={profileData} />
          </section>
          
          <section id="skills" className="scroll-mt-28">
            <Skills data={profileData} />
          </section>
          
          <section id="projects" className="scroll-mt-28">
            <Projects data={profileData} />
          </section>
          
          <section id="education" className="scroll-mt-28">
            <Education data={profileData} />
          </section>
          
          <section id="contact" className="scroll-mt-28">
            <ContactMe data={profileData} />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

