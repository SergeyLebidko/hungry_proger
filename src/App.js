import React from 'react';
import Header from './Header/Header';
import TitleBlock from './TitleBlock/TitleBlock';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Skills from './Skills/Skills';
import Project from './Projects/Project';

export const headerHeight = window.innerHeight + 50;


function App() {
    return (
        <>
            <Header/>
            <TitleBlock/>
            <AboutMe/>
            <Skills/>
            <Project/>
            <Contacts/>
        </>
    );
}

export default App;
