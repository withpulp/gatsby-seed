import { createGlobalStyle, css } from 'styled-components';

import '../../../../theme/fonts/fonts.css';

// TODO:
// - fix issue with nesting css func inside createGlobalStyles
//   - need regular css above the theme callback otherwise it doesn't override global styles.

const StylesTypography = createGlobalStyle`
    html {
        text-rendering: optimizelegibility;
        image-rendering: optimizequality;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ${({theme: {
        border,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        media,
        space,
        transition,
        typeScale
    }}) => css`
        html {
            font-size: ${fontSize.base};
        }

        body {
            text-rendering: unset;
            font-feature-settings: unset;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            -webkit-font-feature-settings: "pnum";
            font-feature-settings: "pnum";
            font-variant-numeric: proportional-nums;
            font-family: ${fontFamily.body};
        }

        hr {
            display: block;
            flex: 1 100%;
            height: 1px;
            margin: 0 auto;
            padding: 0;
            outline: none;
            border: 0;
            border-top: ${border.base} ${color.gray7};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            display: flex;
            flex: 1 100%;
            flex-flow: row wrap;
            margin: ${space[6]} 0 ${space[4]};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        thead,
        th,
        button {
            position: relative;
            font-family: ${fontFamily.heading};
            font-weight: ${fontWeight.bold};
            line-height: ${lineHeight.heading};
        }

        p,
        a,
        td,
        li {
            position: relative;
            font-family: ${fontFamily.body};
            font-size: ${fontSize.body};
            font-weight: ${fontWeight.normal};
            line-height: ${lineHeight.body};
        }

        h1 {
            font-size: ${fontSize.h1};
        }

        h2 {
            font-size: ${fontSize.h2};
        }

        h3 {
            font-size: ${fontSize.h3};
        }

        h4 {
            font-size: ${fontSize.h4};
        }

        h5 {
            font-size: ${fontSize.h5};
        }

        h6 {
            font-size: ${fontSize.h6};
        }

        p {
            flex: 1 100%;
            margin: 0 0 ${space[4]};
        }

        a {
            cursor: pointer;
            position: relative;
            text-decoration: underline;
            color: ${color.primary};
            transition: ${transition.action};
        }

        b,
        strong {
            position: relative;
            flex: 1 100%;
            font-weight: ${fontWeight.bold};
        }

        small {
            font-size: ${fontSize.small};
            font-weight: ${fontWeight.normal};
        }

        ol,
        ul {
            position: relative;
            font-weight: ${fontWeight.normal};
            list-style: none;
        }

        li {
            position: relative;
        }

        blockquote,
        q {
            quotes: none;

            &:before,
            &:after {
                content: none;
            }
        }

        blockquote {
            position: relative;
            font-style: italic;
            font-weight: ${fontWeight.medium};
        }

        sup,
        sub {
            font-weight: ${fontWeight.bold};
        }
    `}
`;

export default StylesTypography;
