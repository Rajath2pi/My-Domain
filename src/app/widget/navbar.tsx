'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { pathToFileURL } from "url";

export default function NavBar() {

    const [collapse, setCollapse] = useState(false);

    const pathname = usePathname();

    function toggleMenu(){
        setCollapse(!collapse);
    }

    return (
        <>
            <div className="relative">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed top-0 w-full z-50">
                    <Link className="navbar-brand ml-5" href="/portfolio/profile">My Portfolio</Link >
                    <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" 
                        aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={collapse ? "xs:hidden navbar-collapse mr-5" :"navbar-collapse hidden mr-5"} id="navbarNav">
                        <ul className="navbar-nav float-right">
                            <li className="nav-item">
                                <Link className={pathname === '/portfolio/profile' ?  "nav-link active" : "nav-link"} href="/portfolio/profile" onClick={toggleMenu}>Profile</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={pathname === '/portfolio/experience' ?  "nav-link active" : "nav-link"} href="/portfolio/experience" onClick={toggleMenu}>Experience</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={pathname === '/portfolio/skills' ?  "nav-link active" : "nav-link"} href="/portfolio/skills" onClick={toggleMenu}>Skills</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={pathname === '/portfolio/projects' ?  "nav-link active" : "nav-link"} href="/portfolio/projects" onClick={toggleMenu}>Projects</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={pathname === '/portfolio/education' ?  "nav-link active" : "nav-link"} href="/portfolio/education" onClick={toggleMenu}>Education</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={pathname === '/portfolio/contact' ?  "nav-link active" : "nav-link"} href="/portfolio/contact" onClick={toggleMenu}>Contact</Link >
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}