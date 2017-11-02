import { Component, OnInit } from '@angular/core';


import { WeatherApiResponse } from './interfaces/weather-api-response.interface';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	geoLocation: Position;
	weather: WeatherApiResponse;
	currentTemp: number;
	cel: boolean = true;
	cloudy: boolean = false;
	sunny: boolean = false;
	rainy: boolean = false;
	snowy: boolean = false;
	thunder: boolean = false;
	
	constructor(private restService: RestService) {}
	
	private getLocation() {
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.geoLocation = position;
				//console.log(this.geoLocation);
				this.getWeather();
			}, (err) => {
				console.log(err);
			});
		}
	}
	
	private getWeather() {
		this.restService.getWeather(this.geoLocation.coords.latitude, this.geoLocation.coords.longitude) 
		.subscribe(
		(res) => {
			//console.log(res);
			this.weather = res;
			this.currentTemp = this.weather.main.temp
			this.setWeatherIcon();
		}, (err) => {
			console.log(err);
		});
		
	}
	
	private setWeatherIcon() : void {
		let condition = this.weather.weather[0].main.toLowerCase();
		switch(condition) {
			case 'clear':
				break;
			case 'rain':
				this.rainy = true;
				break;
			case 'drizzle':
				this.rainy = true;
				break;
			case 'clouds':
				this.cloudy = true;
				break;
			case 'snow':
				this.snowy = true;
				break;
			case 'thunderstorm':
				this.thunder = true;
				break;
		}
	}
	
	private convert() {		
		if (this.cel) {			
			this.currentTemp = Math.round((this.weather.main.temp * 1.8) + 32);
		} else {			
			this.currentTemp = this.weather.main.temp;
		}
		this.cel = !this.cel;
	}
	
	
	ngOnInit() {
		this.getLocation();		
	}
	
  }
