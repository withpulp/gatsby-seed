import React from 'react';

import Caption from 'components/caption';
import Section from 'components/section';
import Layout from 'containers/layout';


const PageServices = () => (
    <Layout>
        <Section
            backgroundColor="gray9"
            isCentered
            minHeight="50vh"
            wrapper="header"
        >
            <Caption
                captionType="hero"
                heading="Services"
            />
        </Section>
        <Section>
            [WIP] use Grid component to render services data.
        </Section>
    </Layout>
);

export default PageServices;
