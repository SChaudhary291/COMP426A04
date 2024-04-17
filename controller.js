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

// ActivitySuggestionsView.js

export class ActivitySuggestionsView {
    constructor() {
        this.onCityChange = null; // Callback for when the city changes
    }

    setupCityInputListener() {
        const cityInput = document.getElementById('cityInput');
        const citySubmit = document.getElementById('citySubmit');
       
        citySubmit.addEventListener('click', () => {
            if (this.onCityChange) {
                this.onCityChange(cityInput.value);
            }
        });
    }

    displayActivities(activities) {
        const activitiesList = document.getElementById('activitiesList');
        activitiesList.innerHTML = ''; // Clear previous entries

        activities.forEach(activity => {
            const item = document.createElement('li');
            item.textContent = `${activity.name}: ${activity.description}`;
            activitiesList.appendChild(item);
        });
    }
}
