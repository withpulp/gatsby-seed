import styled, { css } from 'styled-components';

import { SectionWrapper, SectionContainer } from 'components/section/section.css';

// HeaderWrapper - for wrapping header nav container component.
export const HeaderWrapper = styled(SectionWrapper).withConfig({
    displayName: 'layout__header--wrapper'
})`
    ${({ isVisible, theme: { color, transition }}) => css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        background-color: transparent;
        transition: ${transition.base};

        ${isVisible && `
            position: fixed;
            background-color: ${color.secondary};
        `}
    `}
`

// HeaderContainer - for containing header nav components.
export const HeaderContainer = styled(SectionContainer).withConfig({
    displayName: 'layout__header--container'
})`
    ${({ theme: { space }}) => css`
        align-content: space-between;
        justify-content: center;
        padding: ${space[4]};
    `}
`
