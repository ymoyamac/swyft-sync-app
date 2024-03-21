import { useContext } from 'react';
import { Box, Button } from '../../../shared/components';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import { TodoPageContext } from './TodoPage';
import { ViewsMode } from '../interfaces';
import { Tooltip } from '@mui/material';
import { Autocomplete } from '../../../shared/components/Autocomplete';


export function TodoControl() {

    const { todoList, onViewChange } = useContext(TodoPageContext);

    function onViewListChange() {
        onViewChange!(ViewsMode.list);
    }

    function onViewGridChange() {
        onViewChange!(ViewsMode.grid);
    }

    return (
        <Box className="flex flex-row justify-between gap-2 px-12">
            <h2 className="text-4xl text-tertiary font-medium mb-3">{todoList}</h2>
            <Box className="flex flex-row gap-2">
                <Autocomplete />
                <Button
                    type="button"
                    className="flex flex-row justify-center items-center bg-secondary-dark rounded-full p-2 hover:bg-dark/50 transition duration-700 cursor-pointer"
                    onClick={onViewListChange}
                >
                    <Tooltip title="List" placement="top">
                        <ViewListIcon />
                    </Tooltip>
                </Button>
                <Button
                    type="button"
                    className="flex flex-row justify-center items-center bg-secondary-dark rounded-full p-2 hover:bg-dark/50 transition duration-700 cursor-pointer"
                    onClick={onViewGridChange}
                >
                    <Tooltip title="Grid" placement="top">
                        <AppsIcon />
                    </Tooltip>    
                </Button>
            </Box>
        </Box>
    );
}
