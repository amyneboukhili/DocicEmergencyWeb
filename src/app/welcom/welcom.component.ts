import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcom',
  imports: [],
  templateUrl: './welcom.component.html',
  styleUrl: './welcom.component.css'
})
export class WelcomComponent {
  constructor(private router: Router) {}
   goToAbout() {
     this.router.navigate(['/choose-auth']);
  }


}
