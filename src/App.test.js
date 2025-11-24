import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Just check if the navbar brand is present, as we removed "learn react" link
  const brandElement = screen.getByText(/PSR/i);
  expect(brandElement).toBeInTheDocument();
});
