import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';

import Caption from 'components/caption';
import Section from 'components/section';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { DataCard, DataGrid } from './projects.css';

const HomeProjects = ({ caption, options }) => (
    <StaticQuery
        query={graphql`
            {
                projects: allMarkdownRemark(
                    limit: 2
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: {
                        frontmatter: {
                            draft: { ne: true }
                            featured: { ne: false }
                            path: { regex: "/work/" }
                        }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                client
                                date(formatString: "MMMM DD, YYYY")
                                description
                                draft
                                featured
                                id
                                logo {
                                    childImageSharp {
                                        fluid(
                                            maxWidth: 800,
                                            maxHeight: 800,
                                            quality: 90
                                        ) {
                                            ...GatsbyImageSharpFluid_withWebp
                                        }
                                    }
                                }
                                path
                                title
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section {...options}>
                {caption && (
                    <Caption
                        captionType="section"
                        contextAs="h3"
                        contextType="body"
                        headingAs="h2"
                        headingType="h3"
                        marginTop="8"
                        {...caption}
                    />
                )}
                {data.projects && (
                    <DataGrid>
                        {data.projects.edges.map(project => (
                            <DataCard key={project.node.frontmatter.id}>
                                <Link to={project.node.frontmatter.path}>
                                    <Img
                                        alt={project.node.frontmatter.client}
                                        fluid={project.node.frontmatter.logo.childImageSharp.fluid}
                                    />
                                    <Caption
                                        as="div"
                                        borderColor="gray7"
                                        borderLeft="base"
                                        captionType="card"
                                        flex="1"
                                        heading={project.node.frontmatter.title}
                                        headingAs="h2"
                                        headingMargin="0"
                                        headingType="h5"
                                        context={project.node.frontmatter.description}
                                        contextAs="h3"
                                        contextMargin="0"
                                        contextMarginTop="2"
                                        contextTracking="1.25"
                                        contextType="body"
                                        paddingBottom="4"
                                        paddingLeft="8"
                                        paddingTop="4"
                                    />
                                </Link>
                            </DataCard>
                        ))}
                    </DataGrid>
                )}
            </Section>
        )}
    />
);

HomeProjects.propTypes = _propTypes;
HomeProjects.defaultProps = _defaultProps;

export default HomeProjects;
