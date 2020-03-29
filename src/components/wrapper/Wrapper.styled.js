import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';

// TODO:
// - use theme wrapperTypes to set different wrapper styles

export const Wrapper = styled(BoxContainer).withConfig({
    displayName: 'wrapper'
})`
    ${({ background, theme, wrapperType }) => css`
        ${background && background.gradient && `
            background: ${theme.background[background.gradient]};
        `}

        ${background && background.image && `
            background-image: url(${background.image});
        `}

        ${background && background.gradient && background.image && `
            background: ${theme.background[background.gradient]}, url(${background.image});
        `}

        ${background && `
            background-color: ${(background.color.includes('#') ? background.color : theme.color[background.color]) || 'inherit'};
            background-size: ${background.size || 'cover'};
            background-repeat: ${background.repeat || 'no-repeat'};
            background-position: ${background.position || 'center center'};
        `}
    `}
`;
