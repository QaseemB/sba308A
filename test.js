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

            // Add event listener to handle selection changes
            parkSelection.addEventListener('change', (event) => {
                const selectedParkName = event.target.options[event.target.selectedIndex].textContent;
                const selectedParkSignName = event.target.value;
                document.querySelector('#park-info').textContent = `Selected Park: ${selectedParkName} (Sign Name: ${selectedParkSignName})`;
            });

            // Trigger the event listener initially to show the default selection
            parkSelection.dispatchEvent(new Event('change'));

        } catch (error) {
            console.error('Error fetching data:', error);
            alert(`Failed to retrieve data: ${error.message}`);
        }
    }

    getParkName();
});
