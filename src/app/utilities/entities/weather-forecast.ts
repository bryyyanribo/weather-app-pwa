import { BaseModel } from "./base-model"
import { WeatherDetails } from "./weather-details"

export interface WeatherForecast extends BaseModel {
  list: WeatherDetails[]
}
