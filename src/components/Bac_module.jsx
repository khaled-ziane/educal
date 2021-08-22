import React from 'react'

function Bac_module({ bacModule }) {
    return (
        <>
            <div className="bac-year-module bac-year" ref={bacModule}>
                <i className="fas fa-chevron-left"></i>
                <div className="bac-year-right">
                    <h3>رياضيات</h3>
                    <i className="fas fa-file"></i>
                </div>
            </div>
        </>
    )
}

export default Bac_module
