"use server";
import prisma from "@/prisma/client";

export async function addUserToMailList(email: string) {
  try {
    const subscriber = await prisma.users.create({
      data: { email },
    });

    if (!subscriber) throw new Error("Failed to add user to mail list");

    return subscriber;
  } catch (error: any) {
    console.log("[Subscription]: ", error.message);
    throw new Error(`Failed to create user: ${error.message}`);
  }
}
