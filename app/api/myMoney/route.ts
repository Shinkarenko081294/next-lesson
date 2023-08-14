import {NextResponse} from "next/server";

export async function GET(req: Request){
   const CONNECT_DB = process.env["MONGO_CONNECT "]
   const desc = "it test connect env file"
   const users = await fetch(
       `http://localhost:3000/api/posts`
   )

   console.log(CONNECT_DB)

   return NextResponse.json({CONNECT_DB, desc})
}