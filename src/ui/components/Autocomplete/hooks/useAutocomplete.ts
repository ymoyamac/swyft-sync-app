/* eslint-disable react-hooks/exhaustive-deps */

import { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';

import { AutocompleteProps } from '../interfaces';


export function useAutocomplete({ options = [] }: AutocompleteProps) {

    const [formData, setFormData] = useState({ search: '' });
    const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
    const [isBlank, setIsBlank] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isLeave, setIsLeave] = useState(false);
    const [active, setActive] = useState(0);
    const { search } = formData;

    const selectRef = useRef(null);

    useEffect(() => {
        setIsBlank(search === '');
        filterOptions();
        setActive(0);     
    }, [search]);
    

    useEffect(() => {
        const selected = (selectRef!.current! as HTMLElement)?.querySelector(".active");
        if (selected) {
            selected?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [active]);


    function onChange({ target }: ChangeEvent<HTMLInputElement>) {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function filterOptions() {
        const value = search.trim().toLocaleLowerCase();
        setFilteredOptions(
            [...new Set([
                !isBlank && value !== (options.find(option => option === value) ?? '') ? value : '',
                ...options.filter(option => option.trim().toLocaleLowerCase().includes(value))
            ])]
            .filter(option => option !== '')
        );
    }

    function onSearchSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isBlank) {
            return;
        }
        setFilteredOptions([]);
        setIsBlank(false);
    }

    function onClick(event: MouseEvent<HTMLOptionElement>) {
        const search = event.currentTarget.value; 
        setFormData({ search });
        setFilteredOptions(options.filter(option => option.trim().toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())));
        setIsBlank(true);
        setIsFocus(false);
        setIsLeave(true);
    }

    function onFocus() {
        setIsFocus(true);
        setActive(0);        
    }

    function onBlur() {
        if (isLeave) {
            setIsFocus(false);
        }
    }

    function onMouseLeave() {
        setIsLeave(true);
    }

    function onMouseEnter() {
        setIsLeave(false);
    }

    function onKeyDown<HTMLDivElement>(event: KeyboardEvent<HTMLDivElement>) {
        if (event.code === NavigationKeys.ArrowDown) {
            setActive(prev => {
                if (prev === filteredOptions.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }

        if (event.code === NavigationKeys.ArrowUp) {
            setActive(prev => {
                if (prev === 0) {
                    return filteredOptions.length - 1;
                }
                return prev - 1;
            });
        }

        if (event.code === NavigationKeys.Enter) {
            const search: string | undefined = filteredOptions[active];
            if (search) {
                setFormData({ search });
                setFilteredOptions(
                    options.filter(option => 
                        option.trim()
                        .toLocaleLowerCase()
                        .includes(search.trim().toLocaleLowerCase())
                    )
                );
                setIsBlank(true);
                setIsFocus(true);
                setIsLeave(true);
                setActive(0);
            }
        }
        
    }

    return {
        ...formData,
        active,
        selectRef,
        filteredOptions,
        isBlank,
        isFocus,
        isLeave,
        onChange,
        onSearchSubmit,
        onClick,
        onFocus,
        onBlur,
        onMouseLeave,
        onMouseEnter,
        onKeyDown
    };
}

enum NavigationKeys {
    ArrowDown = 'ArrowDown',
    ArrowUp = 'ArrowUp',
    Enter = 'Enter',
}
