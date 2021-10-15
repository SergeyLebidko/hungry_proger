import React, {useState} from 'react';
import Menu from "../common/Menu/Menu";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import "./App.scss";

const MAIN_MODE = 'mm';
const ABOUT_MODE = 'am';
const SKILLS_MODE = 'sm';
const PROJECTS_MODE = 'pm';

function App() {
    const [mode, setMode] = useState(MAIN_MODE);

    const toMain = () => setMode(MAIN_MODE);
    const toAbout = () => setMode(ABOUT_MODE);
    const toSkills = () => setMode(SKILLS_MODE);
    const toProjects = () => setMode(PROJECTS_MODE);

    return (
        <main className="app">
            <Menu toMain={toMain} toAbout={toAbout} toSkills={toSkills} toProjects={toProjects}/>
            {mode === MAIN_MODE && <Main toAbout={toAbout}/>}
            {mode === ABOUT_MODE && <About/>}
            {mode === SKILLS_MODE && <Skills/>}
            {mode === PROJECTS_MODE && <Projects/>}
        </main>
    );
}

export default App;
