/**
 * Theme Structure - used to configure constants for design structure of app core.
 *
 * Using '16px' base to get 'em' calculations.
 * Calculator: http://pxtoem.com/
 */
const { css } = require('styled-components');

// container - for responsive container sizes.
const container = {
    base: '48em', // 768px
    tablet: '52em', // 832px
    laptop: '62em', // 992px
    desktop: '68em', // 1088px
};

// scale - configure universal scale types.
const scale = {
    minorSecond: 1.067,
    majorSecond: 1.125,
    minorThird: 1.200,
    majorThird: 1.250,
    perfectFourth: 1.333,
    augmentedFourth: 1.414,
    perfectFifth: 1.500,
    goldenRatio: 1.618,
};

// breakpoints - configure media query breakpoints.
const breakpoints = {
    phone: '20em', // 320px
    phablet: '30em', // 480px
    tablet: '48em', // 768px
    laptop: '62em', // 992px
    desktop: '75em', // 1200px
    widescreen: '90em', // 1440px
    superwide: '100em', // 1600px
    ultrawide: '150em', // 2400px
};

/**
 * Media - a template utility for iterating through media query breakpoints
 *
 * Breakpoints have been preconfigured to use 'em' units on a 16px base.
 * Reason for using 'em' units is to support users that change their browser font-size.
 *
 * Reference for media templates: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates
 * Reference for 'em' recommendation: https://zellwk.com/blog/media-query-units/
*/
const media = Object.keys(breakpoints).reduce((acc, device) => {
    acc[device] = (...rules) => css`
        @media only screen and (min-width: ${breakpoints[device]}) {
            ${css(...rules)}
        }
    `;

    return acc;
}, {});

// configure structure module exports.
module.exports = {
    container,
    scale,
    breakpoints,
    media,
};
