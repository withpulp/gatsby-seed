import { boxDefaultProps } from 'components/box';

/**
 * gridDefaultProps - define defaultProps used by Grid component or extensions of GridContainer component.
 * 
 * propDefaults can be used to overide the style fallbacks,
 * style fallbacks are defined in the component's stylesheet.
 * See styled-component in `./grid.css.js`
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite defaultProps.
 * To import gridDefaultProps do: `import { gridDefaultProps } from 'components/grid';
 */
const gridDefaultProps = {
    ...boxDefaultProps,
    grid: undefined,
    gridArea: undefined,
    gridAutoColumns: undefined,
    gridAutoFlow: undefined,
    gridAutoRows: undefined,
    gridColumn: undefined,
    gridColumnEnd: undefined,
    gridColumnGap: undefined,
    gridColumnStart: undefined,
    gridGap: undefined,
    gridRow: undefined,
    gridRowEnd: undefined,
    gridRowGap: undefined,
    gridRowStart: undefined,
    gridTemplate: undefined,
    gridTemplateColumns: undefined,
    gridTemplateRows: undefined,
    gridType: undefined,
}

export default gridDefaultProps;
