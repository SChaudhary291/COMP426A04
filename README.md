# COMP426A04
# Weather and Music Discovery App

This is a web application that combines weather information and music discovery using multiple 3rd party APIs. The app allows users to search for a location and displays the current weather conditions for that location. Additionally, users can search for music artists and tracks, and the app will display related tweets from Twitter.

## APIs Used

This application utilizes the following 3rd party APIs:

1. **OpenWeatherMap API**: Used to retrieve current weather data for a specified location.
2. **Google Maps API**: Used for geocoding to convert user-entered locations into latitude and longitude coordinates.
3. **Spotify API**: Used to search for music artists and tracks based on user input.
4. **Twitter API**: Used to retrieve tweets related to the searched music artists or tracks.

## Features

- Search for a location to get current weather information
- Display current temperature, weather description, and additional details for the searched location
- Search for music artists or tracks
- Display a list of related tweets for the searched music artist or track
- Responsive and user-friendly interface

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository:
2. Open the `index.html` file in a web browser.

3. Enter a location in the provided search box to retrieve weather information.

4. Enter a music artist or track in the provided search box to retrieve related tweets.

## API Setup

To use this application with your own API credentials, follow these steps:

1. Sign up for developer accounts and obtain API keys for the following services:
- OpenWeatherMap API
- Google Maps API
- Spotify API
- Twitter API

2. Replace the placeholder API keys in the JavaScript files with your own API keys:
- `weather.js`: Replace `YOUR_OPENWEATHERMAP_API_KEY` with your OpenWeatherMap API key.
- `geocoding.js`: Replace `YOUR_GOOGLE_MAPS_API_KEY` with your Google Maps API key.
- `music.js`: Replace `YOUR_SPOTIFY_CLIENT_ID` and `YOUR_SPOTIFY_CLIENT_SECRET` with your Spotify API credentials.
- `twitter.js`: Replace `YOUR_TWITTER_API_KEY`, `YOUR_TWITTER_API_SECRET`, `YOUR_TWITTER_ACCESS_TOKEN`, and `YOUR_TWITTER_ACCESS_TOKEN_SECRET` with your Twitter API credentials.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data.
- [Google Maps](https://developers.google.com/maps) for geocoding services.
- [Spotify](https://developer.spotify.com/) for music data.
- [Twitter](https://developer.twitter.com/) for tweet data.

## License

This project is licensed under the [MIT License](LICENSE).