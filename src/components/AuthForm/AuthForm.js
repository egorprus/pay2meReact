import React from 'react';
import { Login } from './Fields/Login';
import { Password } from './Fields/Password';
import arrowRight from '../../assets/icons/arrow-right.svg';
import './style.scss'

export const AuthForm = ({currentLogin, defaulLogin, defaultPassword}) => {

    const handleLogin = () => {

    };

    const handlePassword = () => {

    }

    return (
        <>
            <form className="form">
                <Login handleLogin={handleLogin} defaulLogin={defaulLogin} />
                <Password handlePassword={handlePassword} defaultPassword={defaultPassword} />
                <button className="form__btn" type="submit">
                    Далее
                    <img className="form__btn-icon" src={arrowRight} alt="arrow right" />
                </button>
            </form>
        </>
    )
};