import styled, { css } from 'styled-components';
  
// MenuContainer - for containing menu components.
export const MenuContainer = styled.div.withConfig({
    displayName: 'header__menu--container'
})`
    ${({ isMenuOpen, theme: { color, media }}) => css`
        display: flex;
        flex: 1;
        flex-flow: row wrap;
        justify-content: flex-end;
        overflow: hidden;

        ${isMenuOpen && `
            position: fixed;
            top: 0;
            left: 0;
            z-index: 5;
            padding: 0;
            width: 100%;
            height: 100vh;
            background-color: ${color.secondary};
        `}

        ${media.tablet`
            position: relative;
            height: 100%;
            background-color: transparent;
        `};
    `}
`

// MenuButton - for menu button use to toggle menu state.
export const MenuButton = styled.button.withConfig({
    displayName: 'header__menu--button'
}).attrs({
    type: 'button'
})`
    ${({ isMenuOpen, theme: { media, space }}) => css`
        margin: 0;
        border: 0;
        border-radius: 0;
        box-shadow: none;
        background-color: transparent;
        padding: ${space[1]};

        &:hover,
        &:active {
            box-shadow: none;
            background-color: transparent;
        }

        ${ isMenuOpen && `
            position: fixed;
            top: ${space[4]};
            right: ${space[4]};
            z-index: 1;
        `}

        ${media.tablet`
            display: none;
        `};
    `}
`

// MenuIcon - https://codepen.io/samikeijonen/pen/jqvxdL
export const MenuIcon = styled.svg.withConfig({
    displayName: 'header__menu--icon'
})`
    display: inline-block;
    position: relative;
    vertical-align: middle;
    height: 1.5em;
    width: 1.5em;

    .menu--icon-line {
        opacity: 1;
        transform: rotate(0) translateY(0) translateX(0);
        transform-origin: 2em 2em;
        transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;

        ${({ isMenuOpen, theme: { color }}) => css`
            fill: ${color.primary};

            &.top {
                transform-origin: 1em 2.25em;
          
                ${isMenuOpen && `
                    transform: rotate(45deg) translateY(0) translateX(0);
                `}
            }

            &.middle {
                ${isMenuOpen && `
                    opacity: 0;
                `};
            }

            &.bottom {
                transform-origin: 1em 3.75em;
          
                ${isMenuOpen && `
                    transform: rotate(-45deg) translateY(0em) translateX(0em);
                `}
            }
        `}
    }
`

export const MenuList = styled.ul.withConfig({
    displayName: 'header__menu--list'
})`
    ${({ isMenuOpen, theme: { media }}) => css`
        display: ${isMenuOpen ? 'flex' : 'none'};
        flex: 1 100%;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-content: space-evenly;
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;

        ${media.tablet`
            display: flex;
            position: relative;
            top: auto;
            right: auto;
            transform: none;
            flex: none;
            width: auto;
        `}
    `}
`

export const MenuItem = styled.li.withConfig({
    displayName: 'header__menu--item'
})`
    ${({ theme: { color, fontSize, fontWeight, media, space, transition }}) => css`
        display: block;
        flex: 1 100%;
        height: 10em;

        ${media.tablet`
            display: inline-block;
            flex: 1;
            height: 100%;
        `}

        > a {
            display: flex;
            align-items: center;
            height: 100%;
            margin: 0 ${space[4]};
            padding: ${space[4]};
            transition: ${transition.base};
            color: ${color.primary};
            font-weight: ${fontWeight.medium};
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;

            &:hover {
                color: ${color.primaryLight};
            }

            &:active {
                color: ${color.primaryDark};
            }

            @media only screen and (max-width: 767px) {
                font-size: ${fontSize.h4};
            }

            ${media.tablet`
                padding: 0;
                color: ${color.primary};
            `}
        }
    `}
`
