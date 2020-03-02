import styled from 'styled-components';

// Container - for containing layout components.
export const Container = styled.div.withConfig({
    displayName: 'layout--container'
})`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

// Main - for main wrapper that contains page components in layout.
export const Main = styled.main.withConfig({
    displayName: 'layout--main'
})`
    outline: none;
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
    align-content: flex-start;
    margin: 0;
    padding: 0;
`
