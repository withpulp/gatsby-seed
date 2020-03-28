import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { SectionWrapper, SectionContainer } from 'components/section/section.css';
import { ContentMeta } from 'components/content/content.css';

// FooterWrapper - for wrapping footer nav container component.
export const FooterWrapper = styled(
    SectionWrapper.withComponent('footer')
).withConfig({
    displayName: 'form__layout--footer-wrapper'
})`
    align-content: stretch;
    z-index: 1;
    flex: none;

    ${({ theme: { color, space }}) => css`
        padding: ${space[4]};
        background-color: ${color.white};
    `}
`

// FooterContainer - for containing footer nav components.
export const FooterContainer = styled(
    SectionContainer.withComponent('div')
).withConfig({
    displayName: 'form__layout--footer-container'
})`
    align-self: flex-end;
    margin: 0 auto !important;
`

// FooterContent - for displaying footer content.
export const FooterContent = styled(ContentMeta).withConfig({
    displayName: 'form__layout--footer-content'
})`
    ${({ theme: { color, space }}) => css`
        margin-top: ${space[4]};
        color: ${color.gray0};
    `}
`

// FooterLink - for displaying footer links.
export const FooterLink = styled(
    ContentMeta.withComponent(Link)
).withConfig({
    displayName: 'form__layout--footer-link'
})`
    display: inline-block;
    flex: none;

    ${({ theme: { color }}) => css`
        color: ${color.gray0};

        &:hover {
            color: ${color.primary};
        }
    `}
`
