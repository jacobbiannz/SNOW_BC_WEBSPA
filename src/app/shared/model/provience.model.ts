import { ICity } from "./city.model";

export interface IProvience{
    id : number;
    name : string;
    cities : ICity[];
}