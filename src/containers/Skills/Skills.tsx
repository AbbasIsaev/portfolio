import 'waypoints/lib/noframework.waypoints.min.js'
import './Skills.css'

import {useEffect} from 'react'

export const Skills = () => {
    useEffect(() => {
        const skillsAnimation: NodeListOf<HTMLElement> = document.querySelectorAll('.skills-animation')
        skillsAnimation.forEach((item) => {
            new Waypoint({
                element: item,
                offset: '70%',
                handler: function () {
                    const progress: NodeListOf<HTMLElement> = item.querySelectorAll('.progress .progress-bar')
                    progress.forEach((el) => {
                        el.style.width = el.getAttribute('aria-valuenow') + '%'
                    })
                }
            })
        })
    }, [])

    return (
        <section id="skills" className="skills section light-background">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row g-4 skills-animation">

                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="skill-box">
                            <h3>React</h3>
                            <p>Специализируюсь на создании адаптивных SPA-приложений с плавным UX</p>
                            <span className="text-end d-block">92%</span>
                            <div className="progress">
                                <div
                                    className="progress-bar" role="progressbar"
                                    aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                        <div className="skill-box">
                            <h3>Node.js</h3>
                            <p>Умею выстраивать API, которое не тормозит под нагрузкой, и интегрировать сторонние
                                сервисы</p>
                            <span className="text-end d-block">90%</span>
                            <div className="progress">
                                <div
                                    className="progress-bar" role="progressbar"
                                    aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                        <div className="skill-box">
                            <h3>Python</h3>
                            <p>Специализируюсь на веб-разработке (Django) и автоматизации бизнес-процессов</p>
                            <span className="text-end d-block">88%</span>
                            <div className="progress">
                                <div
                                    className="progress-bar" role="progressbar"
                                    aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}