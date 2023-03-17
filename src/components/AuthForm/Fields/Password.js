import React, { useState } from 'react';
import { Field } from './Field';

export const Password = ({defaultPassword}) => {
    const [fieldError, setFieldError] = useState(false);

    const validatePassowrd = (value) => {
        if (value.length > 8) {
            setFieldError(true);
        } else {
            setFieldError(false);
        }
    };

    return (
        <>
                <Field {...PROPERTIES} isError={fieldError} validate={validatePassowrd} />
        </>
    )
};

const PROPERTIES = {
    type: 'text',
    name: 'password',
    placeholder: 'Введите пароль',
    errorMessage: 'Возможно, пароль введён некорректно. Попробуйте ещё раз.',
    required: true
};