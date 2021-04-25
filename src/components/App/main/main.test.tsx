
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from './index';

describe('Testing Main', () => {
    test('loads and displays content', async () => {
        render(<Main />)
        expect(screen.getByRole('main')).toHaveTextContent('Main')
        // expect(screen.getByRole('button')).toHaveAttribute('disabled')
    })
})
