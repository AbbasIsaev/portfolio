import './PortfolioCard.css'

import type {PortfolioItem} from '../../types.ts'
import {CarouselApp} from '../Carousels/CarouselApp.tsx'

type Props = {
    name: string
} & PortfolioItem

export function PortfolioCard({name, title, remark, href, src, images}: Props) {
    return (
        <div className="portfolio-card">
            <div className="portfolio-image">
                <CarouselApp src={src} images={images} interval={10000}/>
                <div className="portfolio-overlay"/>
            </div>

            <div className="portfolio-content">
                <span className="category">{name}</span>
                <h3>{title}</h3>
                <p>
                    {remark}
                    {href && <a href={href} target="_blank" rel='noreferrer' className="ms-1"> Подробнее </a>}
                </p>
            </div>
        </div>
    )
}