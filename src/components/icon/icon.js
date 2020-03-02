import React from 'react';
import PropTypes from 'prop-types';
import {
    FaBoxes,
    FaHeart,
    FaInstagram,
    FaLinkedin,
    FaMusic,
    FaTwitter,
} from 'react-icons/fa';
import {
    GiThink,
} from 'react-icons/gi';

import { IconWrapper } from './icon.css';

// Configure icons using available icons from react-icons
// For more details see: https://react-icons.netlify.com/#/
const Icon = ({ icon, children }) => {
    switch (icon) {
        case 'boxes':
            return <FaBoxes className="icon icon--boxes" />
        case 'heart':
            return <FaHeart className="icon icon--heart" />
        case 'instagram':
            return <FaInstagram className="icon icon--instagram" />
        case 'linkedin':
            return <FaLinkedin className="icon icon--linkedin" />
        case 'music':
            return <FaMusic className="icon icon--music" />
        case 'think':
            return <GiThink className="icon icon--think" />;
        case 'twitter':
            return <FaTwitter className="icon icon--twitter" />
        default:
            return <IconWrapper>{children}</IconWrapper>
    }
}

Icon.propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node,
};

export default Icon;
