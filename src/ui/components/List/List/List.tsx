import { ReactNode } from 'react';

export interface ListProps {
    className?: string;
    children?: ReactNode;
}

export function List({ className, children }: ListProps) {
    return (
        <ul className={`list-none absolute h-10 top-0 flex flex-col gap-1 items-center px-4 w-full ${className}`}>
            {children}
        </ul>
    );
}
