import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();

  const { firstName, lastName, email, phone, productID } = body;

  const course = await prisma.lead.create({
    data: {
      firstName,
      lastName,
      email,
      phone,
      productID,
    },
  });

  return NextResponse.json(course);
}
