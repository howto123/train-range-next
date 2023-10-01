import { NextRequest, NextResponse } from "next/server";

export async function GET () {

    const backendurl: string = process.env.BACKEND_URL!;
    const dataApi = backendurl + "/getdata";

    const response = await fetch(dataApi);
    const body = await response.json();

    return NextResponse.json(body)
}

export async function POST (req: NextRequest) {
    let bodyObject: string = "";

    try {
        bodyObject = await req.json();
    }
    catch( e: any ) {
        return NextResponse.json({
            error: "Json parsing went wrong."
        })
    }

    // TODO make the post call to the backend

    return NextResponse.json({message: "Post received."});
}