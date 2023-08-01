// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTargetList = document.getElementById("missionTarget");
    missionTargetList.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name}</li>
                     <li>Diameter:${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance}</li>
                     <li>Number of Moons:${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
    

}

function validateInput(testInput) {
    // testInput.replace(/\,/g,'');
    if (testInput.trim() === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelStatus = document.getElementById("fuelStatus");
    let cargoLevelStatus = document.getElementById("cargoStatus");

    

    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
        alert("Missing or Incorrect Data Required: Pilot Name");
    } else if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number") {
        alert("Missing or Incorrect Data Required: CoPilot Name");
    } else if (validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number") {
        alert("Missing or Incorrect Data Required: Fuel Level");
    } else if (validateInput(cargoLevel) === "Empty" || validateInput(cargoLevel) === "Not a Number") {
        alert("Missing or Incorrect Data Required: Cargo Level");
    } else {
        alert("Submitted!");
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot: ${pilot} Ready`;
        copilotStatus.innerHTML = `Copilot: ${copilot} Ready`;
        if (fuelLevel < 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            fuelLevelStatus.innerHTML = `Shuttle Not Ready for Launch. Fuel Level is ${fuelLevel} (L).`;
            launchStatus.style.color = "#C7254E";
        } else {
            launchStatus.innerHTML = `Shuttle  Ready for Launch`;
            fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.style.color = "#419F6A";
        }
        if (cargoLevel > 10000) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            cargoLevelStatus.innerHTML = `Shuttle Not Ready for Launch. Cargo Level is ${cargoLevel}. (kg)`;
            launchStatus.style.color = "#C7254E";
        } else {
            launchStatus.innerHTML = `Shuttle  Ready for Launch`;
            cargoLevelStatus.innerHTML = `Cargo mass low enough for launch`;
            launchStatus.style.color = "#419F6A";
        }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        if (response.status >= 400) {
            throw Error("API Error");
        } else {
            return response.json();
        }
    });
    return planetsReturned;
}


function pickPlanet(planets) {
    let index = Math.floor(planets.length * Math.random())
    return planets[index];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
