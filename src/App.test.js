import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    test('renders without crashing', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
    });

    test('I can navigate to home page from brand icon component', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const helpIcon = screen.getByTestId('svg-tint');

        userEvent.click(helpIcon);
        screen.getByRole('heading', { name: /visitors/i });
        screen.getByRole('heading', { name: /customers/i });
        screen.getByRole('heading', { name: /orders/i });
        screen.getByRole('heading', { name: /spent time/i });
        screen.getByText(/businees trainer/i);
    });

    test('I can navigate to home page from brand icon component', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const helpIcon = screen.getByTestId('svg-home');

        userEvent.click(helpIcon);
        screen.getByRole('heading', { name: /visitors/i });
        screen.getByRole('heading', { name: /customers/i });
        screen.getByRole('heading', { name: /orders/i });
        screen.getByRole('heading', { name: /spent time/i });
        screen.getByText(/businees trainer/i);
    });

    test('I can navigate to feedback page from the the header navigation', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const feedBackLink = screen.getByRole('link', {
            name: /feedback/i
        });

        userEvent.click(feedBackLink);
        screen.getByRole('heading', { name: /feedback/i });
    });

    test('I can navigate to feedback page from the aside component', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const feedBackIcon = screen.getByTestId('svg-comments');

        userEvent.click(feedBackIcon);
        screen.getByRole('heading', { name: /feedback/i });
    });

    test('I can navigate to contacts page from the the header navigation', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const contactsLink = screen.getByRole('link', {
            name: /contacts/i
        });

        userEvent.click(contactsLink);
        screen.getByRole('heading', { name: /contacts/i });
    });

    test('I can navigate to contacts page from the aside component', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const addressIcon = screen.getByTestId('svg-address');

        userEvent.click(addressIcon);
        screen.getByRole('heading', { name: /contacts/i });
    });

    test('I can navigate to help page from the the header navigation', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const helpLink = screen.getByRole('link', {
            name: /help/i
        });

        userEvent.click(helpLink);
        screen.getByRole('heading', { name: /help/i });
    });

    test('I can navigate to help page from the aside component', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <App />
            </Router>
        );
        const helpIcon = screen.getByTestId('svg-help');

        userEvent.click(helpIcon);
        screen.getByRole('heading', { name: /help/i });
    });

    test('should show no match component if landing on a bad page', () => {
        const history = createMemoryHistory();
        history.push('/some/bad/route');
        render(
            <Router history={history}>
                <App />
            </Router>
        );

        screen.getByRole('heading', { name: /oops! page not found!/i });
    });
});
