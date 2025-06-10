import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

    constructor(private router: Router) {}

    
 goTohomePage() {
    this.router.navigate(['/dashboard/home']);
  }

  goToRegister() {
  console.log('Register clicked');
  this.router.navigate(['/register']);
}

  
}
