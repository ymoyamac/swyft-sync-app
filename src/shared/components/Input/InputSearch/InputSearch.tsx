import { createContext } from 'react';

import { InputIconContextState, InputIconProps } from '../interfaces';

import { Button } from '../../Button';

import SearchIcon from '@mui/icons-material/Search';

export const InputSearchContext = createContext<InputIconContextState>({});

export function InputSearch({ className, type, placeholder, id, name, label, disable, value, onChange, onFocus, onBlur, onKeyDown }: InputIconProps) {

    return (
        <InputSearchContext.Provider value={{}}>
            <div className="flex flex-col w-full">
                {label && (<label className={'text-sm text-slate-300'}>{label}</label>)}
                <div className="flex flex-row items-center relative w-full">
                    <input className={`bg-transparent px-3 py-3 border rounded-md w-full text-lg text-slate-300 focus:outline-none focus:ring focus:border-blue-500 ${className} `}
                        type={type}
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
                        <Button
                            className='bg-dark rounded-full p-2 hover:bg-secondary-dark/50 transition duration-700'
                            type="submit"
                        >
                            <SearchIcon className="text-white" />
                        </Button>
                    </div>
                </div>
            </div>
        </InputSearchContext.Provider>
    );
}
