
import MapWrapper from "@/components/MapWrapper"
import { Cities, CitiesWithSteps, Connections } from "@/customTypes/datatypes"
import { ChangeEventHandler, useEffect, useState } from "react";
import { citiesToShow } from "@/logic/citiesToShow";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import MapPage from "@/components/MapPage";

export const getServerSideProps = (async (context) => {
    const URL = "https://calculator-k42qgew2la-uc.a.run.app/api/getdata";
  
    // Fetch data from external API
    const res = await fetch(URL);
    const cities = await res.json();

    console.log("cities serverside")
    console.log(cities);
  
    // Pass data to the page via props
    return { props: { cities } };
}) satisfies GetServerSideProps<{
    cities: CitiesWithSteps
}>


const Index = ({
    cities,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
        console.log("cities in page");
        console.log(cities)
        return <MapPage cities={cities}/>
    }

export default Index;

