import PropTypes from 'prop-types';

import { boxPropTypes } from 'components/box';

/**
 * contentPropTypes - define propTypes used by Content component or extensions of ContentContainer component.
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite propTypes.
 * to import contentPropTypes do: `import { contentPropTypes } from 'components/content';
 * 
 * TODO: add all available css text props: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text
 */
const contentPropTypes = {
    ...boxPropTypes,
    contentAlign: PropTypes.string, // to set text-align using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
    contentColor: PropTypes.string, // to set color using available color props configured in `theme/constants/_palette.js`
    contentDecoration: PropTypes.string, // to set text-decoration using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
    contentFont: PropTypes.string, // to set font-size available fontFamily options in `theme/constants/_content.js`
    contentKerning: PropTypes.string, // to set letter-spacing using available letterSpacing props configured in `theme/constants/_content.js
    contentShadow: PropTypes.string, // to set text-shadow using available textShadow props configured in `theme/constants/_content.js`
    contentSize: PropTypes.string, // to set font-size using available fontSize props configured in `theme/constants/_content.js`
    contentTracking: PropTypes.string, // to set line-height using available lineHeight props configured in `theme/constants/_content.js`
    contentTransform: PropTypes.string, // to set text-transform using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
    contentType: PropTypes.string, // to set contentType using type styles props configured in `theme/constants/_types.js`
    contentWeight: PropTypes.string, // to set font-weight using available fontWeight props configured in `theme/constants/_palette.js`
}

export default contentPropTypes;
