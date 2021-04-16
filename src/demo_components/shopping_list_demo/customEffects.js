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
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });
}

export function useSelectionEffect(inputRef, flagVar) {
    useEffect(() => {
        if (inputRef.current && inputRef.current.value.length > 0) inputRef.current.select();
    }, [flagVar])
}
