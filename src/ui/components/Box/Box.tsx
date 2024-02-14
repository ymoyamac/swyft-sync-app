import { ReactNode } from 'react';

export interface BoxProps {
    children?: ReactNode;
    className?: string;
    direcction?: string;
}

export function Box({ children, className, direcction }: BoxProps) {
    return (
        <div className={`${className ?? `flex flex-${direcction ?? 'col'} items-center justify-center gap-2 h-[100vh] w-[70%] m-auto`}`}>
            {children}
        </div>
    );
}
