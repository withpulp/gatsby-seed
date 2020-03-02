/**
 * boxDefaultProps - define defaultProps used by Box component or extensions of Box component.
 * 
 * propDefaults can be used to overide the style fallbacks,
 * style fallbacks are defined in the component's stylesheet.
 * See styled-component in `./box.css.js`
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite defaultProps.
 * To import boxDefaultProps do: `import { boxDefaultProps } from 'components/box';
 */
const boxDefaultProps = {
    alignContent: undefined,
    alignItems: undefined,
    as: undefined,
    backgroundColor: undefined,
    borderBottom: undefined,
    borderColor: undefined,
    borderLeft: undefined,
    borderRadius: undefined,
    borderRight: undefined,
    borderTop: undefined,
    boxBorder: undefined,
    boxDisplay: undefined,
    boxHeight: undefined,
    boxShadow: undefined,
    boxTransform: undefined,
    boxTransition: undefined,
    boxType: undefined,
    boxWidth: undefined,
    flex: undefined,
    flexFlow: undefined,
    margin: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    marginTop: undefined,
    maxHeight: undefined,
    maxWidth: undefined,
    minHeight: undefined,
    minWidth: undefined,
    opacity: undefined,
    order: undefined,
    padding: undefined,
    paddingBottom: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    paddingTop: undefined,
    position: undefined,
    positionBottom: undefined,
    positionLeft: undefined,
    positionRight: undefined,
    positionTop: undefined,
    zIndex: undefined,
}

export default boxDefaultProps;
