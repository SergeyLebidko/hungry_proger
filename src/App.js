import React from 'react';
import Header from './Header/Header';
import TitleBlock from './TitleBlock/TitleBlock';
import style from './App.module.css';
import AboutMe from "./AboutMe/AboutMe";

export const headerHeight = window.innerHeight + 50;


function App() {
    return (
        <>
            <Header/>
            <TitleBlock/>
            <AboutMe/>
        </>
    );
}

export default App;
