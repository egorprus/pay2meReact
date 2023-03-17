import React from 'react';

const textForStatuses = {
    error: {
        title: 'Что-то пошло не так',
        description: 'Вы ввели неверный логин или пароль.'
    },
    successLogin: {
        title: 'Здравствуйте, Вадим',
        description: 'Введите пароль для номера +7 (988) ****-**-45.'
    },
    default: {
        title: 'Войти в личный кабинет',
        description: 'Войдите, чтобы начать использовать платёжные решения PAY2ME.'
    }
}

export const MainText = ({status}) => {

    return (
        <div className="section__header">
            <h2 className="section__title">{textForStatuses[status].title}</h2>
            <p className="section__title-description">{textForStatuses[status].description}</p>
        </div>
    )
};