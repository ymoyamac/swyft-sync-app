import { FormEvent, useEffect, useState } from 'react';

import { Button } from '../Button';
import { Form, useForm } from '../Form';
import { InputText } from '../Input';

import SearchIcon from '@mui/icons-material/Search';
import { SearchForm } from './interfaces';
import { ListBox } from '../List/ListBox/ListBox';
import { List } from '../List/List/List';
import { ListItem } from '../List/ListItem/ListItem';

export interface SearchProps {
    options?: string[];
    defaultOptions?: string[];
}

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
            <InputText
                className="w-full h-full"
                name="search"
                value={search}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder="Search"
            >
                <Button
                    className='bg-dark rounded-full p-2 hover:bg-secondaryDark/50 transition duration-700'
                    type="submit"
                >
                    <SearchIcon className="text-white" />
                </Button>
            </InputText>
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
