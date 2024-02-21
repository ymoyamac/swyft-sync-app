import { ChangeEvent, FocusEvent, ReactNode, createContext } from 'react';
import { ValidationsOptions } from '../interfaces';
import { InputTextValidator, useInputText } from '../hooks';
import { Hint } from '../../Hint';

export interface InputSearchProps {
    children?: ReactNode;
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

export interface InputSearchContextState {
    type?: string;
    value?: string;
    id?: string;
    name?: string;
    isInvalid?: InputTextValidator;
    validations?: ValidationsOptions;
}

export const InputTextContext = createContext<InputSearchContextState>({});

export function InputSearch({ children, className, type, placeholder, id, name, label, disable, value, onChange, onFocus, onBlur, errorMessage, validations, directives }: InputSearchProps) {

    const { isEmail, notBlank, onlyLetters, isInvalid } = useInputText({ value, type, directives });
    
    const hasErrors = (isEmail || notBlank || onlyLetters || validations?.isRequired || validations?.isMin || validations?.isMax) ?? false;

    const errorClass = `${className} border-2 border-solid border-rose-500 focus:outline-none focus:ring focus:border-rose-500`;
    const errorLabelClass = 'text-sm text-rose-500';

    return (
        <InputTextContext.Provider value={{isInvalid}}>
            <div className="flex flex-col w-full h-full">
                {label && (<label className={`${hasErrors ? errorLabelClass : 'text-sm text-slate-300'}`}>{label}</label>)}
                <div className="flex flex-row items-center relative p-2 w-full">
                    <input className={`bg-transparent px-3 py-3 border rounded-md w-full text-lg text-slate-300 focus:outline-none focus:ring focus:border-blue-500 ${hasErrors ? errorClass : className} `}
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
                    />
                    <div className="absolute right-4">{children}</div>
                </div>
                <Hint msg={errorMessage} validations={validations}/>
            </div>
        </InputTextContext.Provider>
    );
}
