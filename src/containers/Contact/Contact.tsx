import './Contact.css'

import {useTheme} from '@mui/material'
import {
    YMap,
    YMapComponentsProvider,
    YMapDefaultFeaturesLayer,
    YMapDefaultMarker,
    YMapDefaultSchemeLayer
} from 'ymap3-components'

import {GEO_COORDS, GEO_URL} from '../data.ts'

export const Contact = () => {
    const theme = useTheme()

    return (
        <section id="contact" className="contact section">

            <div className="container" data-aos="fade-up">

                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="section-category mb-3">Контакты</div>
                            <h2 className="display-5 mb-4">
                                Давайте вместе создадим крутые продукты
                            </h2>
                            <p className="lead mb-4">
                                Поделитесь идеей — я предложу решение. Свяжитесь со мной, чтобы обсудить детали. Буду
                                рад ответить на ваши вопросы и присоединиться к команде.
                            </p>

                            <div className="contact-info mt-5" data-aos="fade-up" data-aos-delay="100">
                                <div className="info-item d-flex mb-3">
                                    <i className="bi bi-envelope-at me-3"></i>
                                    <span>
                                        <a href="mailto:abbas.isaev@gmail.com">
                                            abbas.isaev@gmail.com
                                        </a>
                                    </span>
                                </div>

                                <div className="info-item d-flex mb-3">
                                    <i className="bi bi-telephone me-3"></i>

                                    <span>
                                        <a href="tel:+7-953-313-39-40">
                                            +7-953-313-39-40
                                        </a>
                                    </span>
                                </div>

                                <div className="info-item d-flex mb-4">
                                    <i className="bi bi-geo-alt me-3"></i>
                                    <span>
                                        <a
                                            href={GEO_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="map-link d-inline-flex align-items-center"
                                        >
                                            Россия, Москва
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                        <YMapComponentsProvider apiKey={import.meta.env.VITE_YMAP_API_KEY}>
                            <YMap
                                theme={theme.palette.mode}
                                location={{
                                    center: GEO_COORDS,
                                    zoom: 12
                                }}
                                className={'yandex-map'}
                            >
                                <YMapDefaultSchemeLayer/>
                                <YMapDefaultFeaturesLayer/>
                                <YMapDefaultMarker coordinates={GEO_COORDS}/>
                            </YMap>
                        </YMapComponentsProvider>
                    </div>

                </div>

            </div>

        </section>
    )
}