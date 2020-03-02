import React from 'react';
import PropTypes from 'prop-types';

import { FooterWrapper, FooterContainer, FooterContent, FooterLink } from './footer.css';

const LayoutFooter = ({ copyright }) => (
    <FooterWrapper>
        <FooterContainer>
            {copyright && <FooterContent>{copyright}</FooterContent>}
            <FooterLink to="/privacy-and-terms">Privacy and terms.</FooterLink>
        </FooterContainer>
    </FooterWrapper>
);

LayoutFooter.propTypes = {
    copyright: PropTypes.string,
};

export default LayoutFooter;
