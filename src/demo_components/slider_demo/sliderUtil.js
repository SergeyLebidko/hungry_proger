const moveLimit = 100;

export function createTouchSlideProps(prev, next, stopTimer = null, startTimer = null) {
    let startLine = null;

    function touchStartHandler(event) {
        startLine = event.changedTouches[0].clientX;
    }

    function touchEndHandler() {
        startLine = null;
    }

    function touchMoveHandler(event) {
        if (!startLine) return;
        let currentLine = event.changedTouches[0].clientX;
        let hasStep = activate(currentLine);
        if (hasStep) startLine = currentLine;
    }

    function activate(currentLine) {
        let hasStep = false;
        let step = currentLine - startLine;
        if (Math.abs(step) > moveLimit) {
            if (stopTimer) stopTimer();
            if (step < -moveLimit) next();
            if (step > moveLimit) prev();
            if (startTimer) startTimer();
            hasStep = true;
        }
        return hasStep;
    }

    return {onTouchStart: touchStartHandler, onTouchMove: touchMoveHandler, onTouchEnd: touchEndHandler}
}