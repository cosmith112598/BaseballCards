import {films} from './/Source-Java/films'
import {vehicles} from './/Source-Java/vehicles'

var card = films.querySelector('p');
/*card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
Don't need this as added hover!!*/

let mainPiece = document.querySelector('main')

vehicles.forEach(function(vehicles) {
    let vehicleDiv = document.createElement('div')
    let vehicleName = document.createElement('h1')
    let VehicleInformation = document.createElement('p')

    vehicleName.textContent = vehicles.name
    VehicleInformation.textContent = vehicles.films


    vehicleDiv.appendChild(vehicleName)
    vehicleDiv.appendChild(VehicleInformation)

    mainPiece.appendChild(vehicleDiv)
});

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmInformation = document.createElement('p')

    filmTitle.textContent = film.title
    filmInformation.textContent = film.opening_crawl
    

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmInformation)

    mainPiece.appendChild(filmDiv)
});