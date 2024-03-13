import { Link } from '@tanstack/react-router';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { SwiftSyncIcon } from './SwiftSyncIcon';

export function Sidebar() {
    
    return (
        
        <nav className="w-full h-full flex flex-col px-2 py-8">
            <div className="flex flex-row items-center gap-2 py-3">
                <SwiftSyncIcon/>
                <span className="text-2xl font-medium">Swift sync</span>
            </div>
            <Link to="/" className="flex flex-row gap-4 rounded-md hover:bg-secondary-dark px-4 py-3 cursor-pointer [&.active]:font-bold [&.active]:text-primary [&.active]:bg-secondary-dark [&.active]:border-l-4 [&.active]:border-primary">
                <WbSunnyIcon className="[&.active]:bg-secondary"/>
                Today
            </Link>
        </nav>
    );
}
