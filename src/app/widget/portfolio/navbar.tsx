'use client';

import { useState, useEffect } from "react";

export default function NavBar() {
    const [collapse, setCollapse] = useState(false);

    const sections = ['home', 'experience', 'skills', 'projects', 'education', 'contact'];

    function toggleMenu() {
        setCollapse(!collapse);
    }

    const handleScrollToElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        toggleMenu();
    };

    const throttle = (func: Function, limit: number) => {
        let inThrottle: boolean;
        return function(this: any, ...args: any[]) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 100; // Add an offset to account for the fixed header

        let activeSectionId = null;
        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementBottom = elementTop + rect.height;

                if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                    activeSectionId = sectionId;
                    break;
                }
            }
        }

        const allNavs = document.getElementsByClassName("nav-link");
        for (let i = 0; i < allNavs.length; i++) {
            allNavs[i].classList.remove("active");
        }

        if (activeSectionId) {
            const btn = document.getElementById(activeSectionId + '-btn');
            btn?.classList.add('active');
        }
    };

    useEffect(() => {
        const throttledScrollHandler = throttle(handleScroll, 200);
        window.addEventListener('scroll', throttledScrollHandler);

        // Initial check on component mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, []);

    return (
        <>
            <div className="relative mb-14">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed top-0 w-full z-50">
                    <button className="navbar-brand ml-5" >My Portfolio</button >
                    <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={collapse ? "xs:hidden navbar-collapse mr-5" : "navbar-collapse hidden mr-5"} id="navbarNav">
                        <ul className="navbar-nav float-right">
                            <li className="nav-item">
                                <button id="home-btn" className={"nav-link"} onClick={() => handleScrollToElement("home")}>Profile</button >
                            </li>
                            <li className="nav-item">
                                <button id="experience-btn" className={"nav-link"} onClick={() => handleScrollToElement("experience")}>Experience</button >
                            </li>
                            <li className="nav-item">
                                <button id="skills-btn" className={"nav-link"} onClick={() => handleScrollToElement("skills")}>Skills</button >
                            </li>
                            <li className="nav-item">
                                <button id="projects-btn" className={"nav-link"} onClick={() => handleScrollToElement("projects")}>Projects</button >
                            </li>
                            <li className="nav-item">
                                <button id="education-btn" className={"nav-link"} onClick={() => handleScrollToElement("education")}>Education</button >
                            </li>
                            <li className="nav-item">
                                <button id="contact-btn" className={"nav-link"} onClick={() => handleScrollToElement("contact")}>Contact</button >
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}