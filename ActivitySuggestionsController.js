// ActivitySuggestionsController.js
import { WeatherBasedActivityModel } from "./ActivitySuggestionsModel.js";
import { ActivitySuggestionsView } from "./ActivitySuggestionsView.js";

export class ActivitySuggestionsController {
    #model;
    #view;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        this.#model.addEventListener('weather_update', () => this.updateActivities());
        this.#view.onCityChange = (newCity) => this.updateWeather(newCity);
    }

    async updateWeather(city) {
        const weatherData = await this.#model.fetchWeather(city);
        if (weatherData && weatherData.coord) {
            this.#view.updateMap(weatherData.coord.lat, weatherData.coord.lon);
        }
    }

    updateActivities() {
        const activities = this.#model.suggestActivities();
        this.#view.displayActivities(activities);
    }
}
