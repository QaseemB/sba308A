document.addEventListener('DOMContentLoaded', () => {
    let parkSelection = document.querySelector('#park-selection');
    async function getParkName() {
        try {
            const response = await fetch('https://data.cityofnewyork.us/resource/enfh-gkve.json?$limit=5000');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const parks = await response.json();
            // let parkSelection = document.querySelector('#park-selection');
            parks.sort((a, b) => a.name311.localeCompare(b.name311));

            parks.forEach(park => {
                const option = document.createElement('option');
                option.value = park.signname;
                option.textContent = park.name311;
                parkSelection.appendChild(option);
            });

            if (parks.length > 0) {
                parkSelection.value = parks[0].name311;
            }

            console.log(Array.isArray(parks));
            console.log(parks);
            console.log(parks[0].name311);


        } catch (error) {
            console.error('Error fetching data:', error);
            alert(`Failed to retrieve data: ${error.message}`);
        }
    }

    getParkName();
});
