import { render, screen } from '@testing-library/react';
import { Tooltip } from './';
describe('components/Tooltip', () => {
    test('should render Tooltip component with children', () => {
        render(<Tooltip title="Title for tooltip" />);
        const title = screen.getByText(/Title for tooltip/i);
        expect(title).toBeInTheDocument();
    });
});
