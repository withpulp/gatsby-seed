import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Provider } from './create_context';

// TODO: refactor store into context modules using flux pattern.

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
    state = {
        isModalOpen: false,
        openModal: () => this.setState({ isModalOpen: true }),
        closeModal: () => this.setState({ isModalOpen: false }),
    };

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppProvider;
