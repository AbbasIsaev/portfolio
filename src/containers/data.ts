import type {LngLat} from '@yandex/ymaps3-types/common/types'

import type {TLogo, TPortfolio} from '../types.ts'

export const DJANGO_COMMAND_URL = 'https://habr.com/ru/articles/844938/'
export const MODERN_I18N_URL = 'https://habr.com/ru/articles/926698/'

export const portfolio: TPortfolio[] = [
    {
        name: 'Аналитическая платформа',
        filter: 'ap',
        items: [
            {
                title: 'Источники данных',
                remark: 'Интегрированная загрузка табличных данных из разных источников',
                src: 'portfolio/ap/react/',
                images: [
                    {name: '1-1 Источники данных.png'},
                    {name: '1-2-1 Источники данных Буфер.png'},
                    {name: '1-2-2 Источники данных Буфер.png'},
                    {name: '1-3 Источники данных REST.png'},
                    {name: '1-4 Источники данных Топики.png'},
                    {name: '1-5 Источники данных Фильтрация.png'},
                    {name: '1-6-1 Источники данных i18n.png'},
                    {name: '1-6-2 Источники данных i18n темная тема.png'}
                ]
            },
            {
                title: 'Маршруты',
                remark: 'Расширенный функционал для работы с таблицами',
                src: 'portfolio/ap/react/',
                images: [
                    {name: '2-1-1 Маршруты.png'},
                    {name: '2-1-2 Фильтры.png'},
                    {name: '2-1-3 Фильтры.png'},
                    {name: '2-1-4 Отображение.png'},
                    {name: '2-2-1 Действия.png'},
                    {name: '2-2-2 Действия Описание.png'},
                    {name: '2-2-3 Действия Добавление.png'},
                    {name: '2-2-4 Действия Добавление новый шаг.png'},
                    {name: '2-2-5 Действия Применить SQL.png'},
                    {name: '2-2-6 Действия Применить SQL новый шаг.png'},
                    {name: '2-2-7 Действия Группировка столбцов.png'},
                    {name: '2-2-8 Действия Группировка столбцов новый шаг.png'},
                    {name: '2-2-9 Действия Разделить на 2 выборки.png'},
                    {name: '2-2-10 Действия Бинарное кодирование.png'},
                    {name: '2-2-11 Действия Бинарное кодирование новый шаг.png'},
                    {name: '2-4-1 Маршруты Действия i18n.png'},
                    {name: '2-4-2 Маршруты Действия i18n Темная тема.png'}
                ]
            },
            {
                title: 'Отчеты и графики',
                remark: 'Комплексный анализ данных с удобным UI и мощной аналитической базой',
                src: 'portfolio/ap/react/',
                images: [
                    {name: '2-3-1 Отчеты.png'},
                    {name: '2-3-2 Отчеты Модель классификации.png'},
                    {name: '2-3-3 Отчеты Модель классификации.png'},
                    {name: '2-3-4 Отчеты Кластерный анализ.png'},
                    {name: '2-3-5 Отчеты Кластерный анализ.png'},
                    {name: '2-3-6 Отчеты Кластерный анализ.png'},
                    {name: '2-3-7 Отчеты Регрессионная модель.png'},
                    {name: '2-3-8 Отчеты Регрессионная модель.png'},
                    {name: '2-3-9 Отчеты Регрессионная модель.png'},
                    {name: '2-3-10 Отчеты Список.png'},
                    {name: '3-1 Отчеты.png'},
                    {name: '3-2 Отчеты Редактирование.png'}
                ]
            },
            {
                title: 'Графический интерфейс администратора',
                remark: 'Интерфейс администратора для управления данными в базе данных',
                src: 'portfolio/ap/django/',
                images: [
                    {name: '1-1 Панель администратора.png'},
                    {name: '1-2-1 Маршруты.png'},
                    {name: '1-2-2 Маршрут редактирование.png'},
                    {name: '1-2-3 Маршрут редактирование.png'},
                    {name: '1-3-1 Отчеты.png'},
                    {name: '1-3-2 Отчет редактирование.png'}
                ]
            }
        ]
    },
    {
        name: 'Система прослеживаемости',
        filter: 'tr',
        items: [
            {
                title: 'Современный интерфейс информационной панели',
                remark: 'Лаконичный и удобный дизайн системы',
                src: 'portfolio/tr/react/',
                images: [
                    {name: '1-1 Главная.png'},
                    {name: '2-1 Вход.png'},
                    {name: '3-1 Установка.png'},
                    {name: '4-1 Навигация.png'},
                    {name: '5-1 Проекты.png'},
                    {name: '5-2 Проекты редактирование.png'},
                    {name: '5-3 Проекты выбор сотрудников.png'},
                    {name: '6-1 Сотрудники.png'},
                    {name: '6-2-1 Сотрудники фильтры.png'},
                    {name: '6-2-2 Сотрудники подбор персонала.png'},
                    {name: '6-3-1 Сотрудники добавление.png'},
                    {name: '6-3-2 Сотрудники добавление.png'},
                    {name: '6-4-1 Сотрудники отчеты.png'},
                    {name: '6-4-2 Сотрудники отчеты.png'},
                    {name: '7-1 Телеграм пользователи.png'},
                    {name: '7-2 Телеграм отчет о работе.png'},
                    {name: '8-1 Справочники организации.png'},
                    {name: '8-2 Справочники организации редактирование.png'},
                    {name: '9-1 Личный кабинет.png'},
                    {name: '10-1 Главная английский.png'},
                    {name: '10-2-1 Сотрудники английский.png'},
                    {name: '10-2-2 Сотрудники редактирование английский.png'},
                    {name: '10-3-1 Справочники организации английский.png'}
                ]
            },
            {
                title: 'Node.js (Express)',
                remark: 'Поддержка RESTful API для обмена данными между клиентом и сервером',
                src: 'portfolio/tr/node_js/',
                images: [
                    {name: '1-1 Документирование кода.png'},
                    {name: '1-2 Документирование кода.png'},
                    {name: '1-3 Документирование кода.png'},
                    {name: '1-4 Документирование кода.png'},
                    {name: '1-5 Документирование кода.png'}
                ]
            },
            {
                title: 'Графический интерфейс администратора',
                remark: 'Интерфейс администратора для управления данными в базе данных',
                src: 'portfolio/tr/django/',
                images: [
                    {name: '1-1 Вход в систему.png'},
                    {name: '1-2-1 Главная.png'},
                    {name: '1-2-2 Главная.png'},
                    {name: '2-1 Пользователи.png'},
                    {name: '2-2 Пользователи редактирование.png'},
                    {name: '3-1 Проекты.png'},
                    {name: '3-2-1 Проекты добавление.png'},
                    {name: '3-2-2 Проекты добавление.png'},
                    {name: '4-1 Спецификации.png'},
                    {name: '4-2-1 Спецификации редактирование.png'},
                    {name: '4-2-2 Спецификации редактирование.png'},
                    {name: '5-1 Инспекционный контроль.png'},
                    {name: '5-2-1 Инспекционный контроль добавление.png'},
                    {name: '5-2-2 Инспекционный контроль добавление.png'},
                    {name: '6-1 Сотрудники.png'},
                    {name: '6-2-1 Сотрудники добавление.png'},
                    {name: '6-2-2 Сотрудники добавление.png'},
                    {name: '6-3 Сотрудники виды образования.png'},
                    {name: '7-1 Организации.png'},
                    {name: '7-2 Организации добавление.png'}
                ]
            },
            {
                title: 'Django REST Framework (DRF)',
                remark: 'Поддержка RESTful API для обмена данными между клиентом и сервером',
                src: 'portfolio/tr/django/',
                images: [
                    {name: '8-1-1 Django REST.png'},
                    {name: '8-1-2 Django REST.png'},
                    {name: '9-1-1 Документирование кода swagger.png'},
                    {name: '9-1-2 Документирование кода swagger.png'},
                    {name: '9-1-3 Документирование кода swagger.png'},
                    {name: '9-2-1 Документирование кода redoc.png'},
                    {name: '9-2-2 Документирование кода redoc.png'}
                ]
            },
            {
                title: 'Адаптивный интерфейс для мобильных устройств',
                remark: 'Удобство использования на любом устройстве',
                src: 'portfolio/tr/mobile/',
                images: [
                    {name: '1-1 Главная.png'},
                    {name: '1-2 Установка.png'},
                    {name: '2-1 Вход.png'},
                    {name: '3-1-1 Навигация.png'},
                    {name: '3-1-2 Навигация.png'},
                    {name: '4-1-1 Проекты.png'},
                    {name: '4-1-2 Проекты добавление.png'},
                    {name: '5-1-1 Сотрудники.png'},
                    {name: '5-1-2 Сотрудники подбор персонала.png'},
                    {name: '6-1-1 Телеграм пользователи.png'},
                    {name: '6-1-2 Телеграм отчет о работе.png'},
                    {name: '7-1-1 Справочники организации.png'},
                    {name: '7-1-2 Справочники организации добавление.png'},
                    {name: '8-1 Личный кабинет.png'},
                    {name: '9-1 Сотрудники подбор персонала английский.png'},
                    {name: '9-2 Справочники операции английский.png'}
                ]
            },
            {
                title: 'Кроссплатформенность (PWA и Workbox)',
                remark: 'Работает на любых устройствах и ОС (iOS, Android, Windows и др.)',
                src: 'portfolio/tr/pwa/',
                images: [
                    {name: '3-1 Установка.png'},
                    {name: '11-1 Доступно обновление.png'},
                    {name: '1-2 Установка.png'}
                ]
            },
            {
                title: 'Бот "Цифровой контроль"',
                remark: 'Автоматизация процесса мониторинга сотрудников на объекте',
                src: 'portfolio/tr/telegram/',
                images: [
                    {name: '1-1-1 Регистрация.png'},
                    {name: '1-1-2 Регистрация.png'},
                    {name: '2-1 Контроль работы.png'},
                    {name: '3-1 Чат.png'},
                    {name: '3-2 Чат.png'}
                ]
            }
        ]
    },
    {
        name: 'Авторские',
        filter: 'author',
        items: [
            {
                title: 'django-command',
                remark: 'Утилита для ускорения разработки на Django.',
                href: DJANGO_COMMAND_URL,
                src: 'portfolio/author/dc/',
                images: [{name: 'Главная.gif'}]
            },
            {
                title: 'modern-i18n',
                remark: 'Библиотека упрощает внедрение многоязычности в проекты.',
                href: MODERN_I18N_URL,
                src: 'portfolio/author/mi/',
                images: [{name: 'Главная.jpg'}]
            }
        ]
    }
]

