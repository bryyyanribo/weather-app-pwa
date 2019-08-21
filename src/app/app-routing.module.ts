import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ROUTES } from "./utilities/resources/routes"
import { MainNavComponent } from "./components/main-nav/main-nav.component"
import { WeatherComponent } from "./pages/weather/weather.component"

const routes: Routes = [
  {
    path: ROUTES.INDEX,
    component: MainNavComponent,
    children: [
      {
        path: ROUTES.WEATHER,
        component: WeatherComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
