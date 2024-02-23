
import { AutocompleteProps } from './interfaces';

import { Form } from '../Form';
import { InputSearch } from '../Input';

import './style.css';
import { useAutocomplete } from './hooks';
import { Option } from './Option';

export function Autocomplete({ options = [] }: AutocompleteProps) {

    const {
        search,
        filteredOptions,
        active,
        selectRef,
        isFocus,
        onChange,
        onSearchSubmit,
        onClick,
        onFocus,
        onBlur,
        onMouseLeave,
        onMouseEnter,
        onKeyDown
    } = useAutocomplete({ options });

    return (
        <Form className="relative" onSubmit={onSearchSubmit}>
            <InputSearch
                className="w-full h-full flex-none"
                name="search"
                value={search}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                placeholder="Search"
            />
            {(isFocus) && (
                <div
                    className="absolute top-12 left-0 right-0 flex-auto rounded-md w-full h-auto max-h-48 overflow-auto scroll-none"
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    ref={selectRef}
                >
                    {/* {(!isBlank && search !== (options.find(option => option === search) ?? '')) && (
                        <Option
                            key={search}
                            className="px-4 py-3 w-full text-md text-slate-300 bg-secondaryDark hover:bg-lowDark hover:cursor-pointer"
                            value={search}
                            onClick={onClick}
                        />
                    )} */}
                    {filteredOptions.map(option => (
                        <Option
                            key={option}
                            className={`
                                ${filteredOptions[active] === option ? 'bg-zinc-700 active' : 'bg-secondaryDark'}
                                px-4 py-3 w-full
                                text-md text-slate-300 bg-secondaryDark
                                hover:bg-lowDark hover:cursor-pointer
                            `}
                            value={option.trim().toLocaleLowerCase()}
                            onClick={onClick}
                        />
                    ))}
                </div>
            )}
        </Form>
    );
}
