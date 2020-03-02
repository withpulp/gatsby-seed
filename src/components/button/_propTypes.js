import PropTypes from 'prop-types';
import { contentPropTypes } from 'components/box';

/**
 * buttonPropTypes - define propTypes used by Button component or extensions of Button component.
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite propTypes.
 * to import buttonPropTypes do: `import { buttonPropTypes } from 'components/button';
 */
const buttonPropTypes = {
    ...contentPropTypes,
    buttonType: PropTypes.string, // to set buttonType using buttonType method configured in `./button.css.js`
    isCentered: PropTypes.bool, // to toggle isCentered button styles configured in `./button.css.js`
    isFluid: PropTypes.bool, // to toggle isFluid button styles configured in `./button.css.js`
    isRight: PropTypes.bool, // to toggle isRight button styles configured in `./button.css.js`
    isWrapper: PropTypes.bool, // to toggle isWrapper button styles configured in `./button.css.js`
    type: PropTypes.string, // to set element type
}

export default buttonPropTypes;
