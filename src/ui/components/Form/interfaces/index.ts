import { FormEvent, ReactNode } from 'react';

export type ValidatorKey = 'required' | 'min' | 'max' | 'minLength' | 'maxLength';

export interface ValidationType {
    [key: string]: number | boolean | undefined;
}

export interface UseFormProps<T> {
    initialState: T;
    validationSchema?: ValidationSchema;
}

export interface ValidationSchema {
    [key: string]: ValidationType;
}

export interface ValidField {
    [key: string]: boolean | undefined;
}

export interface FieldLength {
    [key: string]: number | undefined;
}

export interface FormProps {
    children?: ReactNode;
    className?: string;
    initialState?: FormInitialState;
    validationSchema?: ValidationSchema;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export interface FormInitialState {
    [key: string]: unknown;
}

export interface FormContextState {
    initialState?: FormInitialState;
    validationSchema?: ValidationSchema;
}