import { MouseEvent, ReactNode } from 'react';

export interface ListProps {
    className?: string;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLLIElement>, options?: string) => void;
}

export function ListItem({ className, children, onClick }: ListProps) {
    return (
        <li
            className={`text-white animate__fadeInUp bg-secondary-dark w-full px-3 py-1 rounded-md hover:cursor-pointer hover:bg-secondary-dark/50 transition duration-200 ${className}`}
            onClick={onClick}
        >
            {children}
        </li>
    );
}
