// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App'; // relative path

test('renders hello world', () => {
    render(<App />);
    const text = screen.getByText(/hello world/i);
    expect(text).toBeInTheDocument();
});
