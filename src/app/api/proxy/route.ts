import { NextRequest, NextResponse } from "next/server";

export async function GET () {

    const backendurl: string = process.env.BACKEND_URL!;
    const dataApi = backendurl + "/getdata";
    console.log(dataApi);

    const response = await fetch(dataApi);
    const body = await response.json();

    return NextResponse.json(body)
}

export async function POST (req: Request) {
    let jsonString: string = "";

    // TODO only works for json!
    try {
    jsonString = await req.json();
    }
    catch( e: any ) {
        return NextResponse.error();
    }

    return NextResponse.json("Post received.");
}