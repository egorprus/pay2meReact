import React, { useState } from 'react';
import { OptionFields } from './OptionFields';
import ruFlag from '../../assets/icons/ru-flag.png';
import usFlag from '../../assets/icons/us-flag.png';
import './style.scss';

const options = [
    {
        img: ruFlag,
        text: 'Ru',
        description: 'Русский'
    },
    {
        img: usFlag,
        text: 'En',
        description: 'English'
    }
]

export const Localization = () => {
    const [currentOption, setCurrentOption] = useState(options[0]);
    const [openList, setOpenList] = useState(false);

    const changeLocalization = (language) => {
        // setLocalization(language);
    };

    const showList = () => {
        setOpenList(!openList);
    };

    return (
        <div className="localization">
            <button className="option" type="button" onClick={() => showList()}>
                <OptionFields option={currentOption} />
            </button>
            {openList &&
                <div className="options-wrapper">
                    <ul className="options-list">
                        {options.map(option => (
                            <li>
                                <button className="options-list__btn" type="button" onClick={() => changeLocalization(option.text)}>
                                    <OptionFields option={option} />
                                    <span className="option__description">{option.description}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
};