const baseURL = "http://api.openweathermap.org/data/2.5/"

export const ENDPOINTS = {
  GET_BY_CITY_NAME: baseURL + "weather?q=",
  GET_BY_CITY_FORECAST: baseURL + "forecast?q="
}
