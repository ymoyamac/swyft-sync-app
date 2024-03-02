import { ReactNode } from 'react';

export interface BoxProps {
    children?: ReactNode;
    className?: string;
    direcction?: string;
    onClick?: () => void;
}
