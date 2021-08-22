import React from 'react'
import Course from './Course'
import './courses.css'
function Courses() {
    return (
        <>
            <div className="courses" id="Course">
                <div className="courses-container">
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </div>
            </div>
        </>
    )
}

export default Courses
