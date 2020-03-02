import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Caption from 'components/caption';
import Content from 'components/content';
import Section from 'components/section';
import Separator from 'components/separator';
import Layout from 'containers/layout';
import randomKey from 'utils/random_key';

import Posts from './sections/posts';
import Projects from './sections/projects';
import Services from './sections/services';
import { ButtonContainer } from './home.css';

// TODO:
// - pass layout options and configure defaults (head, header, main, footer, etc).
// - separate files for propTypes, defaultProps
// - create deparate file for the graphql query fragment
// - create Link component for outgoing and local links
// - create Page container that can handle error states
// - use buttons (array) instead of button (object) to set buttons (array will render 1 or more buttons regardless)
// - header:
//   - create reusable header component with different headerTypes
//      - see notes left in `components/section/`
//      - use new component to refactor page headers and layout headers
//      - page header can be composed on the page level
//      - this removes need for adding sections inside pages
// - ButtonContainer:
//   - use a Link component and set linkType to button
//   - ButtonContainer could be a Box or Content component

const PageHome = ({ data }) => {
    if (!data) {
        return (
            <Layout>
                <Section
                    isCentered
                    justifyContent="centered"
                    wrapperHeight="75vh"
                >
                    <Caption
                        captionType="jumbo"
                        heading="We don't know!"
                    >
                        <Content
                            as="h2"
                            contentType="h4"
                            margin="0"
                        >
                            <a href="https://youtu.be/9DLuALBnolM?t=55" rel="noopener noreferrer" target="_blank">
                                We just don't have the data! 
                            </a>
                        </Content>
                    </Caption>
                </Section>
            </Layout>
        );
    }
    const header = data.sections.edges.find(section => section.node.section === 'header').node;
    const services = data.sections.edges.find(section => section.node.section === 'services').node;
    const projects = data.sections.edges.find(section => section.node.section === 'projects').node;
    const contact = data.sections.edges.find(section => section.node.section === 'contact').node;
    const posts = data.sections.edges.find(section => section.node.section === 'posts').node;
    const footer = data.sections.edges.find(section => section.node.section === 'footer').node;

    return (
        <Layout>
            {header && (
                <Section
                    isCentered
                    wrapper="header"
                    {...header.options}
                >
                    {header.caption && (
                        <Caption
                            captionType="hero"
                            headingType="hero"
                            {...header.caption}
                        />
                    )}
                    {header.buttons && (
                        <ButtonContainer
                            as="div"
                            buttonType="primary"
                            contentType="button"
                            isWrapper
                        >
                            {header.buttons.map(button => (
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
            <Separator />
            {services && (
                <Services
                    buttons={services.buttons}
                    caption={services.caption}
                    content={services.content}
                    options={services.options}
                />
            )}
            {projects && (
                <Projects
                    caption={projects.caption}
                    options={projects.options}
                />
            )}
            {contact && (
                <Section
                    isCentered
                    {...contact.options}
                >
                    {contact.caption && (
                        <Caption
                            captionType="hero"
                            contextAlign="center"
                            headingAlign="center"
                            {...contact.caption}
                        />
                    )}
                    {contact.buttons && (
                        <ButtonContainer
                            as="div"
                            buttonType="secondary"
                            contentAlign="center"
                            contentType="button"
                            isWrapper
                        >
                            {contact.buttons.map(button => (
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
            {posts && (
                <Posts
                    caption={posts.caption}
                    options={posts.options}
                />
            )}
            {footer && (
                <Section
                    wrapper="footer"
                    {...footer.options}
                >
                    {footer.caption && (
                        <Caption
                            captionType="hero"
                            headingType="hero"
                            {...footer.caption}
                        />
                    )}
                </Section>
            )}
        </Layout>
    );
}

PageHome.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                address: PropTypes.shape({
                    locality: PropTypes.string,
                    street: PropTypes.string,
                    region: PropTypes.string,
                    zipcode: PropTypes.string,
                }),
                contact: PropTypes.shape({
                    email: PropTypes.string,
                    location: PropTypes.string,
                    phone: PropTypes.string,
                    subject: PropTypes.string,
                }),
                hours: PropTypes.arrayOf(
                    PropTypes.string
                ),
                name: PropTypes.string,
            }),
        }),
        sections: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    buttons: PropTypes.arrayOf(
                        PropTypes.shape({
                            label: PropTypes.string.isRequired,
                            link: PropTypes.string.isRequired,
                        }),
                    ),
                    caption: PropTypes.shape({
                        context: PropTypes.string,
                        contextColor: PropTypes.string,
                        heading: PropTypes.string,
                        headingColor: PropTypes.string,
                    }),
                    content: PropTypes.string,
                    id: PropTypes.string,
                    options: PropTypes.shape({
                        backgroundColor: PropTypes.string,
                        maxWidth: PropTypes.string,
                        minHeight: PropTypes.string,
                    }),
                    order: PropTypes.number,
                    section: PropTypes.string,
                }),
            ),
        }),
    }),
}

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                address {
                    locality
                    street
                    region
                    zipcode
                }
                contact {
                    email
                    location
                    phone
                    subject
                }
                hours
                name
            }
        }
        sections: allHomeYaml(
            sort: { fields: [order], order: ASC }
        ) {
            edges {
                node {
                    buttons {
                        label
                        link
                    }
                    caption {
                        context
                        contextColor
                        heading
                        headingColor
                    }
                    content
                    id
                    options {
                        backgroundColor
                        maxWidth
                        minHeight
                    }
                    order
                    section
                }
            }
        }
    }
`

export default PageHome;
