import './Footer.css'

import MaxLogo from '../../assets/svg/max.svg?react'
import TelegramLogo from '../../assets/svg/telegram.svg?react'
import VkLogo from '../../assets/svg/vk.svg?react'
import WhatsappLogo from '../../assets/svg/whatsapp.svg?react'
import {MAX_URL, TELEGRAM_URL, VK_URL, WHATSAPP_URL} from '../data.ts'

export const Footer = () => {
    const copyright = `2026${new Date().getFullYear() > 2026 ? `-${new Date().getFullYear()}` : ''}`

    return (
        <footer id="footer" className="footer light-background">

            <div className="container">
                <div className="copyright text-center ">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Isaev Abbas</strong>
                        <span>All Rights Reserved {copyright}</span>
                    </p>
                </div>

                <div className="social-links d-flex justify-content-center">
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

        </footer>
    )
}