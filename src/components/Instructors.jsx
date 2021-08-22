import React from 'react'
import Instructor from './Instructor'
import './instructors.css'

function Instructors() {
    return (
        <>
            <div className="instructors" id="Instructor">
                <div className="instructors-container">
                    <Instructor />
                    <Instructor />
                    <Instructor />
                </div>
            </div>
        </>
    )
}

export default Instructors
