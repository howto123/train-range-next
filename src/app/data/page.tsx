import DownloadButton from "@/components/DownloadButton"


const Data = async () => {

    const URL = "https://calculator-k42qgew2la-uc.a.run.app/api/getbasedata"
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