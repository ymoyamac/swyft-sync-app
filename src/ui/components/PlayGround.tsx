import { FormEvent, useState } from 'react';
import { Box, Text, Button, InputText, Form } from './';
import { ValidationSchema, useForm } from './Form';
import { InputNumber } from './Input/InputNumber/InputNumber';
import { ValidationsOptions } from './Input/interfaces';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
};

const validationSchema: ValidationSchema = {
    firstName: {
        required: true,
        minLength: 3,
        maxLength: 45,
    },
    lastName: {
        minLength: 2,
        maxLength: 45,
    },
    email: {
        required: true,
        minLength: 3
    },
    phoneNumber: {
        required: true,
        minLength: 10
    },
};

interface RegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export function PlayGround() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {firstName, lastName, email, phoneNumber, onChange, isRequired, isMin, isMax, validateRequiredFields, formData} = useForm<RegisterForm>({initialState, validationSchema});

    const firstNameValidations: ValidationsOptions = {
        isRequired: isRequired.firstName ?? false,
        requiredMsg: 'First name is required',
        isMin: isMin.firstName,
        minMsg: `First name must have at least ${validationSchema.firstName.minLength} characters`,
        isMax: isMax.firstName,
        maxMsg: `First name cannot be greater than ${validationSchema.firstName.maxLength} characters`
    };

    const lastNameValidations: ValidationsOptions = {
        isMin: isMin.lastName,
        minMsg: `Last name must have at least ${validationSchema.lastName.minLength} characters`,
        isMax: isMax.lastName,
        maxMsg: `Last name cannot be greater than ${validationSchema.lastName.maxLength} characters`
    }

    const phoneNumberValidations: ValidationsOptions = {
        isRequired: isRequired.phoneNumber ?? false,
        requiredMsg: 'Phone number is required',
        isMin: isMin.phoneNumber,
        minMsg: `Phone number must have at least ${validationSchema.phoneNumber.minLength} characters`,
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const isFormValid = validateRequiredFields();
        if (!isFormValid) {
            setIsLoading(true);
            setTimeout(() => {
                console.log(formData);
                
                setIsLoading(false);
            }, 2000);
        }
        
    }

    return (
        <Box>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos a reiciendis fugit nam quas accusantium suscipit officia tempore, repellat sed. Nostrum, hic cumque magni harum sit unde odit reprehenderit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis id repudiandae adipisci ut nam ratione, provident quidem a. Fuga quam placeat voluptatem laudantium voluptates quaerat expedita recusandae, voluptatibus dignissimos.
            </Text>
            <Form initialState={initialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <InputText
                    type="text"
                    label="First name"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    directives={['onlyLetters', 'notBlank']}
                    errorMessage={'Not valid, please enter only letters'}
                    validations={firstNameValidations}
                />
                <InputText
                    type="text"
                    label="Last name"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    directives={['onlyLetters', 'notBlank']}
                    validations={lastNameValidations}
                />

                <InputText
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    validations={{isRequired: isRequired.email ?? false, requiredMsg: 'Email is required'}}
                />
                <InputNumber
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onChange}
                    label="Phone number"
                    maxLength={10}
                    validations={phoneNumberValidations}
                />
                <Button
                    className="bg-indigo-700 hover:bg-indigo-500 px-4 py-2 border-solid border-2 border-indigo-800 rounded-lg text-white"
                    type="submit"
                    isLoading={isLoading}
                >
                    Click me!
                </Button>
            </Form>
            
        </Box>
    );
}

