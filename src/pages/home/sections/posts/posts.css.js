import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';
import { GridContainer } from 'components/grid/grid.css';

export const DataGrid = styled(GridContainer).withConfig({
    displayName: 'home__posts--data-grid'
})`
    ${({ theme: { media, space }}) => css`
        margin-top: ${space[8]};

        ${media.tablet`
            grid-template-columns: 1fr 1fr;
        `}
    `}
`

export const DataCard = styled(BoxContainer).withConfig({
    displayName: 'home__posts--data-card'
})`
    ${({ theme: { color, shadow, space }}) => css`
        align-items: center;
        align-content: center;

        > a {
            display: flex;
            flex: 1 100%;
            flex-flow: row wrap;
            align-content: center;
            align-items: center;
            min-height: ${space[24]};
            padding: ${space[8]};
            box-shadow: ${shadow.card};
            background-color: ${color.gray7};
            color: unset;
            text-align: center;
            text-decoration: none;

            &:hover,
            &:focus {
                box-shadow: 0 0 ${space[1]} 0 ${color.gray};
            }

            &:active {
                box-shadow: ${shadow.cardPress};
            }
        }
    `}
`
