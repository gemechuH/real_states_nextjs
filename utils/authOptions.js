import GoogleProvider from 'next-auth/providers/google'
import connectDB from '@/config/database'
import User from '@/models/User'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })

    ],
    callbacks: {
        async signIn({ profile }) {
            // connect to the database
            await connectDB()
            // check if user already exists
            const user = await User.findOne({ email: profile.email })
            // if user does mot exist, create a new user
            if (!user) {
                // reduce the username to 2 characters
                const userName = profile.name.slice(0,20)
                await User.create({
                    email: profile.email,
                    userName: userName,
                    image: profile.picture
                })
            }
            return true

            
        },
        async session({ session }) {
            // get user from the database
            await connectDB()
            const user = await User.findOne({ email: session.user.email })
            // add user id to the session
            session.user.id = user._id.toString()
            return session; 
        }
       
    },
    
}