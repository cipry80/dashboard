import { render, screen } from '@testing-library/react';
import { NotFound } from './';

describe('pages/NotFound', () => {
    test('should contain specific text', () => {
        render(<NotFound />);
        screen.getByRole('heading', { name: /oops! page not found!/i });
    });
});
