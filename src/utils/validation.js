
// Validation with yup - https://github.com/jquense/yup
import * as yup from 'yup';

// Reusuable validation constants for common field types.
const VALIDATE_EMAIL = yup.string()
  .email(`Please enter a valid email address.`)
  .required(`We need your email address.`);

const VALIDATE_NAME = yup.string()
  .min(3, `Come on, a name is usually longer than that.`)
  .required(`What should we call you?`);

/**
 * validateSync - to validate synchronously with yup.
 *
 * @param {Object} schema - validation schema object.
 * @param {Object} values - form values to validate against schema.
 */
export const validateSync = (schema, values) => {
    try {
        schema.validateSync(values, { abortEarly: false });

        return undefined;
    } catch (errors) {
        let preparedErrors = {};
        errors.inner.map(error => (preparedErrors[error.path] = error.message));

        return preparedErrors;
    }
};

/**
 * validateGetStarted - to validate required fields in the Get Started form.
 *
 * @param {Object} values - form values to validate against schema.
 */
export const validateGetStarted = values => {
    const schema = yup.object().shape({
        name: VALIDATE_NAME,
        email: VALIDATE_EMAIL,
    });

    return validateSync(schema, values);
};

/**
 * validateAsync - to validate asynchronously with yup.
 *
 * @param {Object} schema - validation schema object.
 * @param {Object} values - form values to validate against schema.
 */
export const validateAsync = (schema, values) =>
    schema
        .validate(values, { abortEarly: false })
        .then(() => undefined)
        .catch(errors => {
            let preparedErrors = {};
            errors.inner.map(error => (preparedErrors[error.path] = error.message));

            throw preparedErrors;
        });

// validation module exports.
const validation = {
    validateGetStarted,
    validateSync,
    validateAsync,
};
  
export default validation;
