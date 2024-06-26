const hEl = document.createElement('h1')
const container = document.querySelector('.container')
const map = document.querySelector('#map')
const body = document.querySelector('body')

hEl.textContent = 'Find a Park in NYC'
hEl.style.textAlign = 'center'
const parkInfoDiv = document.getElementById('park-info');

body.insertBefore(hEl,container)
// const parkSelection = document.querySelector('#park-selection')

// function displayParkInfo(park) {
//     parkInfoDiv.textContent = `
//         Name: ${park.name311}
//         Location: ${park.location ? park.location : 'N/A'}
//         Borough: ${boroughKeys[park.borough] || boroughKeys.default}
//     `;
// }
// displayParkInfo()