import React, { useRef } from 'react'
import { Link as Link_scroll } from 'react-scroll'


function TopScroll() {
    const scrolltoTop = useRef(null)
    window.addEventListener('scroll', (e) => {
        window.scrollY >= 150 ?
            scrolltoTop.current.style.display = 'block' :
            scrolltoTop.current.style.display = 'none'
    })
    return (
        <>
            <Link_scroll
                activeClass="active"
                to="Header"
                spy={true}
                smooth={true}
                offset={0}
                duration={700} >
                <h3 className="scroll-to-top" ref={scrolltoTop}>
                    <i className="fas fa-long-arrow-alt-up"></i>
                </h3>
            </Link_scroll>
        </>
    )
}

export default TopScroll
