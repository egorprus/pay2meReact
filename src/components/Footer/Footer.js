import React from 'react';
import { Localization } from '../Localization/Localization';
import './style.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__item">
                <div className="footer__copyright">
                    <p className="footer__copyright-title">© PAY2ME 2023</p>
                    <p className="footer__address">ООО «Куарми» ИНН 7743364603</p>
                    <p className="footer__address">Юридический адрес 125445, Г. Москва, Ул. Беломорская, Д. 11, К. 1/290</p>
                </div>
                <div className="policy">
                    <a className="policy__item" href="/">Политика конфиденциальности</a>
                    <a className="policy__item" href="/">Пользовательское соглашение</a>
                </div>
            </div>
            <Localization />
        </footer>
    )
};