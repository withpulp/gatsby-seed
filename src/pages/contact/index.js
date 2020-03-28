import React from 'react';

import Section from 'components/section';
import Layout from 'containers/layout';

const head = {
    description: 'Contact page description',
    title: 'Contact | Gatsby Seed',
};

const PageContact = () => (
    <Layout layoutType="form" head={head}>
        <Section>
            [WIP] use Form container with forms data to render contact form.
        </Section>
    </Layout>
);

export default PageContact;
