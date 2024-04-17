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
