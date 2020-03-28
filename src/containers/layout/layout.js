import React from 'react';

import LayoutDefault from './default';
import LayoutForm from './form';
import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';

// TODO:
// - merge default and form into single composition
//   - make use of layoutTypes to set component styles
//   - use shared components that can be configured using various themeOptions (topbar, footer, etc)

const Layout = ({ children, head, layoutType, themeOptions }) => {
    switch (layoutType) {
        case 'form':
            return <LayoutForm {...head} {...themeOptions}>{children}</LayoutForm>
        default:
            return <LayoutDefault {...head} {...themeOptions}>{children}</LayoutDefault>
    }
};

Layout.propTypes = _propTypes;
Layout.defaultProps = _defaultProps;

export const layoutPropTypes = _propTypes;
export const layoutDefaultProps = _defaultProps;
export default Layout;
