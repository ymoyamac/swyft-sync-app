/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from 'react';
import { FieldLength, ValidField, UseFormProps } from '../interfaces';

export function useForm<T>({ initialState, validationSchema = {} }: UseFormProps<T>) {
    
    const [formData, setFormData] = useState(initialState);
    const [fieldsRequired, setFieldsRequired] = useState<ValidField>({});
    const [isRequired, setIsRequired] = useState<ValidField>({});
    const [min, setMin] = useState<FieldLength>({});
    const [isMin, setIsMin] = useState<ValidField>({});
    const [max, setMax] = useState<FieldLength>({});
    const [isMax, setIsMax] = useState<ValidField>({});

    useEffect(() => {
        setFieldsRequired({...(getFields('required') as Record<string, boolean>)});
        setIsRequired({...initialRequiredFields});
        setMin({...(getFields('minLength') as Record<string, number>)});
        setMax({...(getFields('maxLength') as Record<string, number>)});
    }, []);

    const initialRequiredFields = Object.keys(validationSchema ?? {})
        .map(key => ({ [key]: false }))
        .filter(field => Object.values(field)[0] !== undefined)
        .reduce((result, obj) => ({ ...result, ...obj }), {});

    function getFields(validationKey: string): Record<string, boolean | number> {
        return Object.keys(validationSchema ?? {})
            .map(key => ({ [key]: (validationSchema[key][validationKey as keyof (ValidField & FieldLength)] as boolean | number) }))
            .filter(field => Object.values(field)[0] !== undefined)
            .reduce((result, obj) => ({ ...result, ...obj }), {});
    }
          

    function onChange({ target }: ChangeEvent<HTMLInputElement>) {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function validateRequiredFields() {
        let isFormValid = false;
        for (const key in isRequired) {
            
            setIsRequired(prevIsRequired => ({
                ...prevIsRequired,
                [key]: fieldsRequired[key] && formData[key as keyof T] === '',
            }));

            if (fieldsRequired[key] && formData[key as keyof T] === '') {
                isFormValid = true;
            }

        }

        for (const key in min) {
            
            setIsMin(prevIsRequired => ({
                ...prevIsRequired,
                [key]: `${formData[key as keyof T]}`.length < min[key]!,
            }));

            if (`${formData[key as keyof T]}`.length < min[key]!) {
                isFormValid = true;
            }

        }

        for (const key in max) {
            
            setIsMax(prevIsRequired => ({
                ...prevIsRequired,
                [key]: `${formData[key as keyof T]}`.length >= max[key]!,
            }));

            if (`${formData[key as keyof T]}`.length >= max[key]!) {
                isFormValid = true;
            }

        }

        return isFormValid;
    }

    function resetForm() {
        setFormData({ ...initialState });
    }

    return {
        ...formData,
        formData,
        isRequired,
        isMin,
        isMax,
        setFormData,
        fieldsRequired,
        validateRequiredFields,
        onChange,
        resetForm,
    };
}