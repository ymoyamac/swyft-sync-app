import { Box } from "../../../shared/components";


export function TodoListLoadingPage() {

    return (
        <main className="flex flex-col gap-2 w-full h-full p-12">
            <Box className="flex flex-row justify-between px-2">
                <Box className="bg-primary min-h-8 max-h-8 min-w-36 max-w-7 animate-pulse rounded-lg mb-3"></Box>
                <Box className="flex flex-row gap-1">
                    <Box className="bg-primary min-h-7 max-h-7 min-w-7 max-w-7 animate-pulse rounded-lg mb-3"></Box>
                    <Box className="bg-primary min-h-7 max-h-7 min-w-7 max-w-7 animate-pulse rounded-lg mb-3"></Box>
                </Box>
            </Box>
            <Box className="flex flex-row items-center justify-between bg-dark animate-pulse px-7 py-4 rounded-md w-full min-h-28">
                <Box className="flex flex-row gap-6">
                    <Box className="bg-primary min-h-7 max-h-7 min-w-7 max-w-7 animate-pulse rounded-lg"></Box>
                    <Box className="flex flex-col gap-1 text-slate-400">
                        <Box className="bg-primary min-h-5 min-w-72 max-w-7 animate-pulse rounded-lg"></Box>
                        <Box className="bg-primary min-h-2 min-w-40 max-w-40 animate-pulse rounded-lg"></Box>
                    </Box>
                </Box>
            </Box>
            <Box className="flex flex-row items-center justify-between bg-dark animate-pulse px-7 py-4 rounded-md w-full min-h-28">
                <Box className="flex flex-row gap-6">
                    <Box className="bg-primary min-h-7 max-h-7 min-w-7 max-w-7 animate-pulse rounded-lg"></Box>
                    <Box className="flex flex-col gap-1 text-slate-400">
                        <Box className="bg-primary min-h-5 min-w-[500px] max-w-7 animate-pulse rounded-lg"></Box>
                        <Box className="bg-primary min-h-2 min-w-60 max-w-60 animate-pulse rounded-lg"></Box>
                    </Box>
                </Box>
            </Box>
            <Box className="flex flex-row items-center justify-between bg-dark animate-pulse px-7 py-4 rounded-md w-full min-h-28">
                <Box className="flex flex-row gap-6">
                    <Box className="bg-primary min-h-7 max-h-7 min-w-7 max-w-7 animate-pulse rounded-lg"></Box>
                    <Box className="flex flex-col gap-1 text-slate-400">
                        <Box className="bg-primary min-h-5 min-w-96 max-w-7 animate-pulse rounded-lg"></Box>
                        <Box className="bg-primary min-h-2 min-w-60 max-w-60 animate-pulse rounded-lg"></Box>
                    </Box>
                </Box>
            </Box>
        </main>
    );
}
