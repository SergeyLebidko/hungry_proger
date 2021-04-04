import {useEffect} from 'react';

export function useResetInputEffect(inputRef, cellRef, resetFunction) {
    useEffect(() => {
        let resetInput = (event) => {
            if (event.target === inputRef.current || event.target === cellRef.current) return;
            resetFunction();
        };
        window.addEventListener('click', resetInput);

        return () => window.removeEventListener('click', resetInput);
    }, []);
}

export function useFocusEffect(inputRef) {
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    });
}
