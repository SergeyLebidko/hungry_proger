import React from 'react';
import Header from './Header/Header';
import TitleBlock from './TitleBlock/TitleBlock';
import Content from './Content/Content';
import style from './App.module.css';

export const headerHeight = window.innerHeight + 50;


function App() {
    return (
        <>
            <Header/>
            <TitleBlock/>
            <Content/>
        </>
    );
}

export default App;
