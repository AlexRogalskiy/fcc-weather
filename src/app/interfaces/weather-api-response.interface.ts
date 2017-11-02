import { Clouds } from './clouds.interface';
import { Sys } from './sys.interface';
import { Main } from './main.interface';
import { Weather } from './weather.interface';
import { Wind } from './wind.interface';
import { Coord } from './coord.interface';

  export interface WeatherApiResponse {
        coord: Coord;
        weather: Weather[];
        base: string;
        main: Main;
        visibility: number;
        wind: Wind;
        clouds: Clouds;
        dt: number;
			sys: Sys;
        id: number;
        name: string;
        cod: number;
    }