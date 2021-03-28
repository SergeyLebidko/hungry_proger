import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import TitleBlock from './TitleBlock/TitleBlock';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import Skills from './Skills/Skills';
import Project from './Projects/Project';
import Demos from './Demos/Demos';
import Article from './Article/Article';
import NoMatch from './NoMatch/NoMatch';
import {store} from './store';
import HeaderCover from './HeaderCover/HeaderCover';
import HeaderCanvas from './HeaderCanvas/HeaderCanvas';
import UpMenuContainer from './demo_components/up_menu_demo/UpMenuContainer/UpMenuContainer';

export const Context = React.createContext(store);
const DEMO_PATH = '/demo';
const DEMO_DATA = [
    {
        title: 'Верхнее меню',
        href: 'up_menu',
        component: <UpMenuContainer/>
    }
];

function App() {
    let [windowSize, setWindowSize] = useState({'windowWidth': window.innerWidth, 'windowHeight': window.innerHeight});

    let resizeTimeout = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setWindowSize({'windowWidth': window.innerWidth, 'windowHeight': window.innerHeight});
        }, 600);
    });

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
        axios.get('/content/skills_detail.txt').then(response => setSkillsDetail(response.data));
    }, []);

    return (
        <Switch>
            <Route exact path="/">
                <HeaderCover/>
                <HeaderCanvas/>
                <TitleBlock windowSize={windowSize}/>
                <AboutMe windowSize={windowSize} content={aboutMeContent}/>
                <Skills windowSize={windowSize} content={skillsList}/>
                <Demos windowSize={windowSize} content={DEMO_DATA}/>
                <Project windowSize={windowSize} content={projectsContent}/>
                <Contacts windowSize={windowSize} content={contactsList}/>
            </Route>
            <Route exact path="/about_me">
                {aboutMeContent === null ? <Redirect to="/"/> : <Article content={aboutMeContent} title="Обо мне"/>}
            </Route>
            <Route exact path="/skills">
                {aboutMeContent === null ? <Redirect to="/"/> : <Article content={skillsDetail} title="Технологии"/>}
            </Route>
            {DEMO_DATA.map(data => <Route exact path={`${DEMO_PATH}/${data.href}`} key={data.href}>
                {data.component}
            </Route>)}
            <Route path="*">
                <NoMatch/>
            </Route>
        </Switch>
    );
}

export default App;
