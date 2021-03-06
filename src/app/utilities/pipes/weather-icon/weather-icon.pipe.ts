import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "weatherIcon"
})
export class WeatherIconPipe implements PipeTransform {
  transform(icon: string): string {
    const weatherURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
    return weatherURL
  }
}
