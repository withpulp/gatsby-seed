import styled, { css } from 'styled-components';

import lettersOnly from 'utils/letters_only';
import numbersOnly from 'utils/numbers_only';

// TODO:
// - check width and height props for lettersOnly
//   - if lettersOnly, then use theme structure props (i.e. breakpoints, container, etc)
// - create spaceScale theme prop for responsive margin and padding

export const BoxContainer = styled.div.withConfig({
    displayName: 'box--container'
})`
    ${({
        alignContent,
        alignItems,
        backgroundColor,
        borderBottom,
        borderColor,
        borderLeft,
        borderRadius,
        borderRight,
        borderTop,
        boxBorder,
        boxDisplay,
        boxHeight,
        boxShadow,
        boxTransform,
        boxTransition,
        boxType,
        boxWidth,
        flex,
        flexFlow,
        justifyContent,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        opacity,
        order,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        position,
        positionBottom,
        positionLeft,
        positionRight,
        positionTop,
        zIndex,
        theme: {
            border,
            boxTypes,
            color,
            shadow,
            space,
            transition,
        },
    }) => css`
        ${boxType ? boxTypes[boxType] : boxTypes.base}
        ${opacity && `
            opacity: ${opacity} !important;
        `}
        ${boxDisplay && `
            display: ${boxDisplay} !important;
        `}
        ${flex && `
            flex: ${flex} !important;
        `}
        ${flexFlow && `
            flex-flow: ${flexFlow} !important;
        `}
        ${order && `
            order: ${order} !important;
        `}
        ${alignItems && `
            align-items: ${alignItems} !important;
        `}
        ${alignContent && `
            align-content: ${alignContent} !important;
        `}
        ${justifyContent && `
            justify-content: ${justifyContent} !important;
        `}
        ${position && `
            position: ${position};
        `}
        ${positionTop && `
            position-top: ${positionTop};
        `}
        ${positionRight && `
            position-right: ${positionRight};
        `}
        ${positionBottom && `
            position-bottom: ${positionBottom};
        `}
        ${positionLeft && `
            position-left: ${positionLeft};
        `}
        ${zIndex && `
            z-index: ${zIndex};
        `}
        ${boxWidth && `
            width: ${boxWidth} !important;
        `}
        ${maxWidth && `
            max-width: ${maxWidth} !important;
        `}
        ${minWidth && `
            min-width: ${minWidth} !important;
        `}
        ${boxHeight && `
            height: ${boxHeight} !important;
        `}
        ${maxHeight && `
            max-height: ${maxHeight} !important;
        `}
        ${minHeight && `
            min-height: ${minHeight} !important;
        `}
        ${margin && `
            margin: ${numbersOnly(margin) ? space[margin] : margin} !important;
        `}
        ${marginTop && `
            margin-top: ${numbersOnly(marginTop) ? space[marginTop] : marginTop} !important;
        `}
        ${marginRight && `
            margin-right: ${numbersOnly(marginRight) ? space[marginRight] : marginRight} !important;
        `}
        ${marginBottom && `
            margin-bottom: ${numbersOnly(marginBottom) ? space[marginBottom] : marginBottom} !important;
        `}
        ${marginLeft && `
            margin-left: ${numbersOnly(marginLeft) ? space[marginLeft] : marginLeft} !important;
        `}
        ${padding && `
            padding: ${numbersOnly(padding) ? space[padding] : padding} !important;
        `}
        ${paddingTop && `
            padding-top: ${numbersOnly(paddingTop) ? space[paddingTop] : paddingTop} !important;
        `}
        ${paddingRight && `
            padding-right: ${numbersOnly(paddingRight) ? space[paddingRight] : paddingRight} !important;
        `}
        ${paddingBottom && `
            padding-bottom: ${numbersOnly(paddingBottom) ? space[paddingBottom] : paddingBottom} !important;
        `}
        ${paddingLeft && `
            padding-left: ${numbersOnly(paddingLeft) ? space[paddingLeft] : paddingLeft} !important;
        `}
        ${boxShadow && `
            box-shadow: ${lettersOnly(boxShadow) ? shadow[boxShadow] : boxShadow};
        `}
        ${boxBorder && `
            border: ${lettersOnly(boxBorder) ? border[boxBorder] : boxBorder};  
        `}
        ${borderTop && `
            border-top: ${lettersOnly(borderTop) ? border[borderTop] : borderTop};  
        `}
        ${borderRight && `
            border-right: ${lettersOnly(borderRight) ? border[borderRight] : borderRight};  
        `}
        ${borderBottom && `
            border-bottom: ${lettersOnly(borderBottom) ? border[borderBottom] : borderBottom};  
        `}
        ${borderLeft && `
            border-left: ${lettersOnly(borderLeft) ? border[borderLeft] : borderLeft};  
        `}
        ${borderRadius && `
            border-radius: ${borderRadius};
        `}
        ${borderColor && `
            border-color: ${borderColor.includes('#') ? borderColor : color[borderColor]};
        `}
        ${backgroundColor && `
            background-color: ${backgroundColor.includes('#')
                ? backgroundColor
                : ((
                    backgroundColor === 'none' ||
                    backgroundColor === 'transparent'
                )
                    ? backgroundColor
                    : color[backgroundColor]
                )
            };
        `}
        ${boxTransform && `
            transform: ${boxTransform};
        `}
        ${boxTransition && `
            transition: ${lettersOnly(boxTransition) ? transition(boxTransition) : boxTransition};
        `}
    `}
`
