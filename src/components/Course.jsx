import React from 'react'

function Course() {
    return (
        <>
            <div className="course">
                <div className="img-container">
                    <img src="/images/course-2.jpg" alt="" />
                    <div className="showcase"></div>
                    <div className="module">Development</div>
                </div>
                <div className="course-container">
                    <p><i className="far fa-bookmark"></i>18 Lesson</p>
                    <h3 className="text-primary">Strategy law and organization Foundation</h3>
                    <div className="course-owner">
                        <img src="/images/inst.jpg" alt="" />
                        <h4>khaled ziane</h4>
                    </div>
                </div>
                <div className="know-more">
                    <p className="text-primary">Know more <i className="fas fa-arrow-right"></i></p>
                </div>
            </div>
        </>
    )
}

export default Course
