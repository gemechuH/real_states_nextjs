import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offLine',
                    response_type: 'code'
                }
            }
        })

    ],
    callback
}