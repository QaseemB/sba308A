// import {parkSelection, map} from './dom.js';

// const api_Key = '5sz0cjye6r86ha911wpuh77vb';

// const secretapi = '3jwa6xzhqkjxay8qejbj82g27v3c975oe6d7in7seejv897zze';

// var api_Token = '63t63J0TgGWrOKWPifRun2PqN';

// let parkSelection ;


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



// async function getData() {
//     try {
//         const response = await fetch('https://data.cityofnewyork.us/resource/enfh-gkve.json?$limit=5000');

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const parks = await response.json();

//         parks.forEach(name =>{
//             console.log(name.name311)
//         })
        
//         alert(`Retrieved ${parks.length} records from the dataset!`);
//         // console.log(parks[0].name311);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         alert(`Failed to retrieve data: ${error.message}`);
//     }
// }
// getData()


// async function getLocation(){
//     const response = await fetch('https://data.cityofnewyork.us/resource/enfh-gkve.json?$limit=5000');
//         try{
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const address = await response.json();
//             // console.log(address[3].location)
//             console.log(`successfully able to fetch ${address.length} from the dataset`)
            
//             const boroughKeys = {
//                 "R": `Staten Island`,
//                 "B":  `Brooklyn`,
//                 "X": `The Bronx`,
//                 "Q": `Queens`,
//                 default: "Manhattan"

//             }
//             address.forEach(addy =>{
//                 // if(addy.borough === "R"){
//                 //     addy.borough = `Staten Island`
//                 // } else if (addy.borough === "B") {
//                 //     addy.borough = `Brooklyn`
//                 // }else if (addy.borough === "X") {
//                 //     addy.borough = `Bronx`
//                 // }else if (addy.borough === "Q") {
//                 //     addy.borough = `Queens`
//                 // }else  {
//                 //     addy.borough =`Manahattan`
//                 // } this works as well but for readability i wanted use boroughKeys object for ease of use
                    
//                 addy.borough = boroughKeys[addy.borough] || boroughKeys.default;
             
//                 console.log((`The Address to this park is ${addy.location} Located in the Borough of ${addy.borough}`) )
//             })
//             // console.log(address[addy].location)
//         }
           
//         catch(error){
//             console.log('fetching unsuccedul:', error)
//             // alert('fetch failed: ${error.message}')
//         }
        
// }
// getLocation()

// function displayParkInfo(park) {
//     parkInfoDiv.textContent = `
//         Name: ${park.name311}
//         Location: ${park.location ? park.location : 'N/A'}
//         Borough: ${boroughKeys[park.borough] || boroughKeys.default}
//     `;
// }
// displayParkInfo()






// export {getLocation,};







