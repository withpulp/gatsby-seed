import styled, { css } from 'styled-components';

import { BoxContainer } from 'components/box/box.css';

// TODO:
// - replace all boolean props with sectionTypes
//   - use sectionTypes to set different styles for SectionWrapper and SectionContainer

export const SectionWrapper = styled(BoxContainer).withConfig({
    displayName: 'section--wrapper'
})`
    ${({ background, isFixed, sectionType, theme }) => css`
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

        ${isFixed && `
            position: fixed;
            top: 0;
            left: 0;
        `}
    `}
`

export const SectionContainer = styled(BoxContainer).withConfig({
    displayName: 'section--container'
})`
    ${({
        isCentered,
        isCompact,
        isFlex,
        sectionType,
    }) => css`
        ${isCentered && `
            align-content: center;
            align-items: center;
            justify-content: center;
        `}

        ${isCompact && `
            margin: 0 auto !important;
        `}

        ${isFlex && `
            max-width: 100% !important;
            margin: 0 auto !important;
        `}
    `}
`
