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
        </>
    );
}

export default App;
