import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import Header from './Header/Header';
import TitleBlock from './TitleBlock/TitleBlock';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Skills from './Skills/Skills';
import Project from './Projects/Project';
import Article from "./Article/Article";
import NoMatch from './NoMatch/NoMatch';
import {store} from './store';

export const headerHeight = window.innerHeight + 50;
export const Context = React.createContext(store);


function App() {
    let [aboutMeContent, setAboutMeContent] = useState(null);
    let [projectsContent, setProjectsContent] = useState(null);
    let [skillsList, setSkillsList] = useState(null);
    let [contactsList, setContactsList] = useState(null);
    let [skillsDetail, setSkillsDetail] = useState(null);

    useEffect(() => {
        axios.get('/content/about_me.txt').then(response => setAboutMeContent(response.data));
        axios.get('/content/projects.txt').then(response => setProjectsContent(response.data));
        axios.get('/content/skills.txt').then(response => setSkillsList(response.data));
        axios.get('/content/contacts.txt').then(response => setContactsList(response.data));
        axios.get('/content/skills_detail.txt').then(response => setSkillsDetail(response.data));
    }, []);

    return (
        <Switch>
            <Route exact path="/">
                <Header/>
                <TitleBlock/>
                <AboutMe content={aboutMeContent}/>
                <Skills content={skillsList}/>
                <Project content={projectsContent}/>
                <Contacts content={contactsList}/>
            </Route>
            <Route exact path="/about_me">
                {aboutMeContent === null ? <Redirect to="/"/> : <Article content={aboutMeContent} title="Обо мне"/>}
            </Route>
            <Route exact path="/skills">
                {aboutMeContent === null ? <Redirect to="/"/> :
                    <Article content={skillsDetail} title="Технологии"/>}
            </Route>
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
    );
}

export default App;
