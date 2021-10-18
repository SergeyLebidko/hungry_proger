import React, {useState} from 'react';
import Menu from "../common/Menu/Menu";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import PageWrapper from "../common/PageWrapper/PageWrapper";
import {MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE} from "../../constants/settings";
import "./App.scss";

function App() {
    const [mode, setMode] = useState(MAIN_MODE);

    // const MODE_LIST = [MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE];

    const switchMode = required => {
        setMode(required);
    }

    const toMain = () => switchMode(MAIN_MODE);
    const toAbout = () => switchMode(ABOUT_MODE);
    const toSkills = () => switchMode(SKILLS_MODE);
    const toProjects = () => switchMode(PROJECTS_MODE);

    return (
        <main className="app">
            <PageWrapper component={<Main toAbout={toAbout}/>}/>
            <PageWrapper component={<About/>}/>
            <PageWrapper component={<Skills/>}/>
            <PageWrapper component={<Projects/>}/>
            <Menu mode={mode} toMain={toMain} toAbout={toAbout} toSkills={toSkills} toProjects={toProjects}/>
        </main>
    );
}

export default App;