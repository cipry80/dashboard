import { render, screen } from '@testing-library/react';
import { MyCard } from './';
describe('components/MyCard', () => {
    test('should render MyCard with text', () => {
        render(<MyCard />);

        const title = screen.getByRole('heading', { name: /my card/i });
        const ellipsisIcon = screen.getByTestId('svg-ellipsis');
        const cardType = screen.getByText(/visa/i);
        const name = screen.getByText(/alex smith/i);
        const date = screen.getByText(/07\/24/i);

        expect(title).toBeInTheDocument();
        expect(ellipsisIcon).toBeInTheDocument();
        expect(cardType).toBeInTheDocument();
        expect(name).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });
});
