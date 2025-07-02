//get serversection from next-auth
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions"

export const getSessionUser = async () => {
    
        const session = await getServerSession(authOptions);
        if (!session) {
            return null; // No user is logged in
        }
        return {
            user: session.user,
            userId: session.user.id,
        }// Return the user object from the session
  
} 