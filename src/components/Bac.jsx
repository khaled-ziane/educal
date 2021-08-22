import React, { useRef } from 'react'
import Bac_year from './Bac_year'
import Bac_field from './Bac_field'
import Bac_module from './Bac_module'
import './bac.css'
import { Link } from 'react-router-dom'

function Bac() {
    const bacYear = useRef(null)
    const bacField = useRef(null)
    const bacModule = useRef(null)
    const iconYear = useRef(null)
    const iconField = useRef(null)
    var x = false
    var y = false
    const handleClickYear = () => {
        x = !x
        if (x) {
            bacField.current.style.display = 'flex'
            iconYear.current.classList = 'fas fa-chevron-down'
        } else {
            bacField.current.style.display = 'none'
            bacModule.current.style.display = 'none'
            iconYear.current.classList = 'fas fa-chevron-left'
            iconField.current.classList = 'fas fa-chevron-left'
            y = false
        }
    }
    const handleClickField = () => {
        y = !y
        if (y) {
            bacModule.current.style.display = 'flex'
            iconField.current.classList = 'fas fa-chevron-down'
        } else {
            bacModule.current.style.display = 'none'
            iconField.current.classList = 'fas fa-chevron-left'
        }

    }
    return (
        <>
            <div className="bac">
                <div className="bac-container">
                    <div className="bac-years">
                        <Bac_year bacYear={bacYear} iconYear={iconYear} handleClickYear={handleClickYear} />
                        <Bac_field bacField={bacField} iconField={iconField} handleClickField={handleClickField} />
                        <Link to="/subject" target="_blank">   <Bac_module bacModule={bacModule} /> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bac
