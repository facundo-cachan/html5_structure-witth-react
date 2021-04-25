
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Aside from './index';

describe('Testing Aside', () => {
    test('loads and displays content', async () => {
        render(<Aside />)
        expect(screen.getByRole('navigation')).toHaveTextContent('Relacionado')
    })
})
