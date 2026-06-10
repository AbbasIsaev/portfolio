import './ScrollTop.css'

import React, {useEffect, useState} from 'react'

export function ScrollTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function toggleScrollTop() {
            setVisible(window.scrollY > 100)
        }

        document.addEventListener('scroll', toggleScrollTop)

        return () => {
            document.removeEventListener('scroll', toggleScrollTop)
        }
    }, [])

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <a
            href="#"
            id="scroll-top"
            className={`scroll-top d-flex align-items-center justify-content-center ${visible ? 'active' : ''}`}
            onClick={handleClick}
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    )
}