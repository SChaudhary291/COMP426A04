// ActivitySuggestionsModel.js

export class Activity {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

export class WeatherBasedActivityModel extends EventTarget {
    #activities
    #currentWeather
    #apiKeyWeather

    constructor(apiKey) {
        super();
        this.#apiKeyWeather = apiKey;
        this.#activities = [
            new Activity("Park Visit", "Visit a local park for a pleasant walk or a quick jog."),
            new Activity("Museum Tour", "Explore local history and culture at a nearby museum."),
            new Activity("Coffee Shop", "Enjoy a warm beverage and relax at a cozy coffee shop."),
            new Activity("Indoor Swimming", "Go for an indoor swim at a community pool or fitness center."),
            new Activity("Movie Day", "Stay in and watch new or classic films."),
            new Activity("Board Game Night", "Organize a board game night with friends or family.")
        ];
    }

    async fetchWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.#apiKeyWeather}`);
            this.#currentWeather = await response.json();
            this.dispatchEvent(new Event('weather_update'));
            return this.#currentWeather;
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    }

    suggestActivities() {
        if (!this.#currentWeather) {
            console.error("Current weather data is not available.");
            return [];
        }

        let suggestions = [];
        const temp = this.#currentWeather.main.temp;
        const condition = this.#currentWeather.weather[0].main;

        if (condition.includes("Rain")) {
            suggestions.push(this.#activities[4]); // Movie Day
            suggestions.push(this.#activities[2]); // Coffee Shop
        } else if (temp > 20) {
            suggestions.push(this.#activities[0]); // Park Visit
            suggestions.push(this.#activities[3]); // Indoor Swimming
        } else {
            suggestions.push(this.#activities[1]); // Museum Tour
            suggestions.push(this.#activities[5]); // Board Game Night
        }

        return suggestions;
    }
}