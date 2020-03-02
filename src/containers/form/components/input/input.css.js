import styled, { css } from 'styled-components';

import { ContentBody } from 'components/content/content.css';

export const inputText = css`
    ${({ theme: { color, space, transition }}) => css`
        flex: 1 100%;
        border: 0;
        margin: 0;
        padding: ${space[3]} ${space[4]};
        border-radius: ${space[1]};
        background-color: ${color.surface};
        transition: ${transition.base};
    `}
`

export const InputText = styled(
    ContentBody.withComponent('input')
).withConfig({
    displayName: 'form__input--text'
}).attrs({
    type: 'text'
})`
    ${inputText}
`

export const InputEmail = styled(
    ContentBody.withComponent('input')
).withConfig({
    displayName: 'form__input--email'
}).attrs({
    type: 'email'
})`
    ${inputText}
`

export const InputTextarea = styled(
    ContentBody.withComponent('textarea')
).withConfig({
    displayName: 'form__input--textarea'
}).attrs({
    rows: 3,
})`
    ${inputText}
    min-height: 15vh;
`
