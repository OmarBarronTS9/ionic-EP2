import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  usuario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.email],
  });

  GuardarDatos() {
    console.log(this.usuario.value);
  }

  constructor(public navCtrl: NavController, private fb: FormBuilder) {}
}
