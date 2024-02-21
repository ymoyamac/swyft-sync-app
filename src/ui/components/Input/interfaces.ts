import { ChangeEvent, FocusEvent, ReactNode } from 'react';

export interface ValidationsOptions {
    isRequired?: boolean,
    requiredMsg?: string,
    isMin?: boolean,
    minMsg?: string,
    isMax?: boolean,
    maxMsg?: string,
}

export interface InputTextProps {
    name: string;
    value: string;
    className?: string;
    id?: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    label?: string;
    disable?: boolean;
    errorMessage?: string;
    validations?: ValidationsOptions;
    directives?: string | string[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface InputTextContextState {
    type?: string;
    value?: string;
    id?: string;
    name?: string;
    isInvalid?: InputTextValidator;
    validations?: ValidationsOptions;
}

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

export interface InputNumberProps {
    name: string;
    value: string;
    id?: string;
    className?: string;
    label: string;
    errorMessage?: string;
    disable?: boolean;
    maxLength?: number;
    validations?: ValidationsOptions;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface UseInputNumber {
    maxLength?: number | string;
}

export interface InputSearchProps {
    children?: ReactNode;
    name: string;
    value: string;
    className?: string;
    id?: string;
    type?: 'text';
    placeholder?: string;
    label?: string;
    disable?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface InputSearchContextState {
    type?: string;
    value?: string;
    id?: string;
    name?: string;
}
