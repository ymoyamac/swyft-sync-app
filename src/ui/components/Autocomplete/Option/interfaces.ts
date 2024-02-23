import { MouseEvent } from 'react';

export interface OptionProps {
    className?: string;
    value?: string;
    onClick?: (event: MouseEvent<HTMLOptionElement>) => void;
}