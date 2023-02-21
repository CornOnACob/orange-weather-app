import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import TemperatureSwitch from './index';

describe('TemperatureSwitch', () => {

    it('starts with Celsius', () => {
        const { store } = renderWithProviders(<TemperatureSwitch />);
        expect(store.getState().temperature.isFahrenheit).toEqual(false);
    });

    it('toggles to Fahrenheit when clicked', () => {
        const { store } = renderWithProviders(<TemperatureSwitch />);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Toggle °C / °F');
        expect(store.getState().temperature.isFahrenheit).toEqual(false);
        fireEvent.click(button);
        expect(store.getState().temperature.isFahrenheit).toEqual(true);
    });

    it('toggles back to Celsius when clicked twice', () => {
        const { store } = renderWithProviders(<TemperatureSwitch />);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Toggle °C / °F');
        expect(store.getState().temperature.isFahrenheit).toEqual(false);
        fireEvent.click(button);
        expect(store.getState().temperature.isFahrenheit).toEqual(true);
        fireEvent.click(button);
        expect(store.getState().temperature.isFahrenheit).toEqual(false);
    });
});