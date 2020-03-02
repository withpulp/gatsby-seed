/**
 * Theme Composition - to configure constants used as utilities for design composition.
 */
const { color, colorMod } = require('./_palette');

// background - for various background compositions.
const background = {
    base: color.white,
    gradientLinear0: `linear-gradient(
        to bottom,
        ${color.secondaryDark} 0%,
        ${color.secondaryDark} 10%,
        ${color.secondary} 100%
    )`,
    gradientLinear1: `linear-gradient(
        ${color.secondary} 0%,
        ${color.secondary} 10%,
        ${color.secondaryDark} 100%
    )`,
    gradientRadial0: `radial-gradient(
        ellipse at center,
        ${colorMod(color.secondary, 0.75)} 0%,
        ${colorMod(color.secondaryDark, 0.50)} 100%
    )`,
    gradientRadial1: `radial-gradient(
        ellipse at center,
        ${colorMod(color.secondaryLight, 0.75)} 0%,
        ${colorMod(color.secondary, 0.50)} 100%
    )`,
};

// border - for complete border compositons.
const border = {
    thin: '0.1rem solid',
    base: '1px solid',
    strong: '2px solid',
    thick: '3px solid',
    dropzone: '1px dashed',
};

// TODO: update shadow values
// shadow - for various box-shadow style compositions.
const shadow = {
    bar: `0 0 0.1rem 0.1rem ${color.gray9}`,
    card: `0.15rem 0.15rem 0.5rem 0 ${color.gray}`,
    cardPress: `inset 0.15rem 0.15rem 0.5rem 0 ${color.gray}`,
    media: `0 0 0 0.1rem ${color.primary}`,
    input: `inset 0 0 0.1rem 0.1rem ${color.gray}`,
    inputFocus: `inset 0 0 0.1rem 0.1rem ${colorMod(color.primary, 0.75)}`,
    buttonHover: `0 0 0.5rem 0.25rem ${colorMod(color.secondary, 0.25)}`,
    buttonActive: `0 0 0.5rem 0.15rem ${colorMod(color.secondary, 0.25)}`,
};

// space - for various space dimensions.
const space = {
    '0': 0,
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': `6rem`,
    '32': `8rem`,
    '48': `12rem`,
    '64': `16rem`,
};

// spaceCalc - for calculating space sizes.
const spaceCalc = (base, scale) => `calc(${base ? `${base}` : 1} * ${scale})`;

// time - for various time properties.
const time = {
    fast: '100ms',
    base: '250ms',
    split: '500ms',
    second: '1000ms',
    double: '2000ms',
    triple: '3000ms',
    quad: '4000ms',
    slow: '5000ms',
};

// transition - for animated transition events.
const transition = {
    base: `all ${time.base} ease`,
    action: `background-color ${time.base} ease, border-color ${time.base} ease, color ${time.base} ease`,
};

// TODO: refactor with array parm to loop through different el, dur and eff.
// transitionCalc - for calculated animated transition events.
const transitionCalc = (el, dur, eff) => {
    const target = `${el ? `${el}` : 'all'}`;
    const duration = `${dur ? `${dur}` : `${time.base}`}`;
    const effect = `${eff ? `${eff}` : 'ease'}`;

    return `${target} ${duration} ${effect}`;
};

// configure composition module exports.
module.exports = {
    background,
    border,
    shadow,
    space,
    spaceCalc,
    time,
    transition,
    transitionCalc,
};
