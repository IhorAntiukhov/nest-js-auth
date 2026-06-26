import React, { HTMLInputTypeAttribute } from 'react';
import { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
interface FormInputProps<T extends FieldValues> extends React.ComponentProps<'input'> {
    name: Path<T>;
    control: Control<T, unknown, T>;
    placeholder: string;
    description: string;
    type: HTMLInputTypeAttribute;
    errors: FieldErrors<T>;
}
export default function FormInput<T extends FieldValues>({ name, control, placeholder, description, type, errors, }: FormInputProps<T>): React.JSX.Element;
export {};
