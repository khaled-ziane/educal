import React from 'react'
import Download_app from './Download_app'
function Footer() {
    return (
        <>
            <footer id="Contact">
                <Download_app />
                <div className="footer-container">
                    <div className="col-1">
                        <h1><span>edu</span>cal</h1>
                        <p>Great lesson ideas and <br />
                            lesson plans for ESL teachers! <br />
                            Educators can customize lesson <br />
                            plans to best.</p>
                        <div className="social">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-tiktok"></i>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                    </div>
                    <div className="col-2">
                        <h2>Company</h2>
                        <ul>
                            <li>About</li>
                            <li>Courses</li>
                            <li>Events</li>
                            <li>Instructor</li>
                            <li>Career</li>
                            <li>Become a Teacher</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h2>Platform</h2>
                        <ul>
                            <li>Browse Library</li>
                            <li>Library</li>
                            <li>Partners</li>
                            <li>News Blogs</li>
                            <li>FAQs</li>
                            <li>Tutorials</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h2>Subscribe</h2>
                        <p>Get the latest news and updates <br />
                            right at your inbox.</p>
                    </div>
                </div>
                <hr />
                <div className="copyright">
                    <p>© 2022 Educal, All Rights Reserved. Design By <span>Theme Pur</span> </p>
                </div>
            </footer>
            {/* <iframe src="https://www.ency-education.com/uploads/3/0/9/3/309326/sciences-se-bac2020.pdf" height="700" width="1000" title="Iframe Example"></iframe> */}
            {/* <a target="_blank" href="https://www.ency-education.com/uploads/3/0/9/3/309326/sciences-se-bac2020.pdf" >bac 2020 math</a> */}
        </>
    )
}

export default Footer
