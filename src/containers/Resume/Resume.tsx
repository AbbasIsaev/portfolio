import './Resume.css'

import {useTheme} from '@mui/material'
import {useMemo} from 'react'
import PlotModule from 'react-plotly.js'

import {CollapsibleList} from '../../components/Collapsible/CollapsibleList.tsx'
import {Wave} from '../../components/Svg/Wave.tsx'
import {DJANGO_COMMAND_URL, MODERN_I18N_URL} from '../data.ts'
import {getMonthDiff, getMonthsToYearsAndMonths} from './utils.ts'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plot = (PlotModule as any).default

export const Resume = () => {
    const theme = useTheme()

    const data: Plotly.Data[] = useMemo(() => {
        const monthsBT = getMonthDiff(new Date('2021-07-30'), new Date('2017-04-21'))
        const yearsAndMonthsBT = getMonthsToYearsAndMonths(monthsBT)
        const monthsNLMK = getMonthDiff(new Date(), new Date('2021-08-03'))
        const yearsAndMonthsNLMK = getMonthsToYearsAndMonths(monthsNLMK)

        return [{
            values: [5 * 12 + 10, 6, 5, monthsBT, monthsNLMK],
            text: ['5 лет, 10 мес.', '6 мес.', '5 мес.', yearsAndMonthsBT, yearsAndMonthsNLMK],
            labels: ['МГТУ', 'Фирма Фавор', 'ВымпелКом', 'Бизнес Тренд', 'НЛМК'],
            textinfo: 'label',
            textposition: 'outside',
            hoverinfo: 'label+text',
            showlegend: true,
            type: 'pie'
        }]
    }, [])

    return (
        <section id="resume" className="resume section">
            <div className="container section-title" data-aos="fade-up">
                <h2>О себе</h2>
                <div className="title-shape">
                    <Wave/>
                </div>
                <p>
                    Fullstack разработчик с опытом 10+ лет. Разрабатываю веб-продукты полного цикла: от архитектуры до
                    развертывания на сервере. Специализируюсь на создании адаптивных SPA-приложений на React.
                    Автоматизирую бизнес-процессы и пишу надежные API
                </p>

                <Plot
                    data={data}
                    layout={{
                        height: 300,
                        autosize: true,
                        margin: {'t': 10, 'b': 10, 'l': 0, 'r': 0},
                        legend: {x: 0, y: 0.5},
                        paper_bgcolor: theme.palette.mode === 'dark' ? '#000' : '#fff', // фон самого графика и легенды
                        font: {color: theme.palette.mode === 'dark' ? '#fff' : '#000'} // цвет всего текста
                    }}
                    useResizeHandler={true} // Enables automatic resizing on window resize
                    className="plot-size"
                />
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row">
                    <div className="col-12">
                        <div className="resume-wrapper">
                            <div className="resume-block" data-aos="fade-up">
                                <h2>Профессиональный опыт</h2>
                                <p className="lead">
                                    Сотрудничаю с крупными компаниями: от стартапов до крупных цифровых продуктов
                                </p>

                                <div className="timeline">
                                    <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                                        <div className="timeline-left">
                                            <h4 className="company">
                                                <a
                                                    href='https://nlmk.com'
                                                    target="_blank" rel="noreferrer"
                                                >
                                                    ПАО "НЛМК"
                                                </a>
                                            </h4>
                                            <span className="period">2021 - н.в.</span>
                                        </div>
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-right">
                                            <h3 className="position">Главный специалист</h3>
                                            <p className="description">
                                                Разработал с нуля и внедрил комплексный инструмент "Аналитическая
                                                платформа"
                                            </p>
                                            <ul>
                                                <CollapsibleList>
                                                    <li>
                                                        Реализовал функционал загрузки данных: разработал модуль для
                                                        загрузки табличных данных из Excel файлов (.xlsx) с
                                                        предварительной валидацией структуры, использовал Pandas для
                                                        парсинга и преобразования данных, обеспечив обработку ошибок
                                                        формата и типов, интегрировал загрузку с AWS S3 для хранения
                                                        файлов
                                                    </li>
                                                    <li>
                                                        Реализовал расширенный функционал для работы с таблицами:
                                                        реализовал базовые операции (фильтрацию, сортировку,
                                                        добавление/удаление столбцов, группировку, объединение таблиц),
                                                        добавил возможность ввода пользовательских SQL запросов для
                                                        изменения и анализа табличных данных, с помощью react-ace
                                                        разработал безопасный интерфейс для ввода SQL запросов на
                                                        фронтенде (React) с подсветкой синтаксиса и автодополнением
                                                    </li>
                                                    <li>
                                                        Разработал серию сложных интерактивных форм для настройки
                                                        параметров анализа, построения графиков и создания моделей
                                                        прогнозирования
                                                    </li>
                                                    <li>
                                                        Оптимизировал работу с формами, содержащими большие списки
                                                        данных, с помощью библиотеки react-window: внедрил виртуализацию
                                                        списков для форм с сотнями и тысячами элементов, повысил
                                                        скорость рендеринга и отзывчивость интерфейса при работе с
                                                        большими наборами данных
                                                    </li>
                                                    <li>
                                                        Построил иерархическую навигацию между интерфейсами:
                                                        интегрировал библиотеку django-mptt для реализации древовидной
                                                        структуры данных, разработал интерфейс с древовидным меню для
                                                        удобного перехода между табличными интерфейсами и наборами
                                                        данных
                                                    </li>
                                                    <li>
                                                        Реализовал модуль экспорта отчётов: создал функционал выгрузки
                                                        комплексных отчётов в форматах HTML и Excel (.xlsx), настроил
                                                        автоматическую генерацию и выгрузку PNG изображений графиков (на
                                                        базе Plotly)
                                                    </li>
                                                    <li>
                                                        Добавил поддержку интернационализации (i18n) с использованием
                                                        собственной библиотеки: реализовал переключение языка интерфейса
                                                        между русским и английским для международных партнёров, настроил
                                                        локализацию на фронтенде (react-i18next) и бэкенде с помощью
                                                        авторской библиотеки modern-i18n
                                                    </li>
                                                    <li>
                                                        Настроил контейнеризацию и оркестрацию приложения: написал
                                                        Dockerfile для фронтенда (React) и бэкенда (Django), обеспечив
                                                        изолированное окружение, создал конфигурацию Docker Compose
                                                        (docker-compose.yml) для оркестрации сервисов: Django, React,
                                                        PostgreSQL
                                                    </li>
                                                    <li>
                                                        Интегрировал Kafka для потоковой обработки данных и AWS S3 для
                                                        хранения файлов
                                                    </li>
                                                    <li>
                                                        Интегрировал систему единого входа (SSO) на базе Keycloak для
                                                        управления аутентификацией и авторизацией пользователей в
                                                        приложении
                                                    </li>
                                                    <li>
                                                        Code review: регулярно проводил проверку кода коллег, выявляя и
                                                        помогая исправлять ошибки, улучшая качество кодовой базы
                                                    </li>
                                                    <li>
                                                        Техническая документация: разрабатывал и поддерживал актуальную
                                                        документацию по архитектуре, API, функционалу проектов и
                                                        правилам валидации данных
                                                    </li>
                                                </CollapsibleList>
                                            </ul>

                                            <p className="description">
                                                Разработал авторский open source проекты
                                            </p>
                                            <ul>
                                                <li>
                                                    <a
                                                        href={DJANGO_COMMAND_URL} target="_blank" rel='noreferrer'
                                                        className="me-1"
                                                    >
                                                        django-command
                                                    </a>
                                                    — утилита для ускорения разработки на Django.
                                                    Инструмент повышает скорость разработки на 24% за счёт автоматизации
                                                    рутинных операций
                                                </li>
                                                <li>
                                                    <a
                                                        href={MODERN_I18N_URL} target="_blank" rel='noreferrer'
                                                        className="me-1"
                                                    >
                                                        modern-i18n
                                                    </a>
                                                    — библиотека для интернационализации Python проектов.
                                                    Библиотека упрощает внедрение многоязычности в проекты, сокращая
                                                    время на настройку локализации
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                                        <div className="timeline-left">
                                            <h4 className="company">
                                                <a
                                                    href='https://www.biztrend.ru'
                                                    target="_blank" rel="noreferrer"
                                                >
                                                    ООО "Бизнес Тренд"
                                                </a>
                                            </h4>
                                            <span className="period">2017 - 2021</span>
                                        </div>
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-right">
                                            <h3 className="position">Главный инженер-программист</h3>
                                            <p className="description">
                                                Самостоятельно разработал с нуля и внедрил комплексную систему "Система
                                                прослеживаемости"
                                            </p>
                                            <ul>
                                                <li>
                                                    Создал сервер приложения на Django: реализовал систему авторизации с
                                                    использованием django-rest-knox: внедрил токеновую аутентификацию с
                                                    генерацией уникального токена для каждой сессии, реализовал
                                                    возможность выхода с одного устройства (logout) без влияния на
                                                    другие активные сессии, добавил функционал принудительного выхода со
                                                    всех устройств (logout all) для повышения безопасности учётных
                                                    записей. Осуществил интеграцию с корпоративным LDAP сервером через
                                                    библиотеку ldap3: настроил централизованную аутентификацию
                                                    пользователей через корпоративный каталог. Настроил ролевую модель
                                                    доступа (RBAC). Работы с базой данных PostgreSQL. Организации
                                                    хранения файлов
                                                </li>
                                                <li>
                                                    Разработал сервер приложения на Node.js (Express):
                                                    модуль авторизации пользователей и проверки прав доступа.
                                                    Создал взаимодействия с БД через ORM Sequelize: спроектировал
                                                    модели данных, настроил связи между таблицами
                                                    (ассоциации: one to many, many to many), реализовал миграции
                                                    Sequelize для версионирования схемы БД, внедрил транзакции Sequelize
                                                    для обеспечения целостности данных при массовых операциях. Настроил
                                                    кэширование данных в Redis для ускорения отклика системы и снижения
                                                    нагрузки на основную БД
                                                </li>
                                                <li>
                                                    Реализовал фронтенд на React + Redux с использованием Material UI и
                                                    Bootstrap: спроектировал современный и интуитивно понятный
                                                    пользовательский интерфейс с применением компонентов Material UI.
                                                    Внедрил адаптивную вёрстку. Оптимизировал производительность за счёт
                                                    ленивой загрузки (lazy loading). Создал сложные интерактивные формы
                                                    с валидацией, используя компоненты TextField, Select, Checkbox из
                                                    Material UI. Интегрировал Yandex Maps для визуализации геоданных
                                                    местоположения сотрудников
                                                </li>
                                                <li>
                                                    Внедрил бота для Telegram и Max мессенджеров для цифрового контроля
                                                    работы сотрудников: бот автоматизировал процесс мониторинга
                                                    сотрудников на объекте, включая отслеживание их текущего
                                                    местоположения. Позволил повысить эффективность и безопасность
                                                    работы сотрудников на 73%
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                                        <div className="timeline-left">
                                            <h4 className="company">
                                                <a
                                                    href='https://moskva.beeline.ru'
                                                    target="_blank" rel="noreferrer"
                                                >
                                                    ПАО "ВымпелКом" (Билайн)
                                                </a>
                                            </h4>
                                            <span className="period">2016 - 2017</span>
                                        </div>
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-right">
                                            <h3 className="position">
                                                Инженер (специалист технической поддержки 2 уровня)
                                            </h3>
                                            <p className="description">
                                                Осуществлял техническую поддержку клиентов компании Билайн
                                            </p>
                                            <ul>
                                                <li>
                                                    Консультирование клиентов: оперативно решал технические проблемы по
                                                    телефону, снижая количество повторных обращений
                                                </li>
                                                <li>
                                                    Настройка и конфигурирование: настраивал сетевое оборудование
                                                    (роутеры) для обеспечения стабильного соединения
                                                </li>
                                                <li>
                                                    Мониторинг и диагностика: контролировал состояние сети, оперативно
                                                    выявлял и устранял сбои, минимизируя время простоя
                                                </li>
                                                <li>
                                                    Учет обращений: вел базу данных в CRM-системе, фиксируя статус
                                                    решения и обеспечивая прозрачность работы
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
                                        <div className="timeline-left">
                                            <h4 className="company">
                                                <a
                                                    href='http://www.firmafavor.ru'
                                                    target="_blank" rel="noreferrer"
                                                >
                                                    ООО "Фирма Фавор"
                                                </a>
                                            </h4>
                                            <span className="period">2015 - 2016</span>
                                        </div>
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-right">
                                            <h3 className="position">Инженер-программист</h3>
                                            <p className="description">
                                                В период обучения совмещал работу по сопровождению ПО «1С:Бухгалтерия 8»
                                            </p>
                                            <ul>
                                                <li>
                                                    Оптимизация кода и устранение ошибок
                                                </li>
                                                <li>
                                                    Рефакторинг и анализ существующего кода
                                                </li>
                                                <li>
                                                    Взаимодействие с заказчиками: сбор и уточнение требований к
                                                    доработкам
                                                </li>
                                                <li>
                                                    Оформление технической документации
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="resume-block" data-aos="fade-up" data-aos-delay="100">
                                <h2>Мое образование</h2>
                                <p className="lead">
                                    Залог фундаментальных знаний и умения находить эффективные решения
                                </p>

                                <div className="timeline">
                                    <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                                        <div className="timeline-left">
                                            <h4 className="company">
                                                <a
                                                    href='https://kf.bmstu.ru/'
                                                    target="_blank" rel="noreferrer"
                                                >
                                                    КФ МГТУ им. Баумана
                                                </a>
                                            </h4>
                                            <span className="period">2010 - 2016</span>
                                        </div>
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-right">
                                            <h3 className="position">Диплом с отличием (инженер-программист)</h3>
                                            <p className="description">
                                                Окончил высшее учебное заведение с отличием по специальности
                                                инженер-программист
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}