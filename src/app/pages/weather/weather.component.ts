import { Component, OnInit, OnDestroy } from "@angular/core"
import { WeatherService } from "src/app/services/weather/weather.service"
import { WeatherDetails } from "src/app/utilities/entities/weather-details"
import { Subscription } from "rxjs"
import { WeatherForecast } from "src/app/utilities/entities/weather-forecast"

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit, OnDestroy {
  cityName: string
  tabs = [
    { label: "Main", icon: "airplanemode_active" },
    { label: "Daily", icon: "hotel" },
    { label: "Hourly", icon: "favorite" },
    { label: "Chart", icon: "favorite" },
    { label: "Map", icon: "favorite" }
  ]

  isLoading: boolean = false
  hasNoCity: boolean = false
  weatherDetail: WeatherDetails
  weatherForecast: WeatherDetails[]
  weatherSubscription: Subscription
  forecastSubscription: Subscription

  // TODO: TIMELINE FOR WEATHER
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherByCityName()
    this.getWeatherByForecast()
  }

  getWeatherByCityName() {
    this.isLoading = true
    this.weatherSubscription = this.weatherService
      .getWeatherByCityName(this.cityName)
      .subscribe(
        (cityWeather: WeatherDetails) => {
          this.isLoading = false
          this.hasNoCity = false
          this.weatherDetail = cityWeather
        },
        error => {
          this.isLoading = false
          this.hasNoCity = true
        }
      )
  }

  getWeatherByForecast() {
    this.isLoading = true
    this.forecastSubscription = this.weatherService
      .getWeatherForecast(this.cityName)
      .subscribe(
        (cityWeather: WeatherForecast) => {
          this.isLoading = false
          this.hasNoCity = false
          this.weatherForecast = cityWeather.list
          this.getWeatherByCityName()
        },
        error => {
          this.isLoading = false
          this.hasNoCity = true
        }
      )
  }

  ngOnDestroy() {
    this.weatherSubscription.unsubscribe()
    this.forecastSubscription.unsubscribe()
  }
}
