import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

import {manifest} from './manifest.ts'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
                type: 'module'
            },
            manifest,
            workbox: {
                // Ограничивает размер кэшируемых файлов 5Мб
                maximumFileSizeToCacheInBytes: 5_000_000
            }
        })
    ],
    build: {
        rollupOptions: {
            output: {
                // Настройка code splitting
                codeSplitting: {
                    groups: [
                        {
                            // Поместит react-plotly в отдельный chunk сборки
                            name: 'react-plotly',
                            test: /node_modules[\\/]react-plotly.js/
                        }
                    ]
                }
            }
        }
    },
    server: {
        // Разрешает входящие подключения по локальной сети
        host: '0.0.0.0',
        port: 5173
    }
})