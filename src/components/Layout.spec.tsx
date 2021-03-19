import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Layout } from './';

describe('components/Layout', () => {
    test('should render navigation, children and should contain links for the navigation', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Layout>
                    <h1>I am a child of the layout</h1>
                </Layout>
            </Router>
        );

        const children = screen.getByText('I am a child of the layout');
        const feedback = screen.getByRole('link', { name: /feedback/i });

        expect(children).toBeInTheDocument();
        expect(feedback).toBeInTheDocument();
    });
});
