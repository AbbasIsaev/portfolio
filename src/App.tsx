import AOS from 'aos'
import {useEffect} from 'react'

import {ScrollTop} from './components/ScrollTop/ScrollTop.tsx'
import {Contact, Footer, Hero, Navigation, Portfolio, Resume, Skills} from './containers'

export const App = () => {
    useEffect(() => {
        // Animation on scroll init
        AOS.init()
    }, [])

    return (
        <div className="index-page">
            <Navigation/>

            <main className="main">
                <Hero/>
                <Skills/>
                <Resume/>
                <Portfolio/>
                <Contact/>
            </main>

            <Footer/>

            <ScrollTop/>
        </div>
    )
}