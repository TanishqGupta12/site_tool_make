import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

import  hashPassword  from "../../../lib/bcrypt";
import  authentication_token  from "../../../lib/authentication_token";
// Initialize Prisma client
const prisma = new PrismaClient();

// Handle POST request for user sign-up
export async function POST(req) {

  try {
  
    const body = await req.json();

    const {email , salutation ,current_event_id  , first_name , last_name , position , organization , address , city , mobile , avatar , encrypted_password , f1 , f2 , f3 , f4 , f5 ,f6 ,f7 ,f8 ,f9 ,f10 ,f11 , f12 , f13 , f14, f15 } = body;


    const forms = await prisma.formSectionField.findMany({
      where: {
        is_active: true,
        form: {
          is_active: true,
          event_id: Number(current_event_id)
        }
      }
    });

    let field = {};
 
    let password = await hashPassword(encrypted_password, 10);

    
    forms.forEach((form) => {
        if (form.field_type == 'encrypted_password') {
          // Hash the password before storing it
          field[form.field_type] = password

        } else {
          field[form.field_type] = body[form.field_type];
        }
    });


    // Check if the user already exists
    const existingUser = await prisma.user.findFirst({
      where: { email: email , current_event_id: current_event_id  },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email is already in use" }, { status: 400 });
    }

    
    // Create the user in the database
    let token = authentication_token()
    console.log(token);
    
    const newUser = await prisma.user.create({
      data: {
        ...field,
        authentication_token: token,
        current_event_id: current_event_id,
      },
    });

    console.log(Number(newUser.id));
    
    // // Create the user in the database
    const evnt_user = await prisma.eventUser.create({
      data: {
        userId: newUser.id,
        eventId: Number(current_event_id),
      },
    });

    console.log(evnt_user);
    

    // Respond with success message and user data
    return NextResponse.json(
      { message: "User created successfully"},
      { status: 201 }
    );
  } catch (error) {
  
    return NextResponse.json({ message: error.message || "Something went wrong" }, { status: 500 });
  }
}
