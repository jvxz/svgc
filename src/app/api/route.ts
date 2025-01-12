import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("/icons.json");
    const data: unknown = await response.json();
    return NextResponse.json(data);
}
