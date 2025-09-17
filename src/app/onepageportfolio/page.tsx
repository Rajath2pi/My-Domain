import Footer from "../widget/portfolio/footer";
import ContactMe from "./portfolio/components/contact";
import Education from "./portfolio/components/education";
import Experience from "./portfolio/components/experience";
import PortfolioDashboard from "./portfolio/components/profile";
import Projects from "./portfolio/components/projects";
import Skills from "./portfolio/components/skills";



export default function OnePagePortfolio() {

    return (
        <>
            <section id="home">
                <PortfolioDashboard />
            </section>
            <section id="experience" >
                <Experience />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="contact">
                <ContactMe />
            </section>
        </>
    )
}