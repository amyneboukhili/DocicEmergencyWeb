// api.service.ts
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { map, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private socket$: WebSocketSubject<any>;
   baseUrl= 'http://localhost:8000/api';
   
  constructor(private http: HttpClient) {
    this.socket$ = webSocket('ws://127.0.0.1:8000/ws/emergency/');
   
  }

  // 👇 Clean method to expose observable messages
  getMessages(): Observable<any> {
    return this.socket$;
  }

  sendMessage(message: any) {
    this.socket$.next(message);
  }

  closeConnection() {
    this.socket$.complete();
  }

getEmergency(): Observable<any> {
  return this.http.get(`${this.baseUrl}/emergency/`).pipe(
    tap(data => console.log(' list of emergency ----- :', data))
  );
}

}
