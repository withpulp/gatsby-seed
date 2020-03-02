import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';

// TODO:
// - use gridType to set different grid styles.
//   - configure gridTypes inside theme types
//   - use theme props to asign some variables (i.e. grid-gap being able to recognize space variables)

export const GridContainer = styled(BoxContainer).withConfig({
    displayName: 'grid--container'
})`
    ${({
        grid,
        gridArea,
        gridAutoColumns,
        gridAutoFlow,
        gridAutoRows,
        gridColumn,
        gridColumnEnd,
        gridColumnGap,
        gridColumnStart,
        gridGap,
        gridRow,
        gridRowEnd,
        gridRowGap,
        gridRowStart,
        gridTemplate,
        gridTemplateColumns,
        gridTemplateRows,
        gridType,
        theme: {
            gridTypes,
        },
    }) => css`
        ${gridType ? gridTypes[gridType]: gridTypes.base}
        ${grid && `
            grid: ${grid};
        `}
        ${gridArea && `
            grid-area: ${gridArea};
        `}
        ${gridAutoColumns && `
            grid-auto-columns: ${gridAutoColumns};
        `}
        ${gridAutoFlow && `
            grid-auto-flow: ${gridAutoFlow};
        `}
        ${gridAutoRows && `
            grid-auto-rows: ${gridAutoRows};
        `}
        ${gridColumn && `
            grid-column: ${gridColumn};
        `}
        ${gridColumnEnd && `
            grid-column-end: ${gridColumnEnd};
        `}
        ${gridColumnGap && `
            gird-column-gap: ${gridColumnGap};
        `}
        ${gridColumnStart && `
            grid-column-start: ${gridColumnStart};
        `}
        ${gridGap && `
            grid-gap: ${gridGap};
        `}
        ${gridRow && `
            grid-row: ${gridRow};
        `}
        ${gridRowEnd && `
            grid-row-end: ${gridRowEnd};
        `}
        ${gridRowGap && `
            grid-row-gap: ${gridRowGap};
        `}
        ${gridRowStart && `
            grid-row-start: ${gridRowStart};
        `}
        ${gridTemplate && `
            grid-template: ${gridTemplate};
        `}
        ${gridTemplateColumns && `
            grid-template-columns: ${gridTemplateColumns};
        `}
        ${gridTemplateRows && `
            grid-template-rows: ${gridTemplateRows};
        `}
    `}
`
