'use server'
import connectDB from "@/config/database";
import Message from "@/models/message";
import { getSessionUser } from "@/utils/getSessionUser";
import cloudinary from "@/config/couldinary";
import { revalidatePath } from "next/cache";
import { convertToSerializableObject } from "@/utils/convertToObjectSerializable";

async function deleteMessage(messageId) {
    
    const sessionUser = await getSessionUser()
    if (!sessionUser || !sessionUser.userId) {
        throw new Error('user id is required  ')
    }
    // if it exist delete the message
    const { userId } = sessionUser
    const messageDoc = await Message.findById(messageId)
    const message = convertToSerializableObject(messageDoc)


    if (!message) throw new Error("message not found")
    if (message.recipient.toString() !== userId) {
        throw new Error("unauthorized User")
    }
   
    await message.deleteOne()


    revalidatePath('/', 'layout')

}
 

export default deleteMessage