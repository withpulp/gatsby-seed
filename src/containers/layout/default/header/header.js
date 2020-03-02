import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderBrand from './brand';
import HeaderMenu from './menu';
import { HeaderWrapper, HeaderContainer } from './header.css';

// TODO: refactor class component into functional component using react hooks/context
// TODO: use common components to compose layout header

class LayoutHeader extends Component {
    static propTypes = {
        logo: PropTypes.shape({
            aspectRatio: PropTypes.number,
            base64: PropTypes.string,
            src: PropTypes.string,
            srcSet: PropTypes.string,
            sizes: PropTypes.string,
        }),
        name: PropTypes.string,
        routes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                label: PropTypes.string,
                path: PropTypes.string,
            }),
        ),
    }

    state = {
        isVisible: false,
        isMenuOpen: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleVisibility);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleVisibility);
    }

    handleVisibility = () => {
        const offset = 500;
        const position = window.pageYOffset || document.body.scrollTop;
        const height = window.innerHeight - offset;

        if (position >= height) this.setState({ isVisible: true });
        else this.setState({ isVisible: false });
    }

    handleMenuToggle = () => {
        const { isMenuOpen } = this.state;

        this.setState({ isMenuOpen: !isMenuOpen });
    }

    render() {
        const { isMenuOpen, isVisible } = this.state;
        const { logo, name, routes } = this.props;

        return (
            <HeaderWrapper
                as="header"
                isMenuOpen={isMenuOpen}
                isVisible={isVisible}
            >
                <HeaderContainer
                    as="nav"
                    isFlex
                >
                    <HeaderBrand
                        isVisible={isVisible}
                        logo={logo}
                        name={name}
                    />
                    <HeaderMenu
                        isMenuOpen={isMenuOpen}
                        onMenuToggle={this.handleMenuToggle}
                        routes={routes}
                    />
                </HeaderContainer>
            </HeaderWrapper>
        );
    }
}

export default LayoutHeader;
