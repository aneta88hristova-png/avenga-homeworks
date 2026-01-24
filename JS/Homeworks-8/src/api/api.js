export const baseUrl = 'https://api.open-meteo.com/v1/forecast';

export async function getHourlyWeatherForGeolocation(latitude, longitude) {
    const hum = "relative_humidity_2m";
    const temp = "temperature_2m";
    const precip = "precipitation";
    const ws = "wind_speed_10m";

    const params = new URLSearchParams({
        latitude: latitude.toString(),
        longitude: longitude.toString(),
        hourly: `${temp},${hum},${precip},${ws}`,
        timezone: 'Europe/Skopje',
        past_hours: '0',
        forecast_hours: '24'
    });

    const url = `${baseUrl}?${params.toString()}`;
    
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.log('Error fetching weather data:', response.statusText);
            throw new Error(`Failed to fetch weather: ${response.statusText}`);
        }
    } catch (error) {
        console.log('Network error:', error.message);
        throw error;
    }
}