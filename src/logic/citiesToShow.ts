
import { Cities, CitiesWithSteps, CityWithSteps } from "@/customTypes/datatypes";



const getNameList = (startCity: string, stepNumber: number, cities: CitiesWithSteps): string[] => {
    const foundCity: CityWithSteps | undefined = cities.find( c => c.Name == startCity );

    if(!foundCity) {
        throw new Error("City not found. There might be an error in the data.");
    }

    if(stepNumber < 0) { throw new Error("Invalid stepNumber"); }

    const maxStep = foundCity.Steps.length - 1
    const saveStepNumber = stepNumber < maxStep ? stepNumber : maxStep;

    return foundCity.Steps[saveStepNumber];
}

export const citiesToShow = (startCity: string, stepNumber: number): Cities => {
    const allCities: CitiesWithSteps = require("@/data/data.json");

    const result: Cities = [];
    let names: string[] = [];
    try {
        names = getNameList(startCity, stepNumber, allCities);
    } catch {
        return [];
    }
    

    names.forEach( name => {
        const cityWithSteps = allCities.find( c => c.Name == name);

        if(!cityWithSteps) throw new Error("City name not found in city list.");

        const city = {
            Id: cityWithSteps.Id,
            Name: cityWithSteps.Name,
            Location: cityWithSteps.Location
        }

        result.push({
            Id: cityWithSteps.Id,
            Name: cityWithSteps.Name,
            GeoLocation: cityWithSteps.Location
        });
    })

    return result;
}