import React from 'react';
import arrow from '../../assets/icons/arrow-left.svg';

export const BackLink = () => {

    return (
        <div className="main__link-wrapper">
            <a className="main__link" href="/" >
                <img src={arrow} alt="arrow left" />
                <span className="main__link-text">Назад</span>
            </a>
        </div>
    )
};