
// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return [];
//     }
// }

async function getLocation(){
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
             
                console.log((`The Address to this park is ${addy.location} Located in the Borough of ${addy.borough}`) )
            })
            // console.log(address[addy].location)
        }
           
        catch(error){
            console.log('fetching unsuccedul:', error)
            // alert('fetch failed: ${error.message}')
        }
        
}
getLocation()

// function displayParkInfo(park) {
//     parkInfoDiv.textContent = `
//         Name: ${park.name311}
//         Location: ${park.location ? park.location : 'N/A'}
//         Borough: ${boroughKeys[park.borough] || boroughKeys.default}
//     `;
// }
// displayParkInfo()






export {getLocation};







