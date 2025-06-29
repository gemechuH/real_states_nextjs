'use client'
import { SessionProvider} from 'next-auth/react';
const AuthProvider = () => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
 
export default AuthProvider;