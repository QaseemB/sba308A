## PARKS IN NYC

This repository contains a simple web application that allows users to view information about parks in New York City. The application fetches data from the NYC Open Data API and displays it in a dropdown menu. Upon selecting a park, detailed information about the park is displayed.

## Usage

Open index.html in your web browser.
Select a park from the dropdown menu.
Detailed information about the selected park will be displayed below the dropdown menu.
Code Overview

HTML (index.html)
The HTML file sets up the basic structure of the web page, including the dropdown menu for park selection and a div to display park information. It also includes script tags to load external JavaScript files.

CSS (style.css)
The CSS file contains styles for the web page, including the dropdown menu and the information display div.

JavaScript (index.js)
The main JavaScript file contains the logic for fetching park data and updating the web page based on user interaction.

Variables:

parkSelection: The dropdown menu element.
parks: An array to store park data.
infoDiv: The div element where park information will be displayed.
Functions:

getParkName(): Fetches park data from the NYC Open Data API, sorts the parks by name, and populates the dropdown menu.
getLocation(x): Displays detailed information about the selected park.
Event Listeners:

An event listener on the dropdown menu calls getLocation() whenever the selected park changes.


## API USED 

https://opendata.cityofnewyork.us/
