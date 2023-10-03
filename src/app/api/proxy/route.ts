import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET () {

    const backendurl: string = process.env.BACKEND_URL!
    const dataApi = backendurl + "/getdata"

    const response = await fetch(dataApi)
    const body = await response.json()

    return NextResponse.json(body)
}

export async function POST (req: NextRequest) {

    // read file
    let bodyObject: string = ""

    try {
        bodyObject = await req.json()
    }
    catch( e: any ) {
        return NextResponse.json({
            error: "File parsing went wrong."
        })
    }

    // make backend call
    const backendurl: string = process.env.BACKEND_URL!
    const dataApi = backendurl + "/update"
    const token = cookies().get("token")?.value
    const bearer= `Bearer ${token}`
    
    const responseBody = await fetch(dataApi, { 
        method: 'post', 
        headers: {
                'Authorization': bearer
            }
        })
        .then(res => res.json())
        .catch(err => {
                console.log(err)
                return {message: "Upload went wrong"}
        })

    // return to client. responseBody is a string
    return NextResponse.json({message: responseBody})
}

