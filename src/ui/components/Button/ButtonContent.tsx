import { ReactNode, useContext } from 'react';
import { ButtonContext } from './Button';
import { Spinner } from '../Spinner';

interface ButtonContentProps {
    children?: ReactNode;
}

function ButtonContent({ children }: ButtonContentProps) {
    const { isLoading,  } = useContext(ButtonContext);
    return (
        <span className='flex flex-row gap-3 items-center w-full h-full'>
            {isLoading && <Spinner />}
            {children}
        </span>
    );
}

export default ButtonContent;