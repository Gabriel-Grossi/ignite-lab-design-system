import { Checkbox } from "@radix-ui/react-checkbox";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from 'axios';
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent){
        event.preventDefault()
        
        await axios.post('/sessions',{
            email:'john.doe@example.com',
            password:'Std1234*'
        })

        setIsUserSignedIn(true)
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
            <header className='flex flex-col items-center'>
                <Logo />
                <Heading size='lg' className='mt-4'>
                    Ignite Lab
                </Heading>
                <Text size='lg' className='text-gray-400 mt-1'>
                    Sign in to get started
                </Text>
            </header>
            <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
                {isUserSignedIn && <Text>You are now logged in!</Text>}
                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>E-mail address</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <EnvelopeSimple />
                        </TextInput.Icon>
                        <TextInput.Input type="email" id='email' placeholder='Type your e-mail' />
                    </TextInput.Root>
                </label>
                <label htmlFor='password' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>Password</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input type="password" id='password' placeholder='********' />
                    </TextInput.Root>
                </label>
                <label htmlFor='remember' className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='sm' className='text-gray-200'>
                        Stay connected for 30 days
                    </Text>
                </label>
                <Button type='submit' className='mt-4'>
                    Sign In
                </Button>
            </form>
            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Forgot password?</a>
                </Text>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Want to sign in? Create Account!</a>
                </Text>
            </footer>
        </div>
    )
}