import { BoxProps } from './interfaces';

export function Box({ children, className, onClick }: BoxProps) {
    return (
        <div className={className}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
