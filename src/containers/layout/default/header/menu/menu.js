import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
    MenuContainer,
    MenuButton,
    MenuIcon,
    MenuList,
    MenuItem,
} from './menu.css';

const HeaderMenu = ({ isMenuOpen, onMenuToggle, routes }) => (
    <MenuContainer isMenuOpen={isMenuOpen}>
        <MenuButton
            isMenuOpen={isMenuOpen}
            onClick={onMenuToggle}
        >
            <MenuIcon
                isMenuOpen={isMenuOpen}
                className="icon menu--icon"
                aria-hidden="true"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
            >
                <g className="menu--icon-lines">
                    <path className="menu--icon-line top" d="M5 13h90v14H5z" />
                    <path className="menu--icon-line middle" d="M5 43h90v14H5z" />
                    <path className="menu--icon-line bottom" d="M5 73h90v14H5z" />
                </g>
            </MenuIcon>
        </MenuButton>
        {routes && (
            <MenuList isMenuOpen={isMenuOpen}>
                {routes.map(route => (
                    <MenuItem key={route.id}>
                        <Link to={route.path}>
                            {route.label}
                        </Link>
                    </MenuItem>
                ))}
            </MenuList>
        )}
    </MenuContainer>
);

HeaderMenu.propTypes = {
    isMenuOpen: PropTypes.bool,
    onMenuToggle: PropTypes.func,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            path: PropTypes.string,
        }),
    ),
};

export default HeaderMenu;
