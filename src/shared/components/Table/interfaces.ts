export interface TableProps {
    className?: string;
    columnsDef?: string[];
    selectionModel?: 'multiple' | 'single';
    data: Array<{
        [key: string]: string | number;
    }>;
}

export type DataTable<T> = T[];
