import {useContext} from "react";
import {renderCountContext} from "./contexts";

export function useAnimation(mode, animationName){
    const renderContext = useContext(renderCountContext);
    const renderCount = renderContext[mode];

    return renderCount === 1 ? {
        animationName,
        animationDuration: '500ms',
        animationDelay: '500ms',
        animationFillMode: 'backwards'
    } : {};
}