import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";

import  hashPassword  from "../../../lib/bcrypt";
import  authentication_token  from "../../../lib/authentication_token";
// Initialize Prisma client
const prisma = new PrismaClient();

// Handle POST request for user sign-up
export async function POST(req) {

  try {
    // Get request body

    const body = await req.json();

    
    const { first_name, last_name, email, password } = body;

    console.log(first_name, last_name, email, password);
    
    // Validate input
    if (!first_name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
    }

    // Hash the password before storing it
    const hashedPassword = await hashPassword(password, 10);
    
    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        first_name,
        last_name,
        email,
        encrypted_password: hashedPassword,
        authentication_token: authentication_token
      },
    });

    // Respond with success message and user data
    return NextResponse.json(
      { message: "User created successfully", user: { id: newUser.id, email: newUser.email } },
      { status: 201 }
    );
  } catch (error) {
    // Log the error details for debugging
    // console.error("Error during user sign-up:", error);

    // Return a JSON response with the error message
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
