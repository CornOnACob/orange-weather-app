import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../test/test-utils';
import Weather from './index';

describe('Weather', () => {

    const initialWeatherState = {
        city: 'New York',
        temperature: 22,
        humidity: 0.6,
        windSpeed: 5
    }
    const initialTemperatureState = {
        isFahrenheit: false
    }
    const initialState = {
        preloadedState: {
            weather: initialWeatherState,
            temperature: initialTemperatureState
        }
    }

    it('shows the city name and weather data for the selected city', () => {
        renderWithProviders(<Weather />, initialState);
        expect(screen.getByText('Weather in New York:')).toBeInTheDocument();
        expect(screen.getByText('Temperature: 22 °C')).toBeInTheDocument();
        expect(screen.getByText('Humidity: 0.6%')).toBeInTheDocument();
        expect(screen.getByText('Wind Speed: 5 km/h')).toBeInTheDocument();
    });

    it('shows the temperature switch button', () => {
        renderWithProviders(<Weather />, initialState);
        expect(screen.getByRole('button', { name: 'Toggle °C / °F' })).toBeInTheDocument();
    });

    it('toggles temperature type when pressing the temperature switch button', () => {
        renderWithProviders(<Weather />, initialState);
        const temperatureSwitchButton = screen.getByRole('button', { name: 'Toggle °C / °F' });
        expect(screen.getByText('Temperature: 22 °C')).toBeInTheDocument();
        fireEvent.click(temperatureSwitchButton);
        expect(screen.getByText('Temperature: 71.6 °F')).toBeInTheDocument();
        fireEvent.click(temperatureSwitchButton);
        expect(screen.getByText('Temperature: 22 °C')).toBeInTheDocument();
    });
});
