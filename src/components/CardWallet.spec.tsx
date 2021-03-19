import { render, screen } from '@testing-library/react';
import { CardWallet } from './';
describe('components/CardWallet', () => {
    test('should render CardWallet component with children', () => {
        render(
            <CardWallet>
                <h1>I am a child of the CardWallet</h1>
            </CardWallet>
        );

        const children = screen.getByText('I am a child of the CardWallet');
        expect(children).toBeInTheDocument();
    });
});
