import styled, { css } from 'styled-components';

import { ButtonPrimary } from 'components/button/button.css';
import { ContentBody } from 'components/content/content.css';

export const FormContainer = styled.form.withConfig({
    displayName: 'form--container'
})`
    display: flex;
    width: 100%;
    flex: none;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    margin: 0 auto;
    padding: 0;

    ${({ theme: { media }}) => css`
        ${media.tablet`
            justify-content: flex-start;
        `};
    `}

    .input--hidden {
        display: none;
    }
`

export const FormFields = styled.ul.withConfig({
    displayName: 'form--fields'
})`
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
    margin: 0;
    padding: 0;
`

export const FormButtons = styled.div.withConfig({
    displayName: 'form--buttons'
})`
    flex: none;
`

export const FormButton = styled(
    ContentBody.withComponent(ButtonPrimary)
).withConfig({
    displayName: 'form--button'
}).attrs({
    type: 'submit'
})`
    display: inline-block;
    flex: none;
    margin: 0;
`

export const FormSuccess = styled(ContentBody).withConfig({
    displayName: 'form--success'
})`
    margin: 0;

    ${({ theme: { base: { color }, space }}) => css`
        margin-top: ${space[3]};
        color: ${color.pass};
    `}
`
