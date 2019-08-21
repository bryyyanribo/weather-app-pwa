import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { MDCModule } from "src/app/utilities/module/mdc.module"
import { MainNavComponent } from "./main-nav.component"

const routes: Routes = [
  {
    path: "",
    component: MainNavComponent
  }
]

@NgModule({
  declarations: [MainNavComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MDCModule]
})
export class MainNavModule {}
