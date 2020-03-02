import PropTypes from 'prop-types';

import { boxPropTypes } from 'components/box';

/**
 * gridPropTypes - define propTypes used by Grid component or extensions of GridContainer component.
 * 
 * Since components can be extensions of other components with styled-components,
 * this means some components will share common props, this helps not to repeatedly rewrite propTypes.
 * to import gridPropTypes do: `import { gridPropTypes } from 'components/grid';
 * 
 * CSS Grid Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
 * - https://css-tricks.com/snippets/css/complete-guide-grid/
 * - https://learncssgrid.com/
 */
const gridPropTypes = {
    ...boxPropTypes,
    grid: PropTypes.string, // to set grid using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid
    gridArea: PropTypes.string, // to set grid-area using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
    gridAutoColumns: PropTypes.string, // to set grid-auto-columns using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
    gridAutoFlow: PropTypes.string, // to set grid-auto-flow using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
    gridAutoRows: PropTypes.string, // to set grid-auto-rows using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
    gridColumn: PropTypes.string, // to set grid-columns using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
    gridColumnEnd: PropTypes.string, // to set grid-column-end using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
    gridColumnGap: PropTypes.string, // to set grid-column-gap using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
    gridColumnStart: PropTypes.string, // to set grid-column-start using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
    gridGap: PropTypes.string, // to set grid-gap using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
    gridRow: PropTypes.string, // to set grid-row using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
    gridRowEnd: PropTypes.string, // to set grid-row-end using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
    gridRowGap: PropTypes.string, // to set grid-row-gap using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
    gridRowStart: PropTypes.string, // to set grid-row-start using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
    gridTemplate: PropTypes.string, // to set grid-template using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
    gridTemplateAreas: PropTypes.string, // to set grid-template-areas using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
    gridTemplateColumns: PropTypes.string, // to set grid-template-columns using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
    gridTemplateRows: PropTypes.string, // to set grid-template-rows using available css rules: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
    gridType: PropTypes.string, // to set gridType using type styles props configured in `theme/constants/_types.js`
};

export default gridPropTypes;
