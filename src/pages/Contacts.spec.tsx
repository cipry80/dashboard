import { render, screen } from '@testing-library/react';
import { Contacts } from './';

describe('pages/Contacts', () => {
    test('should contain specific text', () => {
        render(<Contacts />);
        screen.getByRole('heading', {
            name: /contacts/i
        });
    });
});
