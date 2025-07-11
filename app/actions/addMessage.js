'use server'
import connectDB from "@/config/database";
import Message from "@/models/message";

import { getSessionUser } from "@/utils/getSessionUser";



async function addMessage(previousState, formData) {
    await connectDB()
    const sessinUser = await getSessionUser()
    if (!sessinUser || !sessinUser.userId) {
        throw new Error("User not authenticated");
       
    }
    const { userId } = sessinUser;

    const recipient = formData.get('recipient')
    if (userId === recipient) {
        return{error: 'you can not send a message to yourself'}
    }

    const newMessage = new Message({
      sender: userId,
      recipient,
      property: formData.get("property"),

      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      body: formData.get("body"),
    });

    await newMessage.save()
    return {submitted: true}

}
export default addMessage