export const logo: TLogo = {
    src: 'logo/',
    items: [
        {name: 'react.png', alt: 'react'},
        {name: 'redux-toolkit.png', alt: 'redux-toolkit'},
        {name: 'vite.png', alt: 'vite'},
        {name: 'webpack.png', alt: 'webpack'},
        {name: 'type-script.png', alt: 'type-script'},
        {name: 'node-js.png', alt: 'node-js'},
        {name: 'express-js.png', alt: 'express-js'},
        {name: 'sequelize.png', alt: 'sequelize'},
        {name: 'material-ui.png', alt: 'material-ui'},
        {name: 'bootstrap.png', alt: 'bootstrap'},
        {name: 'kendo-ui.png', alt: 'kendo-ui'},
        {name: 'python.png', alt: 'python'},
        {name: 'django.png', alt: 'django'},
        {name: 'django-rest-framework.png', alt: 'django-rest-framework'},
        {name: 'pandas.png', alt: 'pandas'},
        {name: 'kafka.png', alt: 'kafka'},
        {name: 'postgresql.png', alt: 'postgresql'},
        {name: 'mysql.png', alt: 'mysql'},
        {name: 'redis.png', alt: 'redis'},
        {name: 'nginx.png', alt: 'nginx'},
        {name: 'docker.png', alt: 'docker'},
        {name: 'docker-compose.png', alt: 'docker-compose'},
        {name: 'git.png', alt: 'git'},
        {name: 'pwa.png', alt: 'pwa'},
        {name: 'workbox.png', alt: 'workbox'}
    ]
}

export const GEO_COORDS: LngLat = [37.617698, 55.755864]
export const GEO_URL = 'https://yandex.ru/maps/geo/moskva/53000094/?ll=37.635249%2C55.746813&z=10'

export const MAX_URL = 'https://max.ru/u/f9LHodD0cOLmvH30yn5VwZetPCRHRvggQjULGOgXwOeVfdLXcmVl69MKM6Q'
export const TELEGRAM_URL = 'https://t.me/+79533133940'
export const WHATSAPP_URL = 'https://wa.me/79533133940'
export const VK_URL = 'https://vk.com/abbas.isaev'