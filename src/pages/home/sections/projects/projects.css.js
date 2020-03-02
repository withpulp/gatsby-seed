import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';
import { GridContainer } from 'components/grid/grid.css';

export const DataGrid = styled(GridContainer).withConfig({
    displayName: 'home__projects--data-grid'
})`
    ${({ theme: { media, space }}) => css`
        margin-top: ${space[8]};

        ${media.tablet`
            grid-template-columns: 1fr 1fr;
        `}
    `}
`

export const DataCard = styled(BoxContainer).withConfig({
    displayName: 'home__projects--data-card'
})`
    ${({ theme: { color, space, transition }}) => css`
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
            color: unset;
            text-align: center;
            text-decoration: none;

            h2 {
                transition: ${transition.base};
            }

            &:hover {
                h2 {
                    color: ${color.primary};
                }
            }
        }

        .gatsby-image-wrapper {
            width: ${space[20]};
            margin-right: ${space[4]};
        }
    `}
`
