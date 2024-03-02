import { OptionProps } from './interfaces';

export function Option({ className, value, onClick }: OptionProps) {

    return (
        <option
            key={value}
            className={className}
            value={value}
            onClick={onClick}
        >
            {value}
        </option>
    );
}
