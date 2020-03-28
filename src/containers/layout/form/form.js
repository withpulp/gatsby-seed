import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

// TODO:
// - import Head and Styles from same dir namespace
// - merge this composition into one Layout component

import theme from '../../../../theme';
import Head from 'containers/head';
import Styles from 'containers/head/styles';

import Header from './header';
import Footer from './footer';
import { LayoutWrapper, LayoutContainer, LayoutMain } from '../layout.css';
import { layoutPropTypes } from '../layout';

const LayoutForm = ({ children, title, description }) => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        copyright
                        name
                    }
                }
            }
        `}
        render={data => {
            const { siteMetadata } = data.site;

            return (
                <ThemeProvider theme={theme}>
                    <LayoutWrapper as="div" layoutType="form">
                        <LayoutContainer layoutType="form">
                            <Head
                                title={title}
                                description={description}
                            />
                            <Styles />
                            <Header name={siteMetadata.name} />
                            <LayoutMain>{children}</LayoutMain>
                            <Footer copyright={siteMetadata.copyright} />
                        </LayoutContainer>
                    </LayoutWrapper>
                </ThemeProvider>
            );
        }}
    />
);

LayoutForm.propTypes = {
    ...layoutPropTypes,
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                copyright: PropTypes.string,
                description: PropTypes.string,
                name: PropTypes.string,
                theme: PropTypes.objectOf(PropTypes.object),
                title: PropTypes.string,
            }),
        }),
    }),
};

export default LayoutForm;
