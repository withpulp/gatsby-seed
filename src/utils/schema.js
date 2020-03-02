// This does not support nested pages (level 2 and up)
// If you're working with deeply nested pages, remove this or rework it.
// Reference: https://github.com/fabe/gatsby-universal
const schema = ({
    // location,
    // canonical,
    siteUrl,
    pageTitle,
    title,
    pageTitleFull,
    description,
    logo,
    contact,
    address,
    hours,
    networks,
}) => {
    const socialNetworks = networks.map(network => network.url);
    // const isSubPage = pageTitle && location.pathname !== '/';
    // const isArticlePage = pageTitle && (
    //     location.pathname.includes('/blog/') || location.pathname.includes('/work/'));
    const schema = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            // url: canonical,
            name: pageTitle || title,
            alternateName: pageTitleFull,
        },
        {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            // url: canonical,
            name: pageTitle || title,
            sameAs: socialNetworks,
        },
        {
            '@context': 'http://schema.org',
            '@type': 'LocalBusiness',
            // url: canonical,
            name: pageTitle || title,
            logo: logo,
            image: logo,
            description: description,
            telephone: contact.phone,
            address: {
            '@type': 'PostalAddress',
            addressLocality: address.locality,
            addressRegion: address.region,
            streetAddress: address.street,
            postalCode: address.zipcode,
            },
            openingHours: hours,
        },
    ];

    if (pageTitle) {
        schema.push({
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                    '@id': siteUrl,
                    name: title,
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    item: {
                    // '@id': canonical,
                    name: pageTitle,
                    },
                },
            ],
        });
    }

    // TODO: BlogPosting schema for articles
    // if (isArticlePage) {
    //     schema.push({
    //         '@context': 'http://schema.org',
    //         '@type': 'BlogPosting',
    //         url: canonical,
    //         name: pageTitle,
    //         alternateName: pageTitle || title,
    //         headline: articleTitle,
    //         image: {
    //             '@type': 'ImageObject',
    //             url: articleImage,
    //         },
    //         description: articleExcerpt,
    //     });
    // }

    return schema;
};

export default schema;
