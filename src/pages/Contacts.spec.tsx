import { render, screen, cleanup } from '@testing-library/react';
import { Contacts } from './';

afterEach(cleanup);
describe('pages/Contacts', () => {
    test('should contain specific text', () => {
        render(<Contacts />);
        screen.getByRole('heading', {
            name: /contacts/i
        });
    });
});
