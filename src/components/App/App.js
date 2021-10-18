import React, {useState} from 'react';
import Menu from "../common/Menu/Menu";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import PageWrapper, {
    FRONT,
    BACK,
    RISE_FROM_LEFT,
    RISE_FROM_RIGHT,
    LEAVE_TO_LEFT,
    LEAVE_TO_RIGHT
} from "../common/PageWrapper/PageWrapper";
import {MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE} from "../../constants/settings";
import "./App.scss";

function App() {
    const [mode, setMode] = useState(MAIN_MODE);
    const [nextMode, setNextMode] = useState(null);

    const MODE_LIST = [MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE];

    const switchMode = required => {
        if (mode && nextMode) return;
        if (mode === required) return;

        setNextMode(required);
        setTimeout(() => {
            setMode(required);
            setNextMode(null);
        }, 500);
    }

    const getDisplay = wrapperMode => {
        if (nextMode) {
            const direction = MODE_LIST.indexOf(nextMode) > MODE_LIST.indexOf(mode) ? 'l' : 'r';
            if (direction === 'l') {
                if (wrapperMode === mode) return LEAVE_TO_LEFT;
                if (wrapperMode === nextMode) return RISE_FROM_RIGHT;
            }
            if (direction === 'r') {
                if (wrapperMode === mode) return LEAVE_TO_RIGHT;
                if (wrapperMode === nextMode) return RISE_FROM_LEFT;
            }
        }
        if (wrapperMode === mode) return FRONT;
        return BACK;
    }

    const toMain = () => switchMode(MAIN_MODE);
    const toAbout = () => switchMode(ABOUT_MODE);
    const toSkills = () => switchMode(SKILLS_MODE);
    const toProjects = () => switchMode(PROJECTS_MODE);

    return (
        <main className="app">
            <PageWrapper display={getDisplay(MAIN_MODE)} component={<Main toAbout={toAbout}/>}/>
            <PageWrapper display={getDisplay(ABOUT_MODE)} component={<About/>}/>
            <PageWrapper display={getDisplay(SKILLS_MODE)} component={<Skills/>}/>
            <PageWrapper display={getDisplay(PROJECTS_MODE)} component={<Projects/>}/>
            <Menu mode={mode} toMain={toMain} toAbout={toAbout} toSkills={toSkills} toProjects={toProjects}/>
        </main>
    );
}

export default App;