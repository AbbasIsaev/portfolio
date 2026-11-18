interface PortfolioImage {
    name: string
}

export interface PortfolioItem {
    title: string
    remark: string
    href?: string
    src: string
    images: PortfolioImage[]
}

export interface TPortfolio {
    name: string
    filter: string
    items: PortfolioItem[]
}