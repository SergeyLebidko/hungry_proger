import React from 'react';
import HeaderCover from '../HeaderCover/HeaderCover';
import HeaderCanvas from '../HeaderCanvas/HeaderCanvas';
import {headerHeight} from '../App';


function Header() {
    return (
        <>
            <HeaderCover headerHeight={headerHeight}/>
            <HeaderCanvas headerHeight={headerHeight}/>
        </>
    );
}

export default Header;