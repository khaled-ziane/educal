import React from 'react'
import { Link } from 'react-router-dom'
import Course from './Course'
import './courses.css'
function Courses() {
    return (
        <>
            <div className="courses" id="Course">
                <div className="courses-container">
                    <Link to="/course/course_details"><Course /></Link>
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
