import React from 'react';
import Header from './Header/Header';
import TitleBlock from './TitleBlock/TitleBlock';
import style from './App.module.css';

export const headerHeight = window.innerHeight;


function App() {
    return (
        <>
            <Header/>
            <TitleBlock/>
            <div style={{
                position: 'relative',
                top: `${headerHeight}px`,
                zIndex: 10,
                width: '100%',
                height: `${headerHeight}px`,
                backgroundColor: 'whitesmoke'
            }}>
                Просто какой то рандомный текст
            </div>
        </>
    );
}

export default App;
