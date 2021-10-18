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
    const [line, setLine] = useState(0);

    const [nextMode, setNextMode] = useState(null);
    const [nextLine, setNextLine] = useState(null);

    const MODE_LIST = [MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE];

    const switchMode = required => {
        if (mode && nextMode) return;
        if (required === mode) return;

        let delta;
        if (MODE_LIST.indexOf(mode) < MODE_LIST.indexOf(required)) {
            setNextLine(100);
            delta = -1;
        } else {
            setNextLine(-100);
            delta = 1;
        }

        setNextMode(required);
        for (let step = 0; step <= 100; step++) {
            setTimeout(() => {
                setLine(oldValue => oldValue + delta);
                setNextLine(oldValue => oldValue + delta);
                if (step === 100) {
                    setMode(required);
                    setLine(0);
                    setNextMode(null);
                    setNextLine(null);
                }
            }, step * 5);
        }
    }

    const getLine = wrapperMode => {
        if (wrapperMode === mode) return line;
        if (wrapperMode === nextMode) return nextLine;
        return null;
    }

    const toMain = () => switchMode(MAIN_MODE);
    const toAbout = () => switchMode(ABOUT_MODE);
    const toSkills = () => switchMode(SKILLS_MODE);
    const toProjects = () => switchMode(PROJECTS_MODE);

    return (
        <main className="app">
            <PageWrapper line={getLine(MAIN_MODE)} component={<Main toAbout={toAbout}/>}/>
            <PageWrapper line={getLine(ABOUT_MODE)} component={<About/>}/>
            <PageWrapper line={getLine(SKILLS_MODE)} component={<Skills/>}/>
            <PageWrapper line={getLine(PROJECTS_MODE)} component={<Projects/>}/>
            <Menu mode={mode} toMain={toMain} toAbout={toAbout} toSkills={toSkills} toProjects={toProjects}/>
        </main>
    );
}

export default App;