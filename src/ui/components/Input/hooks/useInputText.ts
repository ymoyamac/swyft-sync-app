/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { isEmail, notBlank, onlyLetters } from '../../../../utils/inputValidators';

export interface InputTextValidator {
    onlyLetters?: boolean;
    isEmail?: boolean;
    notBlank?: boolean;
}

export interface ValidateParams {
    value?: string;
    type?: 'text' | 'email' | 'password';
    required?: boolean;
    inputName?: string;
    directives?: string | string[];
}

export function useInputText({ value, type, directives }: ValidateParams) {

    const [isInvalid, setIsInvalid] = useState<InputTextValidator>({});

    useEffect(() => {
        validate();
    }, [value]);

    function validate() {
        if (type === 'email') {
            setIsInvalid(prev => ({
                ...prev,
                isEmail: isEmail(value ?? '')
            }));
        }
        if (directives?.includes('onlyLetters')) {
            setIsInvalid(prev => ({
                ...prev,
                onlyLetters: onlyLetters(value ?? '')
            }));
        }
        if (directives?.includes('notBlank')) {
            setIsInvalid(prev => ({
                ...prev,
                notBlank: notBlank(value ?? '')
            }));
        }
        
    }

    return {
        ...isInvalid,
        isInvalid,
        setIsInvalid
    }
}
