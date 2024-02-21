import { FormEvent, useEffect, useState } from 'react';

import { SearchForm, SearchProps } from './interfaces';

import { Form, useForm } from '../Form';

import { ListBox } from '../List/ListBox/ListBox';
import { List } from '../List/List/List';
import { ListItem } from '../List/ListItem/ListItem';
import { InputSearch } from '../Input';

export function Search({ options = [], defaultOptions }: SearchProps) {
    const initDefaultOptions = defaultOptions ?? options;

    const { search, onChange, validateRequiredFields, setFormData } = useForm<SearchForm>({initialState: { search: '' }});
    const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
    const [standarOptions, setStandarOptions] = useState<string[]>(initDefaultOptions);
    const [isBlank, setIsBlank] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    

    useEffect(() => {
        setIsBlank(search === '');
        setStandarOptions(isBlank ? [] : initDefaultOptions);
        filterOptions();
        if (isBlank && isFocus) {
            setStandarOptions(initDefaultOptions);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    function filterOptions() {
        const value = search.trim().toLocaleLowerCase();
        setFilteredOptions(
            options.filter(option => option.trim().toLocaleLowerCase().includes(value))
        );
    }

    function onSearchSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isBlank) {
            return;
        }
        const isFormValid = validateRequiredFields();
        if (!isFormValid) {
            setFilteredOptions([]);
            setIsBlank(false);
            console.log({ search });
        }
    }

    function onClick(option: string) {
        setFormData({ search: option });
        setFilteredOptions([]);
        setIsBlank(true);
        setIsFocus(false);
    }

    function onFocus() {
        setIsFocus(true);
        setStandarOptions(initDefaultOptions);
    }

    function onBlur() {
        setStandarOptions([]);
    }


    return (
        <Form onSubmit={onSearchSubmit}>
            <InputSearch
                className="w-full h-full"
                name="search"
                value={search}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder="Search"
            />
            {(isFocus && isBlank) ? (
                <ListBox>
                    <List>
                        {standarOptions.map(option => (
                            <ListItem
                                key={option}
                                onClick={() => onClick(option)}
                            >
                                {option}
                            </ListItem>
                        ))}
                    </List>
                </ListBox>
            ) : (
                (!isBlank) ? (
                    <ListBox>
                        <List>
                            {(!isBlank) && (
                                <ListItem
                                    key={'searchValue'}
                                    onClick={() => onClick(search)}
                                >
                                    {search}
                                </ListItem>
                            )}
                            {filteredOptions.map(option => {
                                if (option !== search) {
                                    return (
                                        <ListItem
                                            key={option}
                                            onClick={() => onClick(option)}
                                        >
                                            {option}
                                        </ListItem>
                                    );
                                }
                            })}
                        </List>
                    </ListBox>
                ) : (
                    <></>
                )
            )}
        </Form>
    );
}
