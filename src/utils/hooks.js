import {useContext} from "react";
import {renderCountContext} from "./contexts";
import {ANIMATION_TIMEOUT} from "../constants/settings";

export function useAnimation(mode, animationName, delay = null) {
    const renderContext = useContext(renderCountContext);
    const renderCount = renderContext[mode];

    return renderCount === 1 ? {
        animationName,
        animationDuration: `${ANIMATION_TIMEOUT}ms`,
        animationDelay: delay !== null ? `${delay}ms` : `${ANIMATION_TIMEOUT}ms`,
        animationFillMode: 'backwards'
    } : {};
}

export function useAnimationList(mode, animationName, delays) {
    const renderContext = useContext(renderCountContext);
    const renderCount = renderContext[mode];

    if (renderCount > 1) return [];

    const result = [];
    for (const delay of delays) {
        result.push({
            animationName,
            animationDuration: `${ANIMATION_TIMEOUT}ms`,
            animationDelay: `${delay}ms`,
            animationFillMode: 'backwards'
        });
    }
    return result;
}