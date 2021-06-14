const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id/";

function obtenerPersonaje(id) {
  const peopleURL = API_URL + PEOPLE_URL.replace(":id", id);
  const opts = { crossDomain: true };

  const onPeopleResponse = function (peopleData) {
    console.log(`Hola, soy ${peopleData.name}`);
  };

  $.get(peopleURL, opts, onPeopleResponse);
}

obtenerPersonaje(2);
