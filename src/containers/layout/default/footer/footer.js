import React from 'react';
import PropTypes from 'prop-types';

import FooterMenu from './menu';
import { FooterWrapper, FooterContainer, FooterContent } from './footer.css';

// TODO: use Section, Content and other components to compose layout footer
// - use sectionType to define layout footer section and configure layout footer with section props
// - use Content and Link with contentTypes and linkTypes for text and links
// - use List with listTypes to create a menu component or create a menu component composition with menuTypes

const LayoutFooter = ({ copyright, memorial, routes }) => (
    <FooterWrapper as="footer">
        <FooterContainer as="div" boxType="container">
            {routes && <FooterMenu routes={routes} />}
            {memorial && <FooterContent>{memorial}</FooterContent>}
            {copyright && <FooterContent>{copyright}</FooterContent>}
        </FooterContainer>
    </FooterWrapper>
);

LayoutFooter.propTypes = {
    copyright: PropTypes.string,
    memorial: PropTypes.string,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            path: PropTypes.string,
        }),
    ),
};

export default LayoutFooter;
