import React from 'react'
import { ThemeProvider } from 'styled-components'

const fonts = {
    normal: `Roboto Condensed, Segoe UI, Arial`,
    code: `Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New`,
}

const lightMode = {
    fonts: { fonts },
    primaryColor: `#000`,
    secondaryColor: `#666`,
    tertiaryColor: `#ccc`,
    fontColor: `#fff`,
    background: `#e7e7e7`,
    boxShadow: `rgba(0, 0, 0, .2)`,
    coverBg: `linear-gradient(#f5f5f5 35%, #e7e7e7 65%)`,
    menuBg: `#f6f7f7`,
}

const darkMode = {
    fonts: { fonts },
    primaryColor: `#fff`,
    secondaryColor: `#999`,
    tertiaryColor: `#333`,
    fontColor: `#000`,
    background: `#000`,
    boxShadow: `rgba(255, 255, 255, .2)`,
    coverBg: `linear-gradient(#0c0c0c 25%, #000 75%)`,
    menuBg: `#0c0e0e`,
}

const Theme = props => {
    return (
        <ThemeProvider theme={props.isDarkMode ? darkMode : lightMode}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme
