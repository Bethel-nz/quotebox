"use server";

import prisma from "@/prisma/client";

export async function addUserToMailList(email: string) {
  try {
    const subscriber = await prisma.users.create({
      data: { email },
    });

    if (!subscriber) return null;

    return subscriber;
  } catch (error: any) {
    console.log("[Subscription]: ", error.message);
  }
}
