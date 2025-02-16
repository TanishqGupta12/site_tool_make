import { NextResponse } from "next/server";

// Handle Getdomain
async  function Handle (req , res) {

    
    console.log(req);
    console.log(res);

    
    return NextResponse.json({ message: res });

}
export { Handle as GET, Handle as POST };