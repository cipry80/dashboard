import { render, screen } from '@testing-library/react';
import { Feedback } from './';

describe('pages/Feedback', () => {
    test('should contain specific text', () => {
        render(<Feedback />);
        screen.getByRole('heading', { name: /feedback/i });
    });
});
