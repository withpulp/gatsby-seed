/**
 * Theme Color Palette
 *
 * Create constants for theme color palette.
 * 
 * Reference for naming color variables: https://davidwalsh.name/sass-color-variables-dont-suck
 * Reference for naming color variables: https://alexpate.uk/journal/naming-sass-color-variables/
 * Referece for color naming conventions: https://codepen.io/nicetransition/pen/QjwbRg
 */
const { compliment, darken, invert, lighten, rgba } = require('polished');

// Brand palette
const brand = {
  primary: '#e63946',
  get primaryDark() { return darken(0.15, `${this.primary}`) },
  get primaryLight() { return lighten(0.15, `${this.primary}`) },
  secondary: '#313638',
  get secondaryDark() { return darken(0.15, `${this.secondary}`) },
  get secondaryLight() { return lighten(0.15, `${this.secondary}`) },
};

// Service palette
const service = {
    fail: '#db3236',
    info: '#4885ed',
    pass: '#3cba54',
    warn: '#f4c20d',
};

// Color palette
const color = {
  ...brand,
  ...service,
  black: '#000',
  gray0: '#1c1f1f',
  gray1: '#3a3f40',
  gray2: '#484e4f',
  gray3: '#656e70',
  gray4: '#727d80',
  gray: '#7e8b8f',
  gray6: '#a0afb3',
  gray7: '#bbcdd4',
  gray8: '#d1e6ed',
  gray9: '#e1f7ff',
  white: '#fff',
};

// Color modifier
const colorMod = (color, value, type) => {
    switch (type) {
        case 'compliment':
            return compliment(color);
        case 'darken':
            return darken(value, color);
        case 'invert':
            return invert(color);
        case 'lighten':
            return lighten(value, color);
        case 'rgba':
        default:
            return rgba(color, value);
    }
};

// palette module exports.
module.exports = {
    color,
    colorMod,
};
