"use server";

import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/message";

async function countUnreadMessages() {
  await connectDB();
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  if (!sessionUser || !sessionUser.userId) {
    throw new Error(" userID is required");
  }

  const count = await Message.countDocuments({
    recipient: userId,
    read: false,
  });

  return { count };
}


export default countUnreadMessages;

