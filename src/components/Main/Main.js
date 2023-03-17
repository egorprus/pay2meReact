import React, { useState } from 'react';
import { AuthForm } from '../AuthForm/AuthForm';
import { MainText } from '../MainText/MainText';
import { CustomLink } from '../Link/CustomLink';

const DEFAULT_LOGIN = 'betman';
const DEFAULT_PASSWORD = '12345678';

export const Main = () => {
    const [currentLogin, setCurrentLogin] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [authError, setAuthError] = useState(false);

    const textStatus = authError ? 'error' : currentLogin ? 'successLogin' : 'default';

    return (
        <main className="main">
            <section className="section">
                <h1 className="main__title">PAY2ME</h1>
                <MainText status={'default'} />
                <AuthForm currentLogin={currentLogin} defaultLogin={DEFAULT_LOGIN} defaultPassword={DEFAULT_PASSWORD} />
                <div className="section__footer">
                    {currentLogin === DEFAULT_LOGIN ?
                        <CustomLink status='changeUser' />
                        : <CustomLink status='registration' />
                    }            
                    <CustomLink status='restoreAccess' />
                </div>
            </section>
        </main>
    )
};