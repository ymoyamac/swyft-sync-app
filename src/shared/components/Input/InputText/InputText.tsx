import { createContext } from 'react';

import { InputTextContextState, InputTextProps } from '../interfaces';

import { Hint } from '../../Hint';
import { useInputText } from '../hooks';

export const InputTextContext = createContext<InputTextContextState>({});

export function InputText({ className, type, placeholder, id, name, label, disable, value, onChange, onFocus, onBlur, errorMessage, validations, directives }: InputTextProps) {

    const { isEmail, notBlank, onlyLetters, isInvalid } = useInputText({ value, type, directives });
    
    const hasErrors = (isEmail || notBlank || onlyLetters || validations?.isRequired || validations?.isMin || validations?.isMax) ?? false;

    const errorClass = `${className} border-2 border-solid border-rose-500 focus:outline-none focus:ring focus:border-rose-500`;
    const errorLabelClass = 'text-sm text-rose-500';

    return (
        <InputTextContext.Provider value={{isInvalid}}>
            <div className="flex flex-col w-full h-full">
                {label && (<label className={` ${hasErrors ? errorLabelClass : 'text-sm text-slate-300'}`}>{label}</label>)}
                <div className="flex flex-row items-center relative mt-1 w-full">
                    <input className={`bg-transparent px-3 py-2 border rounded-md w-full text-lg text-slate-300 focus:outline-none focus:ring focus:border-blue-500 ${hasErrors ? errorClass : className} `}
                        type={type}
                        placeholder={placeholder ?? ''}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        disabled={disable ?? false}
                        autoComplete="off"
                        autoSave="off"
                    />
                </div>
                <Hint msg={errorMessage} validations={validations}/>
            </div>
        </InputTextContext.Provider>
    );
}