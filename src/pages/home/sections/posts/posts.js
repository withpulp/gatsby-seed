import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';

import Caption from 'components/caption';
import Section from 'components/section';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { DataCard, DataGrid } from './posts.css';

const HomePosts = ({ caption, options }) => (
    <StaticQuery
        query={graphql`
            {
                posts: allMarkdownRemark(
                    limit: 3
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: {
                        frontmatter: {
                            draft: { ne: true }
                            featured: { ne: false }
                            path: { regex: "/blog/" }
                        }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                authorId
                                category
                                date(formatString: "MMMM DD, YYYY")
                                description
                                draft
                                id
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
                {data.posts && (
                    <DataGrid>
                        {data.posts.edges.map(post => (
                            <DataCard key={post.node.frontmatter.id}>
                                <Link to={post.node.frontmatter.path}>
                                    <Caption
                                        as="div"
                                        captionType="card"
                                        heading={post.node.frontmatter.title}
                                        headingAs="h2"
                                        headingMargin="0"
                                        headingType="h5"
                                        context={post.node.frontmatter.description}
                                        contextAs="h3"
                                        contextMargin="0"
                                        contextMarginTop="4"
                                        contextTracking="1.25"
                                        contextType="body"
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

HomePosts.propTypes = _propTypes;
HomePosts.defaultProps = _defaultProps;

export default HomePosts;
