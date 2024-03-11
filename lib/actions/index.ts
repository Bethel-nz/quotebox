"use server";

import prisma from "@/prisma/client";

export async function addUserMail(email: string) {
  try {
    const subscriber = await prisma.user.create({
      data: { email },
    });

    if (!subscriber) return null;

    return subscriber;
  } catch (error: any) {
    console.log("[Subscription]: ", error.message);
  }
}
