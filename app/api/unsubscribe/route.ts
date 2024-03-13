import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const POST = async (request: Request, response: Response) => {
  const { email } = await request.json();
  try {
    const user = await prisma.users.findFirst({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({
        status: 400,
        error: "Bad Request",
      });
    }

    await prisma.users.delete({
      where: { id: user.id },
    });

    return NextResponse.json({
      status: 200,
      data: "OK",
    });
  } catch (error) {
    console.error("Error unsubscribing user:", error);
    return NextResponse.json({
      status: 500,
      error,
    });
  }
};
