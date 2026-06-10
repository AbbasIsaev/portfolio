import {Brightness4, Brightness7} from '@mui/icons-material'
import {IconButton, useTheme} from '@mui/material'
import {useContext} from 'react'

import {ThemeContext} from './context/context.ts'

export const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    const theme = useTheme()

    return (
        <IconButton
            onClick={toggleTheme}
            aria-label="toggle theme"
            color="inherit"
            className="ms-2"
        >
            {theme.palette.mode === 'dark' ? <Brightness4/> : <Brightness7/>}
        </IconButton>
    )
}