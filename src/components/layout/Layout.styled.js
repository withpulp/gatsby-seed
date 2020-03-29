import styled, { css } from 'styled-components';

import { Wrapper } from 'components/wrapper';

// LayoutWrapper - for wrapping layout components.
export const LayoutWrapper = styled(Wrapper).withConfig({
    displayName: 'layout--wrapper'
})`
    ${({ layoutType, theme: { color }}) => css`
        min-height: 100vh;

        ${layoutType === 'form' && `
            align-content: center;
            align-items: center;
            justify-content: center;
            background-color: ${color.secondary};
        `}
    `}
`;

// LayoutContainer - for containing layout components.
export const LayoutContainer = styled.div.withConfig({
    displayName: 'layout--container'
})`
    ${({ layoutType, theme: { layoutTypes }}) => css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        ${layoutType && layoutTypes[layoutType]}
    `}
`;

// LayoutMain - for main wrapper that contains page components in layout.
export const LayoutMain = styled.main.withConfig({
    displayName: 'layout--main'
})`
    outline: none;
    position: relative;
    z-index: 2;
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
    align-content: flex-start;
    margin: 0;
    padding: 0;
`;
