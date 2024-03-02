import { createContext } from 'react';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { SearchProps } from './interfaces';

export interface SearchContextState {
    options?: string[];
}

export const SearchContext = createContext<SearchContextState>({});

export function Search({ options = [] }: SearchProps) {

    return (
        <SearchContext.Provider value={{ options }}>
            <Autocomplete options={options}/>
        </SearchContext.Provider>
    );
    
}
