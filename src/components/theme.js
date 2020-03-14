import React from 'react'
import { ThemeProvider } from 'styled-components'

const lightMode = {
    colors: {
        primaryColor: `#000`,
        secondaryColor: `#666`,
        tertiaryColor: `#ccc`,
        fontColor: `#fff`,
    },
    coverBg: `linear-gradient(#f5f5f5 35%, #ededed 65%)`,
    background: `#ededed`,
}

const darkMode = {
    colors: {
        primaryColor: `#fff`,
        secondaryColor: `#ccc`,
        tertiaryColor: `#666`,
        fontColor: `#000`,
    },
    coverBg: `linear-gradient(#f5f5f5 35%, #ededed 65%)`,
    background: `#000`
}

const Theme = (props) => {
    return (
        <ThemeProvider
            theme={props.isDarkMode ? darkMode : lightMode}
        >
            {props.children}
        </ThemeProvider>
    )
}

export default Theme