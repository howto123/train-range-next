


export async function uploadFile(file: File) {
    const content = await file.text();
    console.log(content);
    return fetch('/api/proxy', {
        method: 'POST',
        body: content,
        cache: 'no-cache',
        headers: {
            'content-type': file.type,
            'content-length': `${file.size}`
        },
    })
    .then((res) => res.json())
    .catch((err) => "Error uploading the file...");
}


export async function downloadJson() {
    return fetch('/api/proxy')
        .then((res) => res.json())
        .catch((err) => console.error(err));
}