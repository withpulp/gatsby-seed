import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import Box from 'components/box';
import Caption from 'components/caption';
import Content from 'components/content';
import Icon from 'components/icon';
import Section from 'components/section';
import randomKey from 'utils/random_key';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { DataCard, DataGrid, MainGrid } from './services.css';
import { ButtonContainer } from '../../home.css';

// TODO:
// - create a container for services so static query can be reused in other instances.
//   - query will be defined inside the container
//   - use prop to render different components
// - create CaptionSection component so props don't have to be passed down (defaults don't work)
// - refactor Section container to accept containerType grid - Box/Grid can be merged together and grid can be a boxType
// - update Caption component:
//   - props for icon, emoji, or image that can be configured to display in different positions
//   - prop for link/path that adds a link wrapper around the container
// - make DataCard into a reusable component (i.e. Card)
//   - use different cardTypes to render different styles

const HomeServices = ({ buttons, caption, content, options }) => (
    <StaticQuery
        query={graphql`
            {
                services: allMarkdownRemark(
                    limit: 6
                    sort: { fields: [frontmatter___order], order: ASC }
                    filter: {
                        frontmatter: {
                            draft: { ne: true }
                            featured: { ne: false }
                            path: { regex: "/services/" }
                        }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                description
                                draft
                                featured
                                order
                                path
                                id
                                icon
                                title
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Section {...options}>
                <MainGrid>
                    <Box
                        as="figure"
                        alignContent="flex-start"
                    >
                        {caption && (
                            <Caption
                                captionType="section"
                                contextAs="h3"
                                contextType="body"
                                headingAs="h2"
                                headingType="h3"
                                {...caption}
                            />
                        )}
                        {content && (
                            <Content
                                as="article"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        )}
                    </Box>
                    {data.services && (
                        <DataGrid as="ul">
                            {data.services.edges.map(service => (
                                <DataCard
                                    as="li"
                                    key={service.node.frontmatter.id}
                                >
                                    <Link to={service.node.frontmatter.path}>
                                        <Icon icon={service.node.frontmatter.icon} />
                                        <Caption
                                            as="div"
                                            captionType="card"
                                            flex="1"
                                            heading={service.node.frontmatter.title}
                                            headingAs="h2"
                                            headingMargin="0"
                                            headingType="h5"
                                            context={service.node.frontmatter.description}
                                            contextAs="h3"
                                            contextMargin="0"
                                            contextType="body"
                                        />
                                    </Link>
                                </DataCard>
                            ))}
                        </DataGrid>
                    )}
                </MainGrid>
                {buttons && (
                    <ButtonContainer
                        as="div"
                        contentAlign="center"
                        contentType="button"
                        isWrapper
                        marginTop="16"
                    >
                        {buttons.map(button => (
                            <Link
                                key={randomKey()}
                                to={button.link}
                            >
                                {button.label}
                            </Link>
                        ))}
                    </ButtonContainer>
                )}
            </Section>
        )}
    />
);

HomeServices.propTypes = _propTypes;
HomeServices.defaultProps = _defaultProps;

export default HomeServices;
