import { ChangeEvent } from 'react';
import { Hint } from '../../Hint';
import { ValidationsOptions } from '../interfaces';
import { useInputValueLength, useInputMode } from '../hooks';

export interface InputNumberProps {
    name: string;
    value: string;
    id?: string;
    className?: string;
    label: string;
    errorMessage?: string;
    disable?: boolean;
    maxLength?: number;
    validations?: ValidationsOptions;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputNumber({ className, label, maxLength, disable, id, name, value, onChange, errorMessage, validations }: InputNumberProps) {

    const { onInputMaxLengthChange } = useInputValueLength({ maxLength });
    const { numeric } = useInputMode();

    const hasErrors = (validations?.isRequired || validations?.isMin || validations?.isMax) ?? false;

    const errorClass = `${className} border-2 border-solid border-rose-500 focus:outline-none focus:ring focus:border-rose-500`;
    const errorLabelClass = 'text-sm text-rose-500';

    function onNumericInputChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(event);
        onInputMaxLengthChange(event);
    }

    return (
        <div className="flex flex-col w-full">
            {label && (<label className={`${hasErrors ? errorLabelClass : 'text-sm text-slate-300'}`}>{label}</label>)}
            <input
                className={`${hasErrors ? errorClass : className} bg-transparent px-2 py-1 border rounded-md w-full text-lg text-slate-300 focus:outline-none focus:ring focus:border-blue-500`}
                type="text"
                id={id}
                name={name}
                value={value}
                inputMode="numeric"
                maxLength={maxLength ?? 100}
                onChange={onNumericInputChange}
                onKeyDown={numeric}
                disabled={disable ?? false}
            />
            <Hint msg={errorMessage} validations={validations}/>

        </div>

    );
}