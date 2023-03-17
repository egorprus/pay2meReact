import React, { useState } from 'react';
import { Field } from './Field';

export const Login = ({defaultLogin}) => {
    const [fieldError, setFieldError] = useState(false);

    const validateLogin = (value) => {
        setFieldError(!(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value) || /^((\+7|7|8)+([0-9]){10})$/.test(value)));
    };

    return (
        <>
            <Field {...PROPERTIES} isError={fieldError} validate={validateLogin} />
        </>
    )
};

const PROPERTIES = {
    type: 'text',
    name: 'login',
    placeholder: 'Введите номер телефона или электронную почту',
    errorMessage: 'Возможно, электронная почта введена некорректно. Попробуйте ещё раз.',
    required: true
};