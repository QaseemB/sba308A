
// document.addEventListener('DOMContentLoaded', () => {
    let parkSelection = document.querySelector('#park-selection');
    let parks = []
    let infoDiv = document.querySelector(".park-info")
    
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

            // console.log(Array.isArray(parks));
            // console.log(parks);
            console.log(parks[0].name311);


        } catch (error) {
            console.error('Error fetching data:', error);
            alert(`Failed to retrieve data: ${error.message}`);
        }
    }

    getParkName();

    async function getLocation(x){
        const response = await fetch('https://data.cityofnewyork.us/resource/enfh-gkve.json?$limit=5000');
            try{
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const address = await response.json();
                // console.log(address[3].location)
                console.log(`successfully able to fetch ${address.length} from the dataset`)
                
                const boroughKeys = {
                    "R": `Staten Island`,
                    "B":  `Brooklyn`,
                    "X": `The Bronx`,
                    "Q": `Queens`,
                    default: "Manhattan"
    
                }
                address.forEach(addy =>{
                    // if(addy.borough === "R"){
                    //     addy.borough = `Staten Island`
                    // } else if (addy.borough === "B") {
                    //     addy.borough = `Brooklyn`
                    // }else if (addy.borough === "X") {
                    //     addy.borough = `Bronx`
                    // }else if (addy.borough === "Q") {
                    //     addy.borough = `Queens`
                    // }else  {
                    //     addy.borough =`Manahattan`
                    // } this works as well but for readability i wanted use boroughKeys object for ease of use
                        
                    addy.borough = boroughKeys[addy.borough] || boroughKeys.default;
                    infoDiv.textContent = `The Address to this park is ${addy.location} Located in the Borough of ${addy.borough}`;
                 
                    console.log((`The Address to this park is ${addy.location} Located in the Borough of ${addy.borough}`) )
                })
                
            }
               
            catch(error){
                console.log('fetching unsuccedul:', error)
                // alert('fetch failed: ${error.message}')
            }
            
    }
    // getLocation()
// });

parkSelection.addEventListener('change', (event) => {
    const selectedParkSignName = event.target.value;
    getLocation(selectedParkSignName);
});

// parkSelection.addEventListener('DOMContentLoaded', () => {
    getLocation(parkSelection);
// });















