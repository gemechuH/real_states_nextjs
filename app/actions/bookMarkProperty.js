import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import User from "@/models/User";
import { revalidatePath } from "next/cache";


async function bookMarkProperty(propertyId) {
    await connectDB
    const sessionUser = await getSessionUser()
    const { userId } = sessionUser
    
    if (!sessionUser || !sessionUser.userId) {
        throw new Error(" userID is required")
    }
    const user = await User.findById(userId)
    const isBookMarked = user.bookmarks.includes(propertyId)

    let messages

    if (!isBookMarked) {
        user.bookmarks.pull(propertyId)
        messages = 'Bookmark is removed'
        isBookMarked = false

    } else {
        user.bookmarks.push(propertyId);
        messages = "Bookmark is added";
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