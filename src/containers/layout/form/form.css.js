import styled, { css } from 'styled-components';

// Wrapper - for wrapping layout components.
export const Wrapper = styled.div.withConfig({
    displayName: 'form__layout--wrapper'
})`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    min-height: 100vh;

    ${({ theme: { color }}) => css`
        background-color: ${color.secondary};
    `}
`

// Container - for containing layout components.
export const Container = styled.div.withConfig({
    displayName: 'form__layout--container'
})`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    ${({ theme: { color, media, space }}) => css`
        background-color: ${color.white};
        color: ${color.gray0};

        ${media.tablet`
            overflow: hidden;
            max-width: 38em;
            min-height: auto;
            margin: ${space[8]} auto;
            padding: ${space[4]} ${space[8]};
            border-radius: ${space[1]};
            box-shadow: 0 0 0.1rem 0.1rem ${color.gray4};
        `}

        ${media.laptop`
            margin-right: 10%;
        `}

        ${media.desktop`
            margin-right: 20%;
        `}
    `}
`

// Main - for main wrapper that contains page components in layout.
export const Main = styled.main.withConfig({
    displayName: 'form__layout--main'
})`
    outline: none;
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
    align-content: flex-start;
    margin: 0;
    padding: 0;
`
