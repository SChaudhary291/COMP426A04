// ActivitySuggestionsModel.js

export class Activity {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

export class WeatherBasedActivityModel extends EventTarget {
    #activities;
    #currentWeather;
    #apiKeyWeather;
    #apiKeyMaps;  // New API key for Google Maps

    constructor(weatherApiKey, mapsApiKey) {
        super();
        this.#apiKeyWeather = weatherApiKey;
        this.#apiKeyMaps = mapsApiKey;
        this.#activities = [
            new Activity("Park Visit", "Visit a local park for a pleasant walk or a quick jog."),
            new Activity("Museum Tour", "Explore local history and culture at a nearby museum."),
            new Activity("Coffee Shop", "Enjoy a warm beverage and relax at a cozy coffee shop."),
            new Activity("Indoor Swimming", "Go for an indoor swim at a community pool or fitness center."),
            new Activity("Movie Day", "Stay in and watch new or classic films."),
            new Activity("Board Game Night", "Organize a board game night with friends or family.")
        ];
    }

    async fetchWeatherByCity(city) {
        try {
            // Fetching coordinates for the city from Google Maps Geocoding API
            const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${this.#apiKeyMaps}`;
            const geoResponse = await fetch(geoUrl);
            const geoData = await geoResponse.json();

            if (geoData.results.length === 0) {
                throw new Error("No results found for specified location.");
            }

            const { lat, lng } = geoData.results[0].geometry.location;

            // Using coordinates to fetch weather from OpenWeatherMap
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${this.#apiKeyWeather}`;
            const weatherResponse = await fetch(weatherUrl);
            this.#currentWeather = await weatherResponse.json();
            this.dispatchEvent(new Event('weather_update'));
            return this.#currentWeather;
        } catch (error) {
            console.error("Failed to fetch data:", error);
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
