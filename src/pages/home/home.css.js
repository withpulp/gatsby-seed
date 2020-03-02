import styled, { css } from 'styled-components';

import { ButtonContainer as Button } from 'components/button/button.css';

export const ButtonContainer = styled(Button).withConfig({
    displayName: 'home--button-container'
})`
    ${({ buttonType, theme: { buttonTypes, media, space }}) => css`
        margin-top: ${space[8]};

        > a {
            ${buttonType ? buttonTypes[buttonType] : buttonTypes.default}
            display: block;
            margin-bottom: ${space[4]};

            &:last-child {
                margin-bottom: 0;
            }

            ${media.phablet`
                display: inline-block;
                margin-right: ${space[4]};
                margin-bottom: 0;

                &:last-child {
                    margin-right: 0;
                }
            `}
        }
    `}
`
