import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public form: FormGroup;
  public weatherData: any;
  ciudades = [];
  valor = false;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) { this.ciudades =  ['London', 'Paris' , 'Bogota' , 'Toronto' , 'Hong Kong']; }

  ngOnInit() {
    this.valor = false;
    this.form = this.formBuilder.group({
      location: ['', ]
    });
  }

  sendToAPI(formValues) {
    this.valor = true;
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
