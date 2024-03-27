import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";

export enum ViewsMode {
    list = 'list',
    grid = 'grid'
}

export type RefetchQuery<TData, TError> = <TPageData>(options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<TData, TError>>;
