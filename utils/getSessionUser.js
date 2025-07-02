//get serversection from next-auth
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions"

export const getSesionUser = async () => {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return null; // No user is logged in
        }
        return {
            user: session.user,
            userId: session.user.id,
        }// Return the user object from the session
    } catch (error) {
        console.error("Error getting session user:", error);
        return null;
        
    }
    
} 