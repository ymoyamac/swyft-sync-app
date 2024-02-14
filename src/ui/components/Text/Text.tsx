import { ReactNode } from 'react';

export interface TextProps {
    children?: ReactNode;
    className?: string;
}

export function Text({ children, className }: TextProps) {
    return (
        <p className={`${className ?? 'text-black font-normal text-base leading-4'}`}>
            {children}
        </p>
    );
}