import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';

// TODO:
// - move captionTypes into `theme/types` and apply them from theme props

export const CaptionContainer = styled(BoxContainer).withConfig({
    displayName: 'caption--container',
})`
    ${({
        captionType,
        theme: {
            space
        }
    }) => css`
        position: relative;
        display: flex;
        flex: 1 100%;
        flex-flow: row wrap;
        margin: ${space[16]} auto ${space[8]};

        ${captionType && `
            align-items: center;
            align-content: center;
            margin: auto;
        `}

        ${captionType === 'card' && `
            margin: 0;
        `}

        ${captionType === 'jumbo' && `
            margin-bottom: ${space[6]};
        `}

        ${captionType === 'legend' && `
            margin-top: ${space[2]};
            margin-bottom: ${space[4]};
        `}

        ${captionType === 'section' && `
            align-items: flex-end;
            align-content: flex-end;
            margin-top: ${space[2]};
        `}

        ${captionType === 'title' && `
            margin-top: ${space[8]};
            margin-bottom: ${space[4]};
        `}
    `}
`;
