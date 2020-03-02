import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

// BrandContainer - for containing brand components.
export const BrandContainer = styled.div.withConfig({
    displayName: 'header__brand--container'
})`
    ${({ theme: { media, transition }}) => css`
        display: flex;
        flex-flow: row wrap;
        flex: 1;
        align-items: center;
        transition: ${transition.base};

        ${media.tablet`
            flex: none;
        `}
    `}
`

// BrandLink - for wrapping brand logo with a link.
export const BrandLink = styled(Link).withConfig({
    displayName: 'header__brand--link'
})`
    ${({ theme: { color }}) => css`
        display: flex;
        flex: none;
        align-items: center;
        z-index: 10;
        color: ${color.secondary};

        &:hover {
            color: ${color.core};
        }
    `}
`

// BrandLogo - for displaying brand logo sharp image.
export const BrandLogo = styled(Img).withConfig({
    displayName: 'header__brand--logo'
})`
    ${({ theme: { space }}) => css`
        width: ${space[8]};
        height: ${space[8]};
    `}
`
