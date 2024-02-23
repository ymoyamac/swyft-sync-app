import { ChangeEvent } from 'react';
import { UseInputNumber } from '../interfaces';

export function useInputValueLength({ maxLength = 100 }: UseInputNumber) {

    function onInputMaxLengthChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        const parsedMaxLength = typeof maxLength === 'string' ? parseInt(maxLength, 10) : maxLength;
        
        if (value.length > parsedMaxLength) {
            const truncatedValue = value.slice(0, parsedMaxLength);
            event.target.value = truncatedValue;
        }
    }

    return {
        onInputMaxLengthChange
    }
}