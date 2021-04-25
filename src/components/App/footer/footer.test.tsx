
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from './index';

describe('Testing Footer', () => {
    test('loads and displays content', async () => {
        render(<Footer />)
        expect(screen.getByRole('feed')).toHaveTextContent(/Article 42/im)
        // expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })
})
