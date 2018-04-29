import { ICity } from "./city.model";

export interface IMonth{
    id : number;
    name : string;
    topCities :ICity[];
}

