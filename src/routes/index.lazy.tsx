import { createFileRoute } from '@tanstack/react-router'
import { TodoPage } from '../app/todo/components/TodoPage';

export const Route = createFileRoute('/')({
    component: Index 
});
function Index() {
    return (
        <section className="flex flex-row items-center justify-center m-auto w-full h-full">
            <TodoPage />
        </section>
    );
}
