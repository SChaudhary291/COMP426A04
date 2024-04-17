// ActivitySuggestionsController.js
import { WeatherBasedActivityModel } from "./ActivitySuggestionsModel.js";

export class ActivitySuggestionsController {
    #model;
    #view;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        // Setup listeners to model events
        this.#model.addEventListener('weather_update', () => this.updateActivities());

        // Optionally, listen to view events such as user input
        this.#view.onCityChange = (newCity) => this.updateWeather(newCity);
    }

    async updateWeather(city) {
        await this.#model.fetchWeather(city);
    }

    updateActivities() {
        const activities = this.#model.suggestActivities();
        this.#view.displayActivities(activities);
    }
}

