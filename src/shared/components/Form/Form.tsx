import { createContext } from 'react';
import { FormContextState, FormProps } from './interfaces';

export const FormContext = createContext<FormContextState>({});

export function Form({ children, className, onSubmit, initialState, validationSchema }: FormProps) {
    return (
        <FormContext.Provider value={{initialState, validationSchema}}>
            <form className={`flex flex-col items-center w-full ${className ?? ''}`}
                onSubmit={onSubmit}
            >
                {children}
            </form>
        </FormContext.Provider>
    );
}
