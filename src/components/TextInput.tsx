import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex h-12 items-center gap-3 py-4 px-3 rounded w-full outline-none bg-gray-800 focus:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'



function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'


function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className='bg-transparent flex-1 text-gray-100 font-sans text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />
    )
}

TextInputIcon.displayName = 'TextInput.Input'


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}