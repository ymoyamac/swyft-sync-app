import { KeyboardEvent } from 'react';

const KEYS = ['Backspace', 'Tab', 'Enter', 'Control', 'Escape'];

export function useInputMode() {

    function numeric(event: KeyboardEvent<HTMLInputElement>) {
        
        const key = event.key;
        if (KEYS.includes(key))  {
            return;
        }

        const isNumber = new RegExp(/^[0-9]*$/);
        if (!isNumber.test(key)) {
            event.preventDefault();
        }
    }

    return {
        numeric
    }
}
