import React from 'react';

import Caption from 'components/caption';
import Section from 'components/section';
import Layout from 'containers/layout';

const PageBlog = () => (
    <Layout>
        <Section
            backgroundColor="gray9"
            isCentered
            minHeight="50vh"
            wrapper="header"
        >
            <Caption
                captionType="hero"
                heading="Blog"
            />
        </Section>
        <Section>
            [WIP] use Grid component to render projects data.
        </Section>
    </Layout>
);

export default PageBlog;
