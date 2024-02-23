/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { InputTextValidator, ValidateParams } from '../interfaces';

import { isEmail, notBlank, onlyLetters } from '../../../../utils/inputValidators';

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
