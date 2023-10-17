
import MapPage from "@/components/MapPage";


const Index = async () => {
    const backendURL = process.env.BACKEND_URL!
    const getURL = backendURL + "/getdata"

    const res = await fetch(getURL, { cache: "no-store"});
    const cities = await res.json();
    
    return <MapPage cities={cities}/>
}

export default Index;

