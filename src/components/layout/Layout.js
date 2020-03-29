import React from 'react';

import Head from 'containers/head';
import Styles from 'containers/head/styles';
import theme from '../../../theme';

import { LayoutContainer, LayoutMain, LayoutWrapper } from './Layout.styled';
import defaultProps from './Layout.defaultProps';
import propTypes from './Layout.propTypes';

// TODO:
// - use LayoutProvider to share props with components in layout composition

const Layout = ({ children, head, layoutType, themeOptions }) => (
    <ThemeProvider theme={theme}>
        <LayoutWrapper>
            <Head {...head} />
            <Styles />
            <LayoutContainer>
                <LayoutMain>{children}</LayoutMain>
            </LayoutContainer>
        </LayoutWrapper>
    </ThemeProvider>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
