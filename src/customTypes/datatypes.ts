import { UUID } from "crypto"
import { LatLngExpression } from "leaflet";

export type City = {
    Id?: UUID;
    Name: string;
    GeoLocation: LatLngExpression;
}

export type Cities = City[]

export type Connection = {
    Start: string;
    Destinations: [string]
}

export type Connections = Connection[]

export type CityWithSteps = {
    Id?: UUID;
    Name: string;
    Location: LatLngExpression;
    Steps: string[][];
}

export type CitiesWithSteps = CityWithSteps[];
