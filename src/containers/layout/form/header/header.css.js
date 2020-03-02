import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { SectionWrapper, SectionContainer } from 'components/section/section.css';
import { ContentH5 } from 'components/content/content.css';

// HeaderWrapper - for wrapping header nav container component.
export const HeaderWrapper = styled(
    SectionWrapper.withComponent('header')
).withConfig({
    displayName: 'form__layout--header-wrapper'
})`
    z-index: 3;
    width: 100%;
    flex: none;

    ${({ theme: { color, transition }}) => css`
        transition: ${transition.base};
        background-color: ${color.white};
    `}
`

// HeaderContainer - for containing header nav components.
export const HeaderContainer = styled(
    SectionContainer.withComponent('nav')
).withConfig({
    displayName: 'form__layout--header-container'
})`
    align-content: space-between;
    margin: 0 auto !important;
`

// HeaderBrand - for wrapping brand logo with a link.
export const HeaderBrand = styled(
    ContentH5.withComponent(Link)
).withConfig({
    displayName: 'form__layout--header-brand'
})`
    z-index: 10;
    display: flex;
    flex: none;
    margin: 0;
    text-decoration: none;

    ${({ theme: { color }}) => css`
        color: ${color.primary};

        &:hover {
            color: ${color.primary};
        }
    `}
`
