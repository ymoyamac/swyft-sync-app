
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

import { Todo } from '../models/Todo';
import { useState } from 'react';


export function TodoItem({ title, description, isCompleted, isPinned }: Todo) {

    const [isTodoPinned, setIsTodoPinned] = useState(isPinned);
    const [isTodoDone, setIsTodoDone] = useState(isCompleted);

    function onPinnedChange() {
        setIsTodoPinned(!isTodoPinned);
    }

    function onCheckChange() {
        setIsTodoDone(!isTodoDone);
    }

    return (
        <div className="flex flex-row items-center justify-between bg-dark hover:bg-low-dark hover:cursor-pointer px-7 py-4 rounded-md min-h-[96px] hover:shadow-lg">
            <div className="form-control">
                <label className="label cursor-pointer gap-6">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={isTodoDone}
                        onChange={onCheckChange}
                    />
                    <div className="flex flex-col gap-1 text-slate-400 ">
                        <span className={`label-text text-lg ${isTodoDone ? 'line-through' : ''}`}>{title}</span> 
                        {description && <span className={`label-text text-xs ${isTodoDone ? 'line-through' : ''}`}>{description}</span>} 
                    </div>
                </label>
            </div>
            <div className="cursor-pointer hover:bg-secondary-dark p-2 rounded-full"
                onClick={onPinnedChange}
            >
                {isTodoPinned ? <PushPinIcon /> : <PushPinOutlinedIcon />}
            </div>
        </div>
    );
}
