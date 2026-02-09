//clearing out the token
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json(
            {
                messagage: "Logout successful",
                success: true,
            }
        )

        //this can now interact with my cookie, token is now empty, and it expires in the current moment
        response.cookies.set("token", "", 
            {
                httpOnly: true, expires: new Date(0)
            }
         )
        
         return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}