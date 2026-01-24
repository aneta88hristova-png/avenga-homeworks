import { getHourlyWeatherForGeolocation } from "../api/api.js";
import { getGeolocation } from "../services/getGeolocation.js";

export const weatherStore = {
    hourlyData: [], 
    
    setHourlyDataForMyLocation: async function () {
        const myLocation = await getGeolocation();
        const dataFromAPI = await getHourlyWeatherForGeolocation(
            myLocation.latitude, 
            myLocation.longitude 
        );
        weatherStore.hourlyData = dataFromAPI.hourly;
    },

    init: async function() {
        await this.setHourlyDataForMyLocation();
    } 
};