import { render, screen } from '@testing-library/react';
import { CircularProgressBar } from './';
describe('components/CircularProgressBar', () => {
    test('should render CircularProgressBar with text', () => {
        render(<CircularProgressBar />);

        const title = screen.getByText(/38%/i);
        expect(title).toBeInTheDocument();
    });
});
