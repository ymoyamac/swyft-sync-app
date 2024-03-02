import { ReactNode, createContext } from 'react';
import { Spinner } from '../Spinner';

export interface ButtonsProps {
    children?: ReactNode;
    className: string;
    type: 'submit' | 'reset' | 'button' | undefined;
    name?: string;
    isLoading?: boolean;
    onClick?: () => void;
}

export interface ButtonContextState {
    isLoading?: boolean;
    onClick?: () => void;
    buttonType?: 'primary'
}

export const ButtonContext = createContext<ButtonContextState>({});

export function Button({ children, className, type, name, isLoading, onClick }: ButtonsProps) {
    return (
        <ButtonContext.Provider value={{ isLoading, onClick }}>
            <button className={!isLoading ? className : `${className} opacity-50`}
                type={type}
                name={name}
                disabled={isLoading}
                onClick={onClick}
            >
                <span className='flex flex-row gap-3 justify-center items-center w-full h-full'>
                    {isLoading && <Spinner />}
                    {children}
                </span>
            </button>
        </ButtonContext.Provider>
    );
}
