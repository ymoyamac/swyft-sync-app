import { SelectProps } from './interfaces';

export function Select({ className, values, defaultOption = '' }: SelectProps) {

    return (
        <select className={`px-3 py-3 border rounded-md w-full text-lg text-slate-800 focus:outline-none focus:ring focus:border-blue-500  ${className}`}>
            <option
                disabled={true}
                selected={true}
                value={defaultOption ?? null}
            >
                Select
            </option>
            {values?.map(value => (
                <option key={value} value={value.trim().toLocaleLowerCase()}>{value}</option>
            ))}
        </select>
    );
}
