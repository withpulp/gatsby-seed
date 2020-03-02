import { contentDefaultProps } from 'components/content';

/**
 * buttonDefaultProps - define defaultProps used by Button component or extensions of Button component.
 * 
 * propDefaults can be used to overide the style fallbacks,
 * style fallbacks are defined in the component's stylesheet.
 * See styled-component in `./button.css.js`
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite defaultProps.
 * To import buttonDefaultProps do: `import { buttonDefaultProps } from 'components/button';
 */
const buttonDefaultProps = {
    ...contentDefaultProps,
    as: 'button',
    buttonType: undefined,
    contentType: 'button',
    isCentered: false,
    isFluid: false,
    isRight: false,
    isWrapper: false,
    type: 'button',
}

export default buttonDefaultProps;
