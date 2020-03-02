import styled, { css } from 'styled-components';

import { ContentContainer } from 'components/content/content.css';

// TODO: refactor boolean props into a utility style provider
// utility styles can be added to any styled-component
// i.e. fixed, fluid, right, wrapper, etc...
export const ButtonContainer = styled(ContentContainer).withConfig({
    displayName: 'button--container',
})`
    ${({
        buttonType,
        isCentered,
        isFluid,
        isIcon,
        isRight,
        isWrapper,
        theme: {
            buttonTypes,
            space,
        }
    }) => css`
        ${buttonType ? buttonTypes[buttonType] : buttonTypes.default}

        ${isCentered && `
            flex: 1 100%;
            align-items: center;
            align-content: center;
            justify-content: center;
        `}

        ${isFluid && `
            flex: 1 100%;
            width: 100%;
        `}

        ${isIcon && `
            padding: ${space[2]};
        `}

        ${isRight && `
            align-self: flex-end;
            float: right;
        `}

        ${isWrapper && `
            cursor: default;
            padding: 0;
            border: 0;
            background-color: transparent;
            text-align: left;
            transition: none;

            &:hover,
            &:active {
                color: inherit;
                border-color: transparent;
                background-color: transparent;
            }
        `}
    `}
`
