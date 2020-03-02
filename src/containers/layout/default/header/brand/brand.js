import React from 'react';
import PropTypes from 'prop-types';

import { BrandContainer, BrandLink, BrandLogo } from './brand.css';

const HeaderBrand = ({ isVisible, logo, name }) => (
    <BrandContainer isVisible={isVisible}>
        <BrandLink to="/">
            <BrandLogo
                alt={name}
                fluid={logo}
            />
        </BrandLink>
    </BrandContainer>
);

HeaderBrand.propTypes = {
    isVisible: PropTypes.bool,
    logo: PropTypes.shape({
        aspectRatio: PropTypes.number,
        base64: PropTypes.string,
        src: PropTypes.string,
        srcSet: PropTypes.string,
        sizes: PropTypes.string,
    }).isRequired,
    name: PropTypes.string.isRequired,
};

export default HeaderBrand;
