'use client';

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {

    const [collapse, setCollapse] = useState(false);

    const pathname = usePathname();

    function toggleMenu() {
        setCollapse(!collapse);
    }

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        const btn = document.getElementById(id + '-btn')
        const allNavs = document.getElementsByClassName("nav-link");
        for (let i = 0; i < allNavs.length; i++) {
            allNavs[i].classList.remove("active");
        }
        if (element) {
            btn?.classList.add('active')
            element.scrollIntoView({ behavior: "smooth" });
        }
        toggleMenu();
    };

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
                                <button id="home-btn" className={"nav-link"} onClick={() => handleScroll("home")}>Profile</button >
                            </li>
                            <li className="nav-item">
                                <button id="experience-btn" className={"nav-link"} onClick={() => handleScroll("experience")}>Experience</button >
                            </li>
                            <li className="nav-item">
                                <button id="skills-btn" className={"nav-link"} onClick={() => handleScroll("skills")}>Skills</button >
                            </li>
                            <li className="nav-item">
                                <button id="projects-btn" className={"nav-link"} onClick={() => handleScroll("projects")}>Projects</button >
                            </li>
                            <li className="nav-item">
                                <button id="education-btn" className={"nav-link"} onClick={() => handleScroll("education")}>Education</button >
                            </li>
                            <li className="nav-item">
                                <button id="contact-btn" className={"nav-link"} onClick={() => handleScroll("contact")}>Contact</button >
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}