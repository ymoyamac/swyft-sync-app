import { Box } from './Box';
import { Table } from './Table';

export function PlayGround() {

    const options = ['firstName', 'realastNamect', 'age', 'visits', 'progress', 'status' ];

    const data: User[] = [
        {
            firstName: "Tanner",
            lastName: "Linsley",
            age: 33,
            visits: 100,
            progress: 50,
            status: "Married"
        },
        {
            firstName: "Kevin",
            lastName: "Vandy",
            age: 27,
            visits: 200,
            progress: 100,
            status: "Single"
        },
        {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            visits: 199,
            progress: 99,
            status: "Single"
        },
    ];

    return (
        <Box>
            <Table
                columnsDef={options}
                data={data}
                selectionModel='multiple'
            />
        </Box>
    );
}

type User = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
}