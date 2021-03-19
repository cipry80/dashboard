import { render, screen } from '@testing-library/react';
import { CardGroup } from './';
describe('components/CardGroup', () => {
    test('should render CardGroup component with children', () => {
        render(
            <CardGroup>
                <h1>I am a child of the CardGroup</h1>
            </CardGroup>
        );

        const children = screen.getByText('I am a child of the CardGroup');
        expect(children).toBeInTheDocument();
    });
});
