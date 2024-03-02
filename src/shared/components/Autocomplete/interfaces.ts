export interface AutocompleteProps {
    options?: string[];
    defaultOptions?: string[];
    initOption?: string | number | readonly string[] | undefined;
}

export interface AutocompleteForm {
    search: string;
}
