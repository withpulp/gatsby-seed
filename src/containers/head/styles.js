import React, { Fragment } from 'react';

import StylesReset from './styles/reset.css';
import StylesTypography from './styles/typography.css';
import StylesPrism from './styles/prism.css';
import StylesPrint from './styles/print.css';

const Styles = () => (
  <Fragment>
    <StylesReset />
    <StylesTypography />
    <StylesPrism />
    <StylesPrint />
  </Fragment>
);

export default Styles;
