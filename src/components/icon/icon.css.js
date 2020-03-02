import styled, { css, keyframes } from 'styled-components';

// pulse - animation for heart icon in footer copyright.
const pulse = keyframes`
    0% {
        transform: scale(.75);
    }
    20% {
        transform: scale(1);
    }
    40% {
        transform: scale(.75);
    }
    60% {
        transform: scale(1);
    }
    80% {
        transform: scale(.75);
    }
    100% {
        transform: scale(.75);
    }
`

// IconWrapper - for wrapping icon components.
export const IconWrapper = styled.i.withConfig({
    displayName: 'icon--wrapper'
})`
    position: relative;
    vertical-align: middle;

    ${({ theme: { color, space, transition }}) => css`
        svg,
        .icon {
            vertical-align: baseline;
            width: ${space[4]};
            height: ${space[4]};
            transition: ${transition.base};

            &.icon--heart {
                margin: 0 0.1rem;
                vertical-align: top;
                color: ${color.red};
                animation: ${pulse} 1s linear infinite;
            }
        }
    `}
`
