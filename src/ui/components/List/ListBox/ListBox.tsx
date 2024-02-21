import { ReactNode } from 'react';

export interface ListBoxProps {
    className?: string;
    children?: ReactNode;
}

export function ListBox({ className, children }: ListBoxProps) {
    
    return (
        <div className={`relative w-full ${className}`}>
            {children}
        </div>
    );
}
