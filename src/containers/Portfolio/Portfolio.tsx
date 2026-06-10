import './Portfolio.css'

import {useState} from 'react'

import {PortfolioCard} from '../../components/PortfolioCard/PortfolioCard.tsx'
import {Wave} from '../../components/Svg/Wave.tsx'
import {portfolio} from '../data.ts'

export const Portfolio = () => {
    const [filter, setFilter] = useState('*')

    const onClickFilter = (filter: string) => {
        setFilter(filter)
    }

    return (
        <section id="portfolio" className="portfolio section light-background">

            <div className="container section-title" data-aos="fade-up">
                <h2>Портфолио</h2>
                <div className="title-shape">
                    <Wave/>
                </div>
                <p>
                    Реализованные решения для бизнеса: автоматизация, аналитика, пользовательские интерфейсы.
                    Проекты полного цикла: от идеи до работающего продукта
                </p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
                    <ul className="portfolio-filters">
                        <li
                            className={filter === '*' ? 'filter-active' : undefined}
                            onClick={() => onClickFilter('*')}
                        >
                            Все работы
                        </li>

                        {portfolio.map((p) => {
                            return <li
                                key={p.name}
                                className={filter === p.filter ? 'filter-active' : undefined}
                                onClick={() => onClickFilter(p.filter)}
                            >
                                {p.name}
                            </li>
                        })}
                    </ul>
                </div>

                <div className="row g-4">
                    {portfolio
                        .filter((p) => p.filter === filter || filter === '*')
                        .map(({name, items}) =>
                            items.map((portfolioItem) => {
                                return (
                                    <div
                                        key={`${name}-${portfolioItem.title}`}
                                        className={`col-lg-6 col-md-6`}
                                        data-aos="fade-up" data-aos-delay="300"
                                    >
                                        <PortfolioCard
                                            name={name}
                                            {...portfolioItem}
                                        />
                                    </div>
                                )
                            })
                        )
                    }
                </div>

            </div>

        </section>
    )
}