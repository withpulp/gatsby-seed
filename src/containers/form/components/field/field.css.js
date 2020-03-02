
import styled, { css } from 'styled-components';

import { ContentBody, ContentMeta } from 'components/content/content.css';

export const FieldContainer = styled.li.withConfig({
    displayName: 'form__field--container'
})`
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
    align-content: flex-start;

    ${({ flex, pushLeft, pushRight, theme: { space, media }}) => css`
        margin-bottom: ${space[6]};

        ${media.tablet`
            ${flex && `flex: ${flex};`}
            ${pushLeft && `padding-left: ${space[2]};`}
            ${pushRight && `padding-right: ${space[2]};`}
        `}
    `}
`

export const FieldLabel = styled(
    ContentBody.withComponent('label')
).withConfig({
    displayName: 'form__field--label'
})`
    flex: 1 100%;

    ${({ theme: { base: { color }, fontWeight, space }}) => css`
        margin-bottom: ${space[1]};
        color: ${color.text.body};
        font-weight: ${fontWeight.medium};
    `}
`

export const FieldError = styled(ContentMeta).withConfig({
    displayName: 'form__field--info',
})`
    ${({ theme: { base: { color }, space }}) => css`
        margin-top: ${space[2]};
        color: ${color.fail};
    `}
`

export const FieldInfo = styled(ContentMeta).withConfig({
    displayName: 'form__field--info',
})`
    ${({ theme: { base: { color }, space }}) => css`
        margin-top: ${space[2]};
        color: ${color.info};
    `}
`
