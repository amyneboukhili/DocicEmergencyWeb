import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AmbulancePopupComponent } from '../ambulance-popup/ambulance-popup.component';



@Component({
  selector: 'app-emergencies',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FontAwesomeModule,
    AmbulancePopupComponent
  ],
  templateUrl: './emergencies.component.html',
  styleUrl: './emergencies.component.css'
})
export class EmergenciesComponent {

 popupVisible = false;
  currentSituation = '';
  currentRecommendation = '';

  openPopup(situation?: string, recommendation?: string) {
    this.currentSituation = situation || 'The patient was found unresponsive in a parking lot, with shallow breathing and low pulse.';
    this.currentRecommendation = recommendation || 'Keep the patient stable, provide oxygen support, and monitor vitals until arrival at the ER.';
    this.popupVisible = true;
  }

  openPopup1(situation?: string, recommendation?: string) {
    this.currentSituation = situation || 'Patient experiencing severe allergic reaction with facial swelling, difficulty breathing, and hives covering the body. Reaction occurred after eating at restaurant.';
    this.currentRecommendation = recommendation || 'Administer epinephrine immediately if available. Maintain airway patency, provide high-flow oxygen, and prepare for potential intubation';
    this.popupVisible = true;
  }

  openPopup2(situation?: string, recommendation?: string) {
    this.currentSituation = situation || 'All three patients successfully extricated and treated. Spinal injury patient remained stable throughout transport. No life-threatening injuries confirmed.';
    this.currentRecommendation = recommendation || 'Proper immobilization prevented further spinal damage. All patients delivered to trauma center conscious and alert. Minor injuries treated on scene.';
    this.popupVisible = true;
  }

  openPopup3(situation?: string, recommendation?: string) {
    this.currentSituation = situation || 'A complex multi-vehicle accident with potential hazardous material leak that requires specialized response teams and careful assessment before full action can be taken.';
    this.currentRecommendation = recommendation || 'Establishes safety perimeters, calls for specialized HAZMAT support, arranges medical evacuation, and emphasizes the need to wait for proper identification and expert assessment before proceeding with rescue operations.';
    this.popupVisible = true;
  }

  openPopup4(situation?: string, recommendation?: string) {
    this.currentSituation = situation || 'A major power outage at a medical facility that has been successfully resolved with all patients remaining safe throughout the incident.';
    this.currentRecommendation = recommendation || 'Shows how emergency backup systems worked properly, all safety protocols were followed, and normal operations have been fully restored with preventive measures implemented.';
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }

}