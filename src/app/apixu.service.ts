import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    return this.http.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3d8b309701a13f65b660fa2c64cdc517`
    );
  }
}
