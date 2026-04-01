import "./style.css";
import { callOpenMeteoAPI } from "./calling/open-meteo.js";
import { cities, weatherCodes } from "./data";

/**
 * Lance la requête vers l'API et remplace les données une fois obtenue.
 * @param {number} lat latitude
 * @param {number} lon longitude
 * @param {string} name nom de la ville (pas issue du fetch)
 */

let renderOpenMeteo = async (lat, lon, name) => {
  const result = await callOpenMeteoAPI(lat, lon); //je stocke mes données issues du fetch en appelant la fonction

  // =====================================================================
  // - - - - - - - - - - - RECUPERER ET AFFICHER LES DONNEES - - - - - - - - - - - - - - -
  // =====================================================================
  //CurrentWeather :
  const currentWeather = document.getElementById("current-weather"); //Je stocke et je récupère la div
  //Je remplace le contenu HTML et j'affiche les données récupérées / croisement entre tableau contenu dans data et données issues du fetch
  currentWeather.innerHTML = `<p> Actuellement à ${name} <div id="current-img">${weatherCodes[result.current.weather_code]}</div></p>
  <p> 🌡️ Température actuelle : ${result.current.temperature_2m} °C</p>
  <p> 🍃 Vitesse du vent : ${result.current.wind_speed_10m} km/h</p>`;

  //Faire un forEach ici pour récupérer le nom de la ville et récupérer les element + les afficher
  //DailyWeather à 5 jours :
  const day1 = document.getElementById("day1");
  const day2 = document.getElementById("day2");
  const day3 = document.getElementById("day3");
  const day4 = document.getElementById("day4");
  const day5 = document.getElementById("day5");

  day1.innerHTML = ` Jour 1 : ${weatherCodes[result.daily.weather_code[1]]} Temp min : ${result.daily.temperature_2m_min[1]} °C Temp max : ${result.daily.temperature_2m_max[0]} °C`;
  day2.innerHTML = ` Jour 2 : ${weatherCodes[result.daily.weather_code[2]]} Temp min : ${result.daily.temperature_2m_min[2]} °C Temp max : ${result.daily.temperature_2m_max[1]} °C`;
  day3.innerHTML = ` Jour 3 : ${weatherCodes[result.daily.weather_code[3]]} Temp min : ${result.daily.temperature_2m_min[3]} °C Temp max : ${result.daily.temperature_2m_max[2]} °C`;
  day4.innerHTML = ` Jour 4 : ${weatherCodes[result.daily.weather_code[4]]} Temp min : ${result.daily.temperature_2m_min[4]} °C Temp max : ${result.daily.temperature_2m_max[3]} °C`;
  day5.innerHTML = ` Jour 5 : ${weatherCodes[result.daily.weather_code[5]]} Temp min : ${result.daily.temperature_2m_min[5]} °C Temp max : ${result.daily.temperature_2m_max[4]} °C`;
};

// =====================================================================
// - - - - - - - - - - - E X E C U T I O N - - - - - - - - - - - - - - -
// =====================================================================
renderOpenMeteo(cities.Nantes.lat, cities.Nantes.lon, "Nantes");

// =====================================================================
// - - - - - - - - - - - B U T T O N S- - - - - - - - - - - - - - -
// =====================================================================

//Faire un forEach pour récupérer et afficher les boutons:

// Je récupère le bouton HMTL de la ville
const nantes = document.getElementById("nantes");
// J'écoute le click
nantes.addEventListener("click", () =>
  //J'apelle la fonction pour afficher les infos de la ville
  renderOpenMeteo(cities.Nantes.lat, cities.Nantes.lon, "Nantes"),
);

const mesanger = document.getElementById("mesanger");
mesanger.addEventListener("click", () =>
  renderOpenMeteo(cities.Mesanger.lat, cities.Mesanger.lon, "Mésanger"),
);

const rennes = document.getElementById("rennes");
rennes.addEventListener("click", () =>
  renderOpenMeteo(cities.Rennes.lat, cities.Rennes.lon, "Rennes"),
);

const quimper = document.getElementById("quimper");
quimper.addEventListener("click", () =>
  renderOpenMeteo(cities.Quimper.lat, cities.Quimper.lon, "Quimper"),
);

const caen = document.getElementById("caen");
caen.addEventListener("click", () =>
  renderOpenMeteo(cities.Caen.lat, cities.Caen.lon, "Caen"),
);

const marseille = document.getElementById("marseille");
marseille.addEventListener("click", () =>
  renderOpenMeteo(cities.Marseille.lat, cities.Marseille.lon, "Marseille"),
);
