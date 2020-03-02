/**
 * Theme Content - to configure constants used for design content.
 */
const { css } = require('styled-components');
const { modularScale } = require('polished');

const { color } = require('./_palette');
const { media } = require('./_structure');

// fontFamily - for configuring font-family of content.
const fontFamily = {
    body: '"Roboto", Helvetica, Arial, sans-serif',
    heading: '"Roboto", Helvetica, Arial, sans-serif',
    code: 'Menlo, Monaco, Consolas, Courier, monospace',
};

// fontSize - for configuring font-size of content.
const fontSize = {
    base: '16px', // base pixel size
    legal: '0.7em', // fine print
    small: '0.8em', // small, sub, sup
    meta: '0.9em', // small, time
    body: '1em', // body, span, p, li, td, a, button
    strong: '1.05em', // h6, strong, th
    h6: '1.1em', // h6, h5
    h5: '1.25em', // h5, h4
    h4: '1.5em', // h4, h3
    h3: '1.75em', // h3, h2
    h2: '2em', // h2, h1
    h1: '2.25em', // h1
    hero: '2.5em', // hero
    legend: '2.75em', // legend
    jumbo: '3em', // jumbo
};

// fontWeight - for configuring font-weight of content.
const fontWeight = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
};

// letterSpacing - for configuring letter-spacing of content.
const letterSpacing = {
    tight: `-1.25px`,
    normal: '0',
    wide: '1.25px',
};

// lineHeight - for configuring line-height of content.
const lineHeight = {
    short: 0.75,
    normal: 1,
    heading: 1.25,
    body: 1.5,
    tall: 2,
    hero: 3,
};

// textShadow - for configuring text-shadow of content.
const textShadow = {
    heading: `${color.gray0} 1px 1px 0, -11px -11px 7px rgba(26,30,31,0);`,
};

// typeScale - for scaling content size with modularScale.
const typeScale = {
    phone: 0.1,
    phablet: 0.15,
    tablet: 0.2,
    laptop: 0.25,
    desktop: 0.3,
    widescreen: 0.35,
    superwide: 0.4,
    ultrawide: 0.45,
};

// fontScale - for scaling font-size with modularScale
const fontScale = (size) => {
    const responsiveFonts = css`
        font-size: ${size};

        ${media.phone`
            font-size: ${modularScale(typeScale.phone, size)};
        `}

        ${media.phablet`
            font-size: ${modularScale(typeScale.phablet, size)};
        `}

        ${media.tablet`
            font-size: ${modularScale(typeScale.tablet, size)};
        `}

        ${media.laptop`
            font-size: ${modularScale(typeScale.laptop, size)};
        `}

        ${media.desktop`
            font-size: ${modularScale(typeScale.desktop, size)};
        `}

        ${media.widescreen`
            font-size: ${modularScale(typeScale.widescreen, size)};
        `}

        ${media.superwide`
            font-size: ${modularScale(typeScale.superwide, size)};
        `}

        ${media.ultrawide`
            font-size: ${modularScale(typeScale.ultrawide, size)};
        `}
    `

    return responsiveFonts;
};

// configure content module exports.
module.exports = {
    fontFamily,
    fontScale,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textShadow,
    typeScale,
};
