import React from 'react';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { ContentContainer } from './content.css';

const Content = props => (
    <ContentContainer {...props}>
        {props.children}
    </ContentContainer>
);

Content.propTypes = _propTypes;
Content.defaultProps = _defaultProps;

export const contentPropTypes = _propTypes;
export const contentDefaultProps = _defaultProps;
export default Content;
