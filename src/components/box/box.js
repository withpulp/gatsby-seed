import React from 'react';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { BoxContainer } from './box.css';

const Box = props => (
    <BoxContainer {...props}>
        {props.children}
    </BoxContainer>
);

Box.propTypes = _propTypes;
Box.defaultProps = _defaultProps;

export const boxPropTypes = _propTypes;
export const boxDefaultProps = _defaultProps;
export default Box;
