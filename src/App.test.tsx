import { render, screen } from '@testing-library/react';
import { App } from 'components';

test('renders learn react link', () => {
  render(
    <div>
      <App.Header />
      <App.Nav />
      <App.Aside />
      <App.Footer />
      </div>
  );
  const linkElement = screen.getByText(/footer/i);
  expect(linkElement).toBeInTheDocument();
});
