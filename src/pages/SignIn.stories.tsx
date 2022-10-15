import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw'
import { SignIn } from './SignIn';

export default {
    title: 'Pages/Sign In',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions',(req,res,ctx)=>{
                    return res(ctx.json({
                      message: 'Signed in!'  
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText('Type your e-mail'), 'john.doe@example.com')
        userEvent.type(canvas.getByPlaceholderText('********'), 'Std1234*')
        userEvent.click(canvas.getByRole('button'))
        await waitFor(() => {
            return expect(canvas.getByText('You are now logged in!')).toBeInTheDocument()
        })
    }
}