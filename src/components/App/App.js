import React, {useState} from 'react';
import Menu from "../common/Menu/Menu";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import "./App.scss";

const MAIN_MODE = 'mm';
const ABOUT_MODE = 'am';

function App() {
    const [mode, setMode] = useState(MAIN_MODE);

    const switchToMain = () => setMode(MAIN_MODE);
    const switchToAbout = () => setMode(ABOUT_MODE);

    return (
        <div className="app">
            <Menu toMain={switchToMain} toAbout={switchToAbout}/>
            {mode === MAIN_MODE && <Main/>}
            {mode === ABOUT_MODE && <About/>}
        </div>
    );
}

export default App;
