// app/actions/getInboxMessages.js
"use server";

import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/message";
import User from "@/models/User"; // ensures model is registered
import Property from "@/models/Property"; // ensures model is registered
import { convertToSerializableObject } from "@/utils/convertToObjectSerializable";

/**
 * Fetch all messages addressed to the currently‑logged‑in user.
 * Returns an array you can render directly on the client.
 */
export async function getInboxMessages() {
  await connectDB();

  // 1️⃣  Get logged‑in user
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    console.log("User not authenticated");
    return []; // 👈 return empty array if no session (or throw an error if preferred)
  }
//   if (!sessionUser || !sessionUser.userId) {
//     throw new Error("Not authenticated");
//   }
  const { userId } = sessionUser

  // 2️⃣  Query messages
  const rawMessages = await Message.find({ recipient: userId })
    .sort({ createdAt: -1 }) // newest first
    .populate({ path: "sender", select: "name email phone" })
    .populate({ path: "property", select: "name" })
    .lean();

  // 3️⃣  Convert ObjectIds / Dates so they’re serialisable
  const messages = convertToSerializableObject(rawMessages);

  return messages; // ready for client usage
}
