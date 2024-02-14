import { ChangeEvent, createContext } from 'react';

import { Hint } from '../../Hint';
import { InputTextValidator, useInputText } from '../hooks';
import { ValidationsOptions } from '../interfaces';

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
}

export interface InputTextContextState {
    type?: string;
    value?: string;
    id?: string;
    name?: string;
    isInvalid?: InputTextValidator;
    validations?: ValidationsOptions;
}



export const InputTextContext = createContext<InputTextContextState>({});

export function InputText({ className, type, placeholder, id, name, label, disable, value, onChange, errorMessage, validations, directives }: InputTextProps) {

    const { isEmail, notBlank, onlyLetters, isInvalid } = useInputText({ value, type, directives });
    
    const hasErrors = (isEmail || notBlank || onlyLetters || validations?.isRequired || validations?.isMin || validations?.isMax) ?? false;

    const errorClass = `${className} border-2 border-solid border-rose-500 focus:outline-none focus:ring focus:border-rose-500`;
    const errorLabelClass = 'text-sm text-rose-500';

    return (
        <InputTextContext.Provider value={{isInvalid}}>
            <div className="flex flex-col w-full">
                {label && (<label className={`${hasErrors ? errorLabelClass : 'text-sm text-slate-300'}`}>{label}</label>)}
                <input className={`${hasErrors ? errorClass : className} bg-transparent px-2 py-1 border rounded-md w-full text-lg text-slate-300 focus:outline-none focus:ring focus:border-blue-500`}
                    type={type}
                    placeholder={placeholder ?? ''}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disable ?? false}
                    autoComplete="off"
                />
                <Hint msg={errorMessage} validations={validations}/>
            </div>
        </InputTextContext.Provider>
    );
}