'use server'

import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import User from "@/models/User";
import { revalidatePath } from "next/cache";



async function bookMarkProperty(propertyId) {
    await connectDB()
    const sessionUser = await getSessionUser()
    const { userId } = sessionUser
    
    if (!sessionUser || !sessionUser.userId) {
        throw new Error(" userID is required")
    }
    const user = await User.findById(userId)
    let isBookMarked = user.bookmarks.includes(propertyId)

    let messages

    if (isBookMarked) {
        //if already bookmarked then removed
        user.bookmarks.pull(propertyId)
        messages = 'Bookmark removed'
        isBookMarked = false

    } else {
        user.bookmarks.push(propertyId);
        messages = "Bookmark added";
        isBookMarked = true
    }
    await user.save()
    revalidatePath('/properties/saved', 'page')
    
    return {
        messages,
        isBookMarked
    }
}
 export default bookMarkProperty