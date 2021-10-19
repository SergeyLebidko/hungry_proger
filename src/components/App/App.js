import React, {useState} from 'react';
import Menu from "../common/Menu/Menu";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import PageWrapper, {
    RISE_FROM_LEFT,
    RISE_FROM_RIGHT,
    LEAVE_TO_LEFT,
    LEAVE_TO_RIGHT
} from "../common/PageWrapper/PageWrapper";
import {MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE, SLIDE_TIMEOUT} from "../../constants/settings";
import "./App.scss";

const TO_LEFT = 'tl';
const TO_RIGHT = 'tr';

function App() {
    const [mode, setMode] = useState(MAIN_MODE);
    const [nextMode, setNextMode] = useState(null);

    const switchMode = required => {
        if (mode && nextMode) return;
        if (mode === required) return;

        setNextMode(required);
        setTimeout(() => {
            setMode(required);
            setNextMode(null);
        }, SLIDE_TIMEOUT);
    }

    const getDirection = wrapperMode => {
        if (!nextMode) return;

        const MODE_LIST = [MAIN_MODE, ABOUT_MODE, SKILLS_MODE, PROJECTS_MODE];
        const direction = MODE_LIST.indexOf(nextMode) > MODE_LIST.indexOf(mode) ? TO_LEFT : TO_RIGHT;

        if (direction === TO_LEFT) {
            if (wrapperMode === mode) return LEAVE_TO_LEFT;
            if (wrapperMode === nextMode) return RISE_FROM_RIGHT;
        }
        if (direction === TO_RIGHT) {
            if (wrapperMode === mode) return LEAVE_TO_RIGHT;
            if (wrapperMode === nextMode) return RISE_FROM_LEFT;
        }
    }

    const toMain = () => switchMode(MAIN_MODE);
    const toAbout = () => switchMode(ABOUT_MODE);
    const toSkills = () => switchMode(SKILLS_MODE);
    const toProjects = () => switchMode(PROJECTS_MODE);

    const hasMain = mode === MAIN_MODE || nextMode === MAIN_MODE;
    const hasAbout = mode === ABOUT_MODE || nextMode === ABOUT_MODE;
    const hasSkills = mode === SKILLS_MODE || nextMode === SKILLS_MODE;
    const hasProjects = mode === PROJECTS_MODE || nextMode === PROJECTS_MODE;

    return (
        <main className="app">
            {hasMain && <PageWrapper direction={getDirection(MAIN_MODE)}><Main toAbout={toAbout}/></PageWrapper>}
            {hasAbout && <PageWrapper direction={getDirection(ABOUT_MODE)}><About/></PageWrapper>}
            {hasSkills && <PageWrapper direction={getDirection(SKILLS_MODE)}><Skills/></PageWrapper>}
            {hasProjects && <PageWrapper direction={getDirection(PROJECTS_MODE)}><Projects/></PageWrapper>}
            <Menu mode={mode} toMain={toMain} toAbout={toAbout} toSkills={toSkills} toProjects={toProjects}/>
        </main>
    );
}

export default App;