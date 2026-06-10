import './Navigation.css'

import {useEffect} from 'react'

import MaxLogo from '../../assets/svg/max.svg?react'
import TelegramLogo from '../../assets/svg/telegram.svg?react'
import VkLogo from '../../assets/svg/vk.svg?react'
import WhatsappLogo from '../../assets/svg/whatsapp.svg?react'
import {ThemeToggle} from '../../components/ThemeToggle'
import {MAX_URL, TELEGRAM_URL, VK_URL, WHATSAPP_URL} from '../data.ts'
import menu from './menu.js'

export const Navigation = () => {
    useEffect(() => {
        menu()
    }, [])

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div
                className="header-container container-fluid container-xl position-relative
                            d-flex align-items-center justify-content-between"
            >

                <a href="" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">Исаев Аббас</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#start" className="active">Начало</a></li>
                        <li><a href="#resume">О себе</a></li>
                        <li><a href="#portfolio">Портфолио</a></li>
                        <li><a href="#contact">Как связаться</a></li>
                        <li><ThemeToggle/></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <div className="header-social-links">
                    <a href={MAX_URL} target="_blank" rel="noreferrer">
                        <MaxLogo/>
                    </a>
                    <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                        <TelegramLogo/>
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                        <WhatsappLogo/>
                    </a>
                    <a href={VK_URL} target="_blank" rel="noreferrer">
                        <VkLogo/>
                    </a>
                </div>

            </div>
        </header>
    )
}