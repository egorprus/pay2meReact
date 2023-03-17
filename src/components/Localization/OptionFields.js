import React from 'react';

export const OptionFields = ({option}) => {

    return (
        <>
            <img className="option__icon" src={option.img} alt="flag" />
            <span className="option__text">{option.text}</span>
        </>
    )
};