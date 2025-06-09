export class Emergency {
  id: number;
  user_profile: number;
  dateEmergency: string; // ISO date string
  fiche: number;
  allergies: number[];
  latitude: number;
  longitude: number;
  statut: string;

  constructor(
    id: number,
    user_profile: number,
    dateEmergency: string,
    fiche: number,
    allergies: number[],
    latitude: number | string,
    longitude: number | string,
    statut: string
  ) {
    this.id = id;
    this.user_profile = user_profile;
    this.dateEmergency = dateEmergency;
    this.fiche = fiche;
    this.allergies = allergies;
    this.latitude = +latitude;  // convert to number
    this.longitude = +longitude; // convert to number
    this.statut = statut;
  }
}
