"use client"


const DownloadButton = ( {dataString}: {dataString: string}) => {
    
    const handleDownloadClick = () => {
        const blob = new Blob([dataString], {type: 'text/json'})
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "dataToBeAddedTo.json"
        a.click()
    }

    return <button onClick={handleDownloadClick}>Download</button>
}

export default DownloadButton