import { render, screen } from '@testing-library/react';
import { Card } from './';
describe('components/Card', () => {
    test('should render Card component with children', () => {
        render(
            <Card>
                <h1>I am a child of the Card</h1>
            </Card>
        );

        const children = screen.getByText('I am a child of the Card');
        expect(children).toBeInTheDocument();
    });
});
