import styled, { css } from 'styled-components';

import { SectionWrapper, SectionContainer } from 'components/section/section.css';
import { ContentMeta } from 'components/content/content.css';

// FooterWrapper - for wrapping footer nav container component.
export const FooterWrapper = styled(SectionWrapper).withConfig({
    displayName: 'layout__footer--wrapper'
})`
    flex: none;
    align-content: stretch;
    z-index: 1;

    ${({ theme: { background }}) => css`
        background: ${background.gradientLinear1};
    `}
`

// FooterContainer - for containing footer nav components.
export const FooterContainer = styled(SectionContainer).withConfig({
    displayName: 'layout__footer--container'
})`
    align-self: flex-end;
    margin: 0 auto !important;
`

// FooterContent - for displaying footer content.
export const FooterContent = styled(ContentMeta).withConfig({
    displayName: 'layout__footer--content'
})`
    ${({ theme: { color }}) => css`
        color: ${color.white};
    `}
`
