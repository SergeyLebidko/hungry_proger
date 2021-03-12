import React from 'react';
import HeaderCanvas from './HeaderCanvas/HeaderCanvas';
import HeaderCover from './HeaderCover/HeaderCover';
import {headerHeight} from './settings';
import style from './App.module.css';


function App() {
    return (
        <>
            <HeaderCover headerHeight={headerHeight}/>
            <HeaderCanvas headerHeight={headerHeight}/>
        </>
    );
}

export default App;
