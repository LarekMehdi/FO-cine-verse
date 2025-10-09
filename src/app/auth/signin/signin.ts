import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { InputText } from "../../components/inputs/input-text/input-text";

@Component({
  selector: 'app-signin',
  imports: [
    Title,
    InputText
],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {

}
