import {NextResponse} from "next/server";
import {redirect} from "next/navigation";
// import {cookies, headers} from "next/headers";


export async function DELETE(req: Request, {params}: {params:{id: number}}){
   const id = params.id
    // const headerList = headers()
    // const cookiesList = cookies()
    //
    // const type = headerList.get('content-type')
    // const coke = cookiesList.get('coke')?.value
   //logic delete post
   //  redirect('/blog')
   return NextResponse.json({id})
}