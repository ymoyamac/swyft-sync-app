
import { TableProps } from './interfaces';


export function Table({ columnsDef, selectionModel }: TableProps) {

    return (
        <table className="flex flex-col justify-center w-full">
            <thead className="w-full">
                <tr className="flex justify-between">
                    {selectionModel && (
                        <th className="flex-none w-12 bg-secondary-dark">
                            &nbsp;
                        </th>
                    )}
                    {columnsDef?.map(column => (
                        <th className="flex justify-center w-full py-3 bg-secondary-dark text-white">
                            {column.toLocaleUpperCase()}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr className="flex justify-start">
                    {selectionModel && (
                        <th className="flex-none w-12 bg-secondary-dark">
                            &nbsp;
                        </th>
                    )}
                    {columnsDef?.map(column => (
                        <th className="flex justify-center w-full py-3 bg-secondary-dark text-white">
                            {column}
                        </th>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}