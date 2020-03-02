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
import { Wrapper, Container, Main } from './form.css';

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
                    <Wrapper>
                        <Container>
                            <Head
                                title={title}
                                description={description}
                            />
                            <Styles />
                            <Header name={siteMetadata.name} />
                            <Main>{children}</Main>
                            <Footer copyright={siteMetadata.copyright} />
                        </Container>
                    </Wrapper>
                </ThemeProvider>
            );
        }}
    />
);

LayoutForm.propTypes = {
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
    title: PropTypes.string,
    description: PropTypes.string,
};

export default LayoutForm;
