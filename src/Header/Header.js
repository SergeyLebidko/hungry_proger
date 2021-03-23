import React from 'react';
import HeaderCover from '../HeaderCover/HeaderCover';
import HeaderCanvas from '../HeaderCanvas/HeaderCanvas';
import {headerHeight} from '../App';


function Header() {
    return (
        <>
            <HeaderCover headerHeight={headerHeight} pk="h_cover"/>
            <HeaderCanvas headerHeight={headerHeight} pk="h_canvas"/>
        </>
    );
}

export default Header;