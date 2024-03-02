
import { TextProps } from './interfaces';

export function Text({ children, className }: TextProps) {
    return (
        <p className={`${className ?? 'text-black font-normal text-base leading-4'}`}>
            {children}
        </p>
    );
}