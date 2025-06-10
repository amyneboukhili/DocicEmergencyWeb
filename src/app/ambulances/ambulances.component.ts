import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-ambulances',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
  templateUrl: './ambulances.component.html',
  styleUrl: './ambulances.component.css'
})
export class AmbulancesComponent {

}
