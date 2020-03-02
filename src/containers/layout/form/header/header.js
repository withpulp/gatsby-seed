import React from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper, HeaderContainer, HeaderBrand } from './header.css';

const LayoutHeader = ({ name }) => (
    <HeaderWrapper>
        <HeaderContainer>
            <HeaderBrand to="/">
                {name}
            </HeaderBrand>
        </HeaderContainer>
    </HeaderWrapper>
);

LayoutHeader.propTypes = {
    name: PropTypes.string.isRequired,
};

export default LayoutHeader;
