import styled, { css } from 'styled-components';

import { ContentBody } from 'components/content/content.css';

export const MenuContainer = styled.nav.withConfig({
    displayName: 'footer__menu--container',
})`
    ${({ theme: { media, space }}) => css`
        display: flex;
        flex: 1 100%;
        flex-flow: row wrap;
        justify-content: flex-end;
        overflow: hidden;
        margin: ${space[6]} 0;

        ${media.tablet`
            margin: ${space[12]} 0;    
        `}
    `}
`

export const MenuList = styled.ul.withConfig({
    displayName: 'footer__menu--list'
})`
    width: 100%;
    height: auto;
    flex: 1 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const MenuItem = styled.li.withConfig({
    displayName: 'footer__menu--list-item'
})`
    ${({ theme: { space }}) => css`
        display: inline-block;
        flex: 1;
        margin-right: ${space[8]};
        margin-bottom: ${space[4]};
    `}
`

export const MenuLink = styled(ContentBody).withConfig({
    displayName: 'footer__menu--link'
})`
    ${({ theme: { color, fontWeight }}) => css`
        display: flex;
        margin: 0;
        align-items: center;
        text-decoration: none;
        color: ${color.primary};
        font-weight: ${fontWeight.medium};

        &:hover {
            color: ${color.primaryLight};
        }

        &:active {
            color: ${color.primaryDark};
        }
    `}
`
