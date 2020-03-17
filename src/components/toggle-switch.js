import React from 'react'
import styled, { css, withTheme } from 'styled-components'
import Switch from 'react-switch'
import { FaSun, FaMoon } from 'react-icons/fa'

const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
`

const SwitchIcon = css`
    display: inline-block;
    font-size: 22px;
    color: ${({ theme }) => theme.primaryColor};
`

const SwitchLight = styled(FaSun)`
    ${SwitchIcon}
    padding-right: 5px;
`

const SwitchDark = styled(FaMoon)`
    ${SwitchIcon}
    padding-left: 5px;
`

const ToggleSwitch = props => {
    return (
        <SwitchContainer>
            <SwitchLight />
            <label name="switch" htmlFor="switch">
                <Switch
                    name="switch"
                    aria-role="checkbox"
                    aria-checked={props.isDarkMode}
                    checked={props.isDarkMode}
                    onChange={props.toggleTheme}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    activeBoxShadow={`0 0 2px 3px ${props.theme.tertiaryColor}`}
                    onColor={props.theme.primaryColor}
                    offColor={props.theme.primaryColor}
                    onHandleColor={props.theme.fontColor}
                    height={22}
                    width={40}
                />
            </label>
            <SwitchDark />
        </SwitchContainer>
    )
}

export default withTheme(ToggleSwitch)
