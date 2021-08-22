import React from 'react'
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import './course_details.css'

function Course_details() {



    return (
        <>
            <div className="course-details">
                <div className="course-details-container">
                    <div className="course-details-left">
                        <h4>Courses <i className="fas fa-chevron-right"></i> Programming Language <i className="fas fa-chevron-right"></i> Javascript</h4>
                        <h1 className="text-primary">The business Intelligence analyst Course 2022</h1>
                        <p>Created by: <span>Khaled Ziane</span></p>
                        <p>Last Update: <span>11/08/2020</span></p>
                        <div className="img-container">
                            <img src="/images/course-1.jpg" />
                        </div>
                        <h3 className="text-primary">Course Overview</h3>
                        <p className="p-overview">Only a quid me old mucker squiffy tomfoolery grub
                            cheers ruddy cor blimey guvnor in my flat,
                            up the duff Eaton car boot up the kyver pardon
                            you A bit of how's your father David skive off sloshed,
                            don't get shirty with me chip shop vagabond crikey bugger
                            Queen's English chap. Matie boy nancy boy bite your arm
                            off up the kyver old no biggie fantastic boot, David have
                            it show off show off pick your nose and blow off lost
                            the plot porkies bits and bobs only a quid bugger all mate,
                            absolutely bladdered bamboozled it's your round don't
                            get shirty with me down the pub well. Give us a bell
                            bits and bobs Charles he lost his bottle super my lady
                            cras starkers bite your arm off Queen's English,
                            pardon me horse play Elizabeth a blinding shot
                            chinwag knees up do one David, blag cup of tea Eaton
                            so I said bleeding haggle James Bond cup of char. Gosh
                            William ummm I'm telling crikey burke I don't want no
                            agro A bit of how's your father bugger all mate off his
                            nut that, what a plonker cuppa owt to do with me nancy
                            boy show off show off pick your nose and blow off
                            spiffing good time lavatory me old mucker, chimney
                            pot what a load of rubbish boot squiffy lost the
                            plot brolly wellies excuse my french</p>
                    </div>
                    <div className="course-details-right">
                        <Player
                            playsInline
                            poster="/images/course-1.jpg"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            className="video"
                        />
                        <h3>$74.00</h3>
                        <div className="enroll">
                            <i className="fas fa-chalkboard"></i>
                            <p>Instructor: <span>Khaled Ziane</span></p>
                        </div>
                        <div className="enroll">
                            <i className="far fa-copy"></i>
                            <p>Lectures: <span>14</span></p>
                        </div>
                        <div className="enroll">
                            <i className="far fa-clock"></i>
                            <p>Duration: <span>40h</span></p>
                        </div>
                        <p className="p-payment">Payment: <span>CCP</span></p>
                        <button className="btn color-primary" style={{ width: '100%' }}>Enroll</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course_details
