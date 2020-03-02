import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';
import { GridContainer } from 'components/grid/grid.css';

export const MainGrid = styled(GridContainer).withConfig({
    displayName: 'home__services--main-grid'
})`
    ${({ theme: { media, space }}) => css`
        margin-top: ${space[16]};

        ${media.laptop`
            grid-gap: ${space[8]};
            grid-template-columns: 2fr 1fr;
        `}
    `}
`

export const DataGrid = styled(GridContainer).withConfig({
    displayName: 'home__services--data-grid'
})`
    ${({ theme: { media }}) => css`
        ${media.tablet`
            grid-template-columns: 1fr 1fr 1fr;
        `}

        ${media.laptop`
            grid-template-columns: 1fr;
        `}
    `}
`

export const DataCard = styled(BoxContainer).withConfig({
    displayName: 'home__services--data-card'
})`
    ${({ theme: { color, media, space, transition }}) => css`
        align-items: center;
        align-content: center;
        justify-content: center;
        padding: ${space[4]};

        .icon {
            flex: none;
            height: ${space[12]};
            width: ${space[12]};
            margin-right: ${space[6]};
            transition: ${transition.base};

            ${media.phablet`
                height: ${space[16]};
                width: ${space[16]};
                margin-right: ${space[8]};
            `}

            ${media.tablet`
                height: ${space[10]};
                width: ${space[10]};
                margin-right: ${space[6]};
            `}

            ${media.laptop`
                height: ${space[12]};
                width: ${space[12]};
                margin-right: ${space[8]}
            `}
        }

        > a {
            display: flex;
            flex: 1 100%;
            flex-flow: row wrap;
            align-items: center;
            color: unset;
            text-align: center;
            text-decoration: none;

            &:hover {
                .icon {
                    fill: ${color.primary};
                }
            }
        }
    `}
`