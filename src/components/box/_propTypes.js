import PropTypes from 'prop-types';

/**
 * boxPropTypes - define propTypes used by Box component or extensions of Box component.
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite propTypes.
 * to import boxPropTypes do: `import { boxPropTypes } from 'components/box';
 */
const boxPropTypes = {
    alignContent: PropTypes.string,
    alignItems: PropTypes.string,
    as: PropTypes.string, // to set the html element of BoxContainer (defaults to div)
    backgroundColor: PropTypes.string,  // to set background-color using available color props configured in `theme/constants/_palette.js`.
    borderBottom: PropTypes.string,
    borderColor: PropTypes.string,
    borderLeft: PropTypes.string,
    borderRadius: PropTypes.string,
    borderRight: PropTypes.string,
    borderTop: PropTypes.string,
    boxBorder: PropTypes.string,
    boxDisplay: PropTypes.string, // to set display using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/display
    boxHeight: PropTypes.string,
    boxShadow: PropTypes.string,
    boxTransform: PropTypes.string,
    boxTransition: PropTypes.string,
    boxType: PropTypes.string,
    boxWidth: PropTypes.string,
    children: PropTypes.node, // to render components, html elements or text that will inherit your configured content styles
    flex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]), // to set flex using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/flex
    flexFlow: PropTypes.string, // to set flex using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
    justifyContent: PropTypes.string,
    margin: PropTypes.string,
    marginBottom: PropTypes.string, // to set margin-bottom using available space props configured in `theme/constants/_composition.js`
    marginLeft: PropTypes.string, // to set margin-left using available space props configured in `theme/constants/_composition.js`
    marginRight: PropTypes.string, // to set margin-right using available space props configured in `theme/constants/_composition.js`
    marginTop: PropTypes.string, // to set margin-top using available space props configured in `theme/constants/_composition.js`
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
    minHeight: PropTypes.string,
    minWidth: PropTypes.string,
    opacity: PropTypes.number,
    order: PropTypes.number, // to set order using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/order
    padding: PropTypes.string, // to set padding using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/padding
    paddingBottom: PropTypes.string, // to set padding-bottom using available space props configured in `theme/constants/_composition.js`
    paddingLeft: PropTypes.string, // to set padding-left using available space props configured in `theme/constants/_composition.js`
    paddingRight: PropTypes.string, // to set padding-right using available space props configured in `theme/constants/_composition.js`
    paddingTop: PropTypes.string, // to set padding-top using available space props configured in `theme/constants/_composition.js`
    position: PropTypes.string,
    positionBottom: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    positionLeft: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    positionRight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    positionTop: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    zIndex: PropTypes.string,
}

export default boxPropTypes;
