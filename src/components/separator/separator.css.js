import styled, { css, keyframes } from 'styled-components';

const wave1 = keyframes`
    0% {
        transform: translate(85px, 0%);
    }
    100% {
        transform: translate(-90px, 0%);
    }
`

const wave2 = keyframes`
    0% {
        transform: translate(-90px, 0%);
    }
    100% {
        transform: translate(85px, 0%);
    }
`

const wave3 = keyframes`
    0% {
        transform: translate(85px, 0%);
    }
    100% {
        transform: translate(-90px, 0%);
    }
`

const wave4 = keyframes`
    0% {
        transform: translate(-90px, 0%);
    }
    100% {
        transform: translate(85px, 0%);
    }
`

// Resource: https://codepen.io/candra-shalahuddin/pen/vQqzyB
export const SeparatorContainer = styled.div.withConfig({
  displayName: 'work__seperator--container'
})`
    position: relative;
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;

    .editorial {
        display: block;
        width: 100%;
        height: 60px;
        max-height: 60px;
        margin: 0;
        z-index:5;
        bottom:0;
        position:absolute;
        left:0px;
        float:left;
    }

    ${({ theme: { color } }) => css`
        .parallax1 > use {
            animation: ${wave1} 10s linear infinite;
            fill: ${color.gray7};

            &:nth-child(1) {
                animation-delay: -2s;
            }
        }

        .parallax2 > use {
            animation: ${wave2} 8s linear infinite;
            fill: ${color.gray8};

            &:nth-child(1) {
                animation-delay: -2s;
            }
        }

        .parallax3 > use {
            animation: ${wave3} 6s linear infinite;
            fill: ${color.gray9};

            &:nth-child(1) {
                animation-delay: -2s;
            }
        }

        .parallax4 > use {
            animation: ${wave4} 4s linear infinite;
            fill: ${color.white};

            &:nth-child(1) {
                animation-delay: -2s;
            }
        }
    `}
`
