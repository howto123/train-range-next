import { NextRequest, NextResponse } from "next/server";

export async function GET () {

    const backendurl: string = process.env.BACKEND_URL!;
    const dataApi = backendurl + "/getdata";

    const response = await fetch(dataApi);
    const body = await response.json();

    return NextResponse.json(body)
}

export async function POST (req: NextRequest) {
    let jsonString: string = "";

    // TODO only works for json!
    try {
        jsonString = await req.json();
    }
    catch( e: any ) {
        return NextResponse.json({
            error: "Json parsing went wrong."
        })
    }

    return NextResponse.json("Post received.");
}