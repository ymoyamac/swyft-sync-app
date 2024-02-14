import { useContext } from 'react';
import { InputTextContext } from '../Input/InputText/InputText';
import { ValidationsOptions } from '../Input/interfaces';

export interface HintProps {
    className?: string;
    type?: string;
    msg?: string;
    validations?: ValidationsOptions;
}

export function Hint({ msg, validations }: HintProps) {
    const { isInvalid } = useContext(InputTextContext);    

    return (
        <>
            {
                isInvalid?.notBlank && (
                    <span className="text-sm text-rose-500">
                        {'This field cannot be empty'}
                    </span>
                )
            }
            {
                isInvalid?.onlyLetters && (
                    <span className="text-sm text-rose-500">
                        {msg ?? 'This field must contain only letters'}
                    </span>
                )
            }
            {
                isInvalid?.isEmail && (
                    <span className="text-sm text-rose-500">
                        {msg ?? 'Enter a valid email address'}
                    </span>
                )
            }
            {
                validations?.isRequired && (
                    <span className="text-sm text-rose-500">
                        {validations.requiredMsg ?? 'This field is required'}
                    </span>
                )
            }
            {
                validations?.isMin && (
                    <span className="text-sm text-rose-500">
                        {validations.minMsg ?? 'Please enter more characters in this field to continue'}
                    </span>
                )
            }
            {
                validations?.isMax && (
                    <span className="text-sm text-rose-500">
                        {validations.maxMsg ?? 'You have exceeded the maximum number of characters'}
                    </span>
                )
            }
        </>
    );
}