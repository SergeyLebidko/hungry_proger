import React from 'react';
import Header from './Header/Header';
import TitleBlock from './TitleBlock/TitleBlock';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import style from './App.module.css';

export const headerHeight = window.innerHeight + 50;


function App() {
    return (
        <>
            <Header/>
            <TitleBlock/>
            <AboutMe/>
            <Contacts/>
        </>
    );
}

export default App;
