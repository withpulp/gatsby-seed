import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Caption from 'components/caption';
import Content from 'components/content';
import Section from 'components/section';
import Layout from 'containers/layout';

const TemplatePost = ({ data, pageContext }) => {
    const { frontmatter, html, timeToRead } = data.post;
    const { category, description, tags, title } = frontmatter;

    return (
        <Layout>
            <Section
                backgroundColor="gray9"
                isCentered
                minHeight="50vh"
                wrapper="header"
            >
                <Caption
                    heading={title}
                    context={description}
                >
                    {category && (
                        <Content
                            as="span"
                            contentType="strong"
                        >
                            Category: {category}
                        </Content>
                    )}
                    {timeToRead && (
                        <Content
                            as="small"
                            contentType="small"
                        >
                            Time to read: {timeToRead} min
                        </Content>
                    )}
                </Caption>
            </Section>
            <Section>
                <Content
                    as="article"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                {pageContext && (
                    <Content>[WIP] Show links for prev and next blog post pages</Content>
                )}
            </Section>
            <Section
                backgroundColor="secondary"
                wrapper="footer"
            >
                <Content
                    contentColor="gray9"
                    marginBottom="2"
                >
                    Tags:
                </Content>
                {tags.map(tag => (
                    <Content
                        as="span"
                        backgroundColor="gray"
                        boxDisplay="inline-block"
                        contentType="small"
                        flex="none"
                        key={tag}
                        marginRight="2"
                        padding="2"
                    >
                        {tag}
                    </Content>
                ))}
            </Section>
        </Layout>
    );
}

TemplatePost.propTypes = {
    data: PropTypes.shape({
        post: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
                authorId: PropTypes.string,
                category: PropTypes.string,
                date: PropTypes.string,
                description: PropTypes.string,
                page: PropTypes.string,
                tags: PropTypes.arrayOf(PropTypes.string),
                template: PropTypes.string,
                title: PropTypes.string,
            }),
            html: PropTypes.string,
            timeToRead: PropTypes.number,
        }),
    }),
    pageContext: PropTypes.shape({
        excerpt: PropTypes.string,
        next: PropTypes.any,
        prev: PropTypes.any,
        slug: PropTypes.string,
        timeToRead: PropTypes.number,
        title: PropTypes.string,
    }),
}

export const query = graphql`
    query PostBySlug($slug: String!) {
        post: markdownRemark(fields: { slug: { eq: $slug } }) {
            excerpt
            frontmatter {
                authorId
                category
                date(formatString: "MMMM DD, YYYY")
                description
                page
                tags
                template
                title
            }
            html
            timeToRead
        }
    }
`

export default TemplatePost;
