import './Hero.css'

import {BallCanvas} from '../../components/BallsPhysics'

export const Hero = () => {

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
                            <BallCanvas/>

                            <div className="shape-1"></div>
                            <div className="shape-2"></div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}