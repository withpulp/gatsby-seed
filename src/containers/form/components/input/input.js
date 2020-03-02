import React from 'react';
import PropTypes from 'prop-types';

import { InputEmail, InputText, InputTextarea } from './input.css';

const FormInput = ({ type, ...props }) => {
    switch (type) {
        case 'email':
            return <InputEmail {...props} />
        case 'textarea':
            return <InputTextarea {...props} />
        default:
            return <InputText {...props} />
    }
};

FormInput.propTypes = {
    type: PropTypes.string,
}

export default FormInput;
