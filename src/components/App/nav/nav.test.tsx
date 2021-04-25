
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from './index';

describe('Testing Nav', () => {
    test('loads and displays content', async () => {
        render(<Nav />);
        expect(screen.getByRole('navigation')).toHaveTextContent('Inicio')
    })
})
