/**
 * Theme Types - used to configure constants used for composing different component types in app src.
 *
 * UX guide to content types: https://www.uxbooth.com/articles/a-useful-guide-to-content-types-part-1/
 */
const { css } = require('styled-components');

const { border, space, transition } = require('./_composition');
const { fontFamily, fontSize, fontScale, fontWeight, letterSpacing, lineHeight } = require('./_content');
const { color } = require('./_palette');
const { container, media } = require('./_structure');

// TODO: split this up into multiple files inside a theme/types directory.

// _base - for configuring base styles shared by various theme types.
const _base = `
    outline: none;
    position: relative;
    margin: 0;
    padding: 0;
`

// _flex - for configuring flex styles shared by various theme types.
const _flex = `
    ${_base}
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
`

// _box - for configuring base styles of Box component.
const _box = `
    ${_flex}
    width: auto;
    height: auto;
`

// _button - for configuring default styles of Button component.
const _button = `
    user-select: none;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    display: inline-block;
    padding: ${space[4]} ${space[8]};
    border: ${border.base} ${color.gray7};
    background-color: ${color.gray7};
    color: ${color.secondary};
    font-weight: ${fontWeight.medium};
    line-height: ${lineHeight.normal};
    transition: ${transition.action};

    &:hover {
        border-color: ${color.primary};
        background-color: ${color.primary};
        color: ${color.secondary};
        text-decoration: none;
    }

    &:active {
        border-color: ${color.secondary};
        background-color: ${color.secondary};
        color: ${color.white};
        text-decoration: none;
    }
`

// _content - for configuring base styles of Content component.
const _content = `
    ${_flex}
    display: block;
    align-items: inherit;
    align-content: inherit;
    justify-content: inherit;
    text-align: left;
    text-decoration: none;
    text-transform: none;
`

const _contentHeading = `
    ${_content}
    margin: ${space[4]} auto ${space[6]};
    font-weight: ${fontWeight.bold};
    line-height: ${lineHeight.heading};
`

const _contentSubheading = `
    ${_content}
    margin: ${space[2]} auto;
    font-weight: ${fontWeight.normal};
    line-height: ${lineHeight.heading};
`

const _grid = `
    ${_base}
    display: grid;
    grid-gap: ${space[4]};
`

// boxTypes - for configuring boxTypes used to set boxType of Box component.
const boxTypes = {
    base: css`
        ${_box}
    `,
    // TODO: maybe better to move this to cardTypes and use to render different Card components
    card: css`
        ${_box}
        margin: 0 auto;
        padding: ${space[4]};

        ${media.tablet`
            padding: ${space[8]};
        `}
    `,
    container: css`
        ${_box}
        align-content: flex-start;
        align-items: flex-start;
        justify-content: flex-start;
        max-width: ${container.base};
        margin: ${space[6]} auto;
        padding: ${space[4]};

        ${media.tablet`
            max-width: ${container.tablet};
            margin-top: ${space[8]};
            margin-bottom: ${space[8]};
        `}

        ${media.laptop`
            max-width: ${container.laptop};
            margin-top: ${space[12]};
            margin-bottom: ${space[12]};
        `}

        ${media.desktop`
            max-width: ${container.desktop};
            margin-top: ${space[16]};
            margin-bottom: ${space[16]};
        `}
    `,
    flex: css``,
    grid: css``,
    // TODO: better to move topbar to sectionTypes and keep boxTypes more utilitarian
    topbar: css`
        ${_box}
        align-content: space-between;
        justify-content: center;
        width: 100%;
        z-index: 3;
    `,
    wrapper: css`
        ${_box}
        align-content: center;
        align-items: center;
        justify-content: center;
    `,
}

