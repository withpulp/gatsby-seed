import { createGlobalStyle, css } from 'styled-components';

const StylesPrint = createGlobalStyle`
    @media print {
        *,
        *:before,
        *:after {
            background: transparent !important;
            color: #000 !important;
            box-shadow: none !important;
            text-shadow: none !important;
        }

        a,
        a:visited {
            text-decoration: underline;
        }

        a[href]:after {
            content: " (" attr(href) ")";
        }

        abbr[title]:after {
            content: " (" attr(title) ")";
        }

        a[href^="#"]:after,
        a[href^="javascript:"]:after {
            content: "";
        }

        pre {
            white-space: pre-wrap !important;
        }

        thead {
            display: table-header-group;
        }

        tr,
        img {
            page-break-inside: avoid;
        }

        p,
        h2,
        h3 {
            orphans: 3;
            widows: 3;
        }

        h2,
        h3 {
            page-break-after: avoid;
        }

        ${({ theme: { border, color, space }}) => css`
            pre,
            blockquote {
                border-left: ${border.base} ${color.gray};
                padding-left: ${space[2]};
                page-break-inside: avoid;
            }
        `}
    }

    @media print,
    (min-resolution: 1.25dppx),
    (min-resolution: 120dpi) {
        /* Style adjustments for high resolution devices */
    }
`;

export default StylesPrint;
