import React from 'react'

function Bac_field({ bacField, iconField, handleClickField }) {
    return (
        <>
            <div className="bac-year-field bac-year" ref={bacField} onClick={handleClickField}>
                <i className="fas fa-chevron-left" ref={iconField}></i>
                <div className="bac-year-right">
                    <h3>علوم تجريبية</h3>
                    <i className="fas fa-copy"></i>
                </div>
            </div>
        </>
    )
}

export default Bac_field
