import { render, screen, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
// import { isMobileDevice } from '../helpers/isMobileDevice';
import { Aside } from './';

import * as helpers from '../helpers/isMobileDevice';

describe('components/Aside', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1024
        });
    });
    afterEach(cleanup);
    test('should render Aside component on desktop', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Aside />
            </Router>
        );
        const aside = screen.getByRole('navigation', { name: /aside navigation/i });
        expect(aside).toBeInTheDocument();
    });

    test.skip('should not render Aside component on mobile', () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 768
        });

        const history = createMemoryHistory();

        render(
            <Router history={history}>
                <Aside />
            </Router>
        );

        const aside = screen.getByRole('navigation', { name: /aside navigation/i });
        expect(aside).toBeNull();
    });
});
