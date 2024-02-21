import { Box } from './Box';
import { Search } from './Search';


export function PlayGround() {

    const options = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'quince', ' treinta y dos', 'unos soldados', 'uno punto y guion' ];
    

    return (
        <Box>
            <Search options={options} defaultOptions={options}/>
        </Box>
    );
}

