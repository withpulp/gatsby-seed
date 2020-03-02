import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'polished';

const StylesReset = createGlobalStyle`
    ${normalize()};

    ${({ theme: { color, space }}) => css`
        *::-webkit-scrollbar {
            width: ${space[2]};
        }

        *::-webkit-scrollbar-track {
            background: ${color.secondary};
        }

        *::-webkit-scrollbar-thumb {
            background-color: ${color.primary};
        }
    `}

    [data-whatintent="mouse"] *:focus {
        outline: none;
    }

    html {
        overflow-x: hidden;
        overflow-y: auto;
    }

    body {
        margin: 0;
        padding: 0;
    }

    header {
        clear: both;
    }

    figure,
    figcaption {
        position: relative;
        flex: 1 100%;
        margin: 0 auto;
    }

    del {
        text-decoration: line-through;
    }

    audio,
    canvas,
    iframe,
    img,
    svg,
    video {
        border: 0;
        vertical-align: bottom;
    }

    img,
    video {
        width: 100%;
        margin: 0 auto;
    }

    video {
        max-width: 100%;
    }

    button {
        cursor: pointer;
        appearance: none;
        outline: none;
    }

    fieldset {
        margin: 0;
        border: 0;
        padding: 0;
    }

    textarea {
        resize: vertical;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export default StylesReset;
