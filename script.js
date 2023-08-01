// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { myFetch, pickPlanet } = require("./scriptHelper");


// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]")
        let pilot = pilotNameInput.value;
        let copilotNameInput = document.querySelector("input[name=copilotName]")
        let copilot = copilotNameInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
        let fuelLevel = fuelLevelInput.value;
        let cargoLevelInput = document.querySelector("input[name=cargoMass]")
        let cargoLevel = cargoLevelInput.value;
    
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        }); 
    

    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetData = (pickPlanet(listedPlanets));
       addDestinationInfo(document, planetData.name, planetData.diameter, planetData.star, planetData.distance, planetData.moons, planetData.image)
   })
   
});