import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const GET = async () => {
  try {
    const quote_count = await prisma.quotes.count();

    const numberOfQuotes = 4;

    // Generate an array of random indices without duplicates
    const randomIndices = Array.from({ length: numberOfQuotes }, () =>
      Math.floor(Math.random() * quote_count)
    );

    // Retrieve quotes based on the random indices
    const data = await Promise.all(
      randomIndices.map((index) =>
        prisma.quotes.findFirst({
          skip: index,
        })
      )
    );

    return NextResponse.json({ error: null, data, status: 200 });
  } catch (error: any) {
    console.log("[Quote]: ", error.message);
  }
};