// buttonTypes - for configuring buttonTypes used to set buttonType of Button component.
const buttonTypes = {
    default: css`
        ${_button}
    `,
    primary: css`
        ${_button}
        border-color: ${color.primary};
        background-color: ${color.primary};
        color: ${color.secondaryDark};

        &:hover {
            border-color: ${color.primaryLight};
            background-color: ${color.primaryLight};
            color: ${color.secondary};
        }

        &:active {
            border-color: ${color.primaryDark};
            background-color: ${color.primaryDark};
            color: ${color.secondaryDark};
        }
    `,
    secondary: css`
        ${_button}
        border-color: ${color.secondary};
        background-color: ${color.secondary};
        color: ${color.white};

        &:hover {
            border-color: ${color.secondaryLight};
            background-color: ${color.secondaryLight};
            color: ${color.white};
        }

        &:active {
            border-color: ${color.secondaryDark};
            background-color: ${color.secondaryDark};
            color: ${color.white};
        }
    `,
    transparent: css`
        ${_button}
        border-color: transparent;
        background-color: transparent;
        color: ${color.gray0};

        &:hover {
            border-color: transparent;
            background-color: transparent;
            color: ${color.gray1};
        }

        &:active {
            background-color: transparent;
            color: ${color.black};
        }
    `,
};

// contentTypes - for configuring contentTypes used to set contentType of Content component.
const contentTypes = {
    base: css`
        ${_content}
    `,
    body: css`
        ${_content}
        ${fontScale(fontSize.body)}
        margin-bottom: ${space[6]};
        font-family: ${fontFamily.body};
        font-weight: ${fontWeight.normal};
        line-height: ${lineHeight.body};
    `,
    button: css`
        ${_content}
        ${fontScale(fontSize.strong)}
        font-family: ${fontFamily.heading};
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.normal};
    `,
    h1: css`
        ${_contentHeading}
        ${fontScale(fontSize.h1)}
    `,
    h2: css`
        ${_contentHeading}
        ${fontScale(fontSize.h2)}
    `,
    h3: css`
        ${_contentHeading}
        ${fontScale(fontSize.h3)}
    `,
    h4: css`
        ${_contentHeading}
        ${fontScale(fontSize.h4)}
    `,
    h5: css`
        ${_contentHeading}
        ${fontScale(fontSize.h5)}
    `,
    h6: css`
        ${_contentHeading}
        ${fontScale(fontSize.h6)}
    `,
    heading: css`
        ${_contentHeading}
        ${fontScale(fontSize.h1)}
    `,
    hero: css`
        ${_contentHeading}
        ${fontScale(fontSize.hero)}
        margin: 0 auto;
    `,
    jumbo: css`
        ${_contentHeading}
        ${fontScale(fontSize.jumbo)}
        margin: ${space[4]} auto ${space[2]};
        letter-spacing: ${letterSpacing.wide};
    `,
    legal: css`
        ${_content}
        ${fontScale(fontSize.legal)}
        font-family: ${fontFamily.code};
        font-weight: ${fontWeight.thin};
        letter-spacing: ${letterSpacing.tight};
        line-height: ${lineHeight.normal};
    `,
    legend: css`
        ${_contentHeading}
        ${fontScale(fontSize.legend)}
        margin: ${space[2]} auto ${space[4]};
        letter-spacing: ${letterSpacing.wide};
    `,
    link: css`
        ${_content}
        ${fontScale(fontSize.body)}
        color: ${color.primary};
        font-family: ${fontFamily.body};
        font-weight: ${fontWeight.normal};
        line-height: ${lineHeight.body};
        text-decoration: underline;

        &:hover {
            color: ${color.primaryLight};
        }

        &:active {
            color: ${color.primaryDark};
        }
    `,
    meta: css`
        ${_content}
        ${fontScale(fontSize.meta)}
        font-weight: ${fontWeight.normal};
        line-height: ${lineHeight.heading};
    `,
    small: css`
        ${_content}
        ${fontScale(fontSize.small)}
        font-weight: ${fontWeight.light};
        line-height: ${lineHeight.normal};
    `,
    strong: css`
        ${_content}
        ${fontScale(fontSize.strong)}
        font-weight: ${fontWeight.medium};
        line-height: ${lineHeight.body};
    `,
    subheading: css`
        ${_contentSubheading}
        ${fontScale(fontSize.h6)}
    `,
};

// gridTypes - for configuring gridTypes used to set gridType of Grid component.
const gridTypes = {
    base: css`
        ${_grid}
    `,
};

// TODO: create linkTypes to use with Link component.
// const linkTypes = {};

// TODO: create listTypes to use with List component.
// const listTypes = {};

// TODO: create modTypes to use with all components as style modifiers
// const modTypes = {};

// configure types module exports.
module.exports = {
    boxTypes,
    buttonTypes,
    contentTypes,
    gridTypes,
    // linkTypes,
    // listTypes,
    // modTypes,
};
