import { BoxProps } from "./interfaces";


export function Box({ children, className, direcction, onClick }: BoxProps) {
    return (
        <div className={`${className ?? `flex flex-${direcction ?? 'col'} items-center justify-center gap-2 h-[100vh] w-[70%] m-auto `}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
