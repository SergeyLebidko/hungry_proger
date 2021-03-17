import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import TitleBlock from './TitleBlock/TitleBlock';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Skills from './Skills/Skills';
import Project from './Projects/Project';

export const headerHeight = window.innerHeight + 50;


function App() {
    let [aboutMeContent, setAboutMeContent] = useState(null);
    let [projectsContent, setProjectsContent] = useState(null);

    useEffect(() => {
        axios.get('/content/about_me.txt').then(response => setAboutMeContent(response.data));
    }, []);

    useEffect(()=>{
        axios.get('/content/projects.txt').then(response => setProjectsContent(response.data));
    })

    return (
        <Switch>
            <Route exact path="/">
                <Header/>
                <TitleBlock/>
                <AboutMe content={aboutMeContent}/>
                <Skills/>
                <Project content={projectsContent}/>
                <Contacts/>
            </Route>
            <Route path="*">
                <div>Простите, но такой страницы нет...</div>
            </Route>
        </Switch>
    );
}

export default App;
