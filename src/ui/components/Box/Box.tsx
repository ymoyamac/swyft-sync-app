import { BoxProps } from "./interfaces";


export function Box({ children, className, direcction }: BoxProps) {
    return (
        <div className={`flex flex-${direcction ?? 'col'} items-center justify-center gap-2 h-[100vh] w-[70%] m-auto ${className}`}>
            {children}
        </div>
    );
}
