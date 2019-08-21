import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "celsius"
})
export class CelsiusPipe implements PipeTransform {
  transform(value: number) {
    const celsius = value - 273.15
    return Math.ceil(celsius)
  }
}
