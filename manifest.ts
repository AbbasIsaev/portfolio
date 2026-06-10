import type {ManifestOptions} from 'vite-plugin-pwa'

export const manifest: Partial<ManifestOptions> = {
    name: 'Portfolio Isaev Abbas',
    short_name: 'Portfolio Isaev A.A.',
    description: 'Портфолио Исаев А.А.',
    start_url: '.',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    orientation: 'portrait',
    lang: 'ru',
    display_override: ['window-controls-overlay', 'fullscreen', 'minimal-ui'],
    display: 'standalone',
    icons: [
        {
            src: 'favicon.ico',
            sizes: '16x16',
            type: 'image/x-icon',
            purpose: 'any'
        },
        {
            src: 'favicon24.ico',
            sizes: '24x24',
            type: 'image/x-icon',
            purpose: 'any'
        },
        {
            src: 'favicon32.ico',
            sizes: '32x32',
            type: 'image/x-icon',
            purpose: 'any'
        },
        {
            src: 'favicon64.ico',
            sizes: '64x64',
            type: 'image/x-icon',
            purpose: 'any'
        },
        {
            src: 'logo192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'any'
        },
        {
            src: 'logo512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any'
        },
        {
            src: 'logo-maskable192.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable'
        },
        {
            src: 'logo-maskable512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable'
        }
    ],
    screenshots: [
        {
            src: './screenshots/screenshot-1.png',
            sizes: '1919x929',
            type: 'image/png',
            form_factor: 'wide'
        },
        {
            src: './screenshots/screenshot-2.png',
            sizes: '1919x929',
            type: 'image/png',
            form_factor: 'wide'
        },
        {
            src: './screenshots/screenshot-3.png',
            sizes: '1919x929',
            type: 'image/png',
            form_factor: 'wide'
        },
        {
            src: './screenshots/screenshot-4.png',
            sizes: '1919x929',
            type: 'image/png',
            form_factor: 'wide'
        },
        {
            src: './screenshots/screenshot-mobile-1.png',
            type: 'image/png',
            sizes: '1080x2184',
            form_factor: 'narrow'
        },
        {
            src: './screenshots/screenshot-mobile-2.png',
            type: 'image/png',
            sizes: '1080x2184',
            form_factor: 'narrow'
        },
        {
            src: './screenshots/screenshot-mobile-3.png',
            type: 'image/png',
            sizes: '1080x2184',
            form_factor: 'narrow'
        },
        {
            src: './screenshots/screenshot-mobile-4.png',
            type: 'image/png',
            sizes: '1080x2184',
            form_factor: 'narrow'
        }
    ]
}