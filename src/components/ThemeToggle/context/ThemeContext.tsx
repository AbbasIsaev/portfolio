import CssBaseline from '@mui/material/CssBaseline'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {type ReactNode, useEffect, useMemo, useState} from 'react'

import {ThemeContext} from './context.ts'

const updateBodyTheme = (mode: 'light' | 'dark') => {
    document.body.classList.remove('light-theme', 'dark-theme')
    document.body.classList.add(mode === 'dark' ? 'dark-theme' : 'light-theme')
}

export const ThemeProviderWrapper = ({children}: { children: ReactNode }) => {
    const [mode, setMode] = useState<'light' | 'dark'>(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark' || savedTheme === 'light') {
            return savedTheme
        }
        // Если тема не сохранена — используем системную предпочтительную
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'
    })

    useEffect(() => {
        updateBodyTheme(mode)
        localStorage.setItem('theme', mode)
    }, [mode])

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const theme = useMemo(
        () =>
            createTheme({
                palette: {mode}
            }),
        [mode]
    )

    return (
        <ThemeContext value={{toggleTheme}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>

                {children}
            </ThemeProvider>
        </ThemeContext>
    )
}