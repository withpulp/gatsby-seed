const config = require('./site-config');

module.exports = {
    siteMetadata: {
        ...config,
    },
    plugins: [
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-webpack-size',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: config.services.googleAnalyticsId,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.title,
                short_name: config.name,
                description: config.description,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: config.manifest.display,
                icons: config.manifest.icons,
            },
        },
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                displayName: true,
                fileName: false,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/data`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://withpulp.us9.list-manage.com/subscribe/post?u=6380b6fe11ad3950670069ebd&amp;id=a676b7723c',
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/pages`,
                ignore: ['**/*.css.js'],
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow noopener noreferrer',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1200,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-smartypants',
                        options: {
                            dashes: 'oldschool',
                        },
                    },
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-responsive-iframe',
                ],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-transformer-yaml',
    ],
};
