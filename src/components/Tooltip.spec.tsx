import { render, screen } from '@testing-library/react';
import { Tooltip } from './';
describe('components/Tooltip', () => {
    test('should render Tooltip component with title props', () => {
        render(<Tooltip title="Title for tooltip" />);
        const title = screen.getByText(/title for tooltip/i);
        expect(title).toBeInTheDocument();
    });
});
