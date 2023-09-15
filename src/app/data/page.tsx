"use client"

const data = require("@/data/data.json");

const Data = () => {

    const handleDownloadClick = () => fetch("/api/proxy")
        .then( res => res.blob())
        .then(data => {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(data);
            a.download = "dataToBeAddedTo";
            a.click();
        });

    return <div>
        <p className="text_center">At the bottom you can download this.</p>
        <pre>{JSON.stringify(data, null, 4)}</pre>
        <hr />
        <div className="text_center"><button onClick={handleDownloadClick}>Download</button></div>
    </div>
}

export default Data;