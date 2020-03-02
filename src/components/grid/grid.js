import React from 'react';

import _defaultProps from './_defaultProps';
import _propTypes from './_propTypes';
import { GridContainer } from './grid.css';

const Grid = props => (
    <GridContainer {...props}>
        {props.children}
    </GridContainer>
);

Grid.propTypes = _propTypes;
Grid.defaultProps = _defaultProps;

export const gridPropTypes = _propTypes;
export const gridDefaultProps = _defaultProps;
export default Grid;
