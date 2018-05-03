import { ICity } from "./city.model";

export interface IProvience{
    id : string;
    name : string;
    cities : ICity[];
}