"use client";

import { createContext, useContext, useState, useEffect } from "react";
import countUnreadMessages from "@/app/actions/countUnreadMessage";
import { useSession } from "next-auth/react";
const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);
  const { data: session } = useSession();

    useEffect(() => {
    
      if (session && session.user) {
          countUnreadMessages().then((res) => {
            if(res.count) setUnreadCount(res.count)
        })
      } 
    },[countUnreadMessages, session])

  

  

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
       
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
