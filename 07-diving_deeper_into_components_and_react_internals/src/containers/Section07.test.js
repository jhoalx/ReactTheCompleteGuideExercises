import { render, screen } from '@testing-library/react';
import Section07 from './Section07';

test('renders learn react link', () => {
  render(<Section07 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
