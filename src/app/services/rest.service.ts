import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { WeatherApiResponse } from '../interfaces/weather-api-response.interface';
 
@Injectable()
export class RestService {
	API_URL: string = 'https://fcc-weather-api.glitch.me/api/current?';

  constructor(private http: Http) { }
  
  public getWeather(lat: number, lon: number) : Observable<any> {
		return this.http.get(`${this.API_URL}lat=${lat}&lon=${lon}`)
		.map((res: Response) => res.json())
		.catch((err: any) => Observable.throw(err || 'server error'));
  }

}
