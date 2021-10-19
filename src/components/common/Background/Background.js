import React, {useEffect} from "react";
import "./Background.scss";

function Background() {

    useEffect(() => {
        const colorSwitchListener = e => console.log('Перехвачено:', e.detail.mode);
        document.documentElement.addEventListener('switch_color', colorSwitchListener);
    }, []);

    return (
        <div className="background"/>
    );
}

export default Background;