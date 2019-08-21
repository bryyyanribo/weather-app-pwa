import { Injectable } from "@angular/core"
import { ENDPOINTS } from "src/app/utilities/resources/endpoints"
import { HttpClient } from "@angular/common/http"
import { APIKEY } from "src/app/utilities/resources/apikey"
import { WeatherDetails } from "src/app/utilities/entities/weather-details"
import { Observable } from "rxjs"
import { WeatherForecast } from "src/app/utilities/entities/weather-forecast"

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByCityName(
    cityName: string = "Manila"
  ): Observable<WeatherDetails> {
    return this.http.get<WeatherDetails>(
      `${ENDPOINTS.GET_BY_CITY_NAME + cityName}&appid=${APIKEY.KEY}`
    )
  }

  getWeatherForecast(cityName: string = "Manila"): Observable<WeatherForecast> {
    return this.http.get<WeatherForecast>(
      `${ENDPOINTS.GET_BY_CITY_FORECAST + cityName}&appid=${APIKEY.KEY}`
    )
  }
}
