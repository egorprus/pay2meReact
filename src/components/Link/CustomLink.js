import React from 'react';
import './style.scss';

const linksList = {
    registration: {
        text: 'Зарегистрироваться',
        description: 'У вас еще нет аккаунта?',
        descriptionMobile: 'Еще нет аккаунта?',
        url: '/'
    },
    changeUser: {
        text: 'Сменить пользователя',
        description: 'Это не мой номер',
        url: '/'
    },
    restoreAccess: {
        text: 'Восстановить доступ',
        description: 'Возникли проблемы со входом?',
        descriptionMobile: 'Проблемы со входом?',
        url: '/'
    }
}

export const CustomLink = ({status}) => {

    return (
        <p className="link-wrapper">
            <span className="link-description--laptop">
                {linksList[status].description}
            </span>
            <span className="link-description">
                {linksList[status].descriptionMobile}
            </span>
            <a className="link" href={linksList[status].url}>{linksList[status].text}</a>
        </p>
    )
};