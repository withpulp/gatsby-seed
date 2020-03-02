import React from 'react';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { ButtonContainer } from './button.css';

const Button = props => (
    <ButtonContainer {...props}>
        {props.children}
    </ButtonContainer>
);

Button.propTypes = _propTypes;
Button.defaultProps = _defaultProps;

export const buttonPropTypes = _propTypes;
export const buttonDefaultProps = _defaultProps;
export default Button;
