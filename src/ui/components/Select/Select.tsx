
export interface SelectProps {
    className?: string;
    values?: string[];
    defaultOption?: string;
}

export function Select({ className, values, defaultOption = '' }: SelectProps) {

    return (
        <select className={`px-3 py-3 border rounded-md w-full text-lg text-slate-800 focus:outline-none focus:ring focus:border-blue-500  ${className}`}>
            <option disabled={true} selected={true} value={defaultOption ?? null}>Select</option>
            {values?.map(value => (
                <option value={value.trim().toLocaleLowerCase()}>{value}</option>
            ))}
        </select>
    );
}
