// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput.trim() === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelStatus = document.getElementById("fuelStatus");
    let cargoLevelStatus = document.getElementById("cargoStatus");

if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
    alert("Missing or Incorrect Data Required: Pilot Name");
    if (validateInput(pilot) === "Not a Number") {
        pilotStatus.innerHTML += `${pilot}`;
    }
} else if (validateInput(copilot)=== "Empty" || validateInput(copilot) === "Is a Number") {
    alert("Missing or Incorrect Data Required: CoPilot Name");
    if(validateInput(copilot) === "Not a Number") {
        copilot.innerHTML += `${copilot}`;
    }
} else if (validateInput(fuelLevel)=== "Empty" || validateInput(fuelLevel) === "Not a Number") {
    alert("Missing or Incorrect Data Required: Fuel Level");
    if (validateInput(fuelLevel) === "Is a Number") {
        fuelLevel.innerHTML += `${fuelLevel}`;
    }
} else if (validateInput(cargoLevel)=== "Empty" || validateInput(cargoLevel) === "Not a Number") {
        alert("Missing or Incorrect Data Required: Cargo Level");
        if (validateInput(cargoLevel) === "Is a Number") {
            cargoLevel.innerHTML += `${cargoLevel}`;
        }
} else {
        alert("Submitted!");
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
