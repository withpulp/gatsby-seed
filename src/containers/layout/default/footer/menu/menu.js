import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
    MenuContainer,
    MenuList,
    MenuItem,
    MenuLink,
} from './menu.css';

const FooterMenu = ({ routes }) => (
    <MenuContainer>
        <MenuList>
            {routes.map(route => (
                <MenuItem key={route.id}>
                    <MenuLink as={Link} to={route.path}>
                        {route.label}
                    </MenuLink>
                </MenuItem>
            ))}
        </MenuList>
    </MenuContainer>
);

FooterMenu.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            path: PropTypes.string,
        }),
    ),
};

export default FooterMenu;
