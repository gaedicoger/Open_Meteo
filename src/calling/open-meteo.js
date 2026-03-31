/**
 * appel l'API Open-Meteo
 * Doc : https://open-meteo.com/en/docs
 * @param {number} lat latitude
 * @param {number} lon longitude
 * @returns retourne les données fournies par l'API. (pour données actuelles, appeler current_weather)
 */
export async function callOpenMeteoAPI(lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
