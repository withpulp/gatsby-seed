import React from 'react';

import Box from 'components/box';
import Caption from 'components/caption';
import Content from 'components/content';
import Grid from 'components/grid';
import Section from 'components/section';
import Layout from 'containers/layout';

import { CustomCard } from './about.css';

// TODO: props and default config for page options (head, header, footer, main, etc).

const PageAbout = () => (
    <Layout>
        <Section
            backgroundColor="gray9"
            isCentered
            minHeight="50vh"
            wrapper="header"
        >
            <Caption
                captionType="hero"
                context="Think of this page as a kitchen sink that shows off every feature of this project and how you can build pages with relative ease."
                heading="What you should know about the Gatsby Seed starter."
                headingType="hero"
            />
        </Section>
        <Section
            container="div"
        >
            <Box
                as="figure"
                backgroundColor="gray8"
                boxShadow="card"
                boxType="card"
                flex="2"
            >
                <Caption
                    captionType="jumbo"
                    context="Optional context for jumbo Caption inside Box."
                    contextAs="h3"
                    contextType="h5"
                    heading="Jumbo Box"
                    headingAs="h2"
                    headingType="jumbo"
                />
            </Box>
            <CustomCard
                backgroundColor="gray8"
                boxShadow="card"
                boxType="card"
            >
                <Content
                    as="h2"
                    contentType="h5"
                    marginTop="0"
                >
                    Custom card component with hover effect
                </Content>
                <Content
                    marginBottom="0"
                >
                    This custom card component is a styled extension of the Box component set with card boxType, card boxShadow and gray8 backgroundColor.
                </Content>
            </CustomCard>
        </Section>
        <Section
            container="div"
            backgroundColor="primaryLight"
        >
            <Box
                as="figure"
                borderColor="primary"
                boxBorder="base"
                margin="auto"
                maxWidth="48em"
                padding="4"
                paddingLeft="8"
                paddingRight="8"
            >
                <Caption
                    alignContent="center"
                    alignItems="center"
                    backgroundColor="primary"
                    borderColor="primaryDark"
                    boxBorder="base"
                    boxType="card"
                    captionType="hero"
                    context="This box caption has values set for every available prop"
                    contextAlign="center"
                    contextColor="secondary"
                    contextMarginBottom="6"
                    contextMarginTop="0"
                    heading="This is the ultimate example"
                    headingAlign="center"
                    headingBorderBottom="base"
                    headingBorderColor="primaryDark"
                    headingColor="secondaryDark"
                    headingPaddingBottom="4"
                    headingType="heading"
                    justifyContent="center"
                    marginBottom="8"
                    marginTop="4"
                >
                    <Content
                        backgroundColor="primaryDark"
                        borderColor="secondaryDark"
                        borderRadius="3px"
                        boxBorder="base"
                        boxShadow="0 1px 2px 1px #313638"
                        contentAlign="center"
                        contentColor="white"
                        marginBottom="0"
                        maxWidth="24em"
                        padding="4"
                        paddingTop="6"
                        paddingBottom="6"
                    >
                        This is a content componented nested inside this caption, to show you how customizable all these components can be.
                    </Content>
                </Caption>
                <Content>
                    This content and the box around it has all of it's props configured. Even the section around the box is fully configured to show you how everything can be customized. You can even make content paragraphs into columns using props like this:
                </Content>
                <Content
                    as="div"
                    display="flex"
                    flex="1 50%"
                >
                    Content column left
                </Content>
                <Content
                    as="div"
                    display="flex"
                    flex="1 50%"
                >
                    Content column right
                </Content>
            </Box>
        </Section>
        <Section>
            <Caption
                context="You can configure the grid using all the available css grid properties."
                heading="This is the Grid component"
            />
            <Grid
                as="ul"
                gridTemplateColumns="repeat(auto-fit, minmax(16em, 1fr));"
            >
                <Grid
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    boxDisplay="flex"
                    gridColunn="span 2"
                    gridRow="span 2"
                    padding="4"
                >
                    <Content marginBottom="0">Grid Box 1</Content>
                </Grid>
                <Grid
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    boxDisplay="flex"
                    gridColunn="span 2"
                    gridRow="span 3"
                    padding="4"
                >
                    <Content marginBottom="0">Grid Box 2</Content>
                </Grid>
                <Grid
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    boxDisplay="flex"
                    gridColunn="span 4"
                    gridRow="span 4"
                    padding="4"
                >
                    <Content>Grid Box 3</Content>
                    <Grid
                        gridTemplateColumns="repeat(auto-fit, minmax(8em, 1fr));"
                    >
                        <Box
                            borderColor="secondaryLight"
                            boxBorder="base"
                            padding="4"
                        >
                            <Content marginBottom="0">Inner Grid Box 1</Content>
                        </Box>
                        <Box
                            borderColor="secondaryLight"
                            boxBorder="base"
                            padding="4"
                        >
                            <Content marginBottom="0">Inner Grid Box 2</Content>
                        </Box>
                        <Box
                            borderColor="secondaryLight"
                            boxBorder="base"
                            padding="4"
                        >
                            <Content marginBottom="0">Inner Grid Box 3</Content>
                        </Box>
                        <Box
                            borderColor="secondaryLight"
                            boxBorder="base"
                            padding="4"
                        >
                            <Content marginBottom="0">Inner Grid Box 4</Content>
                        </Box>
                        <Box
                            borderColor="secondaryLight"
                            boxBorder="base"
                            padding="4"
                        >
                            <Content marginBottom="0">Inner Grid Box 5</Content>
                        </Box>
                        <Box
                            borderColor="secondaryLight"
                            boxBorder="base"
                            padding="4"
                        >
                            <Content marginBottom="0">Inner Grid Box 6</Content>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    boxType="flex"
                    gridRow="span 2"
                    padding="4"
                >
                    <Content marginBottom="0">Grid Box 4</Content>
                </Grid>
                <Box
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    padding="4"
                >
                    <Content marginBottom="0">Grid Box 5</Content>
                </Box>
                <Grid
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    boxType="flex"
                    gridRow="span 2"
                    padding="4"
                >
                    <Content marginBottom="0">Grid Box 6</Content>
                </Grid>
                <Box
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    padding="4"
                >
                    <Content marginBottom="0">Grid Box 7</Content>
                </Box>
                <Box
                    as="li"
                    borderColor="secondaryLight"
                    boxBorder="base"
                    padding="4"
                >
                    <Content marginBottom="0">Grid Box 8</Content>
                </Box>
            </Grid>
            <Content
                contentType="small"
                marginTop="8"
            >
                NOTE: This method of creating complex grids is not recommended - if you want a fully responsive grid, it would be faster and easier to just extend the GridContainer styled-component instead. Think of this as an example showing you what's possible with the Grid component out the box - you can very easily create columns and rows by passing props. If you want an example of fully responsive custom grids, then take a look at the home page sections: services, projects and posts.
            </Content>
        </Section>
        <Section>
            <Caption
                context="You can nest HTML elements inside a content component and your content will naturally inherit styles from that content container - you can even use an extended content component with custom styles if you need to."
                heading="Use regular HTML elements"
            />
            <Content
                as="h3"
                contentType="h6"
            >
                Content as h3 with contentType h6
            </Content>
            <Content
                as="article"
                marginBottom="8"
                marginTop="0"
            >
                <hr />
                <h6>This is a regular h6 nested inside default Content component.</h6>
                <br />
                <br />
                <code>
                    console.log('This is a code block');
                </code>
                <br />
                <br />
                <p>
                    This is regular p nested inside default Content component. <a href="https://withpulp.com" target="_target">Click this link!</a>
                </p>
                <hr />
            </Content>
        </Section>
        <Section
            backgroundColor="secondary"
            wrapper="footer"
        >
            <Caption
                captionType="hero"
                context="The footer caption can be just as big as the header caption if you want it to be. This can be a good place to put a final call to action to let the user know he can register or buy something."
                contextColor="gray9"
                heading="Footer caption heading!"
                headingColor="white"
            />
            <Content
                contentColor="#883cd8"
                contentType="body"
                marginBottom="4"
                marginTop="24"
            >
                Content p with size body and color set using color hex code.
            </Content>
            <Content
                as="small"
                borderTop="base"
                contentColor="gray7"
                contentType="legal"
                paddingTop="4"
            >
                This is a legal content type that can be used for fine print.
            </Content>
        </Section>
    </Layout>
);

export default PageAbout;
