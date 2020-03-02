import { boxDefaultProps } from 'components/box';

/**
 * sectionDefaultProps - define defaultProps used by Section component or extensions of SectionWrapper and SectionContainer components.
 * 
 * propDefaults can be used to overide the style fallbacks,
 * style fallbacks are defined in the component's stylesheet.
 * See styled-component in `./wrapper.css.js`
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite defaultProps.
 * To import sectionDefaultProps do: `import { sectionDefaultProps } from 'components/section';
 */
const sectionDefaultProps = {
    ...boxDefaultProps,
    as: 'section',
    background: undefined,
    container: 'figure',
    containerHeight: undefined,
    containerType: 'container',
    containerWidth: undefined,
    isCentered: false,
    isCompact: false,
    isFixed: false,
    isFlex: false,
    wrapper: 'section',
    wrapperHeight: undefined,
    wrapperType: 'wrapper',
    wrapperWidth: undefined,
}

export default sectionDefaultProps;
