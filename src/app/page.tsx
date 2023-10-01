
import MapPage from "@/components/MapPage";


const Index = async () => {
    const URL = "https://calculator-k42qgew2la-uc.a.run.app/api/getdata";

    const res = await fetch(URL);
    const cities = await res.json();
    
    return <MapPage cities={cities}/>
}

export default Index;

