import React from 'react'
import './about.css'

function About() {
    return (
        <>
            <div className="about" id="About">
                <div className="about-container">
                    <div className="img-container">
                        <img src="/images/about-1.jpg" />
                    </div>
                    <div className="about-content">
                        <h1 className="text-primary">Achieve Your <br />
                            Goals With Educal</h1>
                        <p className="text-secondary p-about">Lost the plot bobby such a fibber
                            bleeding bits and bobs don't get shirty
                            with me bugger all mate chinwag super
                            pukka william barney, horse play
                            buggered.</p>
                        <ul>
                            <li><i className="fas fa-check"></i><p>Upskill your organization</p> </li>
                            <li><i className="fas fa-check"></i> <p>Access more then 100K online courses</p> </li>
                            <li><i className="fas fa-check"></i> <p>Learn the latest skills</p> </li>
                        </ul>
                        <button className="btn btn-about ">Join Us</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
