
    let parkSelection = document.querySelector('#park-selection');
    let parks = [];
    let infoDiv = document.querySelector(".park-info")
    
    async function getParkName() {
        try {
            const response = await fetch('https://data.cityofnewyork.us/resource/enfh-gkve.json?$limit=5000');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            parks = await response.json();
            // let parkSelection = document.querySelector('#park-selection');
            parks.sort((a, b) => a.name311.localeCompare(b.name311));

            parks.forEach(park => {
                const option = document.createElement('option');
                option.value = park.signname;
                option.textContent = park.name311;
                parkSelection.appendChild(option);
            });

            if (parks.length > 0) {
                parkSelection.value = parks[0].signname;
                getLocation(parks[0].signname);
            }

            console.log(parks[0].name311);


        } catch (error) {
            console.error('Error fetching data:', error);
            alert(`Failed to retrieve data: ${error.message}`);
        }
    }
    async function getLocation(x){

            try{
                const park = parks.find(p => p.signname === x)
                if (!park) {
                    throw new Error(`Selected Park doesnt exist in this database`);
                }
                
                const boroughKeys = {
                    "R": `Staten Island`,
                    "B":  `Brooklyn`,
                    "X": `The Bronx`,
                    "Q": `Queens`,
                    "M": "Manhattan"
    
                }
                
                const borough = boroughKeys[park.borough] || "unknown";
                infoDiv.innerHTML = `<p>The Address to this park is ${park.location}Located in the Borough of ${borough}.It has ${park.acres} Acres of land and This park was acquired on ${park.acquisitiondate}. you can find put more about this park by clicking this <a href = '${park.url}' style = 'color: black;'> link </a> </p>`
                console.log(`The Address to this park is ${park.location} Located in the Borough of ${borough}`)
                
            }
               
            catch(error){
                console.log('fetching location data unsuccedul:', error)
                // alert('fetch failed: ${error.message}')
            }
            
    }
    getParkName()


parkSelection.addEventListener('change', (event) => {
    const selectedParkSignName = event.target.value;
    getLocation(selectedParkSignName);
});
















