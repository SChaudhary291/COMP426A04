// ActivitySuggestionsView.js

export class ActivitySuggestionsView {
    constructor() {
        this.onCityChange = null; // Callback for when the city changes
        this.map = null;
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

    initMap() {
        const mapOptions = {
            center: new google.maps.LatLng(34.0522, -118.2437), // Default to Los Angeles, CA
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }

    updateMap(latitude, longitude) {
        if (this.map) {
            const newPos = new google.maps.LatLng(latitude, longitude);
            this.map.setCenter(newPos);
        }
    }
}