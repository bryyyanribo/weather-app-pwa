import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { ServiceWorkerModule } from "@angular/service-worker"
import { environment } from "../environments/environment"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HttpClientModule } from "@angular/common/http"
import { MainNavModule } from "./components/main-nav/main-nav.module"
import { WeatherModule } from "./pages/weather/weather.module"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    HttpClientModule,
    MainNavModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
