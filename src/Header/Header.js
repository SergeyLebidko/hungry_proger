import React, {Component} from 'react';
import HeaderCover from '../HeaderCover/HeaderCover';
import HeaderCanvas from '../HeaderCanvas/HeaderCanvas';
import {headerHeight} from '../App';


class Header extends Component {
    render() {
        return (
            <>
                <HeaderCover headerHeight={headerHeight}/>
                <HeaderCanvas headerHeight={headerHeight}/>
            </>
        )
    }
}

export default Header;