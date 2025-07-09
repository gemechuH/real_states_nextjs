'use client'

import bookMarkProperty from '@/app/actions/bookMarkProperty';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';


import { FaBookmark } from 'react-icons/fa'
import { useState, useEffect } from 'react';
const BookMarkButton = ({ property }) => {
    const { data: session } = useSession()
    const userId = session?.user?.id
    const [isBookMarked, setIsBookMarked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    const handlerClick = async () => {
        
        if (!userId) {
            toast.error('You must Signed First')
            return
        }
        bookMarkProperty(property._id).then((res) => {
            if (res.error) return toast.error(res.error)
            toast.success(res.messages)
        })
    }
    return isBookMarked ? (
        <button onClick={handlerClick} className="bg-red-500 hover:bg-red-600 text-white font-bold w-[90%] py-2 px-4 rounded-full flex items-center justify-center">
            <FaBookmark class="mr-2" /> Bookmark Property
        </button>
    ) : (<button onClick={handlerClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-[90%] py-2 px-4 rounded-full flex items-center justify-center">
        <FaBookmark class="mr-2" /> Bookmark Property
    </button>)
}
 
export default BookMarkButton;