import React from 'react';
import HeaderCover from '../HeaderCover/HeaderCover';
import HeaderCanvas from '../HeaderCanvas/HeaderCanvas';
import {headerHeight} from '../settings';


const Header = () => {
    return (
        <>
            <HeaderCover headerHeight={headerHeight}/>
            <HeaderCanvas headerHeight={headerHeight}/>
        </>
    )
}

export default Header;