import React, {useState} from 'react';
import Menu from "../common/Menu/Menu";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import {MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE} from "../../constants/settings";
import "./App.scss";
import PageWrapper from "../common/PageWrapper/PageWrapper";

function App() {
    const [mode, setMode] = useState(MAIN_MODE);

    const toMain = () => setMode(MAIN_MODE);
    const toAbout = () => setMode(ABOUT_MODE);
    const toSkills = () => setMode(SKILLS_MODE);
    const toProjects = () => setMode(PROJECTS_MODE);

    return (
        <main className="app">
            {mode === MAIN_MODE && <PageWrapper component={<Main toAbout={toAbout}/>}/>}
            {mode === ABOUT_MODE && <PageWrapper component={<About/>}/>}
            {mode === SKILLS_MODE && <PageWrapper component={<Skills/>}/>}
            {mode === PROJECTS_MODE && <PageWrapper component={<Projects/>}/>}
            <Menu mode={mode} toMain={toMain} toAbout={toAbout} toSkills={toSkills} toProjects={toProjects}/>
        </main>
    );
}

export default App;