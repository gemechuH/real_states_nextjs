"use server";

import connectDB from "@/config/database";
import Message from "@/models/message";
import { revalidatePath } from "next/cache";

export async function toggleMessageRead(formData) {
  await connectDB();

  const messageId = formData.get("messageId");
  if (!messageId) throw new Error("Message ID is missing");

  const msg = await Message.findById(messageId);
  if (!msg) throw new Error("Message not found");

  msg.read = !msg.read;
  await msg.save();

  revalidatePath("/inbox"); // 👈 This tells Next.js to re-fetch on next request
}
