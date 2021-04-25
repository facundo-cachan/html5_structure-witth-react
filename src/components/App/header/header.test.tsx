
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './index';

describe('Testing Header', () => {
    test('loads and displays content', async () => {
        render(<Header />)
        expect(screen.getByRole('heading')).toHaveTextContent('Learn React')
        // expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })
/*
    test('handles server error', async () => {
        server.use(
            rest.get('/greeting', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        render(<Fetch url="/greeting" />)

        fireEvent.click(screen.getByText('Load Greeting'))

        await waitFor(() => screen.getByRole('alert'))

        expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
        expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
    })
*/
})
