import { render, screen } from '@testing-library/react';
import { Help } from './';

describe('pages/Help', () => {
    test('should contain specific text', () => {
        render(<Help />);
        screen.getByRole('heading', { name: /help/i });
    });
});
