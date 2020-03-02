import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';

export const CustomCard = styled(BoxContainer).withConfig({
    displayName: 'about__custom-card'
})`
    ${({ theme: { color, media, shadow, space, transitionCalc }}) => css`
        flex: 1 100%;
        margin-top: ${space[4]};
        transition: ${transitionCalc('background-color')}, ${transitionCalc('box-shadow')};

        ${media.phablet`
            margin-top: ${space[6]};
        `}

        ${media.tablet`
            flex: 1;
            margin-top: 0;
            margin-left: ${space[8]};
        `}

        &:hover {
            box-shadow: ${shadow.cardPress};
            background-color: ${color.gray7};
        }
    `}
`
