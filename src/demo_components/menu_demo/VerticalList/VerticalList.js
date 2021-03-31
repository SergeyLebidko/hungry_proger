import React, {useEffect, useState, useRef} from 'react';
import style from './VerticalList.module.scss';

function VerticalList({items, itemClickHandler, minimizeFlag, hasOpen}) {
    let container = useRef(null);
    let [maxHeight, setMaxHeight] = useState(window.innerHeight - 80);

    function checkOverflow() {
        if (!container.current) return;
        setMaxHeight(window.innerHeight - 80);
    }

    useEffect(() => {
        window.addEventListener('resize', checkOverflow);

        return () => window.removeEventListener('resize', checkOverflow);
    }, []);

    let inlineStyle = {maxHeight: `${maxHeight}px`}
    let className = style.container + ' ' + (minimizeFlag ? style.minimized_position : style.normal_position) + ' ' + (hasOpen ? style.open : style.closed);
    return (
        <ul className={className} style={inlineStyle} ref={container}>
            {items.map((value, index) => <li key={index} onClick={() => itemClickHandler(index)}>{value}</li>)}
        </ul>
    )
}

export default VerticalList;