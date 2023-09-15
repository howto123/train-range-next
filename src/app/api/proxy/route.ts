import { NextRequest, NextResponse } from "next/server";

export async function GET () {

    console.log(process.env.BACKEND_URL);

    fetch(process.env.BACKEND_URL!)
        .then((res) => console.log(res.body))
        .catch((err) => console.error(err));

    return NextResponse.json({
        "HererWeGo": "The backend might have been called"
    })
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