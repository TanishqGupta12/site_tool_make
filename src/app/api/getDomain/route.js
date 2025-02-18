import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle Getdomain
async  function Handle (req , res) {

    
    console.log(req);
    console.log(res);
    
    // const existingUser = await prisma.user.findFirst({
    //   where: { email },
    // });

    
    return NextResponse.json({ message: res });

}
export { Handle as GET, Handle as POST };