import React, { useEffect, useState } from 'react';
import eyeIcon from '../../../assets/icons/eye.svg';

export const Field = ({name, value, type, errorMessage, isError, validate}) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        validate(inputValue);
    }, [inputValue]);

    const clearField = () => {
        setInputValue('');
    };

    return (
        <div className={`form__field-wrapper ${isError ? 'form__field-wrapper--error' : ''}`}>
            <div className="form__field-content">
                <input className="form__field" type={type} name={name} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                {name === 'password'  &&
                    <button className="form__field-btn" type="button">
                        <img className="password-icon" src={eyeIcon} alt="eye icon" />
                    </button>
                }
                {isError && inputValue &&
                    <button className="close-icon" type="button" onClick={() => clearField()}>
                    </button>
                }
            </div>
            {isError && <span className="form__error">{errorMessage}</span>}
        </div>
    )
};