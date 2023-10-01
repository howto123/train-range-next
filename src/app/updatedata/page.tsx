
"use client"

import { ChangeEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";


const Updatedata = () => {

  	const { data: session } = useSession()
    const [file, fileSet] = useState<File>();
	const [serverResponse, serverResponseSet] = useState<string|null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          fileSet(e.target.files[0]);
        }
    };

    const handleUploadClick = async () => {
        if (!file) {
			serverResponseSet("no file selected...")
            return;
        }
		const content = await file.text();
        const res = await fetch('/api/proxy', {
				method: 'POST',
				body: content,
				cache: 'no-cache',
				headers: {
					'content-type': file.type,
					'content-length': `${file.size}`
				},
			})
			.then(res => res.json())
			.then(obj => {
				if(obj.error) throw new Error(obj.error)
			})
			.catch(err => err.message || "Error uploading the file...")

		serverResponseSet(res)
		};

	if(!session) {
		return <>
			<p>This area is VIP...</p>
			<button onClick={()=>signIn()}>Sign in</button>
		</>
	}

    return <div className="text_center some_margin block">
		<div>
			<label id="uploadlabel" htmlFor="upload" className="some_margin block">
				Choose file to upload
				<input id="upload" type="file" onChange={handleFileChange} />
			</label>
		</div >
		{file && <div className="text_center some_margin block">Chosen file: {file.name}</div>}
		<div>
			<button onClick={handleUploadClick}>Upload</button>
		</div>
		{serverResponse && <div><p>{serverResponse}</p></div>}
    </div>
}

export default Updatedata;
