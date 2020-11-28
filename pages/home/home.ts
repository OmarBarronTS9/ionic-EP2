import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormControl } from "@angular/forms";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  name = new FormControl("");

  constructor(public navCtrl: NavController) {}
}
