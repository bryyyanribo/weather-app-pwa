import { Component, OnInit, Input } from "@angular/core"
import { PAGES } from "../../utilities/resources/pages"
import { ROUTES } from "src/app/utilities/resources/routes"
import { Router } from "@angular/router"

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.scss"]
})
export class MainNavComponent implements OnInit {
  isDrawerOpen: boolean = false
  pages = PAGES

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([ROUTES.WEATHER])
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen
  }
}
