import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

// TODO:
// - get theme from package import or graphQL data.
// - import Head and Styles from same dir namespace

import theme from '../../../../theme';
import Head from 'containers/head';
import Styles from 'containers/head/styles';

import Header from './header';
import Footer from './footer';
import { Container, Main } from './default.css';

const LayoutDefault = ({ children }) => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        copyright
                        description
                        name
                        routes {
                            id
                            label
                            path
                        }
                        # Configure theme query
                        # theme {
                        #     ...
                        # }
                        title
                    }
                }
                logo: imageSharp(
                    fluid: { originalName: { regex: "/logo.png/" } }
                ) {
                    fluid(
                        maxWidth: 100,
                        maxHeight: 100,
                        quality: 100
                    ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        `}
        render={data => {
            const { siteMetadata } = data.site;

            return (
                <ThemeProvider theme={theme}>
                    <Container>
                        <Head />
                        <Styles />
                        <Header
                            logo={data.logo.fluid}
                            name={siteMetadata.name}
                            routes={siteMetadata.routes}
                        />
                        <Main>{children}</Main>
                        <Footer
                            copyright={siteMetadata.copyright}
                            routes={siteMetadata.routes}
                        />
                    </Container>
                </ThemeProvider>
            );
        }}
    />
);

LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
        logo: PropTypes.shape({
            fluid: PropTypes.shape({
                aspectRatio: PropTypes.number,
                base64: PropTypes.string,
                src: PropTypes.string,
                srcSet: PropTypes.string,
                sizes: PropTypes.string,
            }),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                copyright: PropTypes.string,
                description: PropTypes.string,
                name: PropTypes.string,
                networks: PropTypes.arrayOf(
                    PropTypes.shape({
                        icon: PropTypes.string,
                        url: PropTypes.string,
                    }),
                ),
                routes: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.string,
                        label: PropTypes.string,
                        path: PropTypes.string,
                    }),
                ),
                // theme: PropTypes.objectOf(PropTypes.object),
                title: PropTypes.string,
            }),
        }),
    }),
};

export default LayoutDefault;
