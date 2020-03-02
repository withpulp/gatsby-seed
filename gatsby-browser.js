import React from 'react';

import AppProvider from 'store/provider';

// React Context in Browser
export const wrapRootElement = ({ element }) => (
    <AppProvider>{element}</AppProvider>
);

// Always start at the top of the page on a route change.
// More investigation needed for a better solution. See https://github.com/gatsbyjs/gatsby/pull/3483
// Reference: https://github.com/gatsbyjs/gatsby/issues/3249
export const onRouteUpdate = () =>
    typeof window !== `undefined` && window.scrollTo(0, 0);

export const shouldUpdateScroll = () => false;
