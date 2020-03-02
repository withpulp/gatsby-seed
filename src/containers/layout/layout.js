import React from 'react';
import PropTypes from 'prop-types';

import LayoutDefault from './default';
import LayoutForm from './form';

// TODO: refactor layout into a context provider with layoutTypes to provide different layouts.

const Layout = ({
    children,
    id,
    title,
    // description,
    // image,
}) => {
    switch (id) {
        case 'form':
            return <LayoutForm children={children} title={title} />
        default:
            return <LayoutDefault children={children} />
    }
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
};

export default Layout;
