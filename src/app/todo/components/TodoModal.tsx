import { FormEvent, useContext, useState } from 'react';
import { Box, Fade, Modal, Backdrop } from '@mui/material';
import { TodoPageContext } from './TodoPage';
import { Button, Form, InputText, Text, useForm } from '../../../shared/components';
import { useMutation } from 'react-query';
import { CreateTodoDto } from '../models/CreateTodoDto';
import { ValidationSchema } from '../../../shared/components/Form';
import { useAuthStore } from '../../auth/store/auth.store';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '#181a1d',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

interface TodoModalProps {
    isCreateTodo?: boolean;
}

const initialState = {
    title: '',
    description: '',
};

const validationSchema: ValidationSchema = {
    title: {
        required: true
    },
};

export function TodoModal({ isCreateTodo = true }: TodoModalProps) {

    const [isLoading, setIsLoading] = useState(false);

    const authUser = useAuthStore((state) => state.authUser);

    const { open, setOpen, todoService } = useContext(TodoPageContext);
    const { title, description, isRequired, onChange, validateRequiredFields } = useForm({ initialState, validationSchema });

    const mutation = useMutation('/todos', {
        mutationFn: async ({ title, description }: CreateTodoDto) => await todoService?.createTodo(authUser?.token ?? '', { title, description }),
        retry: 0
    });

    async function createNewTodo() {
        setIsLoading(true);
        const isFormInvalid = validateRequiredFields();
        if (isFormInvalid) {
            setIsLoading(false);
            return;
        }
        await mutation.mutateAsync({ title, description }) as CreateTodoDto;
        setOpen(false);
        setIsLoading(false);
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await createNewTodo();
    }

    function onCloseModal() {
        setOpen(false);
    }

    function onCancel() {
        setOpen(false);
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onCloseModal}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Form initialState={initialState} onSubmit={onSubmit}>
                        <Text className="text-white text-center text-3xl font-semibold mb-4">
                            {isCreateTodo ? 'Create new' : 'Update'} <span className="text-primary">todo</span>
                        </Text>
                        <div className="flex flex-col gap-3 w-full">
                            <InputText
                                type="text"
                                label="Title"
                                name="title"
                                value={title}
                                onChange={onChange}
                                directives={['notBlank']}
                                validations={{ isRequired: isRequired?.title, requiredMsg: 'Title is required'}}
                            />
                            <label className="text-sm text-slate-300">
                                Description
                                <textarea
                                    className="bg-transparent px-3 py-2 mt-1 border rounded-md w-full text-lg text-slate-300 focus:outline-none focus:ring focus:border-blue-500 min-h-32"
                                    name="description"
                                    value={description}
                                    onChange={onChange}
                                />
                            </label>
                        </div>
                        <div className="flex flex-row gap-2 justify-center items-center mt-4 w-full">
                            <Button
                                className="px-4 py-2 bg-rose-700 hover:bg-rose-600 rounded-md w-full text-white"
                                type="button"
                                onClick={onCancel}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="px-4 py-2 bg-primary hover:bg-secondary rounded-md w-full text-white"
                                type="submit"
                                isLoading={isLoading}
                            >
                                {isCreateTodo ? 'Create' : 'Update'}
                            </Button>
                        </div>
                    </Form>
                </Box>
            </Fade>
        </Modal>
    );
}
