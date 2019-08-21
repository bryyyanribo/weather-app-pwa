import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterModule, Routes } from "@angular/router"
import { MDCModule } from "src/app/utilities/module/mdc.module"
import { CelsiusPipe } from "src/app/utilities/pipes/celsius/celsius.pipe"
import { WeatherIconPipe } from "src/app/utilities/pipes/weather-icon/weather-icon.pipe"
import { WeatherComponent } from "./weather.component"

const routes: Routes = [
  {
    path: "",
    component: WeatherComponent
  }
]

@NgModule({
  declarations: [WeatherComponent, CelsiusPipe, WeatherIconPipe],
  imports: [CommonModule, RouterModule.forChild(routes), MDCModule, FormsModule]
})
export class WeatherModule {}
