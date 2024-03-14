"use server";
import prisma from "@/prisma/client";
import { generateToken } from "../utils";

export async function addUserToMailList(email: string) {
  try {
    const subscriber = await prisma.users.create({
      data: { email, token: generateToken() },
    });

    if (!subscriber) throw new Error("Failed to add user to mail list");

    return subscriber;
  } catch (error: any) {
    console.log("[Subscription]: ", error.message);
    throw new Error(`Failed to create user: ${error.message}`);
  }
}

export async function removeUserFromMailList(token: string) {
  try {
    const subscriber = await prisma.users.findFirst({
      where: { token },
    });

    if (!subscriber) throw new Error("Subscriber does not exist");

    const removedSubscriber = await prisma.users.delete({
      where: { id: subscriber.id },
    });

    return removedSubscriber;
  } catch (error: any) {
    console.log("[Subscription]: ", error.message);
    throw new Error(`Failed to remove user: ${error.message}`);
  }
}
