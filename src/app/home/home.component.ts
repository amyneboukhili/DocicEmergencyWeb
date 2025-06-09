import { ApiService } from './../Services/api/api.service';
import { Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { GoogleMap, MapMarker, GoogleMapsModule,MapInfoWindow } from '@angular/google-maps';
import { Subscription } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Emergency } from '../../models/emergency';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,GoogleMap,MapMarker,GoogleMapsModule, CommonModule,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy  {
  center = { lat: 36.806389, lng: 10.181667 };
  zoom = 16;
  subscription!: Subscription;
  emergencies: Emergency[] = [];
   markerPositions: google.maps.LatLngLiteral[] = [];
    selectedEmergency: Emergency | null = null;

  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;
  @ViewChildren(MapMarker) markerViewChildren!: QueryList<MapMarker>;
   markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    animation: google.maps.Animation.DROP,
    title: 'Emergency Location'
  };

constructor(private ApiService: ApiService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscription = this.ApiService.getMessages().subscribe({
      next: (msg) => {
        console.log('📩 Emergency alert received:', msg);
        this.snackBar.open("new memergency have been  send find it right now ","ok",{
      duration: 3000, 
      horizontalPosition: 'center', 
      verticalPosition: 'top', 
      panelClass: ['custom-snackbar'],
      
    })
        
      },
      error: (err) => console.error('WebSocket error:', err)
    });

    // bich nabaath  message on connect
    this.ApiService.sendMessage({ message: 'Angular connected' });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.ApiService.closeConnection();
  }

findEmergency() {
  this.ApiService.getEmergency().subscribe({
    next: (data: any[]) => {
      this.emergencies = data.map((e) => new Emergency(
        e.id,
        e.user_profile,
        e.dateEmergency,
        e.fiche,
        e.allergies,
        e.latitude,
        e.longitude,
        e.statut
      ));
      this.markerPositions = this.emergencies.map((emergency: Emergency) => ({
         lat: parseFloat(emergency.latitude.toString()),
        lng: parseFloat(emergency.longitude.toString()) 
      }));
      if (this.markerPositions.length > 0) {
        this.center = this.markerPositions[0];
      }
    },
    error: (err) => console.error('Error loading emergencies:', err)
  });
}

  openInfoWindow(index: number) {
    const marker = this.markerViewChildren.toArray()[index];
    const emergency = this.emergencies[index];
    this.selectedEmergency = emergency;
    this.infoWindow.open(marker);
  }

}
