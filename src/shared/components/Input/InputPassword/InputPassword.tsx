import { createContext, useState } from 'react';

import { InputIconContextState, InputIconProps } from '../interfaces';


import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useInputText } from '../hooks';
import { Hint } from '../../Hint';
import { Box } from '../../Box';

export const InputPasswordContext = createContext<InputIconContextState>({});

export function InputPassword({ className, type, placeholder, id, name, label, disable, value, onChange, onFocus, onBlur, onKeyDown, directives, validations, errorMessage }: InputIconProps) {

    const [isVisibilityOff, setIsVisibilityOff] = useState(false);
    const { isEmail, notBlank, onlyLetters, isInvalid } = useInputText({ value, type, directives });
    
    const hasErrors = (isEmail || notBlank || onlyLetters || validations?.isRequired || validations?.isMin || validations?.isMax) ?? false;

    const errorClass = `${className} border-2 border-solid border-rose-500 focus:outline-none focus:ring focus:border-rose-500`;
    const errorLabelClass = 'text-sm text-rose-500';

    function onVisibilityChange() {
        setIsVisibilityOff(!isVisibilityOff);
    }

    return (
        <InputPasswordContext.Provider value={{isInvalid}}>
            <div className="flex flex-col w-full">
            {label && (<label className={` ${hasErrors ? errorLabelClass : 'text-sm text-slate-300'}`}>{label}</label>)}
                <div className="flex flex-row items-center relative mt-1 w-full">
                    <input className={`bg-transparent px-3 py-3 border rounded-md w-full text-lg text-slate-300 focus:outline-none focus:ring focus:border-blue-500 ${hasErrors ? errorClass : className} `}
                        type={isVisibilityOff ? 'text' : 'password'}
                        placeholder={placeholder ?? ''}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onKeyDown={onKeyDown}
                        disabled={disable ?? false}
                        autoComplete="off"
                    />
                    <div className="absolute right-4">
                        <Box
                            className='bg-secondary-dark rounded-full p-2 hover:bg-dark/50 transition duration-700 cursor-pointer'
                            onClick={onVisibilityChange}
                        >
                            {isVisibilityOff
                                ? <VisibilityOffIcon className="text-white" />
                                : <VisibilityIcon className="text-white" />}
                        </Box>
                    </div>
                </div>
                <Hint msg={errorMessage} validations={validations}/>
            </div>
        </InputPasswordContext.Provider>
    );
}
