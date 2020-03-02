import styled, { css } from 'styled-components';

import lettersOnly from 'utils/letters_only';
import { BoxContainer } from 'components/box/box.css';

// TODO:
// - check contentSize for px, rem, em, and % characters and pass to fontScale without using fontSize theme prop
//   - ${contentSize && hasCharacters(contentSize, ['em', 'px', 'rem']) ? fontScale(fontSize[contentSize]) : fontScale(contentSize)}

// ContentContainer - for displaying content with configurable styles using props.
export const ContentContainer = styled(BoxContainer).withConfig({
    displayName: 'content--container'
})`
    ${({
        contentAlign,
        contentColor,
        contentDecoration,
        contentFont,
        contentKerning,
        contentShadow,
        contentSize,
        contentTracking,
        contentTransform,
        contentType,
        contentWeight,
        theme: {
            color,
            contentTypes,
            fontFamily,
            fontScale,
            fontSize,
            fontWeight,
            lineHeight,
            letterSpacing,
            textShadow,
        }
    }) => css`
        ${contentType ? contentTypes[contentType] : contentTypes.body}
        ${contentColor && `
            color: ${contentColor.includes('#') ? contentColor : color[contentColor]};
        `}
        ${contentFont && `
            font-family: ${lettersOnly(contentFont) ? fontFamily[contentFont] : contentFont};
        `}
        ${contentSize && fontScale(fontSize[contentSize])}
        ${contentWeight && `
            font-weight: ${lettersOnly(contentWeight) ? fontWeight[contentWeight] : contentWeight};
        `}
        ${contentKerning && `
            letter-spacing: ${lettersOnly(contentKerning) ? letterSpacing[contentKerning] : contentKerning};
        `}
        ${contentTracking && `
            line-height: ${lettersOnly(contentTracking) ? lineHeight[contentTracking] : contentTracking};
        `}
        ${contentAlign && `
            text-align: ${contentAlign} !important;
        `}
        ${contentDecoration && `
            text-decoration: ${contentDecoration};
        `}
        ${contentShadow && `
            text-shadow: ${lettersOnly(contentShadow) ? textShadow[contentShadow] : contentShadow};
        `}
        ${contentTransform && `
            text-transform: ${contentTransform};
        `};
    `}
`

// ContentLegal - for displaying content with legal content styles and modular scale font sizes.
export const ContentLegal = styled.small.withConfig({
    displayName: 'content--legal'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.legal}
    `}
`

// ContentSmall - for displaying content with small content styles and a modular scale font sizes.
export const ContentSmall = styled.small.withConfig({
    displayName: 'content--small'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.small}
    `}
`

// ContentMeta - for displaying content with meta content styles and a modular scale font sizes.
export const ContentMeta = styled.small.withConfig({
    displayName: 'content--meta'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.meta}
    `}
`

// ContentBody - for displaying content with body content styles and a modular scale font sizes.
export const ContentBody = styled.p.withConfig({
    displayName: 'content--body'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.body}
    `}
`

// ContentStrong - for displaying content with strong content styles and a modular scale font sizes.
export const ContentStrong = styled.strong.withConfig({
    displayName: 'content--strong'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.strong}
    `}
`

// ContentH6 - for displaying content with h6 content styles and a modular scale font sizes.
export const ContentH6 = styled.h6.withConfig({
    displayName: 'content--h6'
})`
    ${({ theme: { contentTypes, fontScale, fontSize }}) => css`
        ${contentTypes.heading}
        ${fontScale(fontSize.h6)}
    `}
`

// ContentH5 - for displaying content with h5 content styles and a modular scale font sizes.
export const ContentH5 = styled.h5.withConfig({
    displayName: 'content--h5'
})`
    ${({ theme: { contentTypes, fontScale, fontSize }}) => css`
        ${contentTypes.heading}
        ${fontScale(fontSize.h5)}
    `}
`

// ContentH4 - for displaying content with h4 content styles and a modular scale font sizes.
export const ContentH4 = styled.h4.withConfig({
    displayName: 'content--h4'
})`
    ${({ theme: { contentTypes, fontScale, fontSize }}) => css`
        ${contentTypes.heading}
        ${fontScale(fontSize.h4)}
    `}
`

// ContentH3 - for displaying content with h3 content styles and a modular scale font sizes.
export const ContentH3 = styled.h3.withConfig({
    displayName: 'content--h3'
})`
    ${({ theme: { contentTypes, fontScale, fontSize }}) => css`
        ${contentTypes.heading}
        ${fontScale(fontSize.h3)}
    `}
`

// ContentH2 - for displaying content with h2 content styles and a modular scale font sizes.
export const ContentH2 = styled.h2.withConfig({
    displayName: 'content--h2'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.heading}
    `}
`

// ContentH1 - for displaying content with h1 content styles and a modular scale font sizes.
export const ContentH1 = styled.h1.withConfig({
    displayName: 'content--h1'
})`
    ${({ theme: { contentTypes, fontScale, fontSize }}) => css`
        ${contentTypes.heading}
        ${fontScale(fontSize.h1)}
    `}
`

// ContentHero - for displaying content with hero content type styles and a modular scale font sizes.
export const ContentHero = styled.h1.withConfig({
    displayName: 'content--hero'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.hero}
    `}
`

// ContentLegend - for displaying content with legend content type styles and a modular scale font sizes.
export const ContentLegend = styled.h1.withConfig({
    displayName: 'content--legend'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.legend}
    `}
`

// ContentJumbo - for displaying content with jumbo content type styles and a modular scale font sizes.
export const ContentJumbo = styled.h1.withConfig({
    displayName: 'content--jumbo'
})`
    ${({ theme: { contentTypes }}) => css`
        ${contentTypes.jumbo}
    `}
`
