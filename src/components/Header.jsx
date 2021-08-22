import React from 'react'
import { Link as Link_scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import './header_footer.css'
function Header() {
    return (
        <>
            <header id="Header">
                <div className="header-container">
                    <div className="logo">
                        <h1 style={{ cursor: "pointer" }}><span>edu</span>cal</h1>
                    </div>
                    <div className="header-container-right">
                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        to="/"
                                        className="a">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link_scroll
                                        className="a"
                                        activeClass="active"
                                        to="Course"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={1000} >
                                        Courses
                                    </Link_scroll>
                                </li>
                                <li>
                                    <Link_scroll
                                        className="a"
                                        activeClass="active"
                                        to="Course"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={1000} >
                                        Last Bac
                                    </Link_scroll>
                                </li>
                                <li>
                                    <Link_scroll
                                        className="a"
                                        activeClass="active"
                                        to="Instructor"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={1000} >
                                        Instructors
                                    </Link_scroll>

                                </li>
                                <li>
                                    <Link_scroll
                                        className="a"
                                        activeClass="active"
                                        to="Instructor"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={1000} >
                                        Motivation
                                    </Link_scroll>

                                </li>
                                <li>
                                    <Link_scroll
                                        className="a"
                                        activeClass="active"
                                        to="About"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={1000} >
                                        Quiz
                                    </Link_scroll>
                                </li>
                                <li>
                                    <Link_scroll
                                        className="a"
                                        activeClass="active"
                                        to="Contact"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={1000} >
                                        Contact Us
                                    </Link_scroll>
                                </li>
                            </ul>
                        </nav>
                        <Link to="/login"><button className="btn color-primary">Sign In</button></Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
