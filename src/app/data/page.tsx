import DownloadButton from "@/components/DownloadButton"


const Data = async () => {

    const backendURL = process.env.BACKEND_URL!
    const URL = backendURL + "/getbasedata"
    const res = await fetch(URL)
    const data = await res.json()

    return <div>
        <div className="text_center">
            <DownloadButton dataString={JSON.stringify(data, null, 4)}/>
        </div>
        <pre>
            {JSON.stringify(data, null, 4)}
        </pre>
    </div>
}

export default Data;