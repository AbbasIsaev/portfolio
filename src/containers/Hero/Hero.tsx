import './Hero.css'

import {useEffect, useState} from 'react'

import {logo} from '../data.ts'
import {animate, getPositions} from './animate.ts'

export const Hero = () => {
    useEffect(() => {
        const anim = animate('.hero-animated-img')

        setTimeout(() => {
            if (anim) {
                anim.runAnimation()

                // Отключаю анимацию через 1 минуту
                setTimeout(() => {
                    anim.stopAnimation()
                }, 60000)
            }
        }, 5000)

        return () => {
            if (anim) {
                anim.stopAnimation()
            }
        }
    }, [])

    const [positions] = useState(() => getPositions(logo.items.length))

    return (
        <section id="start" className="hero section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row align-items-center content">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h2>Создаю цифровые продукты, которые работают</h2>
                        <p className="lead">
                            Автоматизирую процессы, сокращаю затраты, ускоряю рост вашего бизнеса
                        </p>
                        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="300">
                            <a href="#portfolio" className="btn btn-primary">Портфолио</a>
                            <a href="#contact" className="btn btn-outline">Обсудить проект</a>
                        </div>
                        <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">
                                    Многолетний опыт: знаю подводные камни и как их обходить
                                </span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">
                                    Реализованные проекты: от стартапов до корпоративных решений
                                </span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">200+</span>
                                <span className="stat-label">
                                    Довольных клиентов: ценю обратную связь и долгосрочные отношения
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="hero-image">
                            {logo.items.map((item, index) => (
                                <img
                                    key={index}
                                    src={logo.src + item.name}
                                    alt={item.alt}
                                    className="img-fluid hero-animated-img"
                                    style={{
                                        position: 'absolute',
                                        width: 'auto',
                                        height: '30px',
                                        left: `${positions[index]?.x || 50}%`,
                                        top: `${positions[index]?.y || 50}%`
                                    }}
                                    data-aos="zoom-out"
                                    data-aos-delay={300 + index * 100}
                                />
                            ))}

                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}