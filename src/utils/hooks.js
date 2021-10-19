import {useContext} from "react";
import {renderCountContext} from "./contexts";
import {DEFAULT_ANIMATION_DELAY, DEFAULT_ANIMATION_DURATION} from "../constants/settings";

export function useAnimation(mode, animationName, delay = null, duration = null) {
    const renderContext = useContext(renderCountContext);
    const renderCount = renderContext[mode];

    return renderCount === 1 ? {
        animationName,
        animationDuration: duration !== null ? `${duration}ms` : `${DEFAULT_ANIMATION_DURATION}ms`,
        animationDelay: delay !== null ? `${delay}ms` : `${DEFAULT_ANIMATION_DELAY}ms`,
        animationFillMode: 'backwards'
    } : {};
}

export function useAnimationList(mode, animationName, delays, durations = null) {
    const renderContext = useContext(renderCountContext);
    const renderCount = renderContext[mode];

    if (renderCount > 1) return [];

    const result = [];
    let index = 0;
    for (const delay of delays) {
        result.push({
            animationName,
            animationDuration: durations !== null ? `${durations[index]}ms` : `${DEFAULT_ANIMATION_DURATION}ms`,
            animationDelay: `${delay}ms`,
            animationFillMode: 'backwards'
        });
        index++;
    }
    return result;
}