'use server'

import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";
import User from "@/models/User";



async function checkBookmarkStatus(propertyId) {

    await connectDB();
    const sessionUser = await getSessionUser();
    const { userId } = sessionUser;

    if (!sessionUser || !sessionUser.userId) {
      throw new Error(" userID is required");
    }
    const user = await User.findById(userId);
    let isBookMarked = user.bookmarks.includes(propertyId);
    return { isBookMarked }
    
}
 export default checkBookmarkStatus