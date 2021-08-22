import React from 'react'
import data from '../data/data'


function Bac_year({ bacYear, iconYear, handleClickYear }) {


    return (
        <>  {data.tbl_bac_years.map((year, index) => {
            return <div className="bac-year color-primary " ref={bacYear} onClick={handleClickYear} >
                <i className="fas fa-chevron-left color-primary" ref={iconYear}></i>
                <div className="bac-year-right">
                    <h3>  {year} مواضيع و حلول بكالويا  </h3>
                    <i className="fas fa-book color-primary"></i>
                </div>
            </div>
        })}

        </>
    )
}

export default Bac_year

