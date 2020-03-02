import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../input';
import { FieldContainer, FieldLabel, FieldError } from './field.css';

const FormField = ({ field, form, handleBlur, ...props }) => {
    const touched = form.touched[field.name];
    const error = form.errors && form.errors[field.name]
        ? form.errors[field.name]
        : null;

    return (
        <FieldContainer>
            {props.label && (
                <FieldLabel htmlFor={field.name || props.id}>
                    {props.label}
                </FieldLabel>
            )}
            <FormInput
                {...field}
                type={props.type}
                id={field.name || props.id}
                onBlur={handleBlur}
            />
            {(touched && error) &&
                <FieldError>
                    {error}
                </FieldError>
            }
        </FieldContainer>
    )
};

FormField.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onBlur: PropTypes.func,
        onChange: PropTypes.func
    }),
    form: PropTypes.shape(),
    order: PropTypes.number,
    flex: PropTypes.number,
    type: PropTypes.string,
    label: PropTypes.string,
    pushRight: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    handleBlur: PropTypes.func
};

export default FormField;
