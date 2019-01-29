import { ValidatorForm, ValidationRules } from 'react-form-validator-core';

ValidatorForm.addValidationRule('isPasswordMatch', (value, confirmValue) => {
    if (value !== confirmValue) {
        return false;
    }
    return true;
});

ValidatorForm.addValidationRule('minLength', (value, length) => {
    ValidationRules.isEmpty(value) || console.log(value.length >= parseInt(length, 10));
    ValidationRules.isEmpty(value) || value.length >= parseInt(length, 10);
});