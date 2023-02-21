import { screen, fireEvent } from '@testing-library/react';
import { toast } from 'react-toastify';
import { renderWithProviders } from '../../test/test-utils';
import Search from './index';

vi.mock('react-toastify', () => ({
    toast: {
        error: vi.fn(),
    }
}));

describe('Search', () => {

    afterEach(() => {
        localStorage.clear();
    });

    it('shows placeholder text in the input if input is empty', () => {
        renderWithProviders(<Search />);
        const searchBar = screen.getByRole('textbox');
        expect(searchBar).toHaveAttribute('placeholder', 'Enter city name');
    });

    it('disables the search button if the input is empty', () => {
        renderWithProviders(<Search />);
        const searchButton = screen.getByText('Search');
        expect(searchButton).toBeDisabled();
    });

    it('enables the search button if the input is not empty', () => {
        renderWithProviders(<Search />);
        const searchBar = screen.getByRole('textbox');
        const searchButton = screen.getByText('Search');
        expect(searchButton).toBeDisabled();
        fireEvent.change(searchBar, { target: { value: 'abc' } });
        expect(searchButton).toBeEnabled();
    });

    it('searches if input is not empty and search button is clicked', () => {
        const { store } = renderWithProviders(<Search />);
        const searchBar = screen.getByRole('textbox');
        const searchButton = screen.getByText('Search');
        fireEvent.change(searchBar, { target: { value: 'new york' } });
        fireEvent.click(searchButton);
        expect(store.getState().weather.city).toEqual('New York');
    });

    it('searches if input is not empty and the enter key is pressed', () => {
        const { store } = renderWithProviders(<Search />);
        const searchBar = screen.getByRole('textbox');
        fireEvent.change(searchBar, { target: { value: 'new york' } });
        fireEvent.keyDown(searchBar, { key: 'Enter', code: 'Enter' });
        expect(store.getState().weather.city).toEqual('New York');
    });

    it('throws toast error if the city being searched is not found', () => {
        renderWithProviders(<Search />);
        const searchBar = screen.getByRole('textbox');
        const searchButton = screen.getByText('Search');
        fireEvent.change(searchBar, { target: { value: 'abc' } });
        fireEvent.click(searchButton);
        expect(toast.error).toHaveBeenCalled();
    });
});
