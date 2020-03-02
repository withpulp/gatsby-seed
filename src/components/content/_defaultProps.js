import { boxDefaultProps } from 'components/box';

/**
 * contentDefaultProps - define defaultProps used by Content component or extensions of ContentContainer components.
 * 
 * propDefaults can be used to overide the style fallbacks,
 * style fallbacks are defined in the component's stylesheet.
 * See styled-component in `./content.css.js`
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite defaultProps.
 * To import contentDefaultProps do: `import { contentDefaultProps } from 'components/content';
 */
const contentDefaultProps = {
    ...boxDefaultProps,
    as: 'p',
    contentAlign: undefined,
    contentColor: undefined,
    contentDecoration: undefined,
    contentFont: undefined,
    contentKerning: undefined,
    contentShadow: undefined,
    contentSize: undefined,
    contentTracking: undefined,
    contentTransform: undefined,
    contentType: undefined,
    contentWeight: undefined,
}

export default contentDefaultProps;
