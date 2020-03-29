import PropTypes from 'prop-types';
import { boxPropTypes } from 'components/box';

const wrapperPropTypes = {
    ...boxPropTypes,
    background: PropTypes.shape({
        color: PropTypes.string,
        gradient: PropTypes.string,
        image: PropTypes.string,
        position: PropTypes.string,
        repeat: PropTypes.string,
        size: PropTypes.string,
    }),
    wrapperType: PropTypes.string,
};

export default wrapperPropTypes;
