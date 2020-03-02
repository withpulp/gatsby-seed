const path = require('path');
const logo = path.resolve(__dirname, 'data/assets/logo.png');
const theme = require('./theme');

module.exports= {
    name: 'Gatsby Seed',
    title: 'Gatsby Seed | A gatsby starter for quickly making SEO-friendly static sites',
    description: 'A gatsby starter for quickly making SEO-friendly static sites.',
    siteUrl: 'https://withpulp.com/gatsbyjs',
    pathPrefix: null,
    language: 'en',
    logo: logo,
    theme: theme,
    themeColor: theme.color.primary,
    backgroundColor: theme.color.secondary1,
    copyright: '© 2020, With Pulp. All rights reserved.',
    outdatedBrowserWarning: `You're using an outdated browser - please upgrade your browser for a better user experience!`,
    address: {
        street: '123 Fake St.',
        locality: 'Fake State',
        region: 'FS',
        zipcode: '101010',
    },
    contact: {
        subject: `Let's talk`,
        phone: '917-470-7083',
        email: 'hello@withpulp.com',
        location: 'https://goo.gl/maps/N7yqxjPcZ7B2',
    },
    hours: ['Mo-Fr 09:00-17:00', 'Sa-Su 10:00-16:00'],
    manifest: {
        display: 'minimal-ui',
        icons: [
            {
                src: '/icons/android-chrome-36x36.png',
                sizes: '36x36',
                type: 'image/png',
                density: 0.75,
            },
            {
                src: '/icons/android-chrome-48x48.png',
                sizes: '48x48',
                type: 'image/png',
                density: 1,
            },
            {
                src: '/icons/android-chrome-72x72.png',
                sizes: '72x72',
                type: 'image/png',
                density: 1.5,
            },
            {
                src: '/icons/android-chrome-96x96.png',
                sizes: '96x96',
                type: 'image/png',
                density: 2.0,
            },
            {
                src: '/icons/android-chrome-144x144.png',
                sizes: '144x144',
                type: 'image/png',
                density: 3.0,
            },
            {
                src: '/icons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                density: 4.0,
            },
        ],
    },
    networks: [
        {
            icon: 'linkedin',
            label: 'Linked In',
            url: 'www.linkedin.com/in/damir-vazgird-92666535',
        },
        {
            icon: 'twitter',
            label: 'Twitter',
            url: 'https://twitter.com/dvazgird',
        },
        {
            icon: 'instagram',
            label: 'Instagram',
            url: 'https://www.instagram.com/_dvz_',
        },
    ],
    routes: [
        {
            id: 'about',
            label: 'About',
            path: '/about',
        },
        {
            id: 'services',
            label: 'Services',
            path: '/services',
        },
        {
            id: 'work',
            label: 'Work',
            path: '/work',
        },
        {
            id: 'blog',
            label: 'Blog',
            path: '/blog',
        },
        {
            id: 'contact',
            label: 'Contact',
            path: '/contact',
        },
    ],
    services: {
        googleAnalyticsId: 'UA-XXXXXXX-X',
        facebookAppId: 'XXXXXXXX',
        twitterHandle: 'dvazgird',
    },
};